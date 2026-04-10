import { useEffect, useState } from 'react'
import { Book } from '../types/Book'

interface UseBooksResult {
  books: Book[]
  loading: boolean
  error: string | null
  refresh: () => void
}

export function useBooks(): UseBooksResult {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [trigger, setTrigger] = useState(0)

  useEffect(() => {
    let cancelled = false

    async function fetchBooks() {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch('http://localhost:8080/books')
        if (!response.ok) throw new Error('Erro ao carregar livros.')
        const data: Book[] = await response.json()
        if (!cancelled) setBooks(data)
      } catch {
        if (!cancelled)
          setError('Biblioteca não encontrada. Verifique se o servidor está rodando.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchBooks()
    return () => { cancelled = true }
  }, [trigger])

  const refresh = () => setTrigger(t => t + 1)

  return { books, loading, error, refresh }
}
