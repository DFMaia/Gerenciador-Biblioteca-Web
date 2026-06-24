BANK-MEMORY — Gerenciador de Biblioteca Web
Última atualização: 27/04/2026

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
  - GET /books?page=...&size=...&sortOrder=...&status=... → booksApi.ts → getAllBooks()
    (lista paginada/filtrada + metrics globais)
  - GET /books/search?query=... → booksApi.ts → searchBooks() (pesquisa livros já salvos no banco)
  - PATCH /books/{id} → booksApi.ts → updateBook() (edita campos do Book, exceto título/autor)
  - DELETE /books/{id} → booksApi.ts → deleteBook() (apaga livro do acervo e atualiza listas)
  - POST /editions → editionsApi.ts → saveEdition()
  - GET /google-books/search → googleBooksApi.ts → searchGoogleBooks()

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ESTRUTURA DE ARQUIVOS ATUAL (estado real em 27/04/2026)
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
│   │   ├── booksApi.ts      ← getAllBooks, searchBooks, updateBook, deleteBook
│   │   ├── editionsApi.ts   ← saveEdition(dto) → POST /api/editions
│   │   └── googleBooksApi.ts← searchGoogleBooks() → GET /api/google-books/search
│   ├── components/
│   │   ├── BookCard.tsx     ← card Wabi Paper com ações Atualizar/Apagar no hover
│   │   ├── DetailSheet.tsx  ← legado: painel lateral não usado no fluxo atual da home
│   │   ├── LibrarySearchView.tsx ← tela "Pesquisar" para editar livros salvos no banco
│   │   ├── NewBookModal.tsx ← modal centralizado "+ Novo livro" + Google Books + preview capa
│   │   └── StatisticsView.tsx ← página de estatísticas do acervo + lista por ano
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
Base textual:
  .wa-eyebrow .wa-label .wa-meta .wa-num .wa-mono .wa-body-2 .wa-body-3
Regras/linhas:
  .wa-rule .wa-rule-ink
  As linhas minimalistas usam `--rule`/`--ink-faint`. Evitar escalar o elemento que
  tem borda, porque isso cria variação visual de espessura.
Layout geral:
  .wa-app .wa-main
Header:
  .wa-header .wa-header-inner .wa-header-title .wa-header-right
Tema e ordenação:
  .wa-theme-switch .wa-theme-chip (.is-active)
  SortSwitcher reutiliza .wa-theme-chip para Crescente / Decrescente / Aleatório.
Botões:
  .wa-btn .wa-btn-secondary .wa-btn-primary .wa-btn-seal
Hero/home:
  .wa-hero .wa-hero-head .wa-hero-title
  .wa-metrics .wa-metric .wa-metric-clickable .wa-metric-num .wa-metric-sub
  .wa-hero-metrics-rule
  .wa-recommendation-metric .wa-recommendation-symbol
  .wa-statistics-metric .wa-statistics-chart .wa-statistics-axis
  .wa-statistics-bar .wa-statistics-line
Coleção/grid:
  .wa-collection .wa-collection-head .wa-collection-title
  .wa-grid
Card:
  .wa-card .wa-card-grid .wa-card-cover-column
  .wa-cover .wa-cover-initials .wa-card-actions
  .wa-card-action .wa-card-action-update .wa-card-action-delete
  .wa-card-top .wa-pill .wa-card-year .wa-card-title .wa-card-author .wa-card-tags
  Importante: hover aumenta apenas .wa-card-grid/conteúdo; a borda do .wa-card fica
  estável para preservar linhas internas com 1px uniforme.
Progresso:
  .wa-progress .wa-progress-head .wa-progress-track .wa-progress-fill .wa-progress-foot
  A barra atual usa verde e tende ao verde militar conforme o avanço. Evitar gradiente
  esticado fixo; a sensação desejada é a barra crescendo e a cor acompanhando o progresso.
Estados:
  .wa-state .wa-state-title .wa-state-sub .wa-state-error
Paginação:
  .wa-pagination .wa-pagination-info .wa-pagination-controls .wa-pagination-size
  .wa-pagination-chip .wa-pagination-nav .wa-pagination-btn
Fluxos por status:
  .wa-reading-page-main .wa-reading-page .wa-reading-page-top
  .wa-reading-page-title .wa-reading-page-head
Sheet legado:
  .wa-sheet-backdrop .wa-sheet .wa-sheet-head .wa-sheet-close .wa-sheet-title
  .wa-sheet-author .wa-sheet-dl .wa-sheet-desc
  O arquivo DetailSheet existe, mas não deve ser usado pela home no fluxo atual.
Modal de novo livro:
  .wa-modal-backdrop .wa-modal .wa-modal-head .wa-modal-title .wa-modal-body
  .wa-choice-grid .wa-choice-card (.is-active .is-disabled)
  .wa-choice-card-title .wa-choice-card-sub
  .wa-form-reveal (.is-open) .wa-form-reveal-inner
  .wa-form .wa-form-section-title .wa-form-group .wa-form-label .wa-form-req
  .wa-form-input .wa-form-select .wa-form-textarea
  .wa-form-row .wa-form-row-3 .wa-form-actions .wa-form-error
Sucesso de cadastro/salvamento:
  .wa-modal-success-shell .wa-modal-success .wa-success-mark
  .wa-success-icon .wa-success-ring .wa-success-circle .wa-success-check
  .wa-success-title .wa-success-sub
Pesquisa/edição no acervo:
  .wa-library-search-main .wa-library-search .wa-library-search-top
  .wa-library-back .wa-library-search-field .wa-library-search-input
  .wa-library-search-content .wa-library-results .wa-library-result*
  .wa-library-editor-empty .wa-library-book-expanded .wa-library-cover-large
  .wa-library-cover-save .wa-library-save-label .wa-library-progress*
  .wa-library-form .wa-library-locked-input .wa-open-book-loader
  .wa-open-book .wa-open-book-page*
