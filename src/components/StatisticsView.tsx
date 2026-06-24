import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { getAllBooks } from '../api/booksApi'
import { label } from '../constants/bookOptions'
import type { Book, PagedBooks } from '../types/Book'
import { BookCard } from './BookCard'

const numberFormatter = new Intl.NumberFormat('pt-BR')
const percentFormatter = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 0,
})
const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 1,
})

const CURRENT_YEAR = new Date().getFullYear()

const GENRE_COLORS = [
  '#5e6a3a',
  '#7f8f52',
  '#a67a2c',
  '#b2422d',
  '#6f6a5e',
  '#4d716a',
  '#8a5f7d',
  '#9a7040',
  '#51708c',
  '#96503c',
  '#6f7d3d',
  '#3d5c18',
]
const EMPTY_BOOKS: Book[] = []

interface StatisticsViewProps {
  refreshKey: number
  onBackHome: () => void
  onOpenReading: () => void
  onOpenAbandoned: () => void
  onUpdateBook: (book: Book) => void
  onDeleteBook: (book: Book) => void
}

interface GenreStat {
  key: string
  label: string
  value: number
  color: string
}

interface GenreSegment extends GenreStat {
  dashLength: number
  offset: number
}

type StatisticsPanel = 'overview' | 'year-books'

function parseYear(value?: string | null) {
  if (!value) return null
  const year = new Date(value).getFullYear()
  return Number.isFinite(year) ? year : null
}

function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

function dayOfYear(date: Date) {
  const start = new Date(date.getFullYear(), 0, 1)
  return Math.max(1, Math.floor((date.getTime() - start.getTime()) / 86400000) + 1)
}

function daysInReferenceYear(year: number) {
  if (year === CURRENT_YEAR) return dayOfYear(new Date())
  return isLeapYear(year) ? 366 : 365
}

function pagesRead(book: Book) {
  if (book.status === 'LIDO') return book.totalPages ?? book.currentPage ?? 0
  return book.currentPage ?? 0
}

function readReferenceYear(book: Book) {
  if (book.status !== 'LIDO') return null
  return parseYear(book.endDate) ?? parseYear(book.updatedAt) ?? parseYear(book.startDate)
}

function collectionReferenceYear(book: Book) {
  return parseYear(book.updatedAt) ?? parseYear(book.startDate) ?? parseYear(book.endDate)
}

function uniqueCount(values: Array<string | null | undefined>) {
  return new Set(
    values
      .map(value => value?.trim().toLocaleLowerCase('pt-BR'))
      .filter((value): value is string => Boolean(value)),
  ).size
}

function byGenre(books: Book[], onlyRead = false): GenreStat[] {
  const counts = new Map<string, number>()

  books
    .filter(book => !onlyRead || book.status === 'LIDO')
    .forEach(book => {
      const key = book.genre ?? 'SEM_GENERO'
      counts.set(key, (counts.get(key) ?? 0) + 1)
    })

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'pt-BR'))
    .map(([key, value], index) => ({
      key,
      value,
      label: key === 'SEM_GENERO' ? 'Sem gênero' : label(key),
      color: GENRE_COLORS[index % GENRE_COLORS.length],
    }))
}

function shortYearLabel(year: number) {
  return year === CURRENT_YEAR ? `${year} atual` : String(year)
}

// Full circle path: two 180° arcs, center (110,110), radius 74
const CIRCLE_PATH = 'M 36 110 A 74 74 0 1 1 184 110 A 74 74 0 1 1 36 110'

function HorseShoeGauge({
  percent,
  children,
}: {
  percent: number
  children: ReactNode
}) {
  const clamped = Math.max(0, Math.min(100, percent))

  return (
    <div className="wa-horseshoe">
      <svg className="wa-horseshoe-svg" viewBox="0 0 220 220" aria-hidden="true">
        <defs>
          <linearGradient id="wa-page-progress-gradient" x1="36" y1="110" x2="184" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8ed46a" />
            <stop offset="100%" stopColor="#3d5c18" />
          </linearGradient>
        </defs>
        <path className="wa-horseshoe-track" d={CIRCLE_PATH} pathLength="100" />
        <path
          className="wa-horseshoe-fill"
          d={CIRCLE_PATH}
          pathLength="100"
          style={{ strokeDasharray: `${clamped} ${100 - clamped}` }}
        />
      </svg>
      <div className="wa-horseshoe-center">{children}</div>
    </div>
  )
}

