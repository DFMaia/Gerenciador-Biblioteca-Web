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

describe('BookCard', () => {
  // -------------------------------------------------------------------------
  // Conteúdo textual
  // -------------------------------------------------------------------------

  it('deve exibir título e autor do livro', () => {
    render(<BookCard book={baseBook} onClick={vi.fn()} />)

    expect(screen.getByText('O Senhor dos Anéis')).toBeInTheDocument()
    expect(screen.getByText('J. R. R. Tolkien')).toBeInTheDocument()
  })

  it('deve exibir ano de publicação quando informado', () => {
    render(<BookCard book={baseBook} onClick={vi.fn()} />)

    expect(screen.getByText('2001')).toBeInTheDocument()
  })

  it('não deve exibir ano de publicação quando ausente', () => {
    const book: Book = { ...baseBook, publishedYear: null }
    render(<BookCard book={book} onClick={vi.fn()} />)

    expect(screen.queryByText('2001')).not.toBeInTheDocument()
  })

  it('deve exibir editora quando informada', () => {
    render(<BookCard book={baseBook} onClick={vi.fn()} />)

    expect(screen.getByText('HarperCollins')).toBeInTheDocument()
  })

  it('deve exibir a nota do livro quando informada', () => {
    render(<BookCard book={baseBook} onClick={vi.fn()} />)

    expect(screen.getByText('5 / 5')).toBeInTheDocument()
  })

  // -------------------------------------------------------------------------
  // Badge de status
  // -------------------------------------------------------------------------

  it('deve exibir badge "Lendo" para status LENDO', () => {
    render(<BookCard book={{ ...baseBook, status: 'LENDO' }} onClick={vi.fn()} />)
    expect(screen.getByText('Lendo')).toBeInTheDocument()
  })

  it('deve exibir badge "Lido" para status LIDO', () => {
    render(<BookCard book={{ ...baseBook, status: 'LIDO' }} onClick={vi.fn()} />)
    expect(screen.getByText('Lido')).toBeInTheDocument()
  })

  it('deve exibir badge "Não lido" para status NAO_LIDO', () => {
    render(<BookCard book={{ ...baseBook, status: 'NAO_LIDO' }} onClick={vi.fn()} />)
    expect(screen.getByText('Não lido')).toBeInTheDocument()
  })

  it('deve exibir badge "Abandonado" para status ABANDONADO', () => {
    render(<BookCard book={{ ...baseBook, status: 'ABANDONADO' }} onClick={vi.fn()} />)
    expect(screen.getByText('Abandonado')).toBeInTheDocument()
  })

  it('não deve exibir badge quando status é nulo', () => {
    render(<BookCard book={{ ...baseBook, status: null }} onClick={vi.fn()} />)

    expect(screen.queryByText('Lendo')).not.toBeInTheDocument()
    expect(screen.queryByText('Lido')).not.toBeInTheDocument()
    expect(screen.queryByText('Não lido')).not.toBeInTheDocument()
    expect(screen.queryByText('Abandonado')).not.toBeInTheDocument()
  })

  // -------------------------------------------------------------------------
  // Capa / iniciais
  // -------------------------------------------------------------------------

  it('deve exibir iniciais quando não há URL de capa', () => {
    render(<BookCard book={{ ...baseBook, coverUrl: null }} onClick={vi.fn()} />)

    // "O Senhor dos Anéis" → primeiras duas palavras → "O" + "S" → "OS"
    expect(screen.getByText('OS')).toBeInTheDocument()
  })

  it('deve exibir imagem quando coverUrl está presente', () => {
    const book: Book = { ...baseBook, coverUrl: 'https://example.com/cover.jpg' }
    render(<BookCard book={book} onClick={vi.fn()} />)

    const img = screen.getByRole('img', { name: /Capa de O Senhor dos Anéis/i })
    expect(img).toHaveAttribute('src', 'https://example.com/cover.jpg')
  })

  it('não deve exibir iniciais quando coverUrl está presente', () => {
    const book: Book = { ...baseBook, coverUrl: 'https://example.com/cover.jpg' }
    render(<BookCard book={book} onClick={vi.fn()} />)

    expect(screen.queryByText('OS')).not.toBeInTheDocument()
  })

  // -------------------------------------------------------------------------
  // Barra de progresso
  // -------------------------------------------------------------------------

  it('deve exibir barra de progresso quando totalPages e currentPage estão definidos', () => {
    render(<BookCard book={baseBook} onClick={vi.fn()} />)

    expect(screen.getByText('Progresso')).toBeInTheDocument()
  })

  it('deve calcular a porcentagem de progresso corretamente', () => {
    // 200 / 576 = 34.72... → 35%
    render(<BookCard book={baseBook} onClick={vi.fn()} />)

    expect(screen.getByText('35%')).toBeInTheDocument()
  })

  it('deve limitar o progresso em 100% mesmo quando currentPage > totalPages', () => {
    const book: Book = { ...baseBook, currentPage: 1000, totalPages: 576 }
    render(<BookCard book={book} onClick={vi.fn()} />)

    expect(screen.getByText('100%')).toBeInTheDocument()
  })

  it('não deve exibir barra de progresso quando totalPages é nulo', () => {
    const book: Book = { ...baseBook, totalPages: null, currentPage: null }
    render(<BookCard book={book} onClick={vi.fn()} />)

    expect(screen.queryByText('Progresso')).not.toBeInTheDocument()
  })

  it('não deve exibir barra de progresso quando totalPages é zero', () => {
    const book: Book = { ...baseBook, totalPages: 0 }
    render(<BookCard book={book} onClick={vi.fn()} />)

    expect(screen.queryByText('Progresso')).not.toBeInTheDocument()
  })

  it('deve exibir total de páginas formatado', () => {
    render(<BookCard book={baseBook} onClick={vi.fn()} />)

    expect(screen.getByText('576 no total')).toBeInTheDocument()
  })

  // -------------------------------------------------------------------------
  // Interação
  // -------------------------------------------------------------------------

  it('deve chamar onClick com o livro ao clicar no card', async () => {
    const mockOnClick = vi.fn()
    const user = userEvent.setup()

    render(<BookCard book={baseBook} onClick={mockOnClick} />)

    await user.click(screen.getByRole('article'))

    expect(mockOnClick).toHaveBeenCalledOnce()
    expect(mockOnClick).toHaveBeenCalledWith(baseBook)
  })
})