Recomendação:
  .wa-recommendation-backdrop .wa-recommendation-dialog .wa-recommendation-close
  .wa-recommendation-title .wa-recommendation-state .wa-recommendation-card
  .wa-recommendation-cover-column .wa-recommendation-cover
  .wa-recommendation-read-action .wa-recommendation-body
  .wa-recommendation-book-title .wa-recommendation-author
  .wa-recommendation-success .wa-recommendation-actions
Exclusão:
  .wa-delete-backdrop .wa-delete-dialog .wa-delete-success-card
  .wa-delete-title .wa-delete-copy .wa-delete-error .wa-delete-actions-row
  .wa-delete-btn .wa-delete-btn-ghost .wa-delete-btn-danger
  .wa-delete-success-mark .wa-delete-success-icon .wa-delete-success-ring
  .wa-delete-success-circle .wa-delete-success-x
Estatísticas:
  .wa-stats-page-main .wa-stats-page .wa-year-carousel .wa-year-chip
  .wa-stat-grid .wa-stat-tile .wa-stat-number .wa-stat-sub
  .wa-stat-feature-grid .wa-stat-panel .wa-stat-panel-large
  .wa-stat-panel-clickable .wa-stat-panel-title
  .wa-horseshoe .wa-horseshoe-svg .wa-horseshoe-track
  .wa-horseshoe-fill .wa-horseshoe-center
  .wa-segmented .wa-segmented-svg .wa-segmented-fill
  .wa-stat-genre-grid .wa-genre-list .wa-genre-row .wa-genre-dot
Footer:
  .wa-footer .wa-footer-row

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
  updatedAt?: string | null
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

Observações importantes:
* `updatedAt` é opcional porque depende do backend retornar esse campo.
* `updatedAt` é usado pela página de estatísticas para inferir o ano em que o livro
  entrou/foi atualizado no acervo. Como ainda não existe `createdAt`, essa inferência
  não é uma data perfeita de entrada no acervo.
* `BookMetrics` vem do backend junto com a paginação e deve ser usado para números
  globais da home. Não calcular "Lidos", "Lendo", "Abandonados" ou "Páginas" só a
  partir dos cards visíveis da página atual.

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

* getAllBooks(page, size, optionsOrSignal?) → GET /api/books?page=...&size=...
  - Retorna PagedBooks, não mais Book[] puro.
  - Aceita `signal`, `sortOrder` e `status`.
  - Também preserva compatibilidade com a assinatura antiga recebendo só AbortSignal.
  - Mensagem de erro: "Nao foi possivel carregar os livros."
* searchBooks(query, signal?) → GET /api/books/search?query=...
  - Pesquisa somente livros já salvos no banco.
  - Usado pela tela "Pesquisar" do topo da home.
* updateBook(bookId, dto) → PATCH /api/books/{id}
  - Envia BookUpdateRequest em JSON.
  - Atualiza dados editáveis do Book sem permitir alterar título/autor.
  - Se o backend retornar JSON com `message`, reaproveita essa mensagem.
* deleteBook(bookId) → DELETE /api/books/{id}
  - Usado pelos botões "Apagar" dos cards da home/listas por status.
  - Se o backend retornar JSON com `message`, reaproveita essa mensagem.
  - Erro padrão: "Não foi possível apagar o livro."

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
  BookCard, LibrarySearchView, NewBookModal, StatisticsView (components)
  useBooks (hooks)
  deleteBook, getAllBooks, updateBook (api/booksApi)
  getPreferences, saveTheme, saveSortOrder (api/preferencesApi)
  Book, BookMetrics, BookUpdateRequest, ReadingStatus (types)
  Theme, SortOrder (types/preferences)

Tipos locais:
  StatusFlow = 'reading' | 'abandoned'
  ViewMode = 'home' | 'search' | 'status-list' | 'status-edit' | 'stats'
  EditReturnView = 'home' | 'status-list' | 'stats'
  DeleteDialogState = 'confirming' | 'deleting' | 'deleted' | null
  RecommendationState = 'idle' | 'loading' | 'ready' | 'saving' | 'selected' | 'empty' | 'error'

Componentes inline (definidos no mesmo arquivo):
  ThemeSwitcher({ theme, setTheme }) — 3 chips: Kinari / Sumi / Sépia
  SortSwitcher({ sortOrder, setSortOrder }) — Crescente ↑ / Decrescente ↓ / Aleatório
  StatusBooksPage — lista filtrada por LENDO ou ABANDONADO
  DeleteBookDialog — confirmação de exclusão + animação vermelha círculo/X
  RecommendationDialog — modal "Me indique um livro" para livros NAO_LIDO aleatórios
  Hero — métricas: Acervo, Lendo, Lidos, Abandonados, Páginas, Me indique um livro, Estatísticas
  Metric({ label, value, sub, onClick }) — bloco de métrica individual
  RecommendationMetric — bloco clicável "Me indique um livro"
  StatisticsMetric — gráfico SVG minimalista no bloco Estatísticas
  Pagination — paginação com 20 / 50 / 100 / Tudo

Helpers locais:
  toBookUpdateRequest(book, overrides)
    - transforma Book em BookUpdateRequest.
    - usado principalmente para mudar livro indicado de NAO_LIDO para LENDO sem perder
      os outros campos editáveis.
  getInitials(title)
    - gera placeholder de capa para RecommendationDialog.
  STATUS_FLOW_CONTENT
    - centraliza textos/status de `reading` e `abandoned`.

Estado em BookList:
  books, pagedData, isLoading, isRefreshing, error, currentPage, pageSize, totalPages, refresh,
  goToPage, setPageSize ← useBooks(sortOrder)
  showNewBook: boolean            ← abre/fecha NewBookModal
  editingBook: Book | null        ← livro aberto no fluxo de edição direta
  editReturnView: 'home'|'status-list'|'stats' ← para onde a seta volta após edição
  statusFlow: 'reading'|'abandoned'    ← lista por status ativa
  statusRefreshKey: number        ← força recarga de status/stats após salvar/apagar/indicar
  deleteTarget: Book | null       ← livro aguardando confirmação de exclusão
  deleteState: 'confirming'|'deleting'|'deleted'|null
  deleteError: string|null
  recommendationOpen: boolean
  recommendedBook: Book | null
  recommendationState: RecommendationState
  recommendationError: string|null
  view: 'home' | 'search' | 'status-list' | 'status-edit' | 'stats'
  theme: 'kinari'|'sumi'|'sepia' ← persistido em localStorage e backend via preferences

