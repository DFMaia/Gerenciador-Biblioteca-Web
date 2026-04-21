export type EditionType   = 'FISICO' | 'DIGITAL'
export type EditionFormat = 'ANIVERSARIO' | 'BILINGUE' | 'BOLSO' | 'BROCHURA' | 'CAPA_DURA' | 'COMEMORATIVA' | 'EPUB' | 'LUXO'

export interface EditionRequest {
  title:         string
  author:        string
  genre?:        string | null
  editionType?:  EditionType | null
  format?:       EditionFormat | null
  editionNumber?: number | null
  totalPages?:   number | null
  publisher?:    string | null
  language?:     string | null
  publishedYear?: number | null
  isbn?:         string | null
  coverUrl?:     string | null
  description?:  string | null
}
