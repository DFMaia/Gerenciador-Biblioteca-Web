import { useEffect, useState } from 'react'
import { BookCard } from '../components/BookCard'
import { LibrarySearchView } from '../components/LibrarySearchView'
import { NewBookModal } from '../components/NewBookModal'
import { StatisticsView } from '../components/StatisticsView'
import { useBooks } from '../hooks/useBooks'
import { deleteBook, getAllBooks, updateBook } from '../api/booksApi'
import { getPreferences, saveTheme, saveSortOrder } from '../api/preferencesApi'
import type { Book, BookMetrics, BookUpdateRequest, ReadingStatus } from '../types/Book'
import type { Theme, SortOrder } from '../types/Preferences'

const numberFormatter = new Intl.NumberFormat('pt-BR')

type StatusFlow = 'reading' | 'abandoned'
type ViewMode = 'home' | 'search' | 'status-list' | 'status-edit' | 'stats'
type EditReturnView = 'home' | 'status-list' | 'stats'
type DeleteDialogState = 'confirming' | 'deleting' | 'deleted' | null
type RecommendationState = 'idle' | 'loading' | 'ready' | 'saving' | 'selected' | 'empty' | 'error'

const STATUS_FLOW_CONTENT: Record<StatusFlow, {
  status: ReadingStatus
  eyebrow: string
  title: string
  singular: string
  plural: string
  emptyTitle: string
  errorMessage: string
}> = {
  reading: {
    status: 'LENDO',
    eyebrow: 'Livros que você está lendo',
    title: 'Em leitura',
    singular: 'livro em andamento',
    plural: 'livros em andamento',
    emptyTitle: 'Nenhum livro em leitura.',
    errorMessage: 'Não consegui carregar os livros em leitura.',
  },
  abandoned: {
    status: 'ABANDONADO',
    eyebrow: 'Livros abandonados',
    title: 'Abandonados',
    singular: 'livro abandonado',
    plural: 'livros abandonados',
    emptyTitle: 'Nenhum livro abandonado.',
    errorMessage: 'Não consegui carregar os livros abandonados.',
  },
}

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