Preferências:
  - Ao montar, chama `getPreferences()`.
  - Tema inválido cai para `kinari`.
  - Se o backend falhar, usa localStorage como fallback para tema.
  - `handleSetTheme` salva no estado, aplica no `<html>`, persiste em localStorage e tenta
    salvar no backend com `saveTheme`.
  - `handleSetSortOrder` salva no backend com `saveSortOrder`.
  - Se clicar em `Aleatório` enquanto `RANDOM` já está ativo, força `refresh()` e incrementa
    `statusRefreshKey`, porque o usuário espera uma nova lista aleatória a cada clique.

Header:
  - Eyebrow: "Biblioteca pessoal"
  - Título h1: "Gerenciador de Biblioteca"
  - ThemeSwitcher chips
  - Botão "Pesquisar no seu acervo" (wa-btn-secondary) — muda view para 'search'
  - Botão "Novo livro" (wa-btn-primary) — onClick={() => setShowNewBook(true)}

Hero:
  - Eyebrow: "Laboratório de design"
  - Título h2: "Sua biblioteca" (fonte enorme clamp 72px-144px)
  - 7 métricas em grid horizontal:
    Acervo / Lendo / Lidos / Abandonados / Páginas / Me indique um livro / Estatísticas
  - Lendo e Abandonados ficam clicáveis quando o valor é maior ou igual a 1.
  - "Me indique um livro" sempre abre o modal de indicação usando apenas livros NAO_LIDO.
  - "Estatísticas" abre a página `StatisticsView`.
  - Métricas usam pagedData.metrics, não a lista visível de cards.
    Isso garante que a home reflita o banco inteiro mesmo quando a coleção está paginada.
  - A linha superior e a linha inferior do bloco de métricas ficam desconectadas do grid
    com o mesmo respiro visual.

Coleção:
  - Label "Livros" + h3 "Coleção atual" + ordenação + paginação/count à direita
  - Estados: loading → error → vazio → grid de BookCards
  - Cards não abrem mais DetailSheet ao clicar.
  - No hover/focus do card aparecem abaixo da capa:
    "Atualizar" verde → abre LibrarySearchView em edição direta;
    "Apagar" vermelho → abre confirmação e chama DELETE /books/{id}.

Fluxo "Me indique um livro":
  - `openRecommendation()` abre o modal e chama `loadRecommendation`.
  - `loadRecommendation(excludeBookId?)` chama:
    getAllBooks(0, 20, { sortOrder: 'RANDOM', status: 'NAO_LIDO' })
  - O primeiro resultado diferente do livro atual é escolhido; se não houver, usa o primeiro.
  - Se não vier livro, estado `empty` mostra mensagem de que não há livros não lidos.
  - `requestAnotherRecommendation()` refaz o sorteio.
  - `markRecommendedBookAsReading()` usa `updateBook` com `status: 'LENDO'`,
    chama `refresh()` e incrementa `statusRefreshKey`.
  - Ao mudar para LENDO, o modal mostra o estado `selected`.

Fluxo de exclusão:
  - `requestDelete(book)` abre `DeleteBookDialog` em `confirming`.
  - `confirmDelete()` troca para `deleting`, chama `deleteBook(book.id)`, atualiza home/listas
    com `refresh()` + `statusRefreshKey++` e depois troca para `deleted`.
  - Estado `deleted` mostra alerta central com círculo vermelho e X.
  - Um `useEffect` fecha o alerta automaticamente após 1,5s.
  - Se a API falhar, volta para `confirming` e mostra a mensagem do backend ou fallback.

Fluxos por status:
  - `StatusBooksPage` é genérica para `reading` e `abandoned`.
  - Usa `getAllBooks(0, 0, { sortOrder, status })` para buscar a lista completa daquele status.
  - A seta fica à esquerda do título.
  - Usa o mesmo `SortSwitcher`, inclusive com Aleatório reexecutável.
  - Cards usam os mesmos botões Atualizar/Apagar da home.
  - "Atualizar" chama `openEditor(book, 'status-list')`.

Footer:
  - "蔵 · Gerenciador de Biblioteca" | "GET /books · localhost:8080"

Renderização final:
  Se view === 'search':
    renderiza <LibrarySearchView onBack={() => setView('home')} onSaved={refresh} />
    sem header/home, para a tela ficar limpa com seta de voltar + campo de busca.

  Se view === 'status-list':
    renderiza <StatusBooksPage /> para LENDO ou ABANDONADO e <DeleteBookDialog />.

  Se view === 'stats':
    renderiza <StatisticsView /> e <DeleteBookDialog />.
    - onBackHome volta para home.
    - onOpenReading define statusFlow='reading' e abre `status-list`.
    - onOpenAbandoned define statusFlow='abandoned' e abre `status-list`.
    - onUpdateBook abre o editor com retorno para `stats`.
    - onDeleteBook usa o mesmo fluxo de exclusão.

  Se view === 'status-edit':
    renderiza <LibrarySearchView initialBook={editingBook} /> sem barra de busca,
    apenas com seta para voltar à view de origem.
    Ao salvar:
      setEditingBook(book)
      refresh()
      statusRefreshKey++

  Se view === 'home':
  <DeleteBookDialog />
  <RecommendationDialog />
  <NewBookModal
    open={showNewBook}
    onClose={() => setShowNewBook(false)}
    onSaved={() => { setShowNewBook(false); refresh() }}
  />

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
src/components/BookCard.tsx — estrutura
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Props: { book: Book, onUpdate: (book: Book) => void, onDelete: (book: Book) => void }
O card não é mais clicável como um todo. No hover/focus aparecem dois botões abaixo da capa:
* Atualizar — verde, chama onUpdate(book) e abre o editor completo.
* Apagar — vermelho, chama onDelete(book) e abre a confirmação de exclusão.

