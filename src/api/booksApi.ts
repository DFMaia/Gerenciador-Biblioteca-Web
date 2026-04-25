import type { PagedBooks } from '../types/Book'

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
