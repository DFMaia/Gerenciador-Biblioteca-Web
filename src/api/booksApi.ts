import type { Book, BookUpdateRequest, PagedBooks } from '../types/Book'

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '/api').replace(/\/$/, '')

export async function getAllBooks(page: number, size: number, signal?: AbortSignal): Promise<PagedBooks> {
  const params = new URLSearchParams({ page: String(page), size: String(size) })

  const response = await fetch(`${API_BASE_URL}/books?${params}`, {
    headers: {
      Accept: 'application/json',
    },
    signal,
  })

  if (!response.ok) {
    throw new Error('Nao foi possivel carregar os livros.')
  }

  return response.json() as Promise<PagedBooks>
}

export async function searchBooks(query: string, signal?: AbortSignal): Promise<Book[]> {
  const params = new URLSearchParams({ query })

  const response = await fetch(`${API_BASE_URL}/books/search?${params}`, {
    headers: { Accept: 'application/json' },
    signal,
  })

  if (!response.ok) {
    throw new Error('Não foi possível pesquisar na biblioteca.')
  }

  return response.json() as Promise<Book[]>
}

export async function updateBook(bookId: number, dto: BookUpdateRequest): Promise<Book> {
  const response = await fetch(`${API_BASE_URL}/books/${bookId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(dto),
  })

  if (!response.ok) {
    let message = 'Não foi possível salvar as alterações.'

    try {
      const data = await response.json() as { message?: string }
      if (typeof data.message === 'string' && data.message.trim()) {
        message = data.message
      }
    } catch {
      // Mantém a mensagem padrão quando o backend não retorna JSON legível.
    }

    throw new Error(message)
  }

  return response.json() as Promise<Book>
}
