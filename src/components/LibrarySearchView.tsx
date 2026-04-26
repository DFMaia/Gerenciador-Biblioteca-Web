import { useEffect, useMemo, useState } from 'react'
import { searchBooks, updateBook } from '../api/booksApi'
import { GENRES, label } from '../constants/bookOptions'
import type { Book, BookUpdateRequest, ReadingStatus } from '../types/Book'

const numberFormatter = new Intl.NumberFormat('pt-BR')

const STATUS_OPTIONS: { value: ReadingStatus; label: string }[] = [
  { value: 'NAO_LIDO', label: 'Não lido' },
  { value: 'LENDO', label: 'Lendo' },
  { value: 'LIDO', label: 'Lido' },
  { value: 'ABANDONADO', label: 'Abandonado' },
]

const SUCCESS_ANIMATION_MS = 1300

type SaveState = 'idle' | 'saving' | 'saved'

interface BookForm {
  genre: string
  description: string
  coverUrl: string
  isbn: string
  totalPages: string
  publishedYear: string
  status: ReadingStatus | ''
  currentPage: string
  startDate: string
  endDate: string
  bookRating: string
  publisher: string
}

interface LibrarySearchViewProps {
  onBack: () => void
  onSaved: () => void
}

function toForm(book: Book): BookForm {
  return {
    genre: book.genre ?? '',
    description: book.description ?? '',
    coverUrl: book.coverUrl ?? '',
    isbn: book.isbn ?? '',
    totalPages: book.totalPages != null ? String(book.totalPages) : '',
    publishedYear: book.publishedYear != null ? String(book.publishedYear) : '',
    status: book.status ?? '',
    currentPage: book.currentPage != null ? String(book.currentPage) : '',
    startDate: book.startDate ?? '',
    endDate: book.endDate ?? '',
    bookRating: book.bookRating != null ? String(book.bookRating) : '',
    publisher: book.publisher ?? '',
  }
}

function trimOrNull(value: string) {
  const trimmed = value.trim()
  return trimmed === '' ? null : trimmed
}

function numberOrNull(value: string) {
  if (value.trim() === '') return null
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : null
}

function integerOrNull(value: string) {
  const parsed = numberOrNull(value)
  return parsed == null ? null : Math.trunc(parsed)
}

function toUpdateRequest(form: BookForm): BookUpdateRequest {
  const totalPages = integerOrNull(form.totalPages)
  const currentPage = integerOrNull(form.currentPage)

  return {
    genre: form.genre || null,
    description: trimOrNull(form.description),
    coverUrl: trimOrNull(form.coverUrl),
    isbn: trimOrNull(form.isbn),
    totalPages,
    publishedYear: integerOrNull(form.publishedYear),
    status: form.status || null,
    currentPage,
    startDate: form.startDate || null,
    endDate: form.endDate || null,
    bookRating: numberOrNull(form.bookRating),
    publisher: trimOrNull(form.publisher),
  }
}

function isSameForm(a: BookForm | null, b: BookForm | null) {
  if (!a || !b) return true
  return Object.keys(a).every(key => a[key as keyof BookForm] === b[key as keyof BookForm])
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

function getProgress(form: BookForm) {
  if (form.status === 'ABANDONADO') return 100

  const totalPages = Number(form.totalPages)
  const currentPage = Number(form.currentPage)

  if (!Number.isFinite(totalPages) || totalPages <= 0) return 0
  if (!Number.isFinite(currentPage) || currentPage <= 0) return 0

  return Math.min(100, Math.round((currentPage / totalPages) * 100))
}

function PageTurningLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`wa-open-book-loader ${className}`} aria-label="Pesquisando na biblioteca">
      <div className="wa-open-book">
        <span className="wa-open-book-page wa-open-book-page-1" />
        <span className="wa-open-book-page wa-open-book-page-2" />
        <span className="wa-open-book-page wa-open-book-page-3" />
        <span className="wa-open-book-spine" />
      </div>
    </div>
  )
}

