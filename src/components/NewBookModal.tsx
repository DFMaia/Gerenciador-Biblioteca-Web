import { useEffect, useEffectEvent, useState } from 'react'
import { saveEdition } from '../api/editionsApi'
import { searchGoogleBooks } from '../api/googleBooksApi'
import type { EditionFormat, EditionRequest, EditionType } from '../types/Edition'
import type { GoogleBooksResult } from '../types/GoogleBooks'

// ── Dados dos enums ─────────────────────────────────────────
const GENRES = [
  'ACAO','AFROFUTURISMO','AJUDA','ALEGORIA','ALTA_FANTASIA','ALTERNATE_HISTORY',
  'ANTOLOGIA','APOLOGETICA','ARTE','ARTIGO','AUTOBIOGRAFIA','AUTOFICCAO','AUTOAJUDA',
  'AVENTURA','AVENTURA_MARITIMA','BILDUNGSROMAN','BIOGRAFIA','CAMPUS_NOVEL','CARTAS',
  'CHICK_LIT','CIENCIA','CIENCIA_POPULAR','CLI_FI','COMEDIA','COMEDIA_DE_COSTUMES',
  'CONSPIRACAO','CONTO','CONTO_DE_FADAS','CONTO_FILOSOFICO','CONTO_LITERARIO',
  'CONTRACULTURA','COZY_FANTASY','COZY_MYSTERY','CRIME','CRONICA','CYBERPUNK',
  'DARK_ACADEMIA','DECADENTISMO','DISTOPIA','DOCUMENTAL','DRAMA','ECOFICTION',
  'ENSAIO','EPISTOLAR','EPOPEIA','ESPADA_E_FEITICARIA','ESPIONAGEM','ESPIRITUALIDADE',
  'FANTASIA','FANTASIA_ARTURIANA','FANTASIA_CIENTIFICA','FANTASIA_EPICA',
  'FANTASIA_HEROICA','FANTASIA_HISTORICA','FANTASIA_MITICA','FANTASIA_SOMBRIA',
  'FAROESTE','FABULA','FEMINISMO','FICCAO_BELICA','FICCAO_CIENTIFICA',
  'FICCAO_CLIMATICA','FICCAO_CONTEMPORANEA','FICCAO_CRISTA','FICCAO_DISTOPICA',
  'FICCAO_ESPIRITUAL','FICCAO_ESPECULATIVA','FICCAO_FILOSOFICA','FICCAO_GOTICA',
  'FICCAO_HISTORICA','FICCAO_HUMANISTA','FICCAO_LITERARIA','FICCAO_MILITAR',
  'FICCAO_POLICIAL','FICCAO_POLITICA','FICCAO_PSICOLOGICA','FICCAO_RELIGIOSA',
  'FICCAO_SATIRICA','FILOSOFIA','FOLCLORE','GASLAMP_FANTASY','GEROFICCAO','GIALLO',
  'GOTICO','GRIMDARK','GUIA','HARD_BOILED','HARD_SCI_FI','HEROIC_FANTASY','HISTORIA',
  'HISTORIA_DA_ARTE','HISTORIA_ORAL','HORROR','HORROR_COSMICO','HORROR_CORPORAL',
  'HORROR_FOLCLORICO','HORROR_PSICOLOGICO','HORROR_RELIGIOSO','HUMOR',
  'INFANTOJUVENIL','JORNALISMO','JORNALISMO_LITERARIO','LEGENDAS_E_MITOS','LITRPG',
  'LITERATURA_EROTICA','LITERATURA_INFANTIL','LITERATURA_JUVENIL','LITERATURA_QUEER',
  'LITERATURA_RUSSA','LITERATURA_LATINO_AMERICANA','MAGICAL_REALISM','MANIFESTO',
  'MANUAL','MEMORIAS','MEDICINA','METAFICCAO','MILITAR','MISTERIO','MITOLOGIA',
  'MOCKUMENTARY','MONOGRAFIA','NARRATIVA_DE_VIAGEM','NARRATIVA_EXPERIMENTAL',
  'NARRATIVA_PICARESCA','NEO_NOIR','NEW_ADULT','NOIR','NOVA_WEIRD','NOVELA',
  'NOVELA_GRAFICA','OCCULT_FICTION','PANFLETO','PARABOLA','PARANORMAL','PERIODISMO',
  'POESIA','POESIA_EPICA','POESIA_LIRICA','POLICIAL','POLITICO','POS_APOCALIPTICO',
  'POS_COLONIAL','PROSA_POETICA','PROGRAMACAO','PSICOLOGIA','REALISMO',
  'REALISMO_MAGICO','REALISMO_PSICOLOGICO','RECORDACOES','RELATO_DE_VIAGEM',
  'RELIGIAO','REPORTAGEM','RETELLING','ROMANCE','ROMANCE_CONTEMPORANEO',
  'ROMANCE_DE_FORMACAO','ROMANCE_DE_COSTUMES','ROMANCE_EPISTOLAR','ROMANCE_GOTICO',
  'ROMANCE_GRAFICO','ROMANCE_HISTORICO','ROMANCE_POLICIAL','ROMANCE_PSICOLOGICO',
  'ROMANCE_RURAL','ROMANCE_UNIVERSITARIO','ROMANTASY','SAGA_FAMILIAR','SATIRA',
  'SCIENCE_FANTASY','SLIPSTREAM','SOCIOLOGIA','SOLARPUNK','SOFT_SCI_FI',
  'SOUTHERN_GOTHIC','SPACE_OPERA','SPLATTERPUNK','STEAMPUNK','STONEPUNK','SUSPENSE',
  'SUSPENSE_JURIDICO','SUSPENSE_PSICOLOGICO','SWORD_AND_PLANET','SWORD_AND_SORCERY',
  'TERROR','TERROR_GOTICO','TERROR_SOBRENATURAL','TESE','THRILLER','THRILLER_ECONOMICO',
  'THRILLER_JURIDICO','THRILLER_MEDICO','THRILLER_MILITAR','THRILLER_POLITICO',
  'THRILLER_PSICOLOGICO','THRILLER_TECNOLOGICO','TRAGEDIA','TRAGICOMEDIA','TRATADO',
  'TRUE_CRIME','UCRONIA','URBAN_FANTASY','VIAGEM','VIAGEM_NO_TEMPO','WEIRD_FICTION',
  'WESTERN','WHODUNIT','YOUNG_ADULT','ZUMBI',
] as const