function SegmentedHorseShoe({
  items,
  hoveredKey,
  onHover,
}: {
  items: GenreStat[]
  hoveredKey: string | null
  onHover: (key: string | null) => void
}) {
  const total = items.reduce((sum, item) => sum + item.value, 0)
  const segments = items.reduce<{ offset: number; segments: GenreSegment[] }>((state, item) => {
    const length = total === 0 ? 0 : (item.value / total) * 100
    const dashLength = Math.max(0, length - 0.8)

    return {
      offset: state.offset + length,
      segments: [
        ...state.segments,
        {
          ...item,
          dashLength,
          offset: state.offset,
        },
      ],
    }
  }, { offset: 0, segments: [] }).segments

  return (
    <div className="wa-segmented">
      <svg className="wa-segmented-svg" viewBox="0 0 220 220" aria-hidden="true">
        <path className="wa-horseshoe-track" d={CIRCLE_PATH} pathLength="100" />
        {segments.map(item => (
          <path
            key={item.key}
            className={`wa-segmented-fill${hoveredKey === item.key ? ' is-hovered' : ''}`}
            d={CIRCLE_PATH}
            pathLength="100"
            style={{
              stroke: item.color,
              strokeDasharray: `${item.dashLength} ${100 - item.dashLength}`,
              strokeDashoffset: -item.offset,
            }}
            onMouseEnter={() => onHover(item.key)}
            onMouseLeave={() => onHover(null)}
          />
        ))}
      </svg>
    </div>
  )
}

function StatButton({
  label,
  value,
  sub,
  onClick,
}: {
  label: string
  value: string
  sub: string
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      className={`wa-stat-tile${onClick ? ' is-clickable' : ''}`}
      onClick={onClick}
      disabled={!onClick}
    >
      <span className="wa-label">{label}</span>
      <span className="wa-stat-number">{value}</span>
      <span className="wa-stat-sub">{sub}</span>
    </button>
  )
}