statusConfig:
  NAO_LIDO  → "Não lido",   color: var(--smoke)
  LENDO     → "Lendo",      color: var(--ochre)
  LIDO      → "Lido",       color: var(--moss)
  ABANDONADO→ "Abandonado", color: var(--ash)

Layout: wa-card > wa-card-grid (grid 96px + 1fr)
  Coluna da capa:
    Capa (96×136px): coverUrl ? <img> : iniciais (2 letras, display font)
    Ações no hover: Atualizar / Apagar
  Corpo:
    Topo: pill de status + ano (publishedYear)
    Título: 24px, clamp 2 linhas
    Autor: 13px, ink-2
    Tags: editora · gênero · avaliação (separados por "·" via CSS ::before)
    Progresso: só aparece se totalPages > 0
      (currentPage / totalPages * 100, Math.min(100))
      Track 3px, fill com --gradient-progress

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
src/components/DetailSheet.tsx — legado
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

O arquivo ainda existe no repositório, mas a home não renderiza mais o painel lateral.
Desde 27/04/2026, o fluxo de ação do card é:
hover no card → Atualizar/Apagar → editor completo ou confirmação de exclusão.

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
* Props: { onBack: () => void, onSaved: (book: Book) => void, initialBook?: Book | null }
* onBack volta para a view de origem.
* onSaved recebe o livro salvo e normalmente chama refresh() da home/lista/página de estatísticas.
* Quando `initialBook` existe, a tela abre direto no editor daquele livro e não mostra a
  barra superior de pesquisa.

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

Fluxo de edição direta:
1. Home/listas/status/estatísticas chamam `openEditor(book, returnView)`.
2. BookList renderiza `LibrarySearchView initialBook={editingBook}`.
3. A tela mostra apenas seta de voltar + ficha do livro, sem campo de busca.
4. Título e autor continuam travados.
5. Campos editáveis seguem iguais ao fluxo pesquisado.
6. Ao salvar, `onSaved(book)` atualiza o estado do editor, chama `refresh()` e incrementa
   `statusRefreshKey` quando necessário.

Detalhes visuais:
* Usa tokens Wabi Paper existentes: paper/ink/seal/moss/gradient-progress.
* A barra de progresso do editor usa transição de 2s para mudanças de largura.
* Se status = ABANDONADO, a barra vai para 100% e um overlay vermelho (seal) entra com
  transição de opacidade de 2s, fazendo a cor virar vermelha gradualmente.
* A capa é maior que no card da home; se não houver coverUrl, usa iniciais como placeholder.
* O botão "Salvar" abaixo da capa nasce pequeno e cresce até a largura da capa.
* O botão "Salvar" só deve aparecer quando houver alteração real no formulário.
* A palavra "Salvar"/"Salvando..." tem uma linha fina animada logo abaixo, criada por
  `.wa-library-save-label::after`.
* O placeholder do campo de busca usa medida real do input com ResizeObserver para caber
  dentro da barra, sem cortar a frase em telas menores.

Classes novas principais:
* .wa-library-search-main, .wa-library-search, .wa-library-search-top
* .wa-library-back, .wa-library-search-field, .wa-library-search-input
* .wa-library-search-content, .wa-library-results, .wa-library-result*
* .wa-library-book-expanded, .wa-library-cover-large, .wa-library-cover-save
* .wa-library-progress*, .wa-library-form, .wa-library-locked-input
* .wa-open-book-loader, .wa-open-book, .wa-open-book-page*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
src/components/StatisticsView.tsx — página de estatísticas (NOVO 27/04/2026)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Objetivo: página completa de estatísticas do acervo, aberta pelo bloco "Estatísticas"
da home. Mantém o mesmo design Wabi Paper: serifas grandes, labels pequenas espaçadas,
linhas finas, verde/moss para progresso e baixo ruído visual.

Props:
```typescript
interface StatisticsViewProps {
  refreshKey: number
  onBackHome: () => void
  onOpenReading: () => void
  onOpenAbandoned: () => void
  onUpdateBook: (book: Book) => void
  onDeleteBook: (book: Book) => void
}
```

Estado interno:
  panel: 'overview' | 'year-books'
  selectedYear: number
  data: PagedBooks | null
  loading: boolean
  error: string | null

Busca de dados:
  - No mount e sempre que `refreshKey` muda, chama:
    getAllBooks(0, 0, { signal, sortOrder: 'ASC' })
  - `size=0` significa buscar o acervo completo.
  - Usa AbortController e ignora AbortError.
  - Erro visual: "Não consegui carregar as estatísticas do acervo."

Constantes/formatadores:
  numberFormatter: Intl.NumberFormat('pt-BR')
  percentFormatter: Intl.NumberFormat('pt-BR', maximumFractionDigits: 0)
  decimalFormatter: Intl.NumberFormat('pt-BR', maximumFractionDigits: 1)
  CURRENT_YEAR = new Date().getFullYear()
  GENRE_COLORS = paleta curta com verdes, ocres, vermelho queimado, cinzas e azul discreto.
  EMPTY_BOOKS evita recriar array vazio a cada render.

Helpers:
  parseYear(value)
    - recebe string de data e devolve o ano ou null.
  isLeapYear(year)
    - usado no cálculo de dias do ano.
  dayOfYear(date)
    - usado quando o ano selecionado é o ano atual.
  daysInReferenceYear(year)
    - ano atual: dias corridos até hoje;
    - anos anteriores/futuros: 365 ou 366.
  pagesRead(book)
    - se status LIDO, usa totalPages primeiro e currentPage como fallback;
    - caso contrário, usa currentPage.
  readReferenceYear(book)
    - só conta livros LIDO;
    - ano de leitura = endDate ?? updatedAt ?? startDate.
  collectionReferenceYear(book)
    - ano de entrada/atualização no acervo = updatedAt ?? startDate ?? endDate.
    - importante: isso é uma inferência porque o backend ainda não expõe createdAt.
  uniqueCount(values)
    - trim + lower pt-BR + Set para contar autores/gêneros únicos sem duplicar por caixa.
  byGenre(books, onlyRead)
    - agrupa por gênero;
    - sem gênero vira `SEM_GENERO` e label "Sem gênero";
    - ordena por quantidade desc e nome asc;
    - aplica uma cor da paleta por índice.
  shortYearLabel(year)
    - ano atual aparece como "2026 atual", outros como o ano cru.

