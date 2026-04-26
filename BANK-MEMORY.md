BANK-MEMORY — Gerenciador de Biblioteca Web
Última atualização: 25/04/2026

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INSTRUÇÃO PARA A IA — LEIA ANTES DE QUALQUER RESPOSTA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Leia este arquivo INTEIRO antes de qualquer resposta. Ele é sua memória principal
   para o projeto web.
2. Confirme no início da sessão que leu e que entendeu o contexto.
3. ATUALIZAÇÃO DE MEMÓRIA: atualize este arquivo ao final de CADA RESPOSTA em que algo
   foi decidido, aprendido, implementado ou alterado — NÃO espere o fim da sessão.
   Motivo: a conversa pode ser interrompida a qualquer momento por limite de uso diário
   ou de tokens, sem aviso prévio.
4. Se perceber que está próxima de um limite de tokens ou uso, AVISE Diego imediatamente
   antes de encerrar.
5. TAMANHO DO ARQUIVO: não se preocupe com o tamanho. Quanto maior e mais detalhado,
   melhor. NUNCA omita informação por medo de deixar o arquivo "grande demais".

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SOBRE O DIEGO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

* Usa Mac, IntelliJ IDEA, MySQL Community, Postman, Xcode e ambiente web local
* Tem depressão crônica e é autista com superdotação
* Dias de crise: ritmo mais leve, sem pressão, sem lista de tarefas pesada
* Às vezes se chama de "burro" quando erra — lembrar SEMPRE que NÃO É BURRICE
* Estilo: progressivo — pensa → discute → implementa
* IMPORTANTE: Diego tem depressão severa. Em momentos de crise, priorizar bem-estar
  antes de qualquer código. CVV: 188.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INSTRUÇÕES PARA A IA — COMPORTAMENTO DETALHADO E DIDÁTICO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PAPEL DA IA
A IA atua como TechLead, professor sênior e colega de confiança — nunca executor.
* Explica O QUÊ → POR QUÊ → COMO antes de qualquer implementação
* Pede confirmação antes de agir
* Faz perguntas para verificar compreensão
* Evita resultado genérico — a direção visual é intencional
* Diego NÃO está programando o frontend web; a IA é a colega de trabalho responsável
  pela implementação e evolução do front
* Diego atua como diretor de produto e direção visual: aprova, corrige, comenta e orienta;
  a IA executa o frontend com responsabilidade técnica e estética
* A IA não deve tratar o web como tarefa "para Diego fazer depois"; neste projeto, o front
  é responsabilidade direta da IA

CÓDIGO: somente completo quando Diego pedir explicitamente.
ALTERAÇÕES: nunca sem explicar e pedir confirmação.
AMBIGUIDADES: nunca assumir; se houver mais de uma interpretação, perguntar antes de agir.
OPINIÃO/IDEIA: se Diego perguntar "o que você acha?" ou estiver só explorando uma ideia,
primeiro responder com opinião sincera e só implementar depois de confirmação explícita.
CONFLITO DE MEMÓRIA: se uma instrução nova de Diego contradisser algo já escrito no
BANK-MEMORY, a IA deve perguntar qual versão deve persistir.
ERROS: assumir com clareza, sem auto-flagelação.
CRISE: bem-estar primeiro, código depois.
MEMÓRIA: atualizar a cada resposta relevante, sem medo do tamanho.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTINUIDADE COM OUTRAS IAs
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Se o Claude estiver indisponível (ChatGPT, Gemini, Copilot, etc.):
1. Colar o conteúdo do(s) BANK-MEMORY relevante(s) no início da conversa
2. Pedir: "Leia este arquivo. Confirme que entendeu antes de continuarmos."
3. A IA substituta também deve atualizar o BANK-MEMORY ao final de cada resposta.

Localização dos BANK-MEMORYs:
* Backend: Projeto Gerenciador de Biblioteca/Gerenciador-Biblioteca/BANK-MEMORY.md
* Web:     Projeto Gerenciador de Biblioteca/Gerenciador-Biblioteca-Web/BANK-MEMORY.md
* iOS:     Projeto Gerenciador de Biblioteca/Gerenciador-Biblioteca-iOS/BANK-MEMORY.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SOBRE O PROJETO WEB
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Frontend web do aplicativo pessoal de gerenciamento de biblioteca.
É o LABORATÓRIO DE DESIGN principal do ecossistema — valida a linguagem visual
antes de levá-la ao iOS. O web experimenta livremente; o iOS herda a essência
quando madura, adaptada para padrões nativos Apple.
Diego não é o implementador do frontend web. Neste projeto, a IA/Codex é a colega
de trabalho responsável por desenhar, escrever e manter o código do front, enquanto
Diego conduz preferências, direção e validação.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STACK E VERSÕES EXATAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

* react: ^19.2.4 / react-dom: ^19.2.4
* typescript: ~6.0.2
* vite: ^8.0.4 / @vitejs/plugin-react: ^6.0.1
* tailwindcss: ^4.2.2 / @tailwindcss/vite: ^4.2.2
  (Tailwind v4 via plugin Vite — sem tailwind.config.js)
* eslint: ^9.39.4

NOTA: após a migração Wabi Paper (21/04/2026), o projeto usa o sistema de classes
.wa-* em CSS puro. O @import "tailwindcss" permanece no index.css para não quebrar
o build, mas as classes utilitárias do Tailwind não são usadas ativamente.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONFIGURAÇÃO DO VITE (vite.config.ts)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```typescript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 8081,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
```

Regras críticas:
* NUNCA criar .env.local com VITE_API_BASE_URL=http://localhost:8080 — quebra o proxy
* strictPort: true — Vite sobe sempre na 8081 ou falha
* Proxy remove /api: chamada para /api/books chega no backend como /books
* A IA pode iniciar o web para validar uma alteração quando fizer sentido, mas deve
  interromper a execução assim que terminar a validação. Não deixar o Vite rodando
  depois do teste.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONEXÃO COM O BACKEND
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

