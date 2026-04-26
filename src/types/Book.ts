export type ReadingStatus = 'NAO_LIDO' | 'LENDO' | 'LIDO' | 'ABANDONADO'

export interface Book {
  id: number
  title: string
  author: string
  genre: string | null
  description: string | null
  coverUrl: string | null
  isbn: string | null
  totalPages: number | null
  publishedYear: number | null
  currentPage: number | null
  startDate: string | null
  endDate: string | null
  status: ReadingStatus | null
  bookRating: number | null
  publisher: string | null
}

export interface BookUpdateRequest {
  genre: string | null
  description: string | null
  coverUrl: string | null
  isbn: string | null
  totalPages: number | null
  publishedYear: number | null
  status: ReadingStatus | null
  currentPage: number | null
  startDate: string | null
  endDate: string | null
  bookRating: number | null
  publisher: string | null
}

export interface BookMetrics {
  totalBooks: number
  readingBooks: number
  readBooks: number
  unreadBooks: number
  abandonedBooks: number
  trackedPages: number
  totalPages: number
}

export interface PagedBooks {
  content: Book[]
  totalElements: number
  totalPages: number
  currentPage: number
  pageSize: number
  last: boolean
  metrics: BookMetrics
}
