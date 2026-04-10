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
