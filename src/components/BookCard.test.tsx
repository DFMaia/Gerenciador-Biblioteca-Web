import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { BookCard } from './BookCard'
import type { Book } from '../types/Book'

const baseBook: Book = {
  id: 1,
  title: 'O Senhor dos Anéis',
  author: 'J. R. R. Tolkien',
  genre: 'FANTASIA_EPICA',
  description: null,
  coverUrl: null,
  isbn: null,
  totalPages: 576,
  publishedYear: 2001,
  currentPage: 200,
  startDate: null,
  endDate: null,
  status: 'LENDO',
  bookRating: 5,
  publisher: 'HarperCollins',
}

function renderBookCard(
  book: Book = baseBook,
  handlers: Partial<{
    onUpdate: (book: Book) => void
    onDelete: (book: Book) => void
  }> = {},
) {
  const onUpdate = handlers.onUpdate ?? vi.fn()
  const onDelete = handlers.onDelete ?? vi.fn()

  render(<BookCard book={book} onUpdate={onUpdate} onDelete={onDelete} />)

  return { onUpdate, onDelete }
}

describe('BookCard', () => {
  // -------------------------------------------------------------------------
  // Conteúdo textual
  // -------------------------------------------------------------------------

  it('deve exibir título e autor do livro', () => {
    renderBookCard()

    expect(screen.getByText('O Senhor dos Anéis')).toBeInTheDocument()
    expect(screen.getByText('J. R. R. Tolkien')).toBeInTheDocument()
  })

  it('deve exibir ano de publicação quando informado', () => {
    renderBookCard()

    expect(screen.getByText('2001')).toBeInTheDocument()
  })

  it('não deve exibir ano de publicação quando ausente', () => {
    const book: Book = { ...baseBook, publishedYear: null }
    renderBookCard(book)

    expect(screen.queryByText('2001')).not.toBeInTheDocument()
  })

  it('deve exibir editora quando informada', () => {
    renderBookCard()

    expect(screen.getByText('HarperCollins')).toBeInTheDocument()
  })

  it('deve exibir a nota do livro quando informada', () => {
    renderBookCard()

    expect(screen.getByText('5 / 5')).toBeInTheDocument()
  })

  // -------------------------------------------------------------------------
  // Badge de status
  // -------------------------------------------------------------------------

  it('deve exibir badge "Lendo" para status LENDO', () => {
    renderBookCard({ ...baseBook, status: 'LENDO' })
    expect(screen.getByText('Lendo')).toBeInTheDocument()
  })

  it('deve exibir badge "Lido" para status LIDO', () => {
    renderBookCard({ ...baseBook, status: 'LIDO' })
    expect(screen.getByText('Lido')).toBeInTheDocument()
  })

  it('deve exibir badge "Não lido" para status NAO_LIDO', () => {
    renderBookCard({ ...baseBook, status: 'NAO_LIDO' })
    expect(screen.getByText('Não lido')).toBeInTheDocument()
  })

  it('deve exibir badge "Abandonado" para status ABANDONADO', () => {
    renderBookCard({ ...baseBook, status: 'ABANDONADO' })
    expect(screen.getByText('Abandonado')).toBeInTheDocument()
  })

  it('não deve exibir badge quando status é nulo', () => {
    renderBookCard({ ...baseBook, status: null })

    expect(screen.queryByText('Lendo')).not.toBeInTheDocument()
    expect(screen.queryByText('Lido')).not.toBeInTheDocument()
    expect(screen.queryByText('Não lido')).not.toBeInTheDocument()
    expect(screen.queryByText('Abandonado')).not.toBeInTheDocument()
  })

  // -------------------------------------------------------------------------
  // Capa / iniciais
  // -------------------------------------------------------------------------

  it('deve exibir iniciais quando não há URL de capa', () => {
    renderBookCard({ ...baseBook, coverUrl: null })

    // "O Senhor dos Anéis" → primeiras duas palavras → "O" + "S" → "OS"
    expect(screen.getByText('OS')).toBeInTheDocument()
  })

  it('deve exibir imagem quando coverUrl está presente', () => {
    const book: Book = { ...baseBook, coverUrl: 'https://example.com/cover.jpg' }
    renderBookCard(book)

    const img = screen.getByRole('img', { name: /Capa de O Senhor dos Anéis/i })
    expect(img).toHaveAttribute('src', 'https://example.com/cover.jpg')
  })

  it('não deve exibir iniciais quando coverUrl está presente', () => {
    const book: Book = { ...baseBook, coverUrl: 'https://example.com/cover.jpg' }
    renderBookCard(book)

    expect(screen.queryByText('OS')).not.toBeInTheDocument()
  })

  // -------------------------------------------------------------------------
  // Barra de progresso
  // -------------------------------------------------------------------------

  it('deve exibir barra de progresso quando totalPages e currentPage estão definidos', () => {
    renderBookCard()

    expect(screen.getByText('Progresso')).toBeInTheDocument()
  })

  it('deve calcular a porcentagem de progresso corretamente', () => {
    // 200 / 576 = 34.72... → 35%
    renderBookCard()

    expect(screen.getByText('35%')).toBeInTheDocument()
  })

  it('deve limitar o progresso em 100% mesmo quando currentPage > totalPages', () => {
    const book: Book = { ...baseBook, currentPage: 1000, totalPages: 576 }
    renderBookCard(book)

    expect(screen.getByText('100%')).toBeInTheDocument()
  })

  it('não deve exibir barra de progresso quando totalPages é nulo', () => {
    const book: Book = { ...baseBook, totalPages: null, currentPage: null }
    renderBookCard(book)

    expect(screen.queryByText('Progresso')).not.toBeInTheDocument()
  })

  it('não deve exibir barra de progresso quando totalPages é zero', () => {
    const book: Book = { ...baseBook, totalPages: 0 }
    renderBookCard(book)

    expect(screen.queryByText('Progresso')).not.toBeInTheDocument()
  })

  it('deve exibir total de páginas formatado', () => {
    renderBookCard()

    expect(screen.getByText('576 no total')).toBeInTheDocument()
  })

  // -------------------------------------------------------------------------
  // Interação
  // -------------------------------------------------------------------------

  it('deve chamar onUpdate com o livro ao clicar em Atualizar', async () => {
    const mockOnUpdate = vi.fn()
    const user = userEvent.setup()

    renderBookCard(baseBook, { onUpdate: mockOnUpdate })

    await user.click(screen.getByRole('button', { name: 'Atualizar' }))

    expect(mockOnUpdate).toHaveBeenCalledOnce()
    expect(mockOnUpdate).toHaveBeenCalledWith(baseBook)
  })

  it('deve chamar onDelete com o livro ao clicar em Apagar', async () => {
    const mockOnDelete = vi.fn()
    const user = userEvent.setup()

    renderBookCard(baseBook, { onDelete: mockOnDelete })

    await user.click(screen.getByRole('button', { name: 'Apagar' }))

    expect(mockOnDelete).toHaveBeenCalledOnce()
    expect(mockOnDelete).toHaveBeenCalledWith(baseBook)
  })
})
