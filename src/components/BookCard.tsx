import type { Book, ReadingStatus } from '../types/Book'

const statusConfig: Record<ReadingStatus, { label: string; color: string }> = {
  NAO_LIDO:  { label: 'Não lido',   color: 'var(--smoke)' },
  LENDO:     { label: 'Lendo',      color: 'var(--ochre)' },
  LIDO:      { label: 'Lido',       color: 'var(--moss)'  },
  ABANDONADO:{ label: 'Abandonado', color: 'var(--ash)'   },
}

const numberFormatter = new Intl.NumberFormat('pt-BR')

interface BookCardProps {
  book: Book
  onClick: (book: Book) => void
}

export function BookCard({ book, onClick }: BookCardProps) {
  const progress =
    book.totalPages && book.totalPages > 0
      ? Math.min(100, Math.round(((book.currentPage ?? 0) / book.totalPages) * 100))
      : null

  const initials = book.title
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase()

  const status = book.status ? statusConfig[book.status] : null

  return (
    <article className="wa-card" onClick={() => onClick(book)}>
      <div className="wa-card-grid">

        {/* Capa ou placeholder com iniciais */}
        <div className="wa-cover">
          {book.coverUrl ? (
            <img src={book.coverUrl} alt={`Capa de ${book.title}`} />
          ) : (
            <div className="wa-cover-initials">{initials}</div>
          )}
        </div>

        {/* Corpo do card */}
        <div className="wa-card-body">
          <div className="wa-card-top">
            {status && (
              <span
                className="wa-pill"
                style={{ borderColor: status.color, color: status.color }}
              >
                {status.label}
              </span>
            )}
            {book.publishedYear && (
              <span className="wa-card-year">{book.publishedYear}</span>
            )}
          </div>

          <h3 className="wa-card-title">{book.title}</h3>
          <p className="wa-card-author">{book.author}</p>

          <div className="wa-card-tags">
            {book.publisher && <span>{book.publisher}</span>}
            {book.genre && <span>{book.genre}</span>}
            {book.bookRating != null && (
              <span style={{ color: 'var(--ochre)' }}>{book.bookRating} / 5</span>
            )}
          </div>

          {progress !== null && (
            <div className="wa-progress">
              <div className="wa-progress-head">
                <span>Progresso</span>
                <span>{progress}%</span>
              </div>
              <div className="wa-progress-track">
                <div className="wa-progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <div className="wa-progress-foot">
                <span>{numberFormatter.format(book.currentPage ?? 0)} páginas lidas</span>
                <span>{numberFormatter.format(book.totalPages ?? 0)} no total</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
