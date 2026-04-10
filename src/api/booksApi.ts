import type { Book } from '../types/Book'

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '/api').replace(/\/$/, '')

export async function getAllBooks(signal?: AbortSignal): Promise<Book[]> {
  const response = await fetch(`${API_BASE_URL}/books`, {
    headers: {
      Accept: 'application/json',
    },
    signal,
  })

  if (!response.ok) {
    throw new Error('Nao foi possivel carregar os livros.')
  }

  return response.json() as Promise<Book[]>
}