Componentes internos:
  HorseShoeGauge({ percent, children })
    - ferradura SVG para páginas lidas vs páginas totais.
    - trilha clara + fill com gradiente verde → verde militar.
    - children ficam centralizados dentro da ferradura.
  SegmentedHorseShoe({ items })
    - ferradura segmentada por gênero.
    - calcula dashLength e offset sem mutar variável externa.
    - usa intervalo visual pequeno entre segmentos.
  StatButton({ label, value, sub, onClick })
    - tile numérico.
    - se não tiver onClick, fica disabled e não parece ação.
  GenrePanel({ title, subtitle, items, empty })
    - painel com ferradura segmentada + legenda.
    - cada legenda tem bolinha colorida, nome do gênero e quantidade.

Cálculos principais:
  books = data?.content ?? EMPTY_BOOKS
  metrics = data?.metrics ?? null
  years:
    - começa com CURRENT_YEAR.
    - adiciona anos de leitura (`readReferenceYear`) e anos do acervo (`collectionReferenceYear`).
    - ordena desc.
  hasPastYears:
    - true se existir ano menor que CURRENT_YEAR.
    - só mostra carrossel de anos quando há histórico anterior.
  selectedReadBooks:
    - livros LIDO cujo ano de leitura bate com selectedYear.
  selectedCollectionBooks:
    - livros cujo ano inferido de entrada/atualização bate com selectedYear.
  selectedPagesRead:
    - soma pagesRead dos selectedReadBooks.
  averagePagesPerDay:
    - selectedPagesRead / dias do ano de referência.
  progressPercent:
    - metrics.trackedPages / metrics.totalPages * 100.
  authorCount:
    - autores únicos do acervo inteiro.
  genreStats:
    - gêneros do acervo inteiro.
  readGenreStats:
    - livros LIDO agrupados por gênero.
  genreCount:
    - quantidade de gêneros, excluindo `SEM_GENERO`.

Renderização — overview:
  - main `.wa-stats-page-main` + section `.wa-stats-page`.
  - topo reaproveita `.wa-reading-page-top` com seta minimalista à esquerda.
  - label "Painel do acervo" + título "Estatísticas".
  - carrossel `.wa-year-carousel` de `.wa-year-chip` aparece só se houver anos anteriores.
  - loading mostra "Calculando estatísticas...".
  - erro mostra bloco `.wa-state-error`.
  - grid `.wa-stat-grid` com:
    Acervo: número; clique volta para home.
    Lendo: número; clique abre lista LENDO se > 0.
    Abandonados: número; clique abre lista ABANDONADO se > 0.
    Lidos em {ano}: número.
    Páginas em {ano}: número.
    Autores: número.
  - `.wa-stat-feature-grid` com:
    Leitura do acervo: ferradura de páginas com porcentagem e "lidas / total".
    Ritmo diário: média de páginas por dia no ano selecionado.
    Livros que entraram: botão que troca para panel='year-books'.
  - `.wa-stat-genre-grid` com:
    Gêneros no acervo;
    Quais gêneros;
    Lidos por gênero.

Renderização — panel year-books:
  - mantém o mesmo shell visual da stats.
  - seta volta para `overview`.
  - label "Entraram no acervo" + título com o ano selecionado.
  - se não houver livros, mostra estado vazio.
  - se houver, renderiza `.wa-grid` com `BookCard`.
  - `BookCard` preserva hover/focus com "Atualizar" e "Apagar".
  - `Atualizar` volta para BookList, que abre LibrarySearchView com retorno para `stats`.
  - `Apagar` usa DeleteBookDialog compartilhado em BookList.

Observação importante:
  - Para estatística "livros que entraram no acervo", o ideal futuro é o backend expor
    `createdAt`. Hoje o front usa `updatedAt` e cai para datas de leitura porque era o
    melhor dado disponível.

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

* Filtro livre por status dentro da coleção principal da home.
  Observação: existem fluxos dedicados para LENDO e ABANDONADO a partir das métricas.
* Skeleton loading
* Roteamento (React Router não instalado, app é single page)
* Edição de Edition existente via PATCH /editions/{id}
* Histórico/listagem de edições de um mesmo livro
* Data real de entrada no acervo (`createdAt`) vinda do backend.
  A página de estatísticas infere "livros que entraram" com `updatedAt`/datas de leitura.

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

26/04/2026 — Página dedicada para livros em leitura
* Contexto humano: Diego relatou estar com a depressão atacada e pediu que a IA fizesse
  diretamente as alterações no front e no back, lendo as memórias antes.
* Esclarecimento posterior de Diego: isso deve ser entendido como um FLUXO, não como
  páginas soltas. O fluxo esperado é:
  home → clique no contador "Lendo" → página/lista de livros em leitura → clique em card
  → página de edição daquele livro → salvar alterações → estado atualizado preservado
  no fluxo e refletido na home/lista.
* Problema identificado:
  - O contador "Lendo" na home já era clicável quando havia pelo menos 1 livro em leitura,
    mas abria um modal antigo (`ReadingModal`), que não era o comportamento desejado.
