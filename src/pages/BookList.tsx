import { useBooks } from '../hooks/useBooks'
import { BookCard } from '../components/BookCard'

export function BookList() {
  const { books, loading, error, refresh } = useBooks()

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Header */}
      <header className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-tight">Minha Biblioteca</h1>
        <button
          onClick={refresh}
          className="text-sm text-zinc-400 hover:text-white transition-colors"
        >
          Atualizar
        </button>
      </header>

      {/* Conteúdo */}
      <main className="max-w-5xl mx-auto px-6 py-8">

        {loading && (
          <div className="flex items-center justify-center py-24">
            <p className="text-zinc-500 text-sm">Carregando livros...</p>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <p className="text-zinc-500 text-sm text-center">{error}</p>
            <button
              onClick={refresh}
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              Tentar novamente
            </button>
          </div>
        )}

        {!loading && !error && books.length === 0 && (
          <div className="flex items-center justify-center py-24">
            <p className="text-zinc-500 text-sm">Nenhum livro encontrado.</p>
          </div>
        )}

        {!loading && !error && books.length > 0 && (
          <>
            <p className="text-zinc-500 text-sm mb-6">
              {books.length} {books.length === 1 ? 'livro' : 'livros'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {books.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </>
        )}

      </main>
    </div>
  )
}