const EDITION_FORMATS: EditionFormat[] = [
  'ANIVERSARIO','BILINGUE','BOLSO','BROCHURA','CAPA_DURA','COMEMORATIVA','EPUB','LUXO',
]

function label(value: string) {
  return value.replace(/_/g, ' ').toLowerCase().replace(/^./, c => c.toUpperCase())
}

type CoverPreviewStatus = 'loading' | 'loaded' | 'error'

function CoverUrlPreview({ url }: { url: string }) {
  const trimmedUrl = url.trim()
  if (!trimmedUrl) return null

  return <CoverPreviewImage key={trimmedUrl} url={trimmedUrl} />
}

function CoverPreviewImage({ url }: { url: string }) {
  const [status, setStatus] = useState<CoverPreviewStatus>('loading')

  return (
    <div className={`wa-form-cover-preview-shell is-${status}`} aria-live="polite">
      <div className="wa-form-cover-preview-stage">
        <img
          className="wa-form-cover-preview"
          src={url}
          alt="Pré-visualização da capa"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
        {status === 'loading' && (
          <p className="wa-form-cover-preview-state">Carregando capa...</p>
        )}
        {status === 'error' && (
          <p className="wa-form-cover-preview-state is-error">Não consegui carregar essa imagem.</p>
        )}
      </div>
    </div>
  )
}

