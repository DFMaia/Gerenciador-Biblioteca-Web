import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getAllBooks, searchBooks, updateBook } from './booksApi'
import type { Book, BookUpdateRequest, PagedBooks } from '../types/Book'

const mockBook: Book = {
  id: 1,
  title: 'O Senhor dos Anéis',
  author: 'J. R. R. Tolkien',
  genre: 'FANTASIA_EPICA',
  description: null,
  coverUrl: null,
  isbn: null,
  totalPages: 576,
  publishedYear: 2001,
  currentPage: 0,
  startDate: null,
  endDate: null,
  status: 'NAO_LIDO',
  bookRating: null,
  publisher: 'HarperCollins',
}

const mockPagedBooks: PagedBooks = {
  content: [mockBook],
  totalElements: 1,
  totalPages: 1,
  currentPage: 0,
  pageSize: 20,
  last: true,
  metrics: {
    totalBooks: 1,
    readingBooks: 0,
    readBooks: 0,
    unreadBooks: 1,
    abandonedBooks: 0,
    trackedPages: 0,
    totalPages: 576,
  },
}

const emptyDto: BookUpdateRequest = {
  genre: null,
  description: null,
  coverUrl: null,
  isbn: null,
  totalPages: null,
  publishedYear: null,
  status: null,
  currentPage: null,
  startDate: null,
  endDate: null,
  bookRating: null,
  publisher: null,
}

beforeEach(() => {
  vi.clearAllMocks()
})

// ---------------------------------------------------------------------------
// getAllBooks
// ---------------------------------------------------------------------------

describe('getAllBooks', () => {
  it('deve retornar PagedBooks em caso de sucesso', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockPagedBooks),
    })

    const result = await getAllBooks(0, 20)

    expect(result).toEqual(mockPagedBooks)
    expect(fetch).toHaveBeenCalledOnce()
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('page=0'),
      expect.objectContaining({ headers: { Accept: 'application/json' } }),
    )
  })

  it('deve incluir os parâmetros de paginação na URL', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockPagedBooks),
    })

    await getAllBooks(2, 50)

    const calledUrl = (fetch as ReturnType<typeof vi.fn>).mock.calls[0][0] as string
    expect(calledUrl).toContain('page=2')
    expect(calledUrl).toContain('size=50')
  })

  it('deve lançar erro quando a resposta não é ok', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({ ok: false, status: 500 })

    await expect(getAllBooks(0, 20)).rejects.toThrow('Nao foi possivel carregar os livros.')
  })

  it('deve propagar AbortError sem envolver em erro de rede', async () => {
    const abortError = new DOMException('Aborted', 'AbortError')
    global.fetch = vi.fn().mockRejectedValueOnce(abortError)

    await expect(getAllBooks(0, 20)).rejects.toThrow('Aborted')
  })
})

// ---------------------------------------------------------------------------
// searchBooks
// ---------------------------------------------------------------------------

describe('searchBooks', () => {
  it('deve retornar lista de livros correspondentes', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([mockBook]),
    })

    const result = await searchBooks('Tolkien')

    expect(result).toEqual([mockBook])
    const calledUrl = (fetch as ReturnType<typeof vi.fn>).mock.calls[0][0] as string
    expect(calledUrl).toContain('query=Tolkien')
  })

  it('deve retornar lista vazia quando não há resultados', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([]),
    })

    const result = await searchBooks('XYZ')

    expect(result).toEqual([])
  })

  it('deve lançar erro quando a resposta não é ok', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({ ok: false, status: 404 })

    await expect(searchBooks('abc')).rejects.toThrow(
      'Não foi possível pesquisar na biblioteca.',
    )
  })
})

// ---------------------------------------------------------------------------
// updateBook
// ---------------------------------------------------------------------------

describe('updateBook', () => {
  it('deve retornar o livro atualizado', async () => {
    const updatedBook: Book = { ...mockBook, description: 'Nova descrição' }

    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(updatedBook),
    })

    const result = await updateBook(1, { ...emptyDto, description: 'Nova descrição' })

    expect(result).toEqual(updatedBook)
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('/books/1'),
      expect.objectContaining({ method: 'PATCH' }),
    )
  })

  it('deve serializar o DTO no corpo da requisição', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockBook),
    })

    const dto: BookUpdateRequest = { ...emptyDto, totalPages: 300, status: 'LENDO' }
    await updateBook(1, dto)

    const calledOptions = (fetch as ReturnType<typeof vi.fn>).mock.calls[0][1] as RequestInit
    const sentBody = JSON.parse(calledOptions.body as string) as BookUpdateRequest
    expect(sentBody.totalPages).toBe(300)
    expect(sentBody.status).toBe('LENDO')
  })

  it('deve lançar erro com mensagem retornada pelo backend', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: () => Promise.resolve({ message: 'Livro não encontrado: 99' }),
    })

    await expect(updateBook(99, emptyDto)).rejects.toThrow('Livro não encontrado: 99')
  })

  it('deve usar mensagem padrão quando backend não retorna JSON válido', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: () => Promise.reject(new SyntaxError('Unexpected token')),
    })

    await expect(updateBook(1, emptyDto)).rejects.toThrow(
      'Não foi possível salvar as alterações.',
    )
  })

  it('deve usar mensagem padrão quando campo message está ausente no JSON de erro', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
      status: 400,
      json: () => Promise.resolve({}),
    })

    await expect(updateBook(1, emptyDto)).rejects.toThrow(
      'Não foi possível salvar as alterações.',
    )
  })
})