function SaveSuccessIcon() {
  return (
    <svg className="wa-library-save-icon" viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <circle className="wa-success-ring" cx="36" cy="36" r="27" />
      <circle className="wa-success-circle" cx="36" cy="36" r="27" />
      <path className="wa-success-check" d="M24 37.5L32.5 46L49 29.5" />
    </svg>
  )
}

export function LibrarySearchView({ onBack, onSaved }: LibrarySearchViewProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Book[]>([])
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [form, setForm] = useState<BookForm | null>(null)
  const [searching, setSearching] = useState(false)
  const [searchError, setSearchError] = useState<string | null>(null)
  const [saveError, setSaveError] = useState<string | null>(null)
  const [saveState, setSaveState] = useState<SaveState>('idle')

  const trimmedQuery = query.trim()
  const isAbandoned = form?.status === 'ABANDONADO'
  const progress = useMemo(() => (form ? getProgress(form) : 0), [form])

  useEffect(() => {
    if (trimmedQuery === '') {
      setResults([])
      setSearching(false)
      setSearchError(null)
      return
    }

    const controller = new AbortController()
    let active = true
    const timeoutId = window.setTimeout(async () => {
      setSearching(true)
      setSearchError(null)

      try {
        const books = await searchBooks(trimmedQuery, controller.signal)
        if (!active) return
        setResults(books)
      } catch (err) {
        if (!active) return
        if (err instanceof DOMException && err.name === 'AbortError') return
        setSearchError(err instanceof Error ? err.message : 'Não foi possível pesquisar.')
      } finally {
        if (active) {
          setSearching(false)
        }
      }
    }, 280)

    setSearching(true)

    return () => {
      active = false
      window.clearTimeout(timeoutId)
      controller.abort()
    }
  }, [trimmedQuery])

  useEffect(() => {
    if (saveState !== 'saved') return
    const timeoutId = window.setTimeout(() => setSaveState('idle'), SUCCESS_ANIMATION_MS)
    return () => window.clearTimeout(timeoutId)
  }, [saveState])

  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
    setSelectedBook(null)
    setForm(null)
    setSaveError(null)
    setSaveState('idle')
  }

  function handleSelectBook(book: Book) {
    setSelectedBook(book)
    setForm(toForm(book))
    setSaveError(null)
    setSaveState('idle')
  }

  function setField(field: keyof BookForm) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = e.target.value
      setSaveError(null)
      setSaveState('idle')
      setForm(prev => prev ? { ...prev, [field]: value } : prev)
    }
  }

  async function handleSave() {
    if (!selectedBook || !form || saveState === 'saving') return

    setSaveState('saving')
    setSaveError(null)

    try {
      const saved = await updateBook(selectedBook.id, toUpdateRequest(form))
      setSelectedBook(saved)
      setForm(toForm(saved))
      setResults(prev => prev.map(book => book.id === saved.id ? saved : book))
      setSaveState('saved')
      onSaved()
    } catch (err) {
      setSaveState('idle')
      setSaveError(err instanceof Error ? err.message : 'Não foi possível salvar.')
    }
  }

  const resultStatus = trimmedQuery !== '' && !searching && results.length === 0
  const showEditorLoader = trimmedQuery !== '' && !selectedBook
  const isDirty = selectedBook && form ? !isSameForm(form, toForm(selectedBook)) : false
  const showSaveButton = isDirty || saveState === 'saving' || saveState === 'saved'
  const coverUrl = form?.coverUrl.trim()

  return (
    <main className="wa-main wa-library-search-main">
      <section className="wa-library-search">
        <div className="wa-library-search-top">
          <button className="wa-library-back" onClick={onBack} aria-label="Voltar para a home">
            <span aria-hidden="true">‹</span>
          </button>

          <div className="wa-library-search-field">
            <label className="wa-label" htmlFor="library-search-input">Pesquisar no acervo</label>
            <input
              id="library-search-input"
              className="wa-library-search-input"
              value={query}
              onChange={handleQueryChange}
              placeholder="Título, autor, editora, ISBN ou gênero"
              autoFocus
            />
          </div>
        </div>

        <div className="wa-library-search-content">
          <aside className="wa-library-results">
            {trimmedQuery === '' && (
              <div className="wa-library-empty-panel">
                <p className="wa-eyebrow">Acervo</p>
              </div>
            )}

            {searchError && (
              <div className="wa-form-error">{searchError}</div>
            )}

            {resultStatus && !searchError && (
              <div className="wa-library-empty-panel">
                <p className="wa-label">Nenhum livro encontrado</p>
              </div>
            )}

            {!searching && results.length > 0 && (
              <div className="wa-library-result-list">
                {results.map(book => (
                  <button
                    key={book.id}
                    className={`wa-library-result ${selectedBook?.id === book.id ? 'is-selected' : ''}`}
                    onClick={() => handleSelectBook(book)}
                  >
                    <span className="wa-library-result-cover">
                      {book.coverUrl ? (
                        <img src={book.coverUrl} alt={`Capa de ${book.title}`} />
                      ) : (
                        <span>{getInitials(book.title) || '?'}</span>
                      )}
                    </span>
                    <span className="wa-library-result-body">
                      <span className="wa-library-result-title">{book.title}</span>
                      <span className="wa-library-result-author">{book.author}</span>
                      <span className="wa-library-result-meta">
                        {[book.publisher, book.publishedYear].filter(Boolean).join(' · ') || 'Sem editora'}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </aside>

          <section className="wa-library-editor">
            {!selectedBook || !form ? (
              <div className="wa-library-editor-empty">
                {showEditorLoader && <PageTurningLoader className="wa-library-editor-loader" />}
              </div>
            ) : (
              <article className="wa-library-book-expanded">
                <div className="wa-library-cover-column">
                  <div className="wa-library-cover-large">
                    {coverUrl ? (
                      <img src={coverUrl} alt={`Capa de ${selectedBook.title}`} />
                    ) : (
                      <div className="wa-cover-initials">{getInitials(selectedBook.title) || '?'}</div>
                    )}
                  </div>

                  {showSaveButton && (
                    <button
                      key={selectedBook.id}
                      type="button"
                      className={`wa-library-cover-save is-${saveState}`}
                      onClick={handleSave}
                      disabled={saveState === 'saving' || saveState === 'saved'}
                      aria-live="polite"
                    >
                      {saveState === 'saved' ? <SaveSuccessIcon /> : <span>{saveState === 'saving' ? 'Salvando...' : 'Salvar'}</span>}
                    </button>
                  )}
                </div>

                <div className="wa-library-book-body">
                  <div className="wa-library-book-head">
                    <div>
                      <p className="wa-eyebrow">Registro #{selectedBook.id}</p>
                      <h2 className="wa-library-book-title">{selectedBook.title}</h2>
                      <p className="wa-library-book-author">{selectedBook.author}</p>
                    </div>
                  </div>

                  <div className="wa-library-progress">
                    <div className="wa-progress-head">
                      <span>Progresso</span>
                      <span>{progress}%</span>
                    </div>
                    <div className="wa-library-progress-track">
                      <div
                        className={`wa-library-progress-fill ${isAbandoned ? 'is-abandoned' : ''}`}
                        style={{
                          width: `${progress}%`,
                          ...(progress > 0 && !isAbandoned ? {
                            backgroundImage: 'linear-gradient(to right, #8ed46a, #3d5c18)',
                            backgroundSize: `${(100 / progress) * 100}% 100%`,
                            backgroundPosition: 'left center',
                          } : {}),
                        }}
                      />
                    </div>
                    <div className="wa-progress-foot">
                      <span>{numberFormatter.format(Number(form.currentPage) || 0)} páginas lidas</span>
                      <span>{numberFormatter.format(Number(form.totalPages) || 0)} no total</span>
                    </div>
                  </div>

                  {saveError && <div className="wa-form-error">{saveError}</div>}

                  <div className="wa-library-form">
                    <p className="wa-form-section-title">Obra</p>

                    <div className="wa-form-row">
                      <div className="wa-form-group">
                        <label className="wa-form-label">Título</label>
                        <input className="wa-form-input wa-library-locked-input" value={selectedBook.title} readOnly />
                      </div>
                      <div className="wa-form-group">
                        <label className="wa-form-label">Autor</label>
                        <input className="wa-form-input wa-library-locked-input" value={selectedBook.author} readOnly />
                      </div>
                    </div>

                    <div className="wa-form-row">
                      <div className="wa-form-group">
                        <label className="wa-form-label">Editora</label>
                        <input className="wa-form-input" value={form.publisher} onChange={setField('publisher')} placeholder="Editora" />
                      </div>
                      <div className="wa-form-group">
                        <label className="wa-form-label">Gênero</label>
                        <select className="wa-form-select" value={form.genre} onChange={setField('genre')}>
                          <option value="">Sem gênero</option>
                          {GENRES.map(genre => (
                            <option key={genre} value={genre}>{label(genre)}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="wa-form-row">
                      <div className="wa-form-group">
                        <label className="wa-form-label">Status</label>
                        <select className="wa-form-select" value={form.status} onChange={setField('status')}>
                          <option value="">Sem status</option>
                          {STATUS_OPTIONS.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      </div>
                      <div className="wa-form-group">
                        <label className="wa-form-label">Avaliação</label>
                        <input
                          className="wa-form-input"
                          type="number"
                          min="0"
                          max="5"
                          step="0.1"
                          value={form.bookRating}
                          onChange={setField('bookRating')}
                          placeholder="0 a 5"
                        />
                      </div>
                    </div>

                    <p className="wa-form-section-title">Leitura</p>

                    <div className="wa-form-row">
                      <div className="wa-form-group">
                        <label className="wa-form-label">Página atual</label>
                        <input
                          className="wa-form-input"
                          type="number"
                          min="0"
                          max={form.totalPages || undefined}
                          value={form.currentPage}
                          onChange={setField('currentPage')}
                          placeholder="0"
                        />
                      </div>
                      <div className="wa-form-group">
                        <label className="wa-form-label">Total de páginas</label>
                        <input
                          className="wa-form-input"
                          type="number"
                          min="0"
                          value={form.totalPages}
                          onChange={setField('totalPages')}
                          placeholder="0"
                        />
                      </div>
                    </div>

                    <div className="wa-form-row">
                      <div className="wa-form-group">
                        <label className="wa-form-label">Início</label>
                        <input className="wa-form-input" type="date" value={form.startDate} onChange={setField('startDate')} />
                      </div>
                      <div className="wa-form-group">
                        <label className="wa-form-label">Fim</label>
                        <input className="wa-form-input" type="date" value={form.endDate} onChange={setField('endDate')} />
                      </div>
                    </div>

                    <p className="wa-form-section-title">Ficha</p>

                    <div className="wa-form-row">
                      <div className="wa-form-group">
                        <label className="wa-form-label">Ano de publicação</label>
                        <input
                          className="wa-form-input"
                          type="number"
                          min="1000"
                          max="2100"
                          value={form.publishedYear}
                          onChange={setField('publishedYear')}
                          placeholder="Ano"
                        />
                      </div>
                      <div className="wa-form-group">
                        <label className="wa-form-label">ISBN</label>
                        <input className="wa-form-input" value={form.isbn} onChange={setField('isbn')} placeholder="ISBN" />
                      </div>
                    </div>

                    <div className="wa-form-group">
                      <label className="wa-form-label">URL da capa</label>
                      <input className="wa-form-input" value={form.coverUrl} onChange={setField('coverUrl')} placeholder="https://..." />
                    </div>

                    <div className="wa-form-group">
                      <label className="wa-form-label">Descrição</label>
                      <textarea
                        className="wa-form-textarea wa-library-description"
                        value={form.description}
                        onChange={setField('description')}
                        placeholder="Sinopse ou notas"
                      />
                    </div>
                  </div>
                </div>
              </article>
            )}
          </section>
        </div>
      </section>
    </main>
  )
}
