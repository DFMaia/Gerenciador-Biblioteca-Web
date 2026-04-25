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
function Hero({ books, totalElements }: { books: Book[]; totalElements: number }) {
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
        <Metric label="Acervo"  value={numberFormatter.format(totalElements)} sub="livros no total"             />
        <Metric label="Lendo"   value={numberFormatter.format(lendo)}         sub="em andamento"                />
        <Metric label="Lidos"   value={numberFormatter.format(lidos)}         sub="concluídos"                  />
        <Metric label="Páginas" value={numberFormatter.format(trackedPages)}  sub={`de ${numberFormatter.format(totalPages)} na página`} />
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

// ── Pagination ──────────────────────────────────────────────
const PAGE_SIZE_OPTIONS = [
  { value: 20,  label: '20'   },
  { value: 50,  label: '50'   },
  { value: 100, label: '100'  },
  { value: 0,   label: 'Tudo' },
]

interface PaginationProps {
  currentPage: number
  totalPages: number
  pageSize: number
  totalElements: number
  isAllMode: boolean
  onGoToPage: (page: number) => void
  onSetPageSize: (size: number) => void
}

function Pagination({
  currentPage,
  totalPages,
  pageSize,
  totalElements,
  isAllMode,
  onGoToPage,
  onSetPageSize,
}: PaginationProps) {
  const isFirst = currentPage === 0
  const isLast  = isAllMode || currentPage >= totalPages - 1

  return (
    <div className="wa-pagination">
      <div className="wa-pagination-info">
        {isAllMode ? (
          <span className="wa-meta">
            Exibindo todos os {numberFormatter.format(totalElements)} livros
          </span>
        ) : (
          <span className="wa-meta">
            Página {currentPage + 1} de {numberFormatter.format(totalPages)}
            {' '}·{' '}
            {numberFormatter.format(totalElements)} livros
          </span>
        )}
      </div>

      <div className="wa-pagination-controls">
        <div className="wa-pagination-size">
          <span className="wa-label">Por página</span>
          {PAGE_SIZE_OPTIONS.map(opt => (
            <button
              key={opt.value}
              onClick={() => onSetPageSize(opt.value)}
              className={`wa-pagination-chip ${pageSize === opt.value ? 'is-active' : ''}`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {!isAllMode && totalPages > 1 && (
          <div className="wa-pagination-nav">
            <button
              className="wa-pagination-btn"
              onClick={() => onGoToPage(0)}
              disabled={isFirst}
              aria-label="Primeira página"
            >
              ««
            </button>
            <button
              className="wa-pagination-btn"
              onClick={() => onGoToPage(currentPage - 1)}
              disabled={isFirst}
              aria-label="Página anterior"
            >
              ‹
            </button>
            <button
              className="wa-pagination-btn"
              onClick={() => onGoToPage(currentPage + 1)}
              disabled={isLast}
              aria-label="Próxima página"
            >
              ›
            </button>
            <button
              className="wa-pagination-btn"
              onClick={() => onGoToPage(totalPages - 1)}
              disabled={isLast}
              aria-label="Última página"
            >
              »»
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// ── BookList (página principal) ─────────────────────────────
export function BookList() {
  const {
    books,
    pagedData,
    isLoading,
    isRefreshing,
    error,
    currentPage,
    pageSize,
    totalPages,
    refresh,
    goToPage,
    setPageSize,
  } = useBooks()

  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [showNewBook,  setShowNewBook]  = useState(false)

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('wabi-theme')
    return (saved === 'kinari' || saved === 'sumi' || saved === 'sepia') ? saved : 'kinari'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('wabi-theme', theme)
  }, [theme])

  const totalElements = pagedData?.totalElements ?? 0
  const isAllMode     = pageSize === 0

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
        <Hero books={books} totalElements={totalElements} />

        {/* Coleção */}
        <section className="wa-collection">
          <div className="wa-collection-head">
            <div>
              <p className="wa-label">Livros</p>
              <h3 className="wa-collection-title">Coleção atual</h3>
            </div>
            {!isLoading && !error && (
              <p className="wa-meta">
                {isAllMode
                  ? `${numberFormatter.format(totalElements)} ${totalElements === 1 ? 'livro sincronizado' : 'livros sincronizados'}`
                  : `Página ${currentPage + 1} de ${numberFormatter.format(totalPages)}`
                }
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

          {/* Paginação */}
          {!isLoading && !error && totalElements > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              pageSize={pageSize}
              totalElements={totalElements}
              isAllMode={isAllMode}
              onGoToPage={goToPage}
              onSetPageSize={setPageSize}
            />
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
