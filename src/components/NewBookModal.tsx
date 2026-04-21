import { useEffect, useEffectEvent, useState } from 'react'
import { saveEdition } from '../api/editionsApi'
import type { EditionFormat, EditionRequest, EditionType } from '../types/Edition'

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

// ── Tipos internos ──────────────────────────────────────────
type Mode = 'manual' | null

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
  description:   string
}

const EMPTY_FORM: FormState = {
  title: '', author: '', genre: '', editionType: '', format: '',
  editionNumber: '', publisher: '', totalPages: '', language: '',
  publishedYear: '', isbn: '', description: '',
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
  const [mode,    setMode]    = useState<Mode>(null)
  const [form,    setForm]    = useState<FormState>(EMPTY_FORM)
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  function resetState() {
    setMode(null)
    setForm(EMPTY_FORM)
    setError(null)
    setLoading(false)
    setIsSuccess(false)
  }

  function handleClose() {
    if (loading || isSuccess) return
    resetState()
    onClose()
  }

  const handleEscape = useEffectEvent(() => {
    handleClose()
  })

  // Fecha com Escape e bloqueia scroll
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

    const timeoutId = window.setTimeout(() => {
      resetState()
      onSaved()
    }, SUCCESS_ANIMATION_MS)

    return () => window.clearTimeout(timeoutId)
  }, [isSuccess, onSaved])

  if (!open) return null

  function set(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm(prev => ({ ...prev, [field]: e.target.value }))
    }
  }

  const canSubmit =
    form.title.trim() &&
    form.author.trim() &&
    !loading

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return
    setError(null)
    setLoading(true)

    const dto: EditionRequest = {
      title:         form.title.trim(),
      author:        form.author.trim(),
      genre:         form.genre || null,
      editionType:   form.editionType || null,
      format:        form.format || null,
      editionNumber: form.editionNumber ? Number(form.editionNumber) : null,
      publisher:     form.publisher.trim()     || null,
      totalPages:    form.totalPages           ? Number(form.totalPages)    : null,
      language:      form.language.trim()      || null,
      publishedYear: form.publishedYear        ? Number(form.publishedYear) : null,
      isbn:          form.isbn.trim()          || null,
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
                <circle className="wa-success-ring" cx="36" cy="36" r="27" />
                <circle className="wa-success-circle" cx="36" cy="36" r="27" />
                <path className="wa-success-check" d="M24 37.5L32.5 46L49 29.5" />
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
                  onClick={() => setMode(mode === 'manual' ? null : 'manual')}
                >
                  <div className="wa-choice-card-title">Adicionar dados manualmente</div>
                  <div className="wa-choice-card-sub">Preencha os dados da obra</div>
                </button>

                <button className="wa-choice-card is-disabled" disabled>
                  <div className="wa-choice-card-title">Pesquisar e Atualizar</div>
                  <div className="wa-choice-card-sub">Via Google Books · Em breve</div>
                </button>
              </div>

              {/* Formulário — cresce quando modo manual está ativo */}
              <div className={`wa-form-reveal ${mode === 'manual' ? 'is-open' : ''}`}>
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
                        <label className="wa-form-label">Editora</label>
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
                      <label className="wa-form-label">Descrição</label>
                      <textarea className="wa-form-textarea" value={form.description} onChange={set('description')} placeholder="Sinopse ou notas sobre o livro…" />
                    </div>

                    {/* Erro */}
                    {error && <div className="wa-form-error">{error}</div>}

                    {/* Ações */}
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
