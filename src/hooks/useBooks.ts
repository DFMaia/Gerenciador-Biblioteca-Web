import { useEffect, useRef, useState } from 'react'
import { getAllBooks } from '../api/booksApi'
import type { Book } from '../types/Book'

interface UseBooksResult {
  books: Book[]
  isLoading: boolean
  isRefreshing: boolean
  error: string | null
  refresh: () => void
}

export function useBooks(): UseBooksResult {
  const [books, setBooks] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [refreshKey, setRefreshKey] = useState(0)
  const hasLoadedOnce = useRef(false)

  useEffect(() => {
    const controller = new AbortController()

    async function loadBooks() {
      setIsLoading(!hasLoadedOnce.current)
      setIsRefreshing(hasLoadedOnce.current)
      setError(null)

      try {
        const data = await getAllBooks(controller.signal)
        setBooks(data)
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return
        setError('Biblioteca não encontrada. Verifique se o servidor está rodando.')
      } finally {
        if (!controller.signal.aborted) {
          hasLoadedOnce.current = true
          setIsLoading(false)
          setIsRefreshing(false)
        }
      }
    }

    loadBooks()

    return () => controller.abort()
  }, [refreshKey])

  const refresh = () => setRefreshKey(current => current + 1)

  return { books, isLoading, isRefreshing, error, refresh }
}