function GenrePanel({
  title,
  subtitle,
  items,
  empty,
}: {
  title: string
  subtitle: string
  items: GenreStat[]
  empty: string
}) {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null)

  return (
    <section className="wa-stat-panel">
      <div>
        <p className="wa-label">{subtitle}</p>
        <h3 className="wa-stat-panel-title">{title}</h3>
      </div>

      {items.length === 0 ? (
        <p className="wa-state-sub">{empty}</p>
      ) : (
        <>
          <SegmentedHorseShoe items={items} hoveredKey={hoveredKey} onHover={setHoveredKey} />
          <div className="wa-genre-list">
            {items.map(item => (
              <div
                key={item.key}
                className={`wa-genre-row${hoveredKey === item.key ? ' is-hovered' : ''}`}
                onMouseEnter={() => setHoveredKey(item.key)}
                onMouseLeave={() => setHoveredKey(null)}
              >
                <span className="wa-genre-dot" style={{ background: item.color }} />
                <span>{item.label}</span>
                <strong>{numberFormatter.format(item.value)}</strong>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export function StatisticsView({
  refreshKey,
  onBackHome,
  onOpenReading,
  onOpenAbandoned,
  onUpdateBook,
  onDeleteBook,
}: StatisticsViewProps) {
  const [panel, setPanel] = useState<StatisticsPanel>('overview')
  const [selectedYear, setSelectedYear] = useState(CURRENT_YEAR)
  const [data, setData] = useState<PagedBooks | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadStatistics() {
      setLoading(true)
      setError(null)

      try {
        const result = await getAllBooks(0, 0, {
          signal: controller.signal,
          sortOrder: 'ASC',
        })
        setData(result)
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return
        setError('Não consegui carregar as estatísticas do acervo.')
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadStatistics()

    return () => controller.abort()
  }, [refreshKey])

  const books = data?.content ?? EMPTY_BOOKS
  const metrics = data?.metrics ?? null

  const years = useMemo(() => {
    const result = new Set<number>([CURRENT_YEAR])
    books.forEach(book => {
      const readYear = readReferenceYear(book)
      const collectionYear = collectionReferenceYear(book)
      if (readYear) result.add(readYear)
      if (collectionYear) result.add(collectionYear)
    })
    return [...result].sort((a, b) => b - a)
  }, [books])

  const hasPastYears = years.some(year => year < CURRENT_YEAR)
  const selectedReadBooks = books.filter(book => readReferenceYear(book) === selectedYear)
  const selectedCollectionBooks = books.filter(book => collectionReferenceYear(book) === selectedYear)
  const selectedPagesRead = selectedReadBooks.reduce((sum, book) => sum + pagesRead(book), 0)
  const averagePagesPerDay = selectedPagesRead / daysInReferenceYear(selectedYear)
  const totalPages = metrics?.totalPages ?? 0
  const trackedPages = metrics?.trackedPages ?? 0
  const progressPercent = totalPages > 0 ? (trackedPages / totalPages) * 100 : 0
  const authorCount = uniqueCount(books.map(book => book.author))
  const genreStats = byGenre(books)
  const readGenreStats = byGenre(books, true)
  const genreCount = genreStats.filter(item => item.key !== 'SEM_GENERO').length

  if (panel === 'year-books') {
    return (
      <main className="wa-main wa-stats-page-main">
        <section className="wa-stats-page">
          <div className="wa-reading-page-top">
            <button className="wa-library-back" onClick={() => setPanel('overview')} aria-label="Voltar para estatísticas">
              <span aria-hidden="true">‹</span>
            </button>

            <div>
              <p className="wa-label">Entraram no acervo</p>
              <h2 className="wa-reading-page-title">{selectedYear}</h2>
            </div>
          </div>

          {selectedCollectionBooks.length === 0 ? (
            <div className="wa-state">
              <h3 className="wa-state-title">Nenhum livro encontrado para esse ano.</h3>
            </div>
          ) : (
            <div className="wa-grid">
              {selectedCollectionBooks.map(book => (
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

  return (
    <main className="wa-main wa-stats-page-main">
      <section className="wa-stats-page">
        <div className="wa-reading-page-top">
          <button className="wa-library-back" onClick={onBackHome} aria-label="Voltar para a home">
            <span aria-hidden="true">‹</span>
          </button>

          <div>
            <p className="wa-label">Painel do acervo</p>
            <h2 className="wa-reading-page-title">Estatísticas</h2>
          </div>
        </div>

        {hasPastYears && (
          <div className="wa-year-carousel" aria-label="Histórico por ano">
            {years.map(year => (
              <button
                key={year}
                type="button"
                className={`wa-year-chip ${year === selectedYear ? 'is-active' : ''}`}
                onClick={() => setSelectedYear(year)}
              >
                {shortYearLabel(year)}
              </button>
            ))}
          </div>
        )}

        {loading && (
          <div className="wa-state">
            <p className="wa-label">Calculando estatísticas...</p>
          </div>
        )}

        {!loading && error && (
          <div className="wa-state wa-state-error">
            <h3 className="wa-state-title">Não consegui carregar as estatísticas.</h3>
            <p className="wa-state-sub">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="wa-stat-grid">
              <StatButton
                label="Acervo"
                value={numberFormatter.format(metrics?.totalBooks ?? books.length)}
                sub="livros no total"
                onClick={onBackHome}
              />
              <StatButton
                label="Lendo"
                value={numberFormatter.format(metrics?.readingBooks ?? 0)}
                sub="em andamento"
                onClick={(metrics?.readingBooks ?? 0) > 0 ? onOpenReading : undefined}
              />
              <StatButton
                label="Abandonados"
                value={numberFormatter.format(metrics?.abandonedBooks ?? 0)}
                sub="interrompidos"
                onClick={(metrics?.abandonedBooks ?? 0) > 0 ? onOpenAbandoned : undefined}
              />
              <StatButton
                label={`Lidos em ${selectedYear}`}
                value={numberFormatter.format(selectedReadBooks.length)}
                sub="concluídos no ano"
              />
              <StatButton
                label={`Páginas em ${selectedYear}`}
                value={numberFormatter.format(selectedPagesRead)}
                sub="lidas no ano"
              />
              <StatButton
                label="Autores"
                value={numberFormatter.format(authorCount)}
                sub="nomes no acervo"
              />
            </div>

            <div className="wa-stat-feature-grid">
              <section className="wa-stat-panel wa-stat-panel-large">
                <div>
                  <p className="wa-label">Páginas</p>
                  <h3 className="wa-stat-panel-title">Leitura do acervo</h3>
                </div>

                <HorseShoeGauge percent={progressPercent}>
                  <strong>{percentFormatter.format(progressPercent)}%</strong>
                  <span>{numberFormatter.format(trackedPages)} / {numberFormatter.format(totalPages)}</span>
                </HorseShoeGauge>
              </section>

              <section className="wa-stat-panel">
                <div>
                  <p className="wa-label">{selectedYear}</p>
                  <h3 className="wa-stat-panel-title">Ritmo diário</h3>
                </div>
                <div className="wa-stat-panel-bottom">
                  <div className="wa-stat-number">{decimalFormatter.format(averagePagesPerDay)}</div>
                  <p className="wa-stat-sub">páginas lidas por dia</p>
                </div>
              </section>

              <button
                type="button"
                className="wa-stat-panel wa-stat-panel-clickable"
                onClick={() => setPanel('year-books')}
              >
                <div>
                  <p className="wa-label">Acervo em {selectedYear}</p>
                  <h3 className="wa-stat-panel-title">Livros que entraram {CURRENT_YEAR}</h3>
                </div>
                <div className="wa-stat-panel-bottom">
                  <div className="wa-stat-number">{numberFormatter.format(selectedCollectionBooks.length)}</div>
                  <p className="wa-stat-sub">abrir lista de cards</p>
                </div>
              </button>
            </div>

            <div className="wa-stat-genre-grid">
              <GenrePanel
                title={`${numberFormatter.format(genreCount)} gêneros`}
                subtitle="Gêneros no acervo"
                items={genreStats}
                empty="Nenhum gênero informado."
              />
              <GenrePanel
                title="Lidos por gênero"
                subtitle="Leituras concluídas"
                items={readGenreStats}
                empty="Nenhum livro lido com gênero informado."
              />
            </div>
          </>
        )}
      </section>
    </main>
  )
}
