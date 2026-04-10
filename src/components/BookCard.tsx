import { Book } from '../types/Book'

const statusLabel: Record<string, string> = {
  NAO_LIDO: 'Não lido',
  LENDO: 'Lendo',
  LIDO: 'Lido',
  ABANDONADO: 'Abandonado',
}

const statusColor: Record<string, string> = {
  NAO_LIDO: 'text-zinc-400',
  LENDO: 'text-blue-400',
  LIDO: 'text-emerald-400',
  ABANDONADO: 'text-red-400',
}

interface BookCardProps {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  const progress =
    book.currentPage && book.totalPages
      ? Math.round((book.currentPage / book.totalPages) * 100)
      : null

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex flex-col gap-3 hover:border-zinc-600 transition-colors">

      {/* Título e autor */}
      <div>
        <h2 className="text-white font-semibold text-lg leading-tight">
          {book.title}
        </h2>
        <p className="text-zinc-400 text-sm mt-1">{book.author}</p>
      </div>

      {/* Editora e gênero */}
      <div className="flex flex-wrap gap-2">
        {book.publisher && (
          <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-md">
            {book.publisher}
          </span>
        )}
        {book.genre && (
          <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-md">
            {book.genre}
          </span>
        )}
      </div>

      {/* Status */}
      {book.status && (
        <p className={`text-sm font-medium ${statusColor[book.status] ?? 'text-zinc-400'}`}>
          {statusLabel[book.status] ?? book.status}
        </p>
      )}

      {/* Progresso de leitura */}
      {progress !== null && (
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-xs text-zinc-500">
            <span>Página {book.currentPage} de {book.totalPages}</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-1.5">
            <div
              className="bg-blue-500 h-1.5 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Avaliação */}
      {book.bookRating !== null && book.bookRating !== undefined && (
        <p className="text-xs text-zinc-500">
          Avaliação: <span className="text-yellow-400 font-medium">{book.bookRating} ★</span>
        </p>
      )}

    </div>
  )
}
