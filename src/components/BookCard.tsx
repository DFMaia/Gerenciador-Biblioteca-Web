import type { Book, ReadingStatus } from '../types/Book'

const statusLabel: Record<ReadingStatus, string> = {
  NAO_LIDO: 'Não lido',
  LENDO: 'Lendo',
  LIDO: 'Lido',
  ABANDONADO: 'Abandonado',
}

const statusStyle: Record<ReadingStatus, string> = {
  NAO_LIDO: 'bg-[#eef4ff] text-[#4d73ad] ring-[#cfe0ff]',
  LENDO: 'bg-[#fff7d6] text-[#826620] ring-[#f7e8a8]',
  LIDO: 'bg-[#eaf8f0] text-[#347354] ring-[#ccefdc]',
  ABANDONADO: 'bg-[#ffecef] text-[#9b4655] ring-[#ffd3db]',
}

interface BookCardProps {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  const progress = book.totalPages && book.totalPages > 0
    ? Math.min(100, Math.round(((book.currentPage ?? 0) / book.totalPages) * 100))
    : null

  const initials = book.title
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase()

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/90 bg-white/86 shadow-[0_24px_70px_rgba(102,132,178,0.15)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_90px_rgba(102,132,178,0.23)]">
      <div className="relative flex gap-5 p-5">
        <div className="h-32 w-24 shrink-0 overflow-hidden rounded-2xl bg-[#e8f2ff] shadow-[0_18px_38px_rgba(102,132,178,0.2)] ring-1 ring-[#dbeafe]">
          {book.coverUrl ? (
            <img
              src={book.coverUrl}
              alt={`Capa de ${book.title}`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(145deg,#e8f2ff,#eaf8f0_48%,#fff7d6)] px-4 text-center font-[var(--font-display)] text-2xl tracking-[0.2em] text-[#315b99]">
              {initials}
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            {book.status && (
              <span className={`rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] ring-1 ${statusStyle[book.status]}`}>
                {statusLabel[book.status]}
              </span>
            )}
            {book.publishedYear && (
              <span className="text-xs font-semibold text-slate-400">{book.publishedYear}</span>
            )}
          </div>

          <h2 className="mt-4 line-clamp-2 font-[var(--font-display)] text-2xl leading-[1.05] tracking-[-0.03em] text-[#172033]">
            {book.title}
          </h2>
          <p className="mt-2 text-sm font-medium text-slate-500">{book.author}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 px-5 pb-5">
        <div className="flex flex-wrap gap-2">
          {book.publisher && (
            <span className="rounded-full bg-[#f8fbff] px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-[#e6edf7]">
              {book.publisher}
            </span>
          )}
          {book.genre && (
            <span className="rounded-full bg-[#e8f2ff] px-3 py-1 text-xs font-medium text-[#4d73ad] ring-1 ring-[#cfe0ff]">
              {book.genre}
            </span>
          )}
        </div>

        {progress !== null && (
          <div className="mt-auto rounded-2xl bg-[#f8fbff] p-4 ring-1 ring-[#e6edf7]">
            <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              <span>Progresso</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-[#e6edf7]">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,#f4a8b6,#f5d869,#9bc0f7,#9de0bd)] transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
              <span>{book.currentPage ?? 0} páginas lidas</span>
              <span>{book.totalPages} no total</span>
            </div>
          </div>
        )}

        {book.bookRating !== null && book.bookRating !== undefined && (
          <p className="text-sm font-medium text-slate-500">
            Avaliação <span className="text-[#d39f20]">{book.bookRating} / 5</span>
          </p>
        )}
      </div>
    </article>
  )
}