// ── Tipos internos ──────────────────────────────────────────
type Mode = 'manual' | 'search' | null

interface FormState {
  title:         string
  author:        string
  genre:         string
  editionType:   EditionType | ''
  format:        EditionFormat | ''
  editionNumber: string
  publisher:     string
  totalPages:    string
  language:      string
  publishedYear: string
  isbn:          string
  coverUrl:      string
  description:   string
}

const EMPTY_FORM: FormState = {
  title: '', author: '', genre: '', editionType: '', format: '',
  editionNumber: '', publisher: '', totalPages: '', language: '',
  publishedYear: '', isbn: '', coverUrl: '', description: '',
}

interface SearchFormState {
  title:     string
  author:    string
  publisher: string
}

const SUCCESS_ANIMATION_MS = 1500

// ── Props ───────────────────────────────────────────────────
interface NewBookModalProps {
  open:    boolean
  onClose: () => void
  onSaved: () => void
}

// ── Componente ──────────────────────────────────────────────
export function NewBookModal({ open, onClose, onSaved }: NewBookModalProps) {
  const [mode,      setMode]      = useState<Mode>(null)
  const [form,      setForm]      = useState<FormState>(EMPTY_FORM)
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  // Estado da busca
  const [searchForm,     setSearchForm]     = useState<SearchFormState>({ title: '', author: '', publisher: '' })
  const [searchResults,  setSearchResults]  = useState<GoogleBooksResult[]>([])
  const [searchLoading,  setSearchLoading]  = useState(false)
  const [searchError,    setSearchError]    = useState<string | null>(null)
  const [selectedResult, setSelectedResult] = useState<GoogleBooksResult | null>(null)

  function resetState() {
    setMode(null)
    setForm(EMPTY_FORM)
    setError(null)
    setLoading(false)
    setIsSuccess(false)
    setSearchForm({ title: '', author: '', publisher: '' })
    setSearchResults([])
    setSearchLoading(false)
    setSearchError(null)
    setSelectedResult(null)
  }

  function handleClose() {
    if (loading || isSuccess) return
    resetState()
    onClose()
  }

  function selectMode(next: Mode) {
    setMode(prev => (prev === next ? null : next))
    setForm(EMPTY_FORM)
    setError(null)
    setSearchResults([])
    setSelectedResult(null)
    setSearchError(null)
  }

  const handleEscape = useEffectEvent(() => { handleClose() })

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleEscape() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!isSuccess) return
    const id = window.setTimeout(() => { resetState(); onSaved() }, SUCCESS_ANIMATION_MS)
    return () => window.clearTimeout(id)
  }, [isSuccess, onSaved])

  if (!open) return null

  // ── Helpers de campo ────────────────────────────────────
  function set(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm(prev => ({ ...prev, [field]: e.target.value }))
    }
  }

  function setSearch(field: keyof SearchFormState) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchForm(prev => ({ ...prev, [field]: e.target.value }))
    }
  }

  // ── Validação ───────────────────────────────────────────
  const canSubmit =
    form.title.trim()     !== '' &&
    form.author.trim()    !== '' &&
    form.publisher.trim() !== '' &&
    !loading

  const canSearch =
    searchForm.title.trim()  !== '' &&
    searchForm.author.trim() !== '' &&
    !searchLoading

  // ── Busca Google Books ──────────────────────────────────
  async function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (!canSearch) return
    setSearchError(null)
    setSearchResults([])
    setSelectedResult(null)
    setForm(EMPTY_FORM)
    setSearchLoading(true)
    try {
      const results = await searchGoogleBooks(
        searchForm.title.trim(),
        searchForm.author.trim(),
        searchForm.publisher.trim() || null,
      )
      if (results.length === 0) {
        setSearchError('Nenhum resultado encontrado. Tente com outras informações.')
      } else {
        setSearchResults(results)
      }
    } catch {
      setSearchError('Não foi possível buscar no Google Books.')
    } finally {
      setSearchLoading(false)
    }
  }

  function handleSelectResult(result: GoogleBooksResult) {
    setSelectedResult(result)
    setError(null)
    setForm({
      title:         result.title         ?? '',
      author:        result.author        ?? '',
      genre:         '',
      editionType:   '',
      format:        '',
      editionNumber: '',
      publisher:     result.publisher     ?? '',
      totalPages:    result.totalPages    != null ? String(result.totalPages)    : '',
      language:      result.language      ?? '',
      publishedYear: result.publishedYear != null ? String(result.publishedYear) : '',
      isbn:          result.isbn          ?? '',
      coverUrl:      result.coverUrl      ?? '',
      description:   result.description   ?? '',
    })
  }

  // ── Submissão ───────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return
    setError(null)
    setLoading(true)

    const dto: EditionRequest = {
      title:         form.title.trim(),
      author:        form.author.trim(),
      genre:         form.genre         || null,
      editionType:   form.editionType   || null,
      format:        form.format        || null,
      editionNumber: form.editionNumber ? Number(form.editionNumber) : null,
      publisher:     form.publisher.trim()     || null,
      totalPages:    form.totalPages           ? Number(form.totalPages)    : null,
      language:      form.language.trim()      || null,
      publishedYear: form.publishedYear        ? Number(form.publishedYear) : null,
      isbn:          form.isbn.trim()          || null,
      coverUrl:      form.coverUrl.trim()      || null,
      description:   form.description.trim()   || null,
    }

    try {
      await saveEdition(dto)
      setIsSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido.')
    } finally {
      if (!isSuccess) setLoading(false)
    }
  }

  // ── O formulário de edição aparece no manual ou após seleção na busca ──
  const showEditionForm = mode === 'manual' || (mode === 'search' && selectedResult !== null)

  // ── JSX ─────────────────────────────────────────────────
  return (
    <div className="wa-modal-backdrop" onClick={handleClose}>
      <div
        className={`wa-modal ${isSuccess ? 'wa-modal-success-shell' : ''}`}
        onClick={e => e.stopPropagation()}
      >

        {isSuccess ? (
          <div className="wa-modal-success">
            <div className="wa-success-mark" aria-hidden="true">
              <svg className="wa-success-icon" viewBox="0 0 72 72" fill="none">
                <circle className="wa-success-ring"   cx="36" cy="36" r="27" />
                <circle className="wa-success-circle" cx="36" cy="36" r="27" />
                <path   className="wa-success-check"  d="M24 37.5L32.5 46L49 29.5" />
              </svg>
            </div>
            <p className="wa-eyebrow">Catálogo</p>
            <h2 className="wa-success-title">Livro Adicionado</h2>
            <p className="wa-success-sub">Voltando para a sua biblioteca…</p>
          </div>

        ) : (
          <>
            {/* Cabeçalho */}
            <div className="wa-modal-head">
              <div>
                <p className="wa-eyebrow">Catálogo</p>
                <h2 className="wa-modal-title">Nova entrada</h2>
              </div>
              <button className="wa-sheet-close" onClick={handleClose}>Fechar ×</button>
            </div>

            <div className="wa-modal-body">
              <hr className="wa-rule" style={{ marginBottom: 28 }} />

              {/* Cards de escolha */}
              <div className="wa-choice-grid">
                <button
                  className={`wa-choice-card ${mode === 'manual' ? 'is-active' : ''}`}
                  onClick={() => selectMode('manual')}
                >
                  <div className="wa-choice-card-title">Adicionar dados manualmente</div>
                  <div className="wa-choice-card-sub">Preencha os dados da obra</div>
                </button>

                <button
                  className={`wa-choice-card ${mode === 'search' ? 'is-active' : ''}`}
                  onClick={() => selectMode('search')}
                >
                  <div className="wa-choice-card-title">Pesquisar e Atualizar</div>
                  <div className="wa-choice-card-sub">Via Google Books</div>
                </button>
              </div>

              {/* ── Seção de busca (modo search) ── */}
              {mode === 'search' && (
                <div className="wa-search-section">
                  <form className="wa-search-form" onSubmit={handleSearch}>
                    <div className="wa-form-row">
                      <div className="wa-form-group">
                        <label className="wa-form-label">Título<span className="wa-form-req">*</span></label>
                        <input className="wa-form-input" value={searchForm.title} onChange={setSearch('title')} placeholder="ex: Os três mosqueteiros" />
                      </div>
                      <div className="wa-form-group">
                        <label className="wa-form-label">Autor<span className="wa-form-req">*</span></label>
                        <input className="wa-form-input" value={searchForm.author} onChange={setSearch('author')} placeholder="ex: Alexandre Dumas" />
                      </div>
                    </div>
                    <div className="wa-form-group">
                      <label className="wa-form-label">Editora</label>
                      <input className="wa-form-input" value={searchForm.publisher} onChange={setSearch('publisher')} placeholder="ex: Companhia das Letras (opcional)" />
                    </div>
                    <div className="wa-search-actions">
                      <button
                        type="submit"
                        className="wa-btn wa-btn-primary"
                        disabled={!canSearch}
                        style={{ opacity: canSearch ? 1 : 0.5, cursor: canSearch ? 'pointer' : 'not-allowed' }}
                      >
                        {searchLoading ? 'Buscando…' : 'Buscar'}
                      </button>
                    </div>
                  </form>

                  {searchError && (
                    <div className="wa-form-error" style={{ marginTop: 16 }}>{searchError}</div>
                  )}

                  {searchResults.length > 0 && (
                    <div className="wa-search-results">
                      {searchResults.map((result, i) => (
                        <button
                          key={i}
                          className={`wa-search-result ${selectedResult === result ? 'is-selected' : ''}`}
                          onClick={() => handleSelectResult(result)}
                        >
                          {result.coverUrl ? (
                            <img
                              className="wa-search-result-cover"
                              src={result.coverUrl}
                              alt={result.title ?? ''}
                              onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
                            />
                          ) : (
                            <div className="wa-search-result-cover-init">
                              {(result.title ?? '?')[0].toUpperCase()}
                            </div>
                          )}
                          <div className="wa-search-result-body">
                            <div className="wa-search-result-title">{result.title ?? '(sem título)'}</div>
                            <div className="wa-search-result-author">{result.author ?? '(autor desconhecido)'}</div>
                            <div className="wa-search-result-meta">
                              {[result.publisher, result.publishedYear].filter(Boolean).join(' · ')}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ── Formulário de edição (manual ou pós-seleção) ── */}
              <div className={`wa-form-reveal ${showEditionForm ? 'is-open' : ''}`}>
                <div className="wa-form-reveal-inner">
                  <form className="wa-form" onSubmit={handleSubmit}>

                    {/* Obra */}
                    <p className="wa-form-section-title">Obra</p>

                    <div className="wa-form-row">
                      <div className="wa-form-group">
                        <label className="wa-form-label">Título<span className="wa-form-req">*</span></label>
                        <input className="wa-form-input" value={form.title} onChange={set('title')} placeholder="ex: O Senhor dos Anéis" />
                      </div>
                      <div className="wa-form-group">
                        <label className="wa-form-label">Autor<span className="wa-form-req">*</span></label>
                        <input className="wa-form-input" value={form.author} onChange={set('author')} placeholder="ex: J.R.R. Tolkien" />
                      </div>
                    </div>

                    <div className="wa-form-group">
                      <label className="wa-form-label">Gênero</label>
                      <select className="wa-form-select" value={form.genre} onChange={set('genre')}>
                        <option value="">Selecione um gênero</option>
                        {GENRES.map(g => (
                          <option key={g} value={g}>{label(g)}</option>
                        ))}
                      </select>
                    </div>

                    {/* Edição */}
                    <p className="wa-form-section-title" style={{ marginTop: 12 }}>Edição</p>

                    <div className="wa-form-row-3">
                      <div className="wa-form-group">
                        <label className="wa-form-label">Tipo</label>
                        <select className="wa-form-select" value={form.editionType} onChange={set('editionType')}>
                          <option value="">Selecione</option>
                          <option value="FISICO">Físico</option>
                          <option value="DIGITAL">Digital</option>
                        </select>
                      </div>
                      <div className="wa-form-group">
                        <label className="wa-form-label">Formato</label>
                        <select className="wa-form-select" value={form.format} onChange={set('format')}>
                          <option value="">Selecione</option>
                          {EDITION_FORMATS.map(f => (
                            <option key={f} value={f}>{label(f)}</option>
                          ))}
                        </select>
                      </div>
                      <div className="wa-form-group">
                        <label className="wa-form-label">Nº da edição</label>
                        <input className="wa-form-input" type="number" min={1} value={form.editionNumber} onChange={set('editionNumber')} placeholder="1" />
                      </div>
                    </div>

                    {/* Detalhes */}
                    <p className="wa-form-section-title" style={{ marginTop: 12 }}>Detalhes</p>

                    <div className="wa-form-row">
                      <div className="wa-form-group">
                        <label className="wa-form-label">Editora<span className="wa-form-req">*</span></label>
                        <input className="wa-form-input" value={form.publisher} onChange={set('publisher')} placeholder="ex: HarperCollins" />
                      </div>
                      <div className="wa-form-group">
                        <label className="wa-form-label">Idioma</label>
                        <input className="wa-form-input" value={form.language} onChange={set('language')} placeholder="ex: Português" />
                      </div>
                    </div>

                    <div className="wa-form-row">
                      <div className="wa-form-group">
                        <label className="wa-form-label">Ano de publicação</label>
                        <input className="wa-form-input" type="number" min={1000} max={2100} value={form.publishedYear} onChange={set('publishedYear')} placeholder="ex: 2001" />
                      </div>
                      <div className="wa-form-group">
                        <label className="wa-form-label">Páginas</label>
                        <input className="wa-form-input" type="number" min={1} value={form.totalPages} onChange={set('totalPages')} placeholder="ex: 576" />
                      </div>
                    </div>

                    <div className="wa-form-group">
                      <label className="wa-form-label">ISBN</label>
                      <input className="wa-form-input" value={form.isbn} onChange={set('isbn')} placeholder="ex: 978-0-06-112008-4" />
                    </div>

                    <div className="wa-form-group">
                      <label className="wa-form-label">URL da capa</label>
                      <input className="wa-form-input" value={form.coverUrl} onChange={set('coverUrl')} placeholder="https://…" />
                      <CoverUrlPreview url={form.coverUrl} />
                    </div>

                    <div className="wa-form-group">
                      <label className="wa-form-label">Descrição</label>
                      <textarea className="wa-form-textarea" value={form.description} onChange={set('description')} placeholder="Sinopse ou notas sobre o livro…" />
                    </div>

                    {error && <div className="wa-form-error">{error}</div>}

                    <div className="wa-form-actions">
                      <button type="button" className="wa-btn wa-btn-secondary" onClick={handleClose}>
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="wa-btn wa-btn-primary"
                        disabled={!canSubmit}
                        style={{ opacity: canSubmit ? 1 : 0.5, cursor: canSubmit ? 'pointer' : 'not-allowed' }}
                      >
                        {loading ? 'Salvando…' : 'Adicionar à sua biblioteca'}
                      </button>
                    </div>

                  </form>
                </div>
              </div>

            </div>
          </>
        )}
      </div>
    </div>
  )
}
