import { BookCard } from '../components/BookCard'
import { useBooks } from '../hooks/useBooks'

const numberFormatter = new Intl.NumberFormat('pt-BR')

export function BookList() {
  const { books, isLoading, isRefreshing, error, refresh } = useBooks()

  const completedBooks = books.filter(book => book.status === 'LIDO').length
  const readingBooks = books.filter(book => book.status === 'LENDO').length
  const trackedPages = books.reduce((total, book) => total + (book.currentPage ?? 0), 0)
  const totalPages = books.reduce((total, book) => total + (book.totalPages ?? 0), 0)

  return (
    <div className="min-h-screen overflow-hidden bg-[#eef7ff] font-[var(--font-body)] text-[#172033]">
      <header className="relative z-10 bg-[#cfe5ff] shadow-[0_18px_54px_rgba(83,122,178,0.12)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.36em] text-[#4f7fbd]">Biblioteca pessoal</p>
            <h1 className="mt-2 font-[var(--font-display)] text-2xl tracking-[-0.04em] sm:text-3xl">
              Gerenciador de Biblioteca
            </h1>
          </div>

          <button
            onClick={refresh}
            className="rounded-full border border-[#b5d4fb] bg-white/88 px-5 py-3 text-sm font-semibold text-[#2f5f9f] shadow-[0_14px_34px_rgba(83,122,178,0.18)] transition hover:-translate-y-0.5 hover:border-[#8dbdf5] hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isLoading || isRefreshing}
          >
            {isRefreshing ? 'Sincronizando...' : 'Atualizar'}
          </button>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <section className="grid gap-8 rounded-[2.5rem] border border-white/90 bg-white/76 p-6 shadow-[0_30px_110px_rgba(102,132,178,0.16)] backdrop-blur-xl md:grid-cols-[1.15fr_0.85fr] md:p-10">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#6d8fc8]">
              Laboratório de design
            </p>
            <h2 className="mt-5 max-w-3xl font-[var(--font-display)] text-5xl leading-[0.95] tracking-[-0.07em] text-[#172033] sm:text-6xl lg:text-7xl">
              Sua biblioteca
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[1.75rem] bg-[#e8f2ff] p-5 text-[#173c72] shadow-[0_24px_50px_rgba(112,149,203,0.18)] ring-1 ring-[#cfe0ff]">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#5d87c4]">Acervo</p>
              <p className="mt-4 font-[var(--font-display)] text-5xl tracking-[-0.06em]">
                {numberFormatter.format(books.length)}
              </p>
              <p className="mt-2 text-sm text-[#5274a5]">livros vindos do backend</p>
            </div>
            <div className="rounded-[1.75rem] bg-[#eaf8f0] p-5 text-[#174c36] ring-1 ring-[#ccefdc]">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#62a985]">Lendo</p>
              <p className="mt-4 font-[var(--font-display)] text-5xl tracking-[-0.06em]">
                {numberFormatter.format(readingBooks)}
              </p>
              <p className="mt-2 text-sm text-[#5a836c]">em andamento</p>
            </div>
            <div className="rounded-[1.75rem] bg-[#fff7d6] p-5 text-[#6f5515] ring-1 ring-[#f7e8a8]">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#b69a3d]">Lidos</p>
              <p className="mt-4 font-[var(--font-display)] text-5xl tracking-[-0.06em]">
                {numberFormatter.format(completedBooks)}
              </p>
              <p className="mt-2 text-sm text-[#8e7a38]">concluídos</p>
            </div>
            <div className="rounded-[1.75rem] bg-[#ffecef] p-5 text-[#7b2e3b] ring-1 ring-[#ffd3db]">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#c56f80]">Páginas</p>
              <p className="mt-4 font-[var(--font-display)] text-4xl tracking-[-0.06em]">
                {numberFormatter.format(trackedPages)}
              </p>
              <p className="mt-2 text-sm text-[#9d6470]">de {numberFormatter.format(totalPages)}</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6d8fc8]">Livros</p>
              <h3 className="mt-2 font-[var(--font-display)] text-4xl tracking-[-0.06em]">Coleção Atual de Livros</h3>
            </div>
            {!isLoading && !error && (
              <p className="text-sm font-medium text-slate-500">
                {numberFormatter.format(books.length)} {books.length === 1 ? 'livro sincronizado' : 'livros sincronizados'}
              </p>
            )}
          </div>

          {isLoading && (
            <div className="rounded-[2rem] border border-white/90 bg-white/80 px-6 py-16 text-center shadow-[0_18px_60px_rgba(102,132,178,0.12)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6d8fc8]">Carregando livros...</p>
              <p className="mt-3 text-slate-500">Buscando dados em GET /books.</p>
            </div>
          )}

          {!isLoading && error && (
            <div className="rounded-[2rem] border border-[#ffd3db] bg-[#fff4f6]/90 px-6 py-14 text-center shadow-[0_18px_60px_rgba(197,111,128,0.12)]">
              <p className="font-[var(--font-display)] text-3xl tracking-[-0.04em] text-[#7b2e3b]">Não consegui carregar a biblioteca.</p>
              <p className="mx-auto mt-3 max-w-xl text-slate-600">{error}</p>
              <button
                onClick={refresh}
                className="mt-6 rounded-full bg-[#f4a8b6] px-5 py-3 text-sm font-semibold text-[#5b1d29] transition hover:-translate-y-0.5 hover:bg-[#f19aaa]"
              >
                Tentar novamente
              </button>
            </div>
          )}

          {!isLoading && !error && books.length === 0 && (
            <div className="rounded-[2rem] border border-white/90 bg-white/80 px-6 py-16 text-center shadow-[0_18px_60px_rgba(102,132,178,0.12)]">
              <p className="font-[var(--font-display)] text-3xl tracking-[-0.04em]">Nenhum livro encontrado.</p>
              <p className="mt-3 text-slate-500">Quando o backend retornar livros, eles aparecem aqui.</p>
            </div>
          )}

          {!isLoading && !error && books.length > 0 && (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {books.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
