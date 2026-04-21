import type { Book } from '../types/Book'

const numberFormatter = new Intl.NumberFormat('pt-BR')

interface DetailSheetProps {
  book: Book | null
  onClose: () => void
}

export function DetailSheet({ book, onClose }: DetailSheetProps) {
  if (!book) return null

  return (
    <div className="wa-sheet-backdrop" onClick={onClose}>
      <aside className="wa-sheet" onClick={e => e.stopPropagation()}>

        <div className="wa-sheet-head">
          <span className="wa-eyebrow">Ficha de leitura</span>
          <button className="wa-sheet-close" onClick={onClose}>
            Fechar ×
          </button>
        </div>

        <h2 className="wa-sheet-title">{book.title}</h2>
        <p className="wa-sheet-author">{book.author}</p>

        <hr className="wa-rule" style={{ margin: '28px 0' }} />

        <dl className="wa-sheet-dl">
          <div>
            <dt>Editora</dt>
            <dd>{book.publisher || '—'}</dd>
          </div>
          <div>
            <dt>Gênero</dt>
            <dd>{book.genre || '—'}</dd>
          </div>
          <div>
            <dt>Publicado</dt>
            <dd>{book.publishedYear || '—'}</dd>
          </div>
          <div>
            <dt>ISBN</dt>
            <dd className="wa-mono">{book.isbn || '—'}</dd>
          </div>
          <div>
            <dt>Páginas</dt>
            <dd>
              {numberFormatter.format(book.currentPage ?? 0)} /{' '}
              {numberFormatter.format(book.totalPages ?? 0)}
            </dd>
          </div>
          <div>
            <dt>Avaliação</dt>
            <dd>{book.bookRating != null ? `${book.bookRating} / 5` : '—'}</dd>
          </div>
        </dl>

        {book.description && (
          <>
            <hr className="wa-rule" style={{ margin: '28px 0' }} />
            <p className="wa-sheet-desc">{book.description}</p>
          </>
        )}
      </aside>
    </div>
  )
}
