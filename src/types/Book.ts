export interface Book {
  id: number
  title: string
  author: string
  genre: string | null
  totalPages: number | null
  currentPage: number | null
  status: string | null
  bookRating: number | null
  publisher: string | null
}