* Novo comportamento implementado:
  - Ao clicar no status "Lendo" da home, o app abre uma página própria de livros em leitura.
  - A página mostra a label "Livros que você está lendo" no topo esquerdo.
  - A lista usa o mesmo `BookCard` e o mesmo grid visual da home.
  - A lista busca diretamente do backend com `status=LENDO`, sem buscar todos os livros
    para filtrar no front.
  - A ordenação usa o mesmo mecanismo visual da home: "Crescente ↑", "Decrescente ↓"
    e "Aleatório".
  - ASC/DESC agora são enviados para o backend e correspondem à data de última atualização
    do Book (`updatedAt`), implementada no backend nesta mesma tarefa.
  - A seta de voltar para a home existe na página de lista, mas a label permanece como
    primeiro elemento visual no topo esquerdo, conforme o pedido.
* Edição a partir da lista:
  - Ao clicar em um card da página "Em leitura", o app abre a mesma tela/editor usado
    na busca de acervo, mas em modo direto.
  - Nesse modo direto, a barra superior de pesquisa não aparece.
  - Fica apenas a seta minimalista para voltar à página anterior.
  - O editor mantém o comportamento anterior: título e autor são somente leitura;
    os demais campos editáveis podem ser salvos pelo botão animado abaixo da capa.
  - Ao salvar, a home é atualizada e o livro selecionado passa a refletir a resposta
    retornada pelo backend.
* Alterações técnicas:
  - `LibrarySearchView` ganhou `initialBook`, permitindo reutilizar o editor sem busca.
  - `BookList` passou a ter views: `home`, `search`, `reading-list` e `reading-edit`.
  - `ReadingModal` foi removido e substituído por `ReadingBooksPage`.
  - `getAllBooks()` agora aceita opções opcionais `sortOrder`, `status` e `signal`,
    preservando compatibilidade com chamadas antigas por `AbortSignal`.
  - `useBooks(sortOrder)` agora envia a ordenação para o backend, corrigindo a ordenação
    real da home também.
  - `Book` ganhou o campo opcional `updatedAt`.
  - `vite.config.ts` foi ajustado para tipar a configuração do Vitest sem quebrar o build
    TypeScript.
* Validação:
  - npm run lint OK.
  - npm run build OK.
  - npm run test OK: 2 arquivos de teste, 33 testes passando.
  - O pacote opcional `@rollup/rollup-darwin-arm64` estava faltando/vazio no node_modules;
    foi reinstalado com `npm install --no-save @rollup/rollup-darwin-arm64@4.60.2`
    para destravar o Vitest. `package-lock.json` permaneceu sem alteração final.
  - A porta 8081 estava ocupada por processos locais; eles foram encerrados e a porta
    ficou livre ao final, respeitando a regra de não deixar o web rodando.

27/04/2026 — Régua do input de pesquisa não invade caracteres
* Diego enviou print da tela "Pesquisar no acervo" mostrando que caracteres grandes
  da busca encostavam/invadiam a linha inferior do input.
* Diagnóstico: a linha era `border-bottom` do próprio `.wa-library-search-input`, então
  ficava visualmente grudada na base dos caracteres em textos grandes.
* Correção aplicada em `src/index.css`:
  - removido `border-bottom` do input;
  - criada uma régua separada com `.wa-library-search-field::after`;
  - adicionados 12px de respiro entre o texto e a régua;
  - `line-height` do input aumentou de 1.05 para 1.12 para dar mais folga vertical.
* Resultado esperado: a linha fica mais baixa e elegante, sem que números, pontuação
  ou descendentes de letras encostem nela.
* Validação:
  - npm run lint OK.
  - npm run build OK.
  - O servidor Vite não foi iniciado.

27/04/2026 — Seta de retorno e placeholder responsivo da busca
* Diego apontou mais dois problemas visuais na tela "Pesquisar no acervo":
  - a seta de retorno parecia um caractere estranho, não uma seta clara;
  - o placeholder "Título, autor, editora, ISBN ou gênero" não cabia no campo e aparecia
    truncado como "Título, autor, editora, ISBN ou g".
* Correção da seta:
  - `.wa-library-back` deixou de depender visualmente do caractere `‹`;
  - a seta agora é desenhada por CSS com uma linha horizontal e uma ponta minimalista,
    usando `::before` e `::after`;
  - o `span` antigo continua no DOM apenas como fallback estrutural, mas fica oculto.
* Correção do placeholder:
  - `LibrarySearchView` agora mede a largura real do input com `ResizeObserver`;
  - usa canvas para medir a largura do texto do placeholder na fonte atual;
  - define a variável CSS `--library-search-placeholder-size` dinamicamente;
  - `.wa-library-search-input::placeholder` usa essa variável para reduzir o tamanho
    da frase quando necessário, garantindo que ela caiba na barra.
* Validação:
  - npm run lint OK.
  - npm run build OK.
  - O servidor Vite não foi iniciado.

27/04/2026 — Refinos de salvar, seta em leitura e hover dos cards
* Diego pediu três refinamentos visuais:
  - quando algum campo é alterado e o botão "Salvar" aparece, deve existir uma animação
    logo abaixo da palavra "Salvar";
  - na página dos livros com status LENDO, a seta de retorno estava à direita, mas deve
    ficar à esquerda, ao lado esquerdo do título "Em leitura";
  - ao passar o mouse por cima dos cards na home ou na página de livros em leitura, o card
    deve aumentar levemente, em torno de 5%, para dar mais elegância.
* Correções aplicadas:
  - `LibrarySearchView` passou a renderizar o texto do botão em `.wa-library-save-label`.
  - `.wa-library-save-label::after` desenha uma linha fina animada abaixo de "Salvar" /
    "Salvando...", com keyframe `wa-library-save-line`.
  - `ReadingBooksPage` reposicionou a seta antes do bloco de título.
  - `.wa-reading-page-top` voltou a usar grid `56px minmax(0, 1fr)`, deixando a seta à
    esquerda do título.
  - `.wa-card` ganhou `transform: scale(1.05)` no hover, `z-index` elevado e transição
    suave, sem alterar o fluxo do grid.
* Validação:
  - npm run lint OK.
  - npm run build OK.
  - O servidor Vite não foi iniciado.

27/04/2026 — Abandonados na home, estatísticas e linhas estáveis
* Diego apontou que, depois do hover com aumento dos cards, as linhas internas do grid
  pareciam ter espessuras divergentes.
