import { useCallback, useEffect, useRef, useState } from 'react'
import { getAllBooks } from '../api/booksApi'
import type { Book, PagedBooks } from '../types/Book'

interface UseBooksResult {
  books: Book[]
  pagedData: PagedBooks | null
  isLoading: boolean
  isRefreshing: boolean
  error: string | null
  currentPage: number
  pageSize: number
  totalPages: number
  refresh: () => void
  goToPage: (page: number) => void
  setPageSize: (size: number) => void
}

export function useBooks(): UseBooksResult {
  const [pagedData, setPagedData] = useState<PagedBooks | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [pageSize, setPageSizeState] = useState(20)
  const [refreshKey, setRefreshKey] = useState(0)
  const hasLoadedOnce = useRef(false)

  useEffect(() => {
    const controller = new AbortController()

    async function loadBooks() {
      setIsLoading(!hasLoadedOnce.current)
      setIsRefreshing(hasLoadedOnce.current)
      setError(null)

      try {
        const data = await getAllBooks(currentPage, pageSize, controller.signal)
        setPagedData(data)
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return
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
  }, [currentPage, pageSize, refreshKey])

  const refresh = useCallback(() => setRefreshKey(k => k + 1), [])

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page)
  }, [])

  const setPageSize = useCallback((size: number) => {
    setPageSizeState(size)
    setCurrentPage(0)
  }, [])

  return {
    books: pagedData?.content ?? [],
    pagedData,
    isLoading,
    isRefreshing,
    error,
    currentPage,
    pageSize,
    totalPages: pagedData?.totalPages ?? 0,
    refresh,
    goToPage,
    setPageSize,
  }
}
