import type { GoogleBooksResult } from '../types/GoogleBooks'

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '/api').replace(/\/$/, '')

export async function searchGoogleBooks(
  title: string,
  author: string,
  publisher?: string | null,
): Promise<GoogleBooksResult[]> {
  const params = new URLSearchParams({ title, author })
  if (publisher) params.set('publisher', publisher)

  const response = await fetch(`${API_BASE_URL}/google-books/search?${params}`, {
    headers: { Accept: 'application/json' },
  })

  if (response.status === 404) return []
  if (!response.ok) throw new Error('Não foi possível buscar no Google Books.')
  return response.json() as Promise<GoogleBooksResult[]>
}