* Diagnóstico:
  - O hover estava aplicando `transform: scale(1.05)` no `.wa-card` inteiro.
  - Como a borda fazia parte do elemento escalado, a linha de 1px também era escalada
    visualmente, criando a sensação de linhas mais finas/grossas.
* Correção das linhas:
  - `.wa-card` deixou de escalar.
  - O hover agora escala apenas `.wa-card-grid`, ou seja, o conteúdo interno do card.
  - As bordas do grid permanecem estáveis em 1px, enquanto o conteúdo ainda cresce 5%.
* Métrica "Abandonados":
  - A home ganhou o item "Abandonados" ao lado de "Lidos".
  - O valor usa `metrics.abandonedBooks`, já fornecido pelo backend.
  - Quando o número é maior ou igual a 1, o item fica clicável.
  - O fluxo é idêntico ao de "Lendo":
    home → clique em "Abandonados" → lista filtrada por status ABANDONADO → clique no card
    → página de edição sem barra de busca → salvar → voltar preservando o fluxo.
* Refatoração do fluxo por status:
  - `ReadingBooksPage` foi generalizada para `StatusBooksPage`.
  - Criado `StatusFlow = 'reading' | 'abandoned'`.
  - `STATUS_FLOW_CONTENT` centraliza status, títulos, labels, mensagens de vazio e erro.
  - `BookList` agora usa views `status-list` e `status-edit`, reaproveitando o mesmo
    fluxo para LENDO e ABANDONADO.
* Estatísticas:
  - A home ganhou um novo item "Estatísticas" ao lado de "Páginas".
  - O item segue o mesmo padrão visual das métricas.
  - Abaixo da palavra "Estatísticas" aparece um gráfico minimalista em SVG, com eixos,
    barras e uma linha no estilo do Wabi Paper.
* Linhas da home:
  - O grid de métricas passou de 4 para 6 colunas no desktop.
  - Cada item continua separado por linha minimalista.
  - Foi adicionada uma linha abaixo do bloco de métricas, espelhando a linha acima.
  - Responsivo ajustado para 3 colunas em telas médias e 2 colunas no mobile.
* Validação:
  - npm run lint OK.
  - npm run build OK.
  - npm run test OK: 2 arquivos, 33 testes passando.
  - O servidor Vite não foi iniciado.

27/04/2026 — Cards com Atualizar/Apagar e exclusão animada
* Diego pediu novo refinamento:
  - a linha abaixo das métricas da home deveria ficar desconectada do bloco do mesmo modo
    que a linha de cima, com a mesma distância;
  - remover a ficha lateral que aparecia ao clicar no card;
  - no hover do card, exibir abaixo da capa um botão verde "Atualizar" e, abaixo dele,
    um botão vermelho "Apagar";
  - "Atualizar" deve abrir o mesmo fluxo de edição/salvamento já usado para livros;
  - "Apagar" deve pedir confirmação e, ao confirmar, mostrar um alerta central animado
    vermelho formando um círculo e depois um X; ao terminar, o alerta some e a lista atualiza.
* Mudanças aplicadas no front:
  - `BookCard` deixou de receber `onClick` e passou a receber `onUpdate` e `onDelete`.
  - O card não abre mais `DetailSheet`; os botões de ação aparecem com transição no hover/focus.
  - `BookList` removeu o estado `selectedBook` e não renderiza mais `DetailSheet`.
  - `BookList` ganhou estado de edição direta reutilizável:
    `editingBook`, `editReturnView`, `statusRefreshKey`.
  - Ao clicar em "Atualizar" na home, abre `LibrarySearchView` com `initialBook` e volta para home.
  - Ao clicar em "Atualizar" em listas de status, abre o mesmo editor e volta para a lista anterior.
  - Criado `DeleteBookDialog` inline em `BookList`, com:
    confirmação central;
    estado `deleting` sem os botões de confirmação, para a confirmação desaparecer após o sim;
    estado `deleted` com SVG vermelho animado em círculo + X;
    fechamento automático após 1,5s.
  - `booksApi.ts` ganhou `deleteBook(bookId)` usando `DELETE /api/books/{id}`.
  - Após apagar, a home chama `refresh()` e as listas por status incrementam `statusRefreshKey`.
  - `.wa-hero-metrics-rule` passou a `margin: 40px 0 0`, espelhando o respiro superior.
* Mudanças de CSS:
  - `.wa-card-cover-column` organiza capa e ações.
  - `.wa-card-actions` fica invisível por padrão e surge no hover/focus sem deslocar bordas.
  - Em dispositivos sem hover, as ações ficam visíveis para não bloquear uso por toque.
  - `.wa-card-action-update` usa verde/moss; `.wa-card-action-delete` usa vermelho/seal.
  - `.wa-delete-*` define a confirmação e a animação vermelha de exclusão.
* Testes:
  - `BookCard.test.tsx` agora valida os botões Atualizar/Apagar em vez do clique no card.
  - `booksApi.test.ts` cobre `deleteBook()` em sucesso, erro com mensagem do backend e erro padrão.
* Validação:
  - npm test OK: 2 arquivos, 37 testes passando.
  - npm run build OK.
  - O servidor Vite não foi iniciado nesta validação.

27/04/2026 — Aleatório reexecutável e modal "Me indique um livro"
* Diego pediu dois refinamentos:
  - trocar a label "Aleatória" para "Aleatório";
  - toda vez que clicar em "Aleatório", mesmo se ele já estiver selecionado, a lista deve
    retornar uma nova ordem aleatória;
  - entre "Páginas" e "Estatísticas", adicionar a opção "Me indique um livro";
  - ao clicar nessa opção, abrir um alerta/modal com um livro aleatório do acervo;
  - a indicação só pode usar livros com status `NAO_LIDO`;
  - no hover do livro indicado deve aparecer abaixo da capa a ação "Atualizar para lendo";
  - ao clicar nessa ação, o status do livro muda para `LENDO`;
  - o modal também deve ter "Me indique outro" e um X no canto superior direito para fechar.
