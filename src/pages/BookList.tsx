import { useEffect, useState } from 'react'
import { BookCard } from '../components/BookCard'
import { DetailSheet } from '../components/DetailSheet'
import { NewBookModal } from '../components/NewBookModal'
import { useBooks } from '../hooks/useBooks'
import type { Book } from '../types/Book'

type Theme = 'kinari' | 'sumi' | 'sepia'

const numberFormatter = new Intl.NumberFormat('pt-BR')

// ── Theme Switcher ──────────────────────────────────────────
function ThemeSwitcher({ theme, setTheme }: { theme: Theme; setTheme: (t: Theme) => void }) {
  const themes: { id: Theme; label: string }[] = [
    { id: 'kinari', label: 'Kinari' },
    { id: 'sumi',   label: 'Sumi'   },
    { id: 'sepia',  label: 'Sépia'  },
  ]
  return (
    <div className="wa-theme-switch">
      <span className="wa-label">Tema</span>
      {themes.map(t => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`wa-theme-chip ${theme === t.id ? 'is-active' : ''}`}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}

// ── Hero ────────────────────────────────────────────────────
function Hero({ books }: { books: Book[] }) {
  const lendo        = books.filter(b => b.status === 'LENDO').length
  const lidos        = books.filter(b => b.status === 'LIDO').length
  const trackedPages = books.reduce((t, b) => t + (b.currentPage ?? 0), 0)
  const totalPages   = books.reduce((t, b) => t + (b.totalPages  ?? 0), 0)

  return (
    <section className="wa-hero">
      <div className="wa-hero-head">
        <p className="wa-eyebrow">Laboratório de design</p>
      </div>

      <h2 className="wa-hero-title">Sua biblioteca</h2>

      <hr className="wa-rule" style={{ margin: '40px 0 0' }} />

      <div className="wa-metrics">
        <Metric label="Acervo"  value={numberFormatter.format(books.length)} sub="livros vindos do backend" />
        <Metric label="Lendo"   value={numberFormatter.format(lendo)}        sub="em andamento"             />
        <Metric label="Lidos"   value={numberFormatter.format(lidos)}        sub="concluídos"               />
        <Metric label="Páginas" value={numberFormatter.format(trackedPages)} sub={`de ${numberFormatter.format(totalPages)} no total`} />
      </div>
    </section>
  )
}

function Metric({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="wa-metric">
      <div className="wa-label">{label}</div>
      <div className="wa-num wa-metric-num">{value}</div>
      <div className="wa-metric-sub">{sub}</div>
    </div>
  )
}

// ── BookList (página principal) ─────────────────────────────
export function BookList() {
  const { books, isLoading, isRefreshing, error, refresh } = useBooks()
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [showNewBook,  setShowNewBook]  = useState(false)

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('wabi-theme')
    return (saved === 'kinari' || saved === 'sumi' || saved === 'sepia') ? saved : 'kinari'
  })

  // Aplica o tema no <html> e persiste
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('wabi-theme', theme)
  }, [theme])

  return (
    <div className="wa-app">

      {/* HEADER */}
      <header className="wa-header">
        <div className="wa-header-inner">
          <div>
            <p className="wa-eyebrow">Biblioteca pessoal</p>
            <h1 className="wa-header-title">Gerenciador de Biblioteca</h1>
          </div>

          <div className="wa-header-right">
            <ThemeSwitcher theme={theme} setTheme={setTheme} />

            <button
              className="wa-btn wa-btn-secondary"
              onClick={refresh}
              disabled={isLoading || isRefreshing}
            >
              {isRefreshing ? 'Sincronizando…' : 'Atualizar'}
            </button>

            <button
              className="wa-btn wa-btn-primary"
              onClick={() => setShowNewBook(true)}
            >
              + Novo livro
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="wa-main">

        {/* Hero com métricas */}
        <Hero books={books} />

        {/* Coleção */}
        <section className="wa-collection">
          <div className="wa-collection-head">
            <div>
              <p className="wa-label">Livros</p>
              <h3 className="wa-collection-title">Coleção atual</h3>
            </div>
            {!isLoading && !error && (
              <p className="wa-meta">
                {numberFormatter.format(books.length)}{' '}
                {books.length === 1 ? 'livro sincronizado' : 'livros sincronizados'}
              </p>
            )}
          </div>

          <hr className="wa-rule" style={{ margin: '0 0 32px' }} />

          {/* Estado: carregando */}
          {isLoading && (
            <div className="wa-state">
              <p className="wa-label">Carregando livros…</p>
              <p className="wa-state-sub">Buscando dados em GET /books.</p>
            </div>
          )}

          {/* Estado: erro */}
          {!isLoading && error && (
            <div className="wa-state wa-state-error">
              <h3 className="wa-state-title">Não consegui carregar a biblioteca.</h3>
              <p className="wa-state-sub">{error}</p>
              <button
                className="wa-btn wa-btn-seal"
                onClick={refresh}
                style={{ marginTop: 20 }}
              >
                Tentar novamente
              </button>
            </div>
          )}

          {/* Estado: vazio */}
          {!isLoading && !error && books.length === 0 && (
            <div className="wa-state">
              <h3 className="wa-state-title">Nenhum livro encontrado.</h3>
              <p className="wa-state-sub">Quando o backend retornar livros, eles aparecem aqui.</p>
            </div>
          )}

          {/* Grid de cards */}
          {!isLoading && !error && books.length > 0 && (
            <div className="wa-grid">
              {books.map(book => (
                <BookCard key={book.id} book={book} onClick={setSelectedBook} />
              ))}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="wa-footer">
          <hr className="wa-rule" style={{ margin: '0 0 20px' }} />
          <div className="wa-footer-row">
            <span className="wa-meta">蔵 · Gerenciador de Biblioteca</span>
            <span className="wa-meta">GET /books · localhost:8080</span>
          </div>
        </footer>
      </main>

      <DetailSheet book={selectedBook} onClose={() => setSelectedBook(null)} />

      <NewBookModal
        open={showNewBook}
        onClose={() => setShowNewBook(false)}
        onSaved={() => { setShowNewBook(false); refresh() }}
      />
    </div>
  )
}