// ── Sort Switcher ───────────────────────────────────────────
function SortSwitcher({ sortOrder, setSortOrder }: { sortOrder: SortOrder; setSortOrder: (s: SortOrder) => void }) {
  const options: { id: SortOrder; label: string }[] = [
    { id: 'ASC',    label: 'Crescente ↑'  },
    { id: 'DESC',   label: 'Decrescente ↓' },
    { id: 'RANDOM', label: 'Aleatório'    },
  ]
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <span className="wa-label" style={{ marginRight: 6 }}>Ordem</span>
      {options.map(o => (
        <button
          key={o.id}
          onClick={() => setSortOrder(o.id)}
          className={`wa-theme-chip ${sortOrder === o.id ? 'is-active' : ''}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

function toBookUpdateRequest(book: Book, overrides: Partial<BookUpdateRequest> = {}): BookUpdateRequest {
  return {
    genre: book.genre,
    description: book.description,
    coverUrl: book.coverUrl,
    isbn: book.isbn,
    totalPages: book.totalPages,
    publishedYear: book.publishedYear,
    status: book.status,
    currentPage: book.currentPage,
    startDate: book.startDate,
    endDate: book.endDate,
    bookRating: book.bookRating,
    publisher: book.publisher,
    ...overrides,
  }
}

function getInitials(title: string) {
  return title
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase()
}

// ── Status Page ─────────────────────────────────────────────
function StatusBooksPage({
  flow,
  sortOrder,
  setSortOrder,
  onBack,
  onUpdateBook,
  onDeleteBook,
  refreshKey,
}: {
  flow: StatusFlow
  sortOrder: SortOrder
  setSortOrder: (s: SortOrder) => void
  onBack: () => void
  onUpdateBook: (book: Book) => void
  onDeleteBook: (book: Book) => void
  refreshKey: number
}) {
  const content = STATUS_FLOW_CONTENT[flow]
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadStatusBooks() {
      setLoading(true)
      setError(null)

      try {
        const data = await getAllBooks(0, 0, {
          signal: controller.signal,
          sortOrder,
          status: content.status,
        })
        setBooks(data.content)
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return
        setError(content.errorMessage)
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadStatusBooks()

    return () => controller.abort()
  }, [content.errorMessage, content.status, refreshKey, sortOrder])

  return (
    <main className="wa-main wa-reading-page-main">
      <section className="wa-reading-page">
        <div className="wa-reading-page-top">
          <button className="wa-library-back" onClick={onBack} aria-label="Voltar para a home">
            <span aria-hidden="true">‹</span>
          </button>

          <div>
            <p className="wa-label">{content.eyebrow}</p>
            <h2 className="wa-reading-page-title">{content.title}</h2>
          </div>
        </div>

        <div className="wa-collection-head wa-reading-page-head">
          <p className="wa-meta">
            {loading
              ? 'Carregando...'
              : `${numberFormatter.format(books.length)} ${books.length === 1 ? content.singular : content.plural}`}
          </p>
          <SortSwitcher sortOrder={sortOrder} setSortOrder={setSortOrder} />
        </div>

        <hr className="wa-rule" style={{ margin: '0 0 32px' }} />

        {loading && (
          <div className="wa-state">
            <p className="wa-label">Carregando livros...</p>
          </div>
        )}

        {!loading && error && (
          <div className="wa-state wa-state-error">
            <h3 className="wa-state-title">Não consegui carregar essa lista.</h3>
            <p className="wa-state-sub">{error}</p>
          </div>
        )}

        {!loading && !error && books.length === 0 && (
          <div className="wa-state">
            <h3 className="wa-state-title">{content.emptyTitle}</h3>
          </div>
        )}

        {!loading && !error && books.length > 0 && (
          <div className="wa-grid">
            {books.map(book => (
              <BookCard
                key={book.id}
                book={book}
                onUpdate={onUpdateBook}
                onDelete={onDeleteBook}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

// ── Recommendation Dialog ──────────────────────────────────
function RecommendationDialog({
  open,
  book,
  state,
  error,
  onClose,
  onAnother,
  onMarkAsReading,
}: {
  open: boolean
  book: Book | null
  state: RecommendationState
  error: string | null
  onClose: () => void
  onAnother: () => void
  onMarkAsReading: () => void
}) {
  if (!open) return null

  const isBusy = state === 'loading' || state === 'saving'
  const hasBook = Boolean(book)
  const recommendationStatus = state === 'selected'
    ? { label: 'Lendo', color: 'var(--ochre)' }
    : { label: 'Não lido', color: 'var(--smoke)' }

  return (
    <div className="wa-recommendation-backdrop" role="dialog" aria-modal="true" aria-labelledby="recommendation-title">
      <section className="wa-recommendation-dialog">
        <button
          type="button"
          className="wa-recommendation-close"
          onClick={onClose}
          aria-label="Fechar indicação"
        >
          ×
        </button>

        <p className="wa-eyebrow">Indicação do acervo</p>
        <h3 id="recommendation-title" className="wa-recommendation-title">
          Me indique um livro
        </h3>

        {state === 'loading' && (
          <div className="wa-recommendation-state">
            <p className="wa-label">Sorteando um livro...</p>
          </div>
        )}

        {state === 'empty' && (
          <div className="wa-recommendation-state">
            <h4 className="wa-state-title">Não encontrei livros não lidos.</h4>
            <p className="wa-state-sub">As indicações usam apenas livros com status "Não lido".</p>
          </div>
        )}

        {state === 'error' && (
          <div className="wa-recommendation-state wa-state-error">
            <h4 className="wa-state-title">Não consegui sortear agora.</h4>
            <p className="wa-state-sub">{error}</p>
          </div>
        )}

        {hasBook && (state === 'ready' || state === 'saving' || state === 'selected') && (
          <>
            <div className="wa-recommendation-card">
              <div className="wa-recommendation-cover-column">
                <div className="wa-recommendation-cover">
                  {book?.coverUrl ? (
                    <img src={book.coverUrl} alt={`Capa de ${book.title}`} />
                  ) : (
                    <div className="wa-cover-initials">{getInitials(book?.title ?? '') || '?'}</div>
                  )}
                </div>

                <button
                  type="button"
                  className="wa-recommendation-read-action"
                  onClick={onMarkAsReading}
                  disabled={state === 'saving' || state === 'selected'}
                >
                  {state === 'saving'
                    ? 'Atualizando'
                    : state === 'selected'
                      ? 'Em leitura'
                      : 'Atualizar para lendo'}
                </button>
              </div>

              <div className="wa-recommendation-body">
                <span
                  className="wa-pill"
                  style={{
                    borderColor: recommendationStatus.color,
                    color: recommendationStatus.color,
                  }}
                >
                  {recommendationStatus.label}
                </span>
                <h4 className="wa-recommendation-book-title">{book?.title}</h4>
                <p className="wa-recommendation-author">{book?.author}</p>

                <div className="wa-card-tags">
                  {book?.publisher && <span>{book.publisher}</span>}
                  {book?.genre && <span>{book.genre}</span>}
                  {book?.totalPages != null && <span>{numberFormatter.format(book.totalPages)} páginas</span>}
                </div>

                {state === 'selected' && (
                  <p className="wa-recommendation-success">Livro movido para Em leitura.</p>
                )}
              </div>
            </div>

            {error && <p className="wa-delete-error">{error}</p>}
          </>
        )}

        <div className="wa-recommendation-actions">
          <button
            type="button"
            className="wa-delete-btn wa-delete-btn-ghost"
            onClick={onAnother}
            disabled={isBusy}
          >
            Me indique outro
          </button>
        </div>
      </section>
    </div>
  )
}

// ── Delete Dialog ──────────────────────────────────────────
function DeleteBookDialog({
  book,
  state,
  error,
  onCancel,
  onConfirm,
}: {
  book: Book | null
  state: DeleteDialogState
  error: string | null
  onCancel: () => void
  onConfirm: () => void
}) {
  if (!book || !state) return null

  if (state === 'deleted') {
    return (
      <div className="wa-delete-backdrop" role="status" aria-live="polite">
        <div className="wa-delete-success-card">
          <div className="wa-delete-success-mark" aria-hidden="true">
            <svg className="wa-delete-success-icon" viewBox="0 0 72 72" fill="none">
              <circle className="wa-delete-success-ring" cx="36" cy="36" r="27" />
              <circle className="wa-delete-success-circle" cx="36" cy="36" r="27" />
              <path className="wa-delete-success-x wa-delete-success-x-a" d="M27 27L45 45" />
              <path className="wa-delete-success-x wa-delete-success-x-b" d="M45 27L27 45" />
            </svg>
          </div>
          <h3 className="wa-delete-title">Livro apagado</h3>
        </div>
      </div>
    )
  }

  if (state === 'deleting') {
    return (
      <div className="wa-delete-backdrop" role="status" aria-live="polite">
        <div className="wa-delete-success-card">
          <p className="wa-eyebrow">Apagando</p>
          <h3 className="wa-delete-title">Removendo livro</h3>
          <p className="wa-delete-copy">Só um instante.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="wa-delete-backdrop" role="dialog" aria-modal="true" aria-labelledby="delete-book-title">
      <div className="wa-delete-dialog">
        <p className="wa-eyebrow">Apagar livro</p>
        <h3 id="delete-book-title" className="wa-delete-title">Tem certeza?</h3>
        <p className="wa-delete-copy">
          Você vai apagar <strong>{book.title}</strong> do seu acervo.
        </p>

        {error && <p className="wa-delete-error">{error}</p>}

        <div className="wa-delete-actions-row">
          <button
            type="button"
            className="wa-delete-btn wa-delete-btn-ghost"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            type="button"
            className="wa-delete-btn wa-delete-btn-danger"
            onClick={onConfirm}
          >
            Apagar
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Hero ────────────────────────────────────────────────────
function Hero({
  metrics,
  totalElements,
  onReadingClick,
  onAbandonedClick,
  onRecommendClick,
  onStatsClick,
}: {
  metrics: BookMetrics | null
  totalElements: number
  onReadingClick: () => void
  onAbandonedClick: () => void
  onRecommendClick: () => void
  onStatsClick: () => void
}) {
  const readingCount = metrics?.readingBooks ?? 0
  const abandonedCount = metrics?.abandonedBooks ?? 0

  return (
    <section className="wa-hero">
      <div className="wa-hero-head">
        <p className="wa-eyebrow">Laboratório de design</p>
      </div>

      <h2 className="wa-hero-title">Sua biblioteca</h2>

      <hr className="wa-rule" style={{ margin: '40px 0 0' }} />

      <div className="wa-metrics">
        <Metric label="Acervo"  value={numberFormatter.format(totalElements)} sub="livros no total" />
        <Metric
          label="Lendo"
          value={numberFormatter.format(readingCount)}
          sub="em andamento"
          onClick={readingCount >= 1 ? onReadingClick : undefined}
        />
        <Metric label="Lidos"   value={numberFormatter.format(metrics?.readBooks ?? 0)} sub="concluídos" />
        <Metric
          label="Abandonados"
          value={numberFormatter.format(abandonedCount)}
          sub="interrompidos"
          onClick={abandonedCount >= 1 ? onAbandonedClick : undefined}
        />
        <Metric
          label="Páginas"
          value={numberFormatter.format(metrics?.trackedPages ?? 0)}
          sub={`de ${numberFormatter.format(metrics?.totalPages ?? 0)} no acervo`}
        />
        <RecommendationMetric onClick={onRecommendClick} />
        <StatisticsMetric onClick={onStatsClick} />
      </div>

      <hr className="wa-rule wa-hero-metrics-rule" />
    </section>
  )
}

function RecommendationMetric({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className="wa-metric wa-metric-clickable wa-recommendation-metric" onClick={onClick}>
      <span className="wa-label">Me indique um livro</span>
      <span className="wa-recommendation-symbol">?</span>
      <span className="wa-metric-sub">não lido</span>
    </button>
  )
}

function Metric({ label, value, sub, onClick }: {
  label: string
  value: string
  sub: string
  onClick?: () => void
}) {
  return (
    <div
      className={`wa-metric${onClick ? ' wa-metric-clickable' : ''}`}
      onClick={onClick}
    >
      <div className="wa-label">{label}</div>
      <div className="wa-num wa-metric-num">{value}</div>
      <div className="wa-metric-sub">{sub}</div>
    </div>
  )
}

function StatisticsMetric({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className="wa-metric wa-metric-clickable wa-statistics-metric" onClick={onClick}>
      <div className="wa-label">Estatísticas</div>
      <svg className="wa-statistics-chart" viewBox="0 0 96 64" role="img" aria-hidden="true">
        <path className="wa-statistics-axis" d="M10 54H86" />
        <path className="wa-statistics-axis" d="M10 10V54" />
        <rect className="wa-statistics-bar" x="20" y="34" width="9" height="20" />
        <rect className="wa-statistics-bar" x="38" y="25" width="9" height="29" />
        <rect className="wa-statistics-bar" x="56" y="17" width="9" height="37" />
        <path className="wa-statistics-line" d="M20 36L42 27L60 20L80 13" />
      </svg>
    </button>
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
  const [theme, setThemeState]           = useState<Theme>('kinari')
  const [sortOrder, setSortOrderState]   = useState<SortOrder>('ASC')
  const [prefsLoaded, setPrefsLoaded]    = useState(false)

  // Carrega preferências do backend ao montar
  useEffect(() => {
    getPreferences()
      .then(prefs => {
        const validThemes: Theme[] = ['kinari', 'sumi', 'sepia']
        const t = validThemes.includes(prefs.theme as Theme) ? prefs.theme : 'kinari'
        setThemeState(t)
        setSortOrderState(prefs.sortOrder ?? 'ASC')
      })
      .catch(() => {
        // Fallback: usa localStorage se o backend não responder
        const saved = localStorage.getItem('wabi-theme') as Theme | null
        if (saved === 'kinari' || saved === 'sumi' || saved === 'sepia') {
          setThemeState(saved)
        }
      })
      .finally(() => setPrefsLoaded(true))
  }, [])

  // Aplica tema no <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('wabi-theme', theme) // mantém localStorage como cache rápido
  }, [theme])

  const handleSetTheme = (t: Theme) => {
    setThemeState(t)
    saveTheme(t).catch(() => { /* silencia erros de rede */ })
  }

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
  } = useBooks(sortOrder)

  const [showNewBook,     setShowNewBook]     = useState(false)
  const [editingBook, setEditingBook]         = useState<Book | null>(null)
  const [editReturnView, setEditReturnView]   = useState<EditReturnView>('home')
  const [statusFlow, setStatusFlow]           = useState<StatusFlow>('reading')
  const [statusRefreshKey, setStatusRefreshKey] = useState(0)
  const [deleteTarget, setDeleteTarget]       = useState<Book | null>(null)
  const [deleteState, setDeleteState]         = useState<DeleteDialogState>(null)
  const [deleteError, setDeleteError]         = useState<string | null>(null)
  const [recommendationOpen, setRecommendationOpen] = useState(false)
  const [recommendedBook, setRecommendedBook] = useState<Book | null>(null)
  const [recommendationState, setRecommendationState] = useState<RecommendationState>('idle')
  const [recommendationError, setRecommendationError] = useState<string | null>(null)
  const [view, setView]                       = useState<ViewMode>('home')

  const totalElements = pagedData?.totalElements ?? 0
  const isAllMode     = pageSize === 0
  const metrics       = pagedData?.metrics ?? null

  const handleSetSortOrder = (s: SortOrder) => {
    const shouldRefreshRandom = s === 'RANDOM' && sortOrder === 'RANDOM'

    setSortOrderState(s)
    saveSortOrder(s).catch(() => { /* silencia erros de rede */ })

    if (shouldRefreshRandom) {
      refresh()
      setStatusRefreshKey(key => key + 1)
    }
  }

  const openEditor = (book: Book, returnView: EditReturnView) => {
    setEditingBook(book)
    setEditReturnView(returnView)
    setView('status-edit')
  }

  const requestDelete = (book: Book) => {
    setDeleteTarget(book)
    setDeleteState('confirming')
    setDeleteError(null)
  }

  const closeDeleteDialog = () => {
    if (deleteState === 'deleting') return
    setDeleteTarget(null)
    setDeleteState(null)
    setDeleteError(null)
  }

  const confirmDelete = async () => {
    if (!deleteTarget || deleteState === 'deleting') return

    setDeleteState('deleting')
    setDeleteError(null)

    try {
      await deleteBook(deleteTarget.id)
      refresh()
      setStatusRefreshKey(key => key + 1)
      setDeleteState('deleted')
    } catch (err) {
      setDeleteState('confirming')
      setDeleteError(err instanceof Error ? err.message : 'Não foi possível apagar o livro.')
    }
  }

  const loadRecommendation = async (excludeBookId?: number) => {
    setRecommendationState('loading')
    setRecommendationError(null)

    try {
      const data = await getAllBooks(0, 20, {
        sortOrder: 'RANDOM',
        status: 'NAO_LIDO',
      })
      const nextBook = data.content.find(book => book.id !== excludeBookId) ?? data.content[0] ?? null

      setRecommendedBook(nextBook)
      setRecommendationState(nextBook ? 'ready' : 'empty')
    } catch (err) {
      setRecommendedBook(null)
      setRecommendationState('error')
      setRecommendationError(err instanceof Error ? err.message : 'Não consegui buscar uma indicação.')
    }
  }

  const openRecommendation = () => {
    setRecommendationOpen(true)
    void loadRecommendation(recommendedBook?.id)
  }

  const closeRecommendation = () => {
    setRecommendationOpen(false)
    setRecommendedBook(null)
    setRecommendationState('idle')
    setRecommendationError(null)
  }

  const requestAnotherRecommendation = () => {
    void loadRecommendation(recommendedBook?.id)
  }

  const markRecommendedBookAsReading = async () => {
    if (!recommendedBook || recommendationState === 'saving') return

    setRecommendationState('saving')
    setRecommendationError(null)

    try {
      const saved = await updateBook(
        recommendedBook.id,
        toBookUpdateRequest(recommendedBook, { status: 'LENDO' }),
      )
      setRecommendedBook(saved)
      refresh()
      setStatusRefreshKey(key => key + 1)
      setRecommendationState('selected')
    } catch (err) {
      setRecommendationState('ready')
      setRecommendationError(err instanceof Error ? err.message : 'Não foi possível atualizar para lendo.')
    }
  }

  useEffect(() => {
    if (deleteState !== 'deleted') return

    const timer = window.setTimeout(() => {
      setDeleteTarget(null)
      setDeleteState(null)
      setDeleteError(null)
    }, 1500)

    return () => window.clearTimeout(timer)
  }, [deleteState])

  if (view === 'search') {
    return (
      <div className="wa-app">
        <LibrarySearchView
          onBack={() => setView('home')}
          onSaved={() => refresh()}
        />
      </div>
    )
  }

  if (view === 'status-list') {
    return (
      <div className="wa-app">
        <StatusBooksPage
          flow={statusFlow}
          sortOrder={sortOrder}
          setSortOrder={handleSetSortOrder}
          onBack={() => setView('home')}
          onUpdateBook={book => openEditor(book, 'status-list')}
          onDeleteBook={requestDelete}
          refreshKey={statusRefreshKey}
        />
        <DeleteBookDialog
          book={deleteTarget}
          state={deleteState}
          error={deleteError}
          onCancel={closeDeleteDialog}
          onConfirm={confirmDelete}
        />
      </div>
    )
  }

  if (view === 'stats') {
    return (
      <div className="wa-app">
        <StatisticsView
          refreshKey={statusRefreshKey}
          onBackHome={() => setView('home')}
          onOpenReading={() => {
            setStatusFlow('reading')
            setView('status-list')
          }}
          onOpenAbandoned={() => {
            setStatusFlow('abandoned')
            setView('status-list')
          }}
          onUpdateBook={book => openEditor(book, 'stats')}
          onDeleteBook={requestDelete}
        />
        <DeleteBookDialog
          book={deleteTarget}
          state={deleteState}
          error={deleteError}
          onCancel={closeDeleteDialog}
          onConfirm={confirmDelete}
        />
      </div>
    )
  }

  if (view === 'status-edit' && editingBook) {
    return (
      <div className="wa-app">
        <LibrarySearchView
          initialBook={editingBook}
          onBack={() => setView(editReturnView)}
          onSaved={book => {
            setEditingBook(book)
            refresh()
            setStatusRefreshKey(key => key + 1)
          }}
        />
      </div>
    )
  }

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
            <ThemeSwitcher theme={theme} setTheme={handleSetTheme} />

            <button
              className="wa-btn wa-btn-secondary"
              onClick={() => {
                setView('search')
              }}
              disabled={isLoading || isRefreshing}
            >
              Pesquisar no seu acervo
            </button>

            <button
              className="wa-btn wa-btn-primary"
              onClick={() => setShowNewBook(true)}
            >
              Novo livro
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="wa-main">

        {/* Hero com métricas */}
        <Hero
          metrics={metrics}
          totalElements={totalElements}
          onReadingClick={() => {
            setStatusFlow('reading')
            setView('status-list')
          }}
          onAbandonedClick={() => {
            setStatusFlow('abandoned')
            setView('status-list')
          }}
          onRecommendClick={openRecommendation}
          onStatsClick={() => setView('stats')}
        />

        {/* Coleção */}
        <section className="wa-collection">
          <div className="wa-collection-head">
            <div>
              <p className="wa-label">Livros</p>
              <h3 className="wa-collection-title">Coleção atual</h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              {/* Seletor de ordenação */}
              {prefsLoaded && (
                <SortSwitcher sortOrder={sortOrder} setSortOrder={handleSetSortOrder} />
              )}

              {!isLoading && !error && (
                <p className="wa-meta">
                  {isAllMode
                    ? `${numberFormatter.format(totalElements)} ${totalElements === 1 ? 'livro sincronizado' : 'livros sincronizados'}`
                    : `Página ${currentPage + 1} de ${numberFormatter.format(totalPages)}`
                  }
                </p>
              )}
            </div>
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
                <BookCard
                  key={book.id}
                  book={book}
                  onUpdate={book => openEditor(book, 'home')}
                  onDelete={requestDelete}
                />
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

      <DeleteBookDialog
        book={deleteTarget}
        state={deleteState}
        error={deleteError}
        onCancel={closeDeleteDialog}
        onConfirm={confirmDelete}
      />

      <RecommendationDialog
        open={recommendationOpen}
        book={recommendedBook}
        state={recommendationState}
        error={recommendationError}
        onClose={closeRecommendation}
        onAnother={requestAnotherRecommendation}
        onMarkAsReading={markRecommendedBookAsReading}
      />

      <NewBookModal
        open={showNewBook}
        onClose={() => setShowNewBook(false)}
        onSaved={() => { setShowNewBook(false); refresh() }}
      />
    </div>
  )
}