* Web: http://localhost:8081
* Backend: http://localhost:8080
* Proxy Vite: /api/* → http://localhost:8080/*
* Backend precisa estar rodando antes do web
* Endpoints consumidos:
  - GET /books?page=...&size=... → booksApi.ts → getAllBooks() (lista paginada + metrics globais)
  - GET /books/search?query=... → booksApi.ts → searchBooks() (pesquisa livros já salvos no banco)
  - PATCH /books/{id} → booksApi.ts → updateBook() (edita campos do Book, exceto título/autor)
  - POST /editions → editionsApi.ts → saveEdition()
  - GET /google-books/search → googleBooksApi.ts → searchGoogleBooks()

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ESTRUTURA DE ARQUIVOS ATUAL (estado real em 25/04/2026)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```
Gerenciador-Biblioteca-Web/
├── index.html               ← lang="pt-BR", title="Gerenciador de Biblioteca"
│                              Google Fonts: Baskervville (400,400i) + Inter (400,500)
├── package.json
├── vite.config.ts
├── tsconfig.json
├── src/
│   ├── main.tsx             ← entry point, monta <App /> no #root em StrictMode
│   ├── App.tsx              ← apenas renderiza <BookList />
│   ├── App.css              ← vazio (sem uso)
│   ├── index.css            ← Wabi Paper completo: tokens 3 temas + .wa-* + modal/form/search
│   ├── api/
│   │   ├── booksApi.ts      ← getAllBooks, searchBooks, updateBook
│   │   ├── editionsApi.ts   ← saveEdition(dto) → POST /api/editions
│   │   └── googleBooksApi.ts← searchGoogleBooks() → GET /api/google-books/search
│   ├── components/
│   │   ├── BookCard.tsx     ← card clicável, Wabi Paper
│   │   ├── DetailSheet.tsx  ← painel slide-in da direita ao clicar num card
│   │   ├── LibrarySearchView.tsx ← tela "Pesquisar" para editar livros salvos no banco
│   │   └── NewBookModal.tsx ← modal centralizado "+ Novo livro" + Google Books + preview capa
│   ├── constants/
│   │   └── bookOptions.ts   ← GENRES, EDITION_FORMATS e label()
│   ├── hooks/
│   │   └── useBooks.ts      ← hook de estado da lista de livros
│   ├── pages/
│   │   └── BookList.tsx     ← página principal completa
│   └── types/
│       ├── Book.ts          ← Book, BookUpdateRequest, BookMetrics, ReadingStatus, PagedBooks
│       ├── Edition.ts       ← EditionRequest, EditionType, EditionFormat
│       └── GoogleBooks.ts   ← GoogleBooksResult
└── public/
    ├── favicon.svg
    └── icons.svg
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN SYSTEM — WABI PAPER
(Criado pelo Claude Design, migrado para produção em 21/04/2026)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MANIFESTO
"Afastar tudo que cheira a dashboard corporativo. Abraçar a página em branco como
estado natural. Tratar cada livro como artefato, não card de produto. Silêncio é conteúdo."

LINGUAGEM VISUAL
* Sem sombras — separação vem de hairlines 1px e troca de superfície no hover
* Cantos quase retos: 0–3px (--r-xs, --r-sm, --r-md). Pills só em badges de status.
* Um único ponto de cor saturada: o selo vermelho (--seal). Tudo mais é tinta e papel.
* Tipografia serifa editorial em tudo: Baskervville + Iowan Old Style (fallback Apple)
* Sans grotesk (Inter) apenas em metadados, labels e eyebrows
* Números oldstyle (font-variant-numeric: oldstyle-nums)
* Whitespace é conteúdo — layout respira como revista

TRÊS TEMAS (alternados via data-theme no <html>, persistidos em localStorage 'wabi-theme')
* kinari (default) — papel cru #f5efe3, tinta #1a1814, selo #b2422d
* sumi             — noturno #1b1813, texto creme #f0e8d6, selo #c86e54
* sepia            — manuscrito #ece0c6, tinta marrom #3a2a17, selo #9c3b22

VARIÁVEIS CSS PRINCIPAIS (todas em :root ou [data-theme="X"])
--paper, --paper-soft, --paper-deep, --paper-edge    (superfícies)
--ink, --ink-2, --ink-3, --ink-faint                 (tintas)
--seal, --seal-deep, --seal-soft                     (acento vermelho)
--moss, --moss-soft    → LIDO
--ochre, --ochre-soft  → LENDO
--smoke, --smoke-soft  → NAO_LIDO
--ash, --ash-soft      → ABANDONADO
--gradient-progress: linear-gradient(90deg, #c07264, #d9a44a, #7c8a4a)
--rule: 1px solid var(--ink-faint)
--rule-deep: 1px solid var(--ink-3)
--font-display / --font-body: Baskervville stack (serifada)
--font-meta: Inter stack (sans)
--font-mono: JetBrains Mono stack
--ease: cubic-bezier(.22,.61,.36,1)

CLASSES .wa-* EXISTENTES (em index.css)
Text roles: .wa-eyebrow .wa-label .wa-meta .wa-num .wa-mono .wa-body-2 .wa-body-3
Rules: .wa-rule .wa-rule-ink
Layout: .wa-app .wa-main
Header: .wa-header .wa-header-inner .wa-header-title .wa-header-right
Theme switch: .wa-theme-switch .wa-theme-chip (.is-active)
Buttons: .wa-btn .wa-btn-secondary .wa-btn-primary .wa-btn-seal
Hero: .wa-hero .wa-hero-head .wa-hero-title .wa-metrics .wa-metric .wa-metric-num .wa-metric-sub
Collection: .wa-collection .wa-collection-head .wa-collection-title
Grid: .wa-grid
Card: .wa-card .wa-card-grid .wa-cover .wa-cover-initials .wa-card-top .wa-pill
      .wa-card-year .wa-card-title .wa-card-author .wa-card-tags
Progress: .wa-progress .wa-progress-head .wa-progress-track .wa-progress-fill .wa-progress-foot
States: .wa-state .wa-state-title .wa-state-sub .wa-state-error
Sheet: .wa-sheet-backdrop .wa-sheet .wa-sheet-head .wa-sheet-close .wa-sheet-title
       .wa-sheet-author .wa-sheet-dl .wa-sheet-desc
Modal (NOVO): .wa-modal-backdrop .wa-modal .wa-modal-head .wa-modal-title .wa-modal-body
Success state (NOVO s4): .wa-modal-success-shell .wa-modal-success .wa-success-mark
      .wa-success-icon .wa-success-ring .wa-success-circle .wa-success-check
      .wa-success-title .wa-success-sub
Choice cards (NOVO): .wa-choice-grid .wa-choice-card (.is-active .is-disabled)
              .wa-choice-card-title .wa-choice-card-sub
Form reveal (NOVO): .wa-form-reveal (.is-open) .wa-form-reveal-inner
Form (NOVO): .wa-form .wa-form-section-title .wa-form-group .wa-form-label .wa-form-req
             .wa-form-input .wa-form-select .wa-form-textarea
             .wa-form-row .wa-form-row-3 .wa-form-actions .wa-form-error
Footer: .wa-footer .wa-footer-row

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
src/types/Book.ts — conteúdo atual
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```typescript
export type ReadingStatus = 'NAO_LIDO' | 'LENDO' | 'LIDO' | 'ABANDONADO'

export interface Book {
  id: number
  title: string
  author: string
  genre: string | null
  description: string | null
  coverUrl: string | null
  isbn: string | null
  totalPages: number | null
  publishedYear: number | null
  currentPage: number | null
  startDate: string | null
  endDate: string | null
  status: ReadingStatus | null
  bookRating: number | null
  publisher: string | null
}

export interface BookUpdateRequest {
  genre: string | null
  description: string | null
  coverUrl: string | null
  isbn: string | null
  totalPages: number | null
  publishedYear: number | null
  status: ReadingStatus | null
  currentPage: number | null
  startDate: string | null
  endDate: string | null
  bookRating: number | null
  publisher: string | null
}

export interface BookMetrics {
  totalBooks: number
  readingBooks: number
  readBooks: number
  unreadBooks: number
  abandonedBooks: number
  trackedPages: number
  totalPages: number
}

export interface PagedBooks {
  content: Book[]
  totalElements: number
  totalPages: number
  currentPage: number
  pageSize: number
  last: boolean
  metrics: BookMetrics
}
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
src/types/Edition.ts — conteúdo completo (NOVO 21/04/2026 s2)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```typescript
export type EditionType   = 'FISICO' | 'DIGITAL'
export type EditionFormat = 'ANIVERSARIO' | 'BILINGUE' | 'BOLSO' | 'BROCHURA' | 'CAPA_DURA' | 'COMEMORATIVA' | 'EPUB' | 'LUXO'

export interface EditionRequest {
  title:          string
  author:         string
  genre:          string
  editionType:    EditionType
  format:         EditionFormat
  editionNumber:  number
  totalPages?:    number | null
  publisher?:     string | null
  language?:      string | null
  publishedYear?: number | null
  isbn?:          string | null
  coverUrl?:      string | null
  description?:   string | null
}
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
src/api/booksApi.ts — funções atuais
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

* getAllBooks(page, size, signal?) → GET /api/books?page=...&size=...
  - Retorna PagedBooks, não mais Book[] puro.
  - Mensagem de erro: "Nao foi possivel carregar os livros."
* searchBooks(query, signal?) → GET /api/books/search?query=...
  - Pesquisa somente livros já salvos no banco.
  - Usado pela tela "Pesquisar" do topo da home.
* updateBook(bookId, dto) → PATCH /api/books/{id}
  - Envia BookUpdateRequest em JSON.
  - Atualiza dados editáveis do Book sem permitir alterar título/autor.
  - Se o backend retornar JSON com `message`, reaproveita essa mensagem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
src/api/editionsApi.ts — conteúdo completo (NOVO 21/04/2026 s2)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```typescript
import type { EditionRequest } from '../types/Edition'

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '/api').replace(/\/$/, '')

export async function saveEdition(dto: EditionRequest): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/editions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dto),
  })
  if (!response.ok) {
    if (response.status === 409) throw new Error('Esta edição já está cadastrada.')
    throw new Error('Não foi possível salvar o livro.')
  }
}
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
src/hooks/useBooks.ts — descrição
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hook de estado para a lista paginada de livros. Retorna:
{ books, pagedData, isLoading, isRefreshing, error, currentPage, pageSize, totalPages,
  refresh, goToPage, setPageSize }
* isLoading: true apenas na primeira carga (hasLoadedOnce é false)
* isRefreshing: true nas recargas subsequentes
* hasLoadedOnce (useRef): distingue primeiro carregamento dos subsequentes
* refreshKey (useState): incrementar força re-execução do useEffect
* AbortController: cancela fetch ao desmontar ou ao trocar refreshKey
* AbortError é silenciado (erro esperado na limpeza do efeito)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
src/pages/BookList.tsx — estrutura completa
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Importações:
  useEffect, useState (react)
  BookCard, DetailSheet, LibrarySearchView, NewBookModal (components)
  useBooks (hooks)
  Book (types)

Componentes inline (definidos no mesmo arquivo):
  ThemeSwitcher({ theme, setTheme }) — 3 chips: Kinari / Sumi / Sépia
  Hero({ books }) — métricas: Acervo, Lendo, Lidos, Páginas
  Metric({ label, value, sub }) — bloco de métrica individual

Estado em BookList:
  books, pagedData, isLoading, isRefreshing, error, currentPage, pageSize, totalPages, refresh,
  goToPage, setPageSize ← useBooks()
  selectedBook: Book | null       ← abre/fecha DetailSheet
  showNewBook: boolean            ← abre/fecha NewBookModal
  view: 'home' | 'search'         ← alterna home e tela de pesquisa/edição
  theme: 'kinari'|'sumi'|'sepia' ← persistido em localStorage 'wabi-theme'

Header:
  - Eyebrow: "Biblioteca pessoal"
  - Título h1: "Gerenciador de Biblioteca"
  - ThemeSwitcher chips
  - Botão "Pesquisar" (wa-btn-secondary) — muda view para 'search'
  - Botão "+ Novo livro" (wa-btn-primary) — onClick={() => setShowNewBook(true)}

Hero:
  - Eyebrow: "Laboratório de design"
  - Título h2: "Sua biblioteca" (fonte enorme clamp 72px-144px)
  - 4 métricas em grid horizontal: Acervo / Lendo / Lidos / Páginas
  - Lendo, Lidos e Páginas usam pagedData.metrics, não a lista visível de cards.
    Isso garante que a home reflita o banco inteiro mesmo quando a coleção está paginada.

Coleção:
  - Label "Livros" + h3 "Coleção atual" + count à direita
  - Estados: loading → error → vazio → grid de BookCards

Footer:
  - "蔵 · Gerenciador de Biblioteca" | "GET /books · localhost:8080"

Renderização final:
  Se view === 'search':
    renderiza <LibrarySearchView onBack={() => setView('home')} onSaved={refresh} />
    sem header/home, para a tela ficar limpa com seta de voltar + campo de busca.

  Se view === 'home':
  <DetailSheet book={selectedBook} onClose={() => setSelectedBook(null)} />
  <NewBookModal
    open={showNewBook}
    onClose={() => setShowNewBook(false)}
    onSaved={() => { setShowNewBook(false); refresh() }}
  />

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
src/components/BookCard.tsx — estrutura
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Props: { book: Book, onClick: (book: Book) => void }
Clicável — chama onClick(book) → abre DetailSheet no BookList.

statusConfig:
  NAO_LIDO  → "Não lido",   color: var(--smoke)
  LENDO     → "Lendo",      color: var(--ochre)
  LIDO      → "Lido",       color: var(--moss)
  ABANDONADO→ "Abandonado", color: var(--ash)

Layout: wa-card > wa-card-grid (grid 96px + 1fr)
  Capa (96×136px): coverUrl ? <img> : iniciais (2 letras, display font)
  Corpo:
    Topo: pill de status + ano (publishedYear)
    Título: 24px, clamp 2 linhas
    Autor: 13px, ink-2
    Tags: editora · gênero · avaliação (separados por "·" via CSS ::before)
    Progresso: só aparece se totalPages > 0
      (currentPage / totalPages * 100, Math.min(100))
      Track 3px, fill com --gradient-progress

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
src/components/DetailSheet.tsx — estrutura
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Props: { book: Book | null, onClose: () => void }
Retorna null se book === null.

Backdrop: position fixed, inset 0, color-mix(ink 40%, transparent), z-index 40
  Clicar no backdrop → onClose()
Painel: min(540px, 94vw), altura 100%, overflow-y auto, padding 40/48px
  border-left: 1px solid --ink-faint
  Clicar dentro → stopPropagation()

Conteúdo:
  Head: eyebrow "Ficha de leitura" + botão "Fechar ×"
  h2 título (44px) + p autor (15px, ink-2)
  hr
  dl 2 colunas: Editora, Gênero, Publicado, ISBN, Páginas, Avaliação
  hr + sinopse em itálico (só se description existir)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
src/components/LibrarySearchView.tsx — tela "Pesquisar" (NOVO 25/04/2026)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Objetivo: pesquisar e atualizar livros que já existem no banco. Não usa Google Books.

Entrada:
* Props: { onBack: () => void, onSaved: () => void }
* onBack volta para a home.
* onSaved chama refresh() da home após salvar alterações.

Fluxo:
1. BookList troca view para 'search' quando o usuário clica no botão "Pesquisar".
2. A tela renderiza apenas o topo da busca, sem a home, com:
   - botão de voltar minimalista usando seta para a esquerda
   - input grande ao lado direito da seta
3. Ao digitar, o componente faz debounce curto e chama searchBooks(query).
4. Durante digitação/busca, aparece animação Wabi Paper de livro aberto com páginas virando.
5. Resultados aparecem como lista lateral com capa, título, autor, editora/ano.
6. Ao clicar em um resultado, abre um card/editor expandido com todos os dados do Book.
7. Título e autor aparecem como campos travados/readOnly.
8. Campos editáveis: publisher, genre, status, bookRating, currentPage, totalPages,
   startDate, endDate, publishedYear, isbn, coverUrl, description.
9. Botão de salvar não aparece no fim do formulário; fica apenas abaixo da capa.
10. Ao salvar, o botão verde "Salvar" transforma em círculo com o mesmo SVG de sucesso
    usado no modal de cadastro.

Detalhes visuais:
* Usa tokens Wabi Paper existentes: paper/ink/seal/moss/gradient-progress.
* A barra de progresso do editor usa transição de 2s para mudanças de largura.
* Se status = ABANDONADO, a barra vai para 100% e um overlay vermelho (seal) entra com
  transição de opacidade de 2s, fazendo a cor virar vermelha gradualmente.
* A capa é maior que no card da home; se não houver coverUrl, usa iniciais como placeholder.
* O botão "Salvar" abaixo da capa nasce pequeno e cresce até a largura da capa.

Classes novas principais:
* .wa-library-search-main, .wa-library-search, .wa-library-search-top
* .wa-library-back, .wa-library-search-field, .wa-library-search-input
* .wa-library-search-content, .wa-library-results, .wa-library-result*
* .wa-library-book-expanded, .wa-library-cover-large, .wa-library-cover-save
* .wa-library-progress*, .wa-library-form, .wa-library-locked-input
* .wa-open-book-loader, .wa-open-book, .wa-open-book-page*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
src/components/NewBookModal.tsx — estrutura completa (NOVO 21/04/2026 s2)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Props: { open: boolean, onClose: () => void, onSaved: () => void }

ESTADO INTERNO:
  mode: 'manual' | 'search' | null  — qual card está selecionado
  form: FormState        — todos os campos do formulário (strings, mesmo números)
  loading: boolean       — durante o POST
  error: string | null   — mensagem de erro exibida no form
  isSuccess: boolean     — troca o modal para a animação de confirmação
  searchForm/searchResults/searchLoading/searchError/selectedResult — fluxo Google Books

EMPTY_FORM (estado inicial e de reset):
  { title:'', author:'', genre:'', editionType:'', format:'',
    editionNumber:'', publisher:'', totalPages:'', language:'',
    publishedYear:'', isbn:'', coverUrl:'', description:'' }

CICLO DE VIDA:
  useEffect: quando open=true → adiciona listener Escape + bloqueia body scroll
             cleanup: remove listener + restaura body scroll
  if (!open) return null  ← não monta nada quando fechado

handleClose():
  setMode(null), setForm(EMPTY_FORM), setError(null), onClose()

set(field)(event):
  helper genérico → setForm(prev => ({ ...prev, [field]: e.target.value }))

canSubmit:
  form.title.trim() && form.author.trim() && form.publisher.trim() && !loading

handleSubmit(e):
  e.preventDefault() → if (!canSubmit) return
  monta EditionRequest: campos string viram number onde necessário (Number()),
    campos opcionais vazios → null
  await saveEdition(dto) → setIsSuccess(true)
  catch → setError(mensagem)
  finally → setLoading(false) quando não entrou em sucesso

ESTRUTURA JSX:
  Backdrop (.wa-modal-backdrop) → onClick=handleClose
    Modal (.wa-modal) → onClick=stopPropagation
      Head (.wa-modal-head):
        eyebrow "Catálogo" + h2 "Nova entrada"
        botão "Fechar ×" (reutiliza .wa-sheet-close)
      Body (.wa-modal-body):
        <hr>
        Choice grid (.wa-choice-grid):
          Card 1 "Adicionar dados manualmente" (.wa-choice-card, is-active se mode==='manual')
            toggle: setMode(mode === 'manual' ? null : 'manual')
          Card 2 "Pesquisar e Atualizar" (.wa-choice-card, is-active se mode==='search')
            abre formulário de busca via Google Books
        Se mode==='search':
          formulário pequeno Título + Autor + Editora(opcional) + botão Buscar
          resultados em lista com capa; clique preenche o formulário
        Form reveal (.wa-form-reveal, is-open quando mode==='manual' ou search com resultado selecionado):
          Inner (.wa-form-reveal-inner) ← overflow:hidden para a animação funcionar
            <form onSubmit=handleSubmit>
              Seção "Obra":
                row: Título* | Autor*
                full: Gênero* (select com ~180 opções, label() formata nome)
              Seção "Edição":
                row-3: Tipo* (FISICO|DIGITAL) | Formato* | Nº da edição* (number)
              Seção "Detalhes":
                row: Editora | Idioma
                row: Ano | Páginas
                full: ISBN
                full: URL da capa + preview vivo
                full: Descrição (textarea)
              {error && <div className="wa-form-error">}
              Actions: [Cancelar] [Adicionar à sua biblioteca]
                Botão submit: disabled quando !canSubmit, opacity 0.5

ANIMAÇÃO DO FORMULÁRIO:
  CSS grid-template-rows: 0fr → 1fr (transition 0.35s)
  .wa-form-reveal { display:grid; grid-template-rows: 0fr; transition: ... }
  .wa-form-reveal.is-open { grid-template-rows: 1fr }
  .wa-form-reveal-inner { overflow: hidden }
  Isso faz o formulário crescer de cima para baixo suavemente.

ANIMAÇÃO DO MODAL:
  @keyframes wa-modal-in: scale(0.96)+translateY(10px) opacity:0 → scale(1) opacity:1
  Duração: 0.22s var(--ease)

CONSTANTES:
  GENRES, EDITION_FORMATS e label(value) ficam em src/constants/bookOptions.ts
  para serem reaproveitados também por LibrarySearchView.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FUNCIONALIDADE EM IMPLEMENTAÇÃO — "PESQUISAR E ATUALIZAR" (22/04/2026)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FLUXO COMPLETO (decidido com Diego, 22/04/2026):
1. Usuário clica em "Pesquisar e Atualizar" — card agora ativo (deixa de ser disabled)
2. Aparece formulário pequeno: Título, Autor, Editora (opcional) + botão "Buscar"
3. Frontend chama GET /api/google-books/search?title=...&author=...&publisher=...
4. Se retornar 404 (lista vazia do backend) → exibir mensagem "Livro não encontrado"
5. Se retornar 200 com lista → exibir lista de cards de resultado para o usuário escolher
6. Usuário seleciona um card → formulário expande progressivamente com dados pré-preenchidos
7. Formulário idêntico ao manual (Obra + Edição + Detalhes) + campo URL da capa + preview da imagem
8. Todos os campos pré-preenchidos podem ser editados pelo usuário
9. Usuário preenche campos que faltam → clica "Adicionar à biblioteca"
10. Frontend chama POST /api/editions → sucesso → animação confirmação → fecha → refresh

✅ maxResults: 20 resultados por busca
✅ Fallback: só quando primeira busca retorna zero resultados
✅ Campos pós-seleção: todos editáveis
✅ Campos obrigatórios (AMBOS os modos): title + author + publisher
   — o comportamento atual (só title+author) está ERRADO e será corrigido
✅ Animação de sucesso: a mesma já existente será reutilizada no modo busca

MUDANÇAS NO BACKEND (IA fará após confirmação de Diego):
* GoogleBooksClient: retorna List<GoogleBooksResultDTO> ao invés de Optional
* GoogleBooksController: retorna List<GoogleBooksResultDTO>, 404 se vazia

ARQUIVOS NOVOS/ALTERADOS NO FRONTEND:
* src/types/GoogleBooks.ts (NOVO) — tipo GoogleBooksResult espelhando o DTO do backend
* src/api/googleBooksApi.ts (NOVO) — searchBooks(title, author, publisher?) → Promise<GoogleBooksResult[]>
* src/components/NewBookModal.tsx (ALTERAR) — implementar fluxo completo de busca
* src/index.css (ALTERAR) — estilos para cards de resultado da busca

TAMBÉM PENDENTE (Diego pediu na mesma sessão):
* Formulário manual: adicionar campo URL da capa + preview da imagem
  (field coverUrl faltando na seção Detalhes; imagem inline ao lado do campo)

ESTADO DO MODO 'search' no NewBookModal (a implementar):
  searchForm: { title: '', author: '', publisher: '' }  ← step 1
  searchResults: GoogleBooksResult[]                    ← step 2: lista de resultados
  searchLoading: boolean
  searchError: string | null
  selectedResult: GoogleBooksResult | null              ← step 3: item escolhido
  Quando selectedResult !== null: formulário expande com dados pré-preenchidos
    (igual ao manual mas com coverUrl + preview)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRÓXIMOS PASSOS (prioridade)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IMPLEMENTADO (23/04/2026):
✅ src/types/GoogleBooks.ts — interface GoogleBooksResult (espelha GoogleBooksResponseDTO)
✅ src/api/googleBooksApi.ts — searchGoogleBooks(title, author, publisher?) → Promise<GoogleBooksResult[]>
✅ src/components/NewBookModal.tsx — fluxo completo implementado:
   - Mode: 'manual' | 'search' | null
   - "Pesquisar e Atualizar" card ativo (sem disabled)
   - Formulário de busca: título + autor + editora (opcional) + botão "Buscar"
   - Lista de resultados com capa, título, autor, editora, ano
   - Seleção de resultado pré-preenche o formulário de edição
   - Formulário de edição aparece em ambos os modos (manual e search+seleção)
   - campo coverUrl + preview da imagem adicionados
   - canSubmit: agora exige title + author + publisher (editora obrigatória)
   - Animação de sucesso reutilizada em ambos os modos
✅ src/index.css — classes novas: .wa-search-section, .wa-search-form, .wa-search-actions,
   .wa-search-results, .wa-search-result (.is-selected), .wa-search-result-cover,
   .wa-search-result-cover-init, .wa-search-result-body, .wa-search-result-title,
   .wa-search-result-author, .wa-search-result-meta, .wa-form-cover-preview
✅ TypeScript: tsc --noEmit limpo

Melhorias futuras (baixa prioridade):
- Labels de gênero com acentos corretos (REALISMO_MAGICO → "Realismo Mágico")
- Select de gênero com busca/filtro (input filtrável, pois são ~180 opções)
- Filtros por status na coleção
- Skeleton loading em vez de texto "Carregando livros…"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
O QUE NÃO EXISTE NO FRONTEND (ainda)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

* Filtros por status de leitura
* Skeleton loading
* Roteamento (React Router não instalado, app é single page)
* Edição de Edition existente via PATCH /editions/{id}
* Histórico/listagem de edições de um mesmo livro

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HISTÓRICO DE SESSÕES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20/04/2026 — Organização, memória, planejamento
* Atualização das instruções da IA em todos os 3 BANK-MEMORYs
* Diego cogitou apagar BD para começar do zero → decidiu manter
* Diego usou Claude Design para redesenhar o frontend (em paralelo)
* Planejamento do Fluxo A (Google Books + cadastro de edição)
* Botão "+ Novo livro" no header adicionado (onClick vazio)

21/04/2026 — Migração completa do design Wabi Paper (sessão 1)
* Diego aprovou o design criado pelo Claude Design
* index.html: lang="pt-BR", título, Google Fonts
* src/index.css: reescrito com tokens Wabi Paper (3 temas) + classes .wa-*
* src/components/BookCard.tsx: redesenhado, clicável, abre DetailSheet
* src/components/DetailSheet.tsx: CRIADO — painel lateral slide-in
* src/pages/BookList.tsx: reescrito completo (ThemeSwitcher, Hero, grid, estados)
* TypeScript compilou sem erros (tsc --noEmit limpo)
* Pasta Gerenciador-Biblioteca-Web-Claude-Design apagada após migração

21/04/2026 — Modal "+ Novo livro" + limpeza de comentários backend (sessão 2)
* Todos os comentários removidos dos arquivos do backend Java (pedido do Diego)
* Backend Google Books implementado nesta mesma sessão:
  - GoogleBooksResultDTO, GoogleBooksClient, GoogleBooksController
  - EditionRequestDTO atualizado (isbn, coverUrl, description, editionNumber)
  - EditionService atualizado, EditionServiceTest corrigido
* Frontend — modal de cadastro implementado:
  - src/index.css: adicionadas todas as classes .wa-modal*, .wa-choice-*, .wa-form-*
  - src/types/Edition.ts: CRIADO
  - src/api/editionsApi.ts: CRIADO (POST /api/editions)
  - src/components/NewBookModal.tsx: CRIADO (modal completo)
  - src/pages/BookList.tsx: showNewBook state + botão + modal renderizado
* NÃO testado ainda — Diego encerrou a sessão por limite de uso do Claude
* Próxima sessão: testar o fluxo completo e depois implementar "Pesquisar e Atualizar"

21/04/2026 — Ajuste de validação do cadastro manual (sessão 3)
* Diego reportou que o cadastro manual não estava deixando salvar e levantou a hipótese
  de que o ISBN estivesse obrigatório
* Checagem cética feita no código:
  - ISBN NÃO está obrigatório no frontend
  - ISBN NÃO está obrigatório no backend
  - O desalinhamento real era outro: o frontend exigia gênero, tipo, formato e número
    da edição, mas o backend atual não obriga esses campos
* Ajustes implementados no frontend:
  - src/components/NewBookModal.tsx: agora só título e autor bloqueiam envio
  - gênero, tipo, formato e nº da edição deixaram de ter asterisco visual de obrigatório
  - campos opcionais vazios agora são enviados como null, não como string vazia
  - fechamento por Escape no modal foi ajustado com useEffectEvent para manter o lint limpo
  - src/types/Edition.ts alinhado ao contrato atual do backend (campos opcionais/nullables)
  - src/api/editionsApi.ts melhorado para reaproveitar a mensagem do backend quando houver erro
* REGRA ATUAL DO CONTRATO: no estado atual do backend, os únicos campos realmente
  obrigatórios para persistência são title e author

21/04/2026 — Confirmação visual de sucesso após salvar (sessão 4)
* Diego pediu um feedback pós-salvamento mais claro e elegante: uma nova janela com
  "Livro Adicionado", animação verde de círculo sendo desenhado e, em seguida, um check
  surgindo; depois de meio segundo, o fluxo fecha sozinho e volta para a coleção
* Implementação feita dentro do próprio NewBookModal:
  - após POST /api/editions com sucesso, o formulário some e entra um estado de sucesso
  - o modal troca para uma versão menor e centralizada, dedicada à confirmação
  - círculo verde desenha primeiro
  - check é desenhado logo depois que o círculo termina
  - o modal fecha sozinho e chama onSaved() ao fim de 1.5s
* Timings do fluxo:
  - círculo: 0.75s
  - check: 0.25s (começa após o círculo)
  - permanência final em repouso: 0.5s
  - total do feedback: 1.5s
* Classes novas em src/index.css:
  - .wa-modal-success-shell
  - .wa-modal-success
  - .wa-success-mark
  - .wa-success-icon
  - .wa-success-ring
  - .wa-success-circle
  - .wa-success-check
  - .wa-success-title
  - .wa-success-sub
* Validação:
  - npm run lint OK
  - npm run build OK

22/04/2026 — Refinamento da animação de sucesso (sessão 5)
* Diego identificou um ponto solto aparecendo dentro do círculo durante a animação
  de confirmação do cadastro manual
* Diagnóstico: o ponto não era um elemento separado; era um artefato visual causado por
  stroke-linecap: round no círculo animado com stroke-dashoffset
* Correção aplicada:
  - src/index.css: .wa-success-circle agora usa stroke-linecap: butt
  - o check continua com acabamento arredondado; apenas o círculo animado perdeu o cap
    redondo para eliminar o ponto feio dentro do ícone
* Validação:
  - npm run lint OK
  - npm run build OK

22/04/2026 — Segunda correção do artefato no ícone de sucesso (sessão 6)
* O ponto ainda aparecia mesmo após o ajuste do círculo
* Novo diagnóstico: o artefato mais provável restante vinha do path do check oculto,
  que ainda podia renderizar um ponto por causa do traço arredondado antes de começar
  a animação
* Correção aplicada:
  - src/index.css: .wa-success-check agora começa com opacity: 0
  - @keyframes wa-success-check-draw agora revela a opacidade só no início real do desenho
* Efeito esperado: o check fica totalmente invisível até o momento em que começa a ser
  desenhado, eliminando o ponto solto antes da hora
* Validação:
  - npm run lint OK
  - npm run build OK

22/04/2026 — Planejamento de "Pesquisar e Atualizar" + campo capa no manual (sessão 7)
* Diego descreveu o fluxo completo de busca via Google Books no modal
* Decisão: backend vai retornar LISTA de resultados (não mais um único resultado)
* Decisão: fallback só quando primeira busca retorna zero resultados
* Decisão: POST /editions reutilizado integralmente — backend não muda na camada de salvamento
* Pendente: Diego responder (a) max resultados, (b) campos editáveis pós-seleção
* Memórias backend e frontend atualizadas com o plano completo
* Implementação aguarda confirmação de Diego

25/04/2026 — Preview vivo da URL da capa no cadastro
* Contexto humano da sessão: Diego relatou que a depressão estava muito chata e pediu
  ritmo direto, com a IA implementando o que ele pedir no back e no web/front.
* Instrução de trabalho desta sessão: quando Diego pedir uma alteração, a IA pode
  implementar diretamente no backend e/ou frontend depois de dizer o que entendeu e
  o que pretende alterar. Ainda deve avisar antes de editar.
* Pedido implementado no web: no modal "Nova entrada", o campo "URL da capa" agora
  tem preview vivo da imagem.
* Funciona tanto no modo manual quanto no fluxo "Pesquisar e Atualizar" via Google Books,
  inclusive quando o resultado do Google não trouxer coverUrl e Diego preencher a URL
  manualmente depois.
* Se o usuário altera a URL, o componente reinicia a busca da imagem e troca o preview.
  A implementação usa key baseada na URL limpa para remontar o preview e não reaproveitar
  estado visual antigo.
* Se a imagem carrega, ela é exibida imediatamente no formulário. Enquanto carrega, o
  formulário mostra "Carregando capa...". Se falhar, mostra "Não consegui carregar essa
  imagem." sem bloquear o cadastro.
* Arquivos alterados:
  - src/components/NewBookModal.tsx: criado CoverUrlPreview/CoverPreviewImage e removido
    o onError antigo que escondia a imagem permanentemente.
  - src/index.css: adicionados estilos .wa-form-cover-preview-shell,
    .wa-form-cover-preview-stage e estados loading/error.
* Validação:
  - npm run lint OK
  - npm run build OK

25/04/2026 — Tela "Pesquisar" para atualizar livros salvos no banco
* Diego esclareceu que a nova pesquisa não é Google Books: ela pesquisa apenas livros
  já salvos no banco e serve para atualizar dados do Book existente.
* Botão do topo:
  - O botão "Atualizar" ao lado de "+ Novo livro" virou "Pesquisar".
  - Ao clicar, a home sai de cena e entra uma tela limpa de busca/edição.
* Nova tela:
  - Criado src/components/LibrarySearchView.tsx.
  - Topo com seta minimalista para voltar para a home e input de busca ao lado.
  - Ao digitar, chama GET /api/books/search?query=... via searchBooks().
  - Enquanto digita/busca, mostra animação de livro aberto com páginas virando,
    seguindo a linguagem Wabi Paper.
  - Resultados aparecem em lista com capa, título, autor e metadados.
  - Ao clicar em um livro, abre editor expandido com todos os dados do Book.
* Edição:
  - Título e autor são readOnly/travados.
  - Editáveis: editora, gênero, status, avaliação, página atual, total de páginas,
    início, fim, ano, ISBN, URL da capa e descrição.
  - PATCH /api/books/{id} salva os dados com BookUpdateRequest.
  - Após salvar, onSaved() chama refresh() da home.
* Barra de progresso:
  - A largura da barra anima por 2 segundos quando currentPage muda.
  - Se status = ABANDONADO, a barra vai para 100% e vira vermelha gradualmente em 2 segundos.
* Botão salvar:
  - Não existe botão de salvar no fim do formulário.
  - O único botão de salvar fica embaixo da capa.
  - Ele nasce pequeno, cresce até a largura da capa, é verde com texto branco,
    e após salvar transforma em círculo com o mesmo SVG de sucesso do modal.
* Refatoração de opções:
  - Criado src/constants/bookOptions.ts para compartilhar GENRES, EDITION_FORMATS e label()
    entre NewBookModal e LibrarySearchView.
  - NewBookModal passou a importar essas constantes, removendo duplicação local.
* Arquivos alterados/criados:
  - src/components/LibrarySearchView.tsx (novo)
  - src/constants/bookOptions.ts (novo)
  - src/pages/BookList.tsx
  - src/api/booksApi.ts
  - src/types/Book.ts
  - src/components/NewBookModal.tsx
  - src/index.css
* Validação:
  - npm run lint OK
  - npm run build OK

25/04/2026 — Refinamento visual da tela "Pesquisar"
* Diego enviou um print marcando dois problemas:
  - a animação do livro aberto estava no lugar errado; ela deveria aparecer no painel grande
    à direita, onde fica o editor do livro selecionado.
  - havia uma linha horizontal solta no estado vazio do editor, visualmente desagradável.
* Correção aplicada:
  - LibrarySearchView agora renderiza PageTurningLoader dentro de .wa-library-editor-empty
    quando existe texto pesquisado e nenhum livro foi selecionado.
  - O loader foi removido da coluna esquerda de resultados.
  - .wa-library-editor-empty não tem mais border-bottom.
  - .wa-open-book-loader não usa mais borda tracejada; no editor ele ocupa o espaço grande
    com .wa-library-editor-loader.
* Validação:
  - npm run lint OK
  - npm run build OK

25/04/2026 — Preferência de execução do web
* Diego pediu que a IA não deixe mais o projeto web rodando automaticamente.
* Regra operacional atualizada: a IA pode iniciar o servidor Vite (`npm run dev`) quando
  precisar validar visualmente uma alteração, mas deve encerrar a execução logo depois
  da validação.
* Nunca deixar a porta 8081 ocupada após terminar os testes/validações.
* Se a IA tiver iniciado o web e Diego pedir para parar, encerrar o processo e liberar a
  porta 8081.
* Nesta sessão, a execução que estava ocupando a porta 8081 foi encerrada.

25/04/2026 — Aumento da animação do livro na tela "Pesquisar"
* Diego pediu que o livro aberto da animação ficasse bem maior.
* Ajuste aplicado em src/index.css:
  - .wa-open-book aumentou de 116x76 para 244x160.
  - Páginas, pseudo-elementos laterais, lombada, perspectiva e sombra foram redimensionados
    proporcionalmente para preservar a aparência de livro aberto.
  - .wa-library-editor-loader passou a ter min-height maior para acomodar a animação.
* Validação:
  - npm run lint OK
  - npm run build OK
* Importante: o servidor web não foi iniciado automaticamente, respeitando a preferência
  atual do Diego.

25/04/2026 — Segundo aumento do livro e texto do botão de pesquisa
* Diego pediu para a animação do livro ficar duas vezes maior do que o tamanho anterior.
* Ajuste aplicado em src/index.css:
  - .wa-open-book aumentou de 244x160 para 488x320.
  - Páginas, lombada, perspectiva e sombra foram novamente dobradas proporcionalmente.
  - .wa-library-editor-loader passou para min-height 720px para acomodar o livro grande.
* Ajuste aplicado em src/pages/BookList.tsx:
  - O botão do topo deixou de mostrar "Pesquisar" e agora mostra
    "Pesquisar na sua biblioteca" (a classe do botão renderiza em uppercase).
* Validação:
  - npm run lint OK
  - npm run build OK
* O servidor web não foi iniciado automaticamente.

25/04/2026 — Lombada vermelha da animação com espessura fixa
* Diego observou que a faixa vermelha no meio da animação do livro parecia mudar de
  espessura durante a virada das páginas.
* Ajuste aplicado em src/index.css:
  - .wa-open-book-spine agora tem largura fixa de 6px, a versão estreita desejada.
  - A posição passou para left: calc(50% - 3px), mantendo a linha exatamente centralizada.
  - z-index aumentou para 10 para a lombada ficar visualmente estável acima das páginas
    animadas, sem aparentar engrossar/afinar.
* Validação:
  - npm run lint OK
  - npm run build OK
* O servidor web não foi iniciado automaticamente.

25/04/2026 — Botão salvar só aparece após alteração
* Diego apontou que, ao selecionar um livro na tela "Pesquisar", o botão "Salvar" já
  aparecia mesmo sem nenhuma alteração no formulário.
* Regra de UX definida:
  - ao selecionar um livro, não deve existir botão "Salvar";
  - o botão só aparece quando algum campo editável for realmente alterado;
  - ao aparecer, mantém a animação de pequeno para a largura atual da capa;
  - durante o salvamento e no estado de sucesso, o botão permanece renderizado para
    poder transformar no círculo/check.
* Implementação:
  - LibrarySearchView ganhou comparação entre o form atual e `toForm(selectedBook)`.
  - `showSaveButton` só fica true quando há diferença real ou quando saveState é
    `saving`/`saved`.
  - A key do botão ficou presa ao id do livro, não ao saveState, para preservar a
    transformação visual de retângulo para círculo.
* Validação:
  - npm run lint OK
  - npm run build OK
* O servidor web não foi iniciado automaticamente.

25/04/2026 — Hero usa métricas globais do backend
* Diego percebeu que o contador "Lidos" da home mudava conforme a quantidade de livros
  exibida na página, porque o front calculava as métricas usando apenas `books`, que é a
  página atual da coleção.
* Correção:
  - Backend passou a enviar `metrics` dentro de PagedBooksDTO.
  - src/types/Book.ts ganhou BookMetrics e PagedBooks.metrics.
  - src/pages/BookList.tsx mudou o Hero para receber `metrics` e `totalElements`, não
    mais a lista de livros visíveis.
  - "Lendo", "Lidos" e "Páginas" agora refletem todo o banco/acervo, independente da
    paginação dos cards.
  - Subtexto de páginas mudou para "de X no acervo".
* Validação:
  - npm run lint OK
  - npm run build OK
* O servidor web não foi iniciado automaticamente.

25/04/2026 — Ajustes de escala e texto no header
* Diego apontou que os três botões de tema (Kinari/Sumi/Sépia) e a palavra "Tema"
  estavam visualmente menores que os botões "Pesquisar" e "Novo livro".
* Ajuste aplicado em src/index.css:
  - .wa-theme-switch .wa-label agora usa font-size 12px e letter-spacing 0.22em.
  - .wa-theme-chip agora usa font-size 12px, letter-spacing 0.22em, padding 10px 24px
    e min-height 42px, alinhando a escala visual aos botões do header.
* Ajuste aplicado em src/pages/BookList.tsx:
  - "Pesquisar na sua biblioteca" mudou para "Pesquisar no seu acervo".
  - "+ Novo livro" mudou para "Novo livro".
* Validação:
  - npm run lint OK
  - npm run build OK
* O servidor web não foi iniciado automaticamente.