* Implementação:
  - `SortSwitcher` mudou a label de `RANDOM` para "Aleatório".
  - `handleSetSortOrder()` agora detecta clique repetido em `RANDOM`; quando isso acontece,
    chama `refresh()` na home e incrementa `statusRefreshKey` para listas por status.
  - A home ganhou `RecommendationMetric`, renderizada entre "Páginas" e "Estatísticas".
  - O grid de métricas passou para 7 colunas no desktop.
  - Criado `RecommendationDialog` inline em `BookList`.
  - `RecommendationDialog` usa `getAllBooks(0, 20, { sortOrder: 'RANDOM', status: 'NAO_LIDO' })`
    para buscar candidatos não lidos.
  - O botão "Me indique outro" refaz a busca e tenta evitar repetir imediatamente o livro atual.
  - A ação "Atualizar para lendo" usa `updateBook(id, dto)` com o DTO construído a partir
    do próprio Book e sobrescrevendo apenas `status: 'LENDO'`.
  - Ao atualizar para LENDO, a home recarrega com `refresh()` e as listas por status também
    são invalidadas via `statusRefreshKey`.
* CSS:
  - `.wa-recommendation-metric` estiliza a nova métrica/opção da home no Wabi Paper.
  - `.wa-recommendation-*` define o modal, card indicado, capa, botão de hover e estados.
  - Em dispositivos sem hover, "Atualizar para lendo" fica visível para permitir toque.
* Validação:
  - npm test OK: 2 arquivos, 37 testes passando.
  - npm run build OK.
  - npm run lint OK.
  - O servidor Vite não foi iniciado.

27/04/2026 — Página de estatísticas do acervo
* Diego pediu uma nova página ao clicar em "Estatísticas" na home e deixou liberdade
  criativa para organizar a experiência.
* Entrada no fluxo:
  - `StatisticsMetric` na home agora é um botão.
  - Ao clicar, `BookList` muda para `view === 'stats'`.
  - A página tem seta para voltar à home.
* Novo componente:
  - Criado `src/components/StatisticsView.tsx`.
  - Ele busca o acervo inteiro com `getAllBooks(0, 0, { sortOrder: 'ASC' })`.
  - O componente calcula estatísticas localmente a partir de `Book[]` e `metrics`.
* Estatísticas exibidas:
  - Total de livros no acervo: número; clique volta para a home.
  - Total de livros lendo: número; clique abre o fluxo/lista de livros LENDO.
  - Total de livros abandonados: número; clique abre o fluxo/lista de livros ABANDONADO.
  - Páginas lidas / total de páginas: ferradura com gradiente verde → verde militar,
    porcentagem central e texto `páginas lidas / páginas no acervo`.
  - Livros lidos no ano selecionado.
  - Páginas lidas no ano selecionado.
  - Média de páginas lidas por dia no ano selecionado.
  - Número de autores no acervo.
  - Número de gêneros no acervo.
  - Quais gêneros no acervo: ferradura segmentada + legenda com bolinhas coloridas.
  - Livros lidos por gênero: ferradura segmentada + legenda.
  - Livros que entraram no acervo no ano selecionado: número clicável que abre uma lista
    de cards no mesmo estilo da home.
* Anos/histórico:
  - A página monta os anos a partir de `endDate`, `updatedAt` e `startDate`.
  - O ano atual é selecionado por padrão.
  - Se houver anos anteriores, aparece um carrossel horizontal de caixinhas de ano no topo.
  - Se não houver anos anteriores, o carrossel não é mostrado.
* Observação importante de dados:
  - O backend ainda não tem `createdAt`.
  - Para "livros que entraram no acervo", a referência usada é `updatedAt`; se ausente,
    cai para `startDate` e depois `endDate`.
  - Isso é uma inferência técnica com os dados existentes; se Diego quiser precisão real
    de entrada no acervo no futuro, será melhor adicionar `createdAt` ao backend.
* Lista de livros por ano:
  - Dentro de `StatisticsView`, clicar em "Livros que entraram" muda para o painel interno
    `year-books`.
  - A lista usa `BookCard`, preservando ações de hover "Atualizar" e "Apagar".
  - "Atualizar" abre `LibrarySearchView` e volta para `stats`.
  - "Apagar" usa o mesmo `DeleteBookDialog` da home.
* CSS:
  - `.wa-stats-*` define layout da página, tiles numéricos e painéis.
  - `.wa-horseshoe-*` define a ferradura de páginas, com gradiente SVG verde.
  - `.wa-segmented-*` define ferraduras segmentadas por gênero.
  - `.wa-year-carousel` e `.wa-year-chip` definem o histórico rolável de anos.
* Validação:
  - npm run build OK.
  - npm run lint OK.
  - npm test OK: 2 arquivos, 37 testes passando.
  - A porta 8081 foi checada e ficou livre ao final.

27/04/2026 — Memória do front detalhada
* Diego pediu para atualizar a memória do front com o máximo de detalhe possível.
* Atualização feita neste BANK-MEMORY:
  - árvore de componentes mantida com `StatisticsView.tsx`;
  - seção de classes `.wa-*` ampliada com home, cards, paginação, busca/edição,
    recomendação, exclusão e estatísticas;
  - `src/types/Book.ts` atualizado com `updatedAt?: string | null` e observação sobre
    métricas globais vindas do backend;
  - `src/pages/BookList.tsx` reescrito na memória para refletir os fluxos atuais:
    home, pesquisa, lista por status, edição direta, estatísticas, indicação aleatória
    e exclusão animada;
  - `src/components/LibrarySearchView.tsx` atualizado com `initialBook`, retorno por view,
    botão Salvar condicional e animação abaixo do texto do botão;
  - criada seção detalhada de `src/components/StatisticsView.tsx`, incluindo props,
    estado, helpers, cálculos, renderização e a limitação atual de `createdAt`.
* Nenhum código de aplicação foi alterado nesta etapa; apenas documentação/memória.
