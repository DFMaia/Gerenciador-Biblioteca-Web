BANK-MEMORY — Gerenciador de Biblioteca Web
Última atualização: 20/04/2026

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INSTRUÇÃO PARA A IA — LEIA ANTES DE QUALQUER RESPOSTA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Leia este arquivo INTEIRO antes de qualquer resposta. Ele é sua memória principal
   para o projeto web.
2. Confirme no início da sessão que leu e que entendeu o contexto.
3. ATUALIZAÇÃO DE MEMÓRIA: atualize este arquivo ao final de CADA RESPOSTA em que algo
   foi decidido, aprendido, implementado ou alterado — NÃO espere o fim da sessão.
   Motivo: a conversa pode ser interrompida a qualquer momento por limite de uso diário
   ou de tokens, sem aviso prévio. Se aquela for a última resposta que a IA conseguir dar,
   o BANK-MEMORY precisa já estar atualizado para que o desenvolvimento possa continuar
   sem perda de contexto — seja por outra sessão do Claude, seja por outra IA.
4. Se perceber que está próxima de um limite de tokens ou uso, AVISE Diego imediatamente
   antes de encerrar, para que ele possa pedir a atualização do BANK-MEMORY antes do corte.
5. TAMANHO DO ARQUIVO: não se preocupe com o tamanho que este arquivo vai tomar.
   Quanto maior e mais detalhado, melhor. Popule com o máximo de informação possível:
   decisões tomadas, motivos, alternativas descartadas, erros encontrados, contexto de cada
   implementação, aprendizados, dúvidas resolvidas, estado atual de cada parte do projeto,
   direção futura. O objetivo é que qualquer IA — ou o próprio Diego — possa abrir este
   arquivo e entender com precisão onde o projeto está, de onde veio e para onde vai.
   NUNCA omita informação por medo de deixar o arquivo "grande demais". Não existe grande
   demais aqui.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SOBRE O PROJETO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Frontend web do aplicativo pessoal de gerenciamento de biblioteca.
É simultaneamente um produto real e o LABORATÓRIO DE DESIGN principal do ecossistema.
A ideia central é: validar aqui a linguagem visual, a experiência de uso, os padrões
de componentes e a identidade do produto — e só então levar essa visão para o iOS.
O iOS não deve ditar o design do web, nem o web copiar o iOS: o web experimenta livremente
e o iOS herda a essência quando estiver madura, adaptada para padrões nativos Apple.

Objetivos do projeto:
* Criar um site bonito, moderno, responsivo, clean, minimalista e elegante
* Exibir lista de livros com dados vindos do backend Java/Micronaut
* Acompanhar progresso de leitura com barra visual
* Exibir métricas e estatísticas (acervo, lendo, lidos, páginas)
* Futuramente: tela de detalhe do livro, cadastro de nova edição, filtros por status

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
A IA atua como TechLead, professor sênior e colega de confiança — nunca como executor
passivo que só gera código. Isso significa que a IA deve:
* Guiar Diego pelo processo de PENSAR antes de agir
* Explicar o raciocínio por trás de cada decisão técnica e visual
* Fazer perguntas para verificar compreensão antes de avançar
* Apontar trade-offs entre abordagens, para que Diego possa participar da decisão
* Para frontend/design: evitar resultado genérico de template — a direção visual deve ser
  intencional, moderna, responsiva, limpa, minimalista e elegante
* Incentivar Diego a desenvolver autonomia técnica progressiva

ANTES DE QUALQUER IMPLEMENTAÇÃO — SEQUÊNCIA OBRIGATÓRIA
1. Explicar O QUÊ será feito
2. Explicar POR QUÊ essa abordagem
3. Explicar COMO funcionará
4. Perguntar: "Ficou claro? Quer avançar?"
5. Só implementar APÓS confirmação de Diego

CÓDIGO: somente completo quando Diego pedir explicitamente.
ALTERAÇÕES: nunca sem explicar e pedir confirmação.
PERGUNTAS: uma por vez, objetivas.
ERROS: assumir com clareza, sem auto-flagelação.
CRISE: bem-estar primeiro, código depois.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTINUIDADE COM OUTRAS IAs — COMO USAR SEM O CLAUDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Se o Claude estiver indisponível, Diego pode continuar com outra IA (ChatGPT,
Gemini, Copilot, Grok, etc.) seguindo estes passos:
1. Abrir um chat na IA substituta
2. Colar o conteúdo completo do(s) BANK-MEMORY relevante(s) no início da conversa
3. Começar com: "Leia este arquivo inteiro. É a memória do meu projeto. Me confirme
   que entendeu o contexto antes de continuarmos."
4. Aguardar confirmação e continuar normalmente

A IA substituta deve também atualizar o BANK-MEMORY ao final de cada resposta relevante.

Localização dos arquivos BANK-MEMORY:
* Backend: Projeto Gerenciador de Biblioteca/Gerenciador-Biblioteca/BANK-MEMORY.md
* Web:     Projeto Gerenciador de Biblioteca/Gerenciador-Biblioteca-Web/BANK-MEMORY.md
* iOS:     Projeto Gerenciador de Biblioteca/Gerenciador-Biblioteca-iOS/BANK-MEMORY.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STACK E VERSÕES EXATAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

* react: ^19.2.4
* react-dom: ^19.2.4
* typescript: ~6.0.2
* vite: ^8.0.4
* @vitejs/plugin-react: ^6.0.1
* tailwindcss: ^4.2.2
* @tailwindcss/vite: ^4.2.2 (integração Tailwind v4 via plugin Vite — sem tailwind.config.js)
* eslint: ^9.39.4
* eslint-plugin-react-hooks: ^7.0.1
* eslint-plugin-react-refresh: ^0.5.2
* @types/react: ^19.2.14
* @types/node: ^24.12.2

IMPORTANTE sobre Tailwind v4:
* Tailwind v4 não usa tailwind.config.js
* A integração é feita via plugin Vite (@tailwindcss/vite)
* O @import "tailwindcss" no index.css ativa tudo
* Classes utilitárias funcionam normalmente
* Valores arbitrários como bg-[#eef7ff] funcionam normalmente

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONFIGURAÇÃO DO VITE (vite.config.ts)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
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

Regras críticas do proxy:
* Chamadas para /api/books no browser → reescritas para /books no backend
* NUNCA criar .env.local com VITE_API_BASE_URL=http://localhost:8080 — quebra o proxy
* strictPort: true garante que o Vite sobe sempre na 8081 ou falha (não muda de porta)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CSS GLOBAL (src/index.css)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```css
@import "tailwindcss";

:root {
  color: #172033;
  background: #eef7ff;
  font-family: var(--font-body);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  --font-display: "Iowan Old Style", "Palatino", "Georgia", serif;
  --font-body: "Avenir Next", "Gill Sans", "Trebuchet MS", sans-serif;
}

* { box-sizing: border-box; }

body {
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  background: #eef7ff;
}

button { font: inherit; }

#root { min-height: 100vh; }
```

Decisões tipográficas:
* --font-display: "Iowan Old Style" → tipografia serifada para títulos, números grandes,
  nomes de livros. Transmite sofisticação literária, remete a livros reais.
* --font-body: "Avenir Next" → sans-serif moderna, limpa, legível para texto corrido
  e labels. Contraste intencional com a display serifada.
* Ambas são fontes do sistema Apple — sem dependência de Google Fonts, sem flash de
  fonte não carregada.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PALETA DE CORES COMPLETA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FUNDO E BASE
* #eef7ff — fundo geral da página (azul pastel muito claro, quase branco)
* #cfe5ff — header/topo (azul pastel um pouco mais escuro que o fundo, sem degradê)
* white/86 a white/90 — cards com leve transparência (efeito glassmorphism suave)

TEXTO
* #172033 — texto principal (quase preto, com tom azulado escuro)
* slate-500 (#64748b) — texto secundário, metadados
* slate-400 (#94a3b8) — texto terciário, labels de progresso

AZUL — cor primária da UI
* #4f7fbd — label de eyebrow no header ("Biblioteca pessoal")
* #6d8fc8 — labels de seção ("Laboratório de design", "Livros")
* #2f5f9f — texto do botão Atualizar
* #b5d4fb — borda do botão Atualizar (normal)
* #8dbdf5 — borda do botão Atualizar (hover)
* #173c72 — texto dos números no card de Acervo
* #5d87c4 — label "Acervo" no card
* #5274a5 — subtexto "livros vindos do backend"
* #e8f2ff — fundo do card Acervo e placeholder de capa
* #dbeafe — ring (borda interna) do placeholder de capa
* #315b99 — iniciais no placeholder (quando não tem capa)
* #cfe0ff — ring (borda interna) do card Acervo e badge de gênero
* #4d73ad — texto do badge de gênero e badge NAO_LIDO
* #eef4ff — fundo do badge NAO_LIDO
* #e6edf7 — fundo da área de progresso e fundo do track da barra
* #f8fbff — fundo do card de progresso e badges de editora
* rgba(102,132,178,x) — sombras dos cards e do hero (tons azulados)
* rgba(83,122,178,x) — sombras do header e do botão

VERDE — status LIDO / em andamento
* #eaf8f0 — fundo do card "Lendo" e badge LIDO
* #174c36 — texto do número no card "Lendo"
* #62a985 — label "Lendo" no card
* #5a836c — subtexto "em andamento"
* #ccefdc — ring do card Lendo e badge LIDO
* #347354 — texto do badge LIDO

AMARELO — status LENDO / lidos concluídos
* #fff7d6 — fundo do card "Lidos" e badge LENDO
* #6f5515 — texto do número no card "Lidos"
* #b69a3d — label "Lidos" no card
* #8e7a38 — subtexto "concluídos"
* #f7e8a8 — ring do card Lidos e badge LENDO
* #826620 — texto do badge LENDO
* #d39f20 — cor da avaliação (bookRating)

VERMELHO/ROSA — status ABANDONADO / páginas / erros
* #ffecef — fundo do card "Páginas" e badge ABANDONADO
* #7b2e3b — texto do número no card "Páginas" e título do estado de erro
* #c56f80 — label "Páginas" no card
* #9d6470 — subtexto "de X no total"
* #ffd3db — ring do card Páginas e badge ABANDONADO
* #9b4655 — texto do badge ABANDONADO
* #fff4f6 — fundo do estado de erro
* #f4a8b6 — fundo do botão "Tentar novamente"
* #f19aaa — hover do botão "Tentar novamente"
* #5b1d29 — texto do botão "Tentar novamente"
* rgba(197,111,128,x) — sombra do estado de erro

GRADIENTE DA BARRA DE PROGRESSO
* bg-[linear-gradient(90deg,#f4a8b6,#f5d869,#9bc0f7,#9de0bd)]
* Ordem semântica: rosa/vermelho → amarelo → azul → verde
* Representa a jornada de leitura: abandono → início → progresso → conclusão
* Decisão intencional de Diego — não é decorativo, é semântico

GRADIENTE DO PLACEHOLDER DE CAPA (quando não há coverUrl)
* bg-[linear-gradient(145deg,#e8f2ff,#eaf8f0_48%,#fff7d6)]
* Usa as três cores principais (azul, verde, amarelo) em diagonal suave

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ESTRUTURA DE ARQUIVOS ATUAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```
Gerenciador-Biblioteca-Web/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── src/
│   ├── main.tsx              ← entry point, monta React no #root
│   ├── App.tsx               ← raiz do app, apenas renderiza <BookList />
│   ├── App.css               ← vazio (1 linha em branco)
│   ├── index.css             ← CSS global, variáveis de fonte, import tailwindcss
│   ├── assets/
│   │   ├── hero.png          ← imagem não utilizada atualmente no layout
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── api/
│   │   └── booksApi.ts       ← getAllBooks(), fetch para /api/books
│   ├── components/
│   │   └── BookCard.tsx      ← card individual de livro
│   ├── hooks/
│   │   └── useBooks.ts       ← hook de estado: loading, refreshing, error, books
│   ├── pages/
│   │   └── BookList.tsx      ← página principal: header + hero + cards
│   └── types/
│       └── Book.ts           ← interface Book e tipo ReadingStatus
└── public/
    ├── favicon.svg
    └── icons.svg
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CÓDIGO COMPLETO — src/types/Book.ts
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
```

Observações:
* Os campos opcionais (null) refletem o que o backend pode ou não retornar
* coverUrl: string | null — quando preenchido, é uma URL https:// do Google Books
* status segue os enums do backend: NAO_LIDO, LENDO, LIDO, ABANDONADO
* bookRating é de 0 a 5, com uma casa decimal (ex: 4.5)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CÓDIGO COMPLETO — src/api/booksApi.ts
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```typescript
import type { Book } from '../types/Book'

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '/api').replace(/\/$/, '')

export async function getAllBooks(signal?: AbortSignal): Promise<Book[]> {
  const response = await fetch(`${API_BASE_URL}/books`, {
    headers: {
      Accept: 'application/json',
    },
    signal,
  })

  if (!response.ok) {
    throw new Error('Nao foi possivel carregar os livros.')
  }

  return response.json() as Promise<Book[]>
}
```

Decisões:
* API_BASE_URL: usa env var VITE_API_BASE_URL se existir, senão usa '/api' (proxy Vite)
* .replace(/\/$/, '') remove barra final para evitar double-slash
* AbortSignal passado para suportar cancelamento quando o componente desmonta
* Accept: application/json explícito — necessário para o Micronaut retornar JSON
* Erro de HTTP (!response.ok) lança exceção que o hook captura

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CÓDIGO COMPLETO — src/hooks/useBooks.ts
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```typescript
import { useEffect, useRef, useState } from 'react'
import { getAllBooks } from '../api/booksApi'
import type { Book } from '../types/Book'

interface UseBooksResult {
  books: Book[]
  isLoading: boolean
  isRefreshing: boolean
  error: string | null
  refresh: () => void
}

export function useBooks(): UseBooksResult {
  const [books, setBooks] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [refreshKey, setRefreshKey] = useState(0)
  const hasLoadedOnce = useRef(false)

  useEffect(() => {
    const controller = new AbortController()

    async function loadBooks() {
      setIsLoading(!hasLoadedOnce.current)
      setIsRefreshing(hasLoadedOnce.current)
      setError(null)

      try {
        const data = await getAllBooks(controller.signal)
        setBooks(data)
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return
        setError('Biblioteca não encontrada. Verifique se o servidor está rodando.')
      } finally {
        if (!controller.signal.aborted) {
          hasLoadedOnce.current = true
          setIsLoading(false)
          setIsRefreshing(false)
        }
      }
    }

    loadBooks()
    return () => controller.abort()
  }, [refreshKey])

  const refresh = () => setRefreshKey(current => current + 1)

  return { books, isLoading, isRefreshing, error, refresh }
}
```

Lógica de estados:
* isLoading: true apenas na PRIMEIRA carga (spinner de carregamento inicial)
* isRefreshing: true nas recargas subsequentes (botão "Sincronizando...")
* hasLoadedOnce (useRef): persiste entre renders sem causar re-render, distingue
  o primeiro carregamento dos subsequentes
* refreshKey: incrementar force-re-executa o useEffect (padrão idiomático React)
* AbortController: cancela fetch quando componente desmonta ou refreshKey muda,
  evitando setState em componente desmontado
* AbortError é silenciado (esperado, não é erro real)
* Qualquer outro erro exibe mensagem amigável em português

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CÓDIGO COMPLETO — src/App.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```typescript
import { BookList } from './pages/BookList'

function App() {
  return <BookList />
}

export default App
```

Intencionalmente minimalista. App.tsx é só o ponto de entrada.
No futuro, quando houver roteamento (React Router), será aqui que as rotas entram.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CÓDIGO COMPLETO — src/pages/BookList.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```typescript
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
      
      {/* HEADER */}
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
        
        {/* HERO — seção de métricas */}
        <section className="grid gap-8 rounded-[2.5rem] border border-white/90 bg-white/76 p-6 shadow-[0_30px_110px_rgba(102,132,178,0.16)] backdrop-blur-xl md:grid-cols-[1.15fr_0.85fr] md:p-10">
          
          {/* Coluna esquerda: título */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#6d8fc8]">
              Laboratório de design
            </p>
            <h2 className="mt-5 max-w-3xl font-[var(--font-display)] text-5xl leading-[0.95] tracking-[-0.07em] text-[#172033] sm:text-6xl lg:text-7xl">
              Sua biblioteca
            </h2>
          </div>

          {/* Coluna direita: 4 cards de métricas em grid 2x2 */}
          <div className="grid grid-cols-2 gap-3">
            {/* Card Acervo — azul */}
            <div className="rounded-[1.75rem] bg-[#e8f2ff] p-5 text-[#173c72] shadow-[0_24px_50px_rgba(112,149,203,0.18)] ring-1 ring-[#cfe0ff]">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#5d87c4]">Acervo</p>
              <p className="mt-4 font-[var(--font-display)] text-5xl tracking-[-0.06em]">
                {numberFormatter.format(books.length)}
              </p>
              <p className="mt-2 text-sm text-[#5274a5]">livros vindos do backend</p>
            </div>
            {/* Card Lendo — verde */}
            <div className="rounded-[1.75rem] bg-[#eaf8f0] p-5 text-[#174c36] ring-1 ring-[#ccefdc]">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#62a985]">Lendo</p>
              <p className="mt-4 font-[var(--font-display)] text-5xl tracking-[-0.06em]">
                {numberFormatter.format(readingBooks)}
              </p>
              <p className="mt-2 text-sm text-[#5a836c]">em andamento</p>
            </div>
            {/* Card Lidos — amarelo */}
            <div className="rounded-[1.75rem] bg-[#fff7d6] p-5 text-[#6f5515] ring-1 ring-[#f7e8a8]">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#b69a3d]">Lidos</p>
              <p className="mt-4 font-[var(--font-display)] text-5xl tracking-[-0.06em]">
                {numberFormatter.format(completedBooks)}
              </p>
              <p className="mt-2 text-sm text-[#8e7a38]">concluídos</p>
            </div>
            {/* Card Páginas — rosa/vermelho */}
            <div className="rounded-[1.75rem] bg-[#ffecef] p-5 text-[#7b2e3b] ring-1 ring-[#ffd3db]">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#c56f80]">Páginas</p>
              <p className="mt-4 font-[var(--font-display)] text-4xl tracking-[-0.06em]">
                {numberFormatter.format(trackedPages)}
              </p>
              <p className="mt-2 text-sm text-[#9d6470]">de {numberFormatter.format(totalPages)}</p>
            </div>
          </div>
        </section>

        {/* LISTA DE LIVROS */}
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

          {/* Estado: carregando */}
          {isLoading && (
            <div className="rounded-[2rem] border border-white/90 bg-white/80 px-6 py-16 text-center shadow-[0_18px_60px_rgba(102,132,178,0.12)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6d8fc8]">Carregando livros...</p>
              <p className="mt-3 text-slate-500">Buscando dados em GET /books.</p>
            </div>
          )}

          {/* Estado: erro */}
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

          {/* Estado: vazio */}
          {!isLoading && !error && books.length === 0 && (
            <div className="rounded-[2rem] border border-white/90 bg-white/80 px-6 py-16 text-center shadow-[0_18px_60px_rgba(102,132,178,0.12)]">
              <p className="font-[var(--font-display)] text-3xl tracking-[-0.04em]">Nenhum livro encontrado.</p>
              <p className="mt-3 text-slate-500">Quando o backend retornar livros, eles aparecem aqui.</p>
            </div>
          )}

          {/* Estado: sucesso — grid de cards */}
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
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CÓDIGO COMPLETO — src/components/BookCard.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```typescript
import type { Book, ReadingStatus } from '../types/Book'

const statusLabel: Record<ReadingStatus, string> = {
  NAO_LIDO: 'Não lido',
  LENDO: 'Lendo',
  LIDO: 'Lido',
  ABANDONADO: 'Abandonado',
}

const statusStyle: Record<ReadingStatus, string> = {
  NAO_LIDO: 'bg-[#eef4ff] text-[#4d73ad] ring-[#cfe0ff]',
  LENDO:    'bg-[#fff7d6] text-[#826620] ring-[#f7e8a8]',
  LIDO:     'bg-[#eaf8f0] text-[#347354] ring-[#ccefdc]',
  ABANDONADO: 'bg-[#ffecef] text-[#9b4655] ring-[#ffd3db]',
}

interface BookCardProps {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  // Progresso: percentual de leitura, null se totalPages não disponível
  const progress = book.totalPages && book.totalPages > 0
    ? Math.min(100, Math.round(((book.currentPage ?? 0) / book.totalPages) * 100))
    : null

  // Iniciais: até 2 palavras do título, primeira letra maiúscula de cada
  const initials = book.title
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase()

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/90 bg-white/86 shadow-[0_24px_70px_rgba(102,132,178,0.15)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_90px_rgba(102,132,178,0.23)]">
      
      {/* TOPO DO CARD: capa + título + autor + status + ano */}
      <div className="relative flex gap-5 p-5">
        
        {/* Capa do livro ou placeholder com iniciais */}
        <div className="h-32 w-24 shrink-0 overflow-hidden rounded-2xl bg-[#e8f2ff] shadow-[0_18px_38px_rgba(102,132,178,0.2)] ring-1 ring-[#dbeafe]">
          {book.coverUrl ? (
            <img
              src={book.coverUrl}
              alt={`Capa de ${book.title}`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(145deg,#e8f2ff,#eaf8f0_48%,#fff7d6)] px-4 text-center font-[var(--font-display)] text-2xl tracking-[0.2em] text-[#315b99]">
              {initials}
            </div>
          )}
        </div>

        {/* Metadados: status + ano + título + autor */}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            {book.status && (
              <span className={`rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] ring-1 ${statusStyle[book.status]}`}>
                {statusLabel[book.status]}
              </span>
            )}
            {book.publishedYear && (
              <span className="text-xs font-semibold text-slate-400">{book.publishedYear}</span>
            )}
          </div>
          <h2 className="mt-4 line-clamp-2 font-[var(--font-display)] text-2xl leading-[1.05] tracking-[-0.03em] text-[#172033]">
            {book.title}
          </h2>
          <p className="mt-2 text-sm font-medium text-slate-500">{book.author}</p>
        </div>
      </div>

      {/* CORPO DO CARD: editora + gênero + progresso + avaliação */}
      <div className="flex flex-1 flex-col gap-5 px-5 pb-5">
        
        {/* Badges: editora e gênero */}
        <div className="flex flex-wrap gap-2">
          {book.publisher && (
            <span className="rounded-full bg-[#f8fbff] px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-[#e6edf7]">
              {book.publisher}
            </span>
          )}
          {book.genre && (
            <span className="rounded-full bg-[#e8f2ff] px-3 py-1 text-xs font-medium text-[#4d73ad] ring-1 ring-[#cfe0ff]">
              {book.genre}
            </span>
          )}
        </div>

        {/* Barra de progresso (só aparece se totalPages disponível) */}
        {progress !== null && (
          <div className="mt-auto rounded-2xl bg-[#f8fbff] p-4 ring-1 ring-[#e6edf7]">
            <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              <span>Progresso</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-[#e6edf7]">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,#f4a8b6,#f5d869,#9bc0f7,#9de0bd)] transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
              <span>{book.currentPage ?? 0} páginas lidas</span>
              <span>{book.totalPages} no total</span>
            </div>
          </div>
        )}

        {/* Avaliação (só aparece se bookRating existir) */}
        {book.bookRating !== null && book.bookRating !== undefined && (
          <p className="text-sm font-medium text-slate-500">
            Avaliação <span className="text-[#d39f20]">{book.bookRating} / 5</span>
          </p>
        )}
      </div>
    </article>
  )
}
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LAYOUT E ESTRUTURA VISUAL — DESCRIÇÃO DETALHADA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HEADER (topo fixo visual, não sticky)
* Fundo: #cfe5ff (azul pastel um pouco mais escuro que o body)
* Sem degradê — cor sólida, decisão consciente de Diego
* Sombra: 0_18px_54px_rgba(83,122,178,0.12) — sutil, azulada
* Conteúdo: max-w-7xl, centralizado, flex justify-between
* Esquerda: eyebrow label "Biblioteca pessoal" + título h1 "Gerenciador de Biblioteca"
* Direita: botão "Atualizar" / "Sincronizando..." — pill arredondado, borda fina

HERO / SEÇÃO DE MÉTRICAS
* Container: grid 2 colunas (1.15fr + 0.85fr) em md:, 1 coluna em mobile
* Estilo glassmorphism: bg-white/76 + backdrop-blur-xl + border border-white/90
* Rounded: 2.5rem (cantos muito arredondados — identidade visual do projeto)
* Sombra: 0_30px_110px_rgba(102,132,178,0.16)
* Coluna esquerda: eyebrow "Laboratório de design" + h2 gigante "Sua biblioteca"
  * Fonte display, text-5xl → 6xl → 7xl conforme breakpoint
  * leading-[0.95] e tracking-[-0.07em] — tipografia compacta e editorial
* Coluna direita: grid 2x2 com 4 cards de métricas
  * Acervo (azul): total de livros
  * Lendo (verde): livros com status LENDO
  * Lidos (amarelo): livros com status LIDO
  * Páginas (rosa): páginas lidas / total

GRID DE CARDS DE LIVROS
* 1 coluna em mobile, 2 em md:, 3 em xl:
* gap-5 entre cards
* Cada card tem altura flexível (flex flex-col h-full)

CARD DE LIVRO (BookCard)
* Container: rounded-[2rem], glassmorphism (white/86), hover lift (-translate-y-1)
* Sombra aumenta no hover (de 0.15 para 0.23 opacity)
* Topo: capa (96×128px, rounded-2xl) + metadados à direita
* Capa: mostra coverUrl se existir; senão, gradiente com iniciais (display font)
* Badge de status: pill pequeno, cor semântica conforme status
* Ano de publicação: alinhado à direita, text-slate-400
* Título: line-clamp-2, display font, text-2xl
* Corpo: badges de editora/gênero + barra de progresso + avaliação
* Barra de progresso: degradê semântico rosa→amarelo→azul→verde, animated

ESTADOS DA TELA
* Carregando: card centralizado, texto azul em caps, mensagem discreta
* Erro: card em tons rosados, título display em vermelho escuro, botão "Tentar novamente"
* Vazio: card neutro, mensagem informativa em display font
* Sucesso: grid de BookCards

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DECISÕES DE DESIGN — HISTÓRICO E RATIONALE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

* SEM degradê no topo e SEM degradê no fundo geral
  → Decisão de Diego após testar. Cor sólida é mais limpa e intencional.
* Hero mantém "Laboratório de design" e "Sua biblioteca"
  → SEM o complemento "com calma e presença." e sem texto descritivo abaixo
  → Mais minimalista, mais editorial
* Barra de progresso com degradê semântico
  → rosa → amarelo → azul → verde = abandono → início → meio → conclusão
  → Não é decorativo: cada cor tem significado dentro do sistema de status
* Glassmorphism suave (não exagerado)
  → backdrop-blur-xl apenas nos painéis principais (hero e cards)
  → Não em tudo — usados com parcimônia para não poluir
* Tipografia serifada para títulos e números
  → Remete ao universo de livros, editorial, literário
  → Contraste intencional com o sans-serif do corpo
* Fontes do sistema Apple
  → Zero dependência externa, zero FOUC (Flash Of Unstyled Content)
  → Iowan Old Style é exclusiva de dispositivos Apple — fallbacks para Palatino/Georgia
* Rounded agressivo (2rem, 2.5rem)
  → Identidade moderna e suave, afasta o visual de "dashboard corporativo"
* Cores pastel com variações semânticas por categoria
  → Azul = informação/acervo, Verde = progresso/conclusão, Amarelo = ativo/lendo,
     Rosa/vermelho = alerta/abandono
  → Consistência em toda a UI: badges, cards de métricas e barra de progresso usam
     o mesmo sistema de cores

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONEXÃO COM O BACKEND
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

* Web: http://localhost:8081
* Backend: http://localhost:8080
* Proxy Vite: /api/* → http://localhost:8080/* (rewrite remove /api)
* NUNCA criar .env.local com VITE_API_BASE_URL absoluta — quebra o proxy
* Backend precisa estar rodando antes do web
* Endpoint atualmente consumido: GET /books

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
O QUE AINDA NÃO EXISTE NO FRONTEND
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

* Roteamento (React Router) — não instalado
* Tela de detalhe do livro — não existe
* Formulário de cadastro de nova edição — não existe
* Filtros por status de leitura — não existe
* Busca por título/autor — não existe
* Paginação ou virtualização da lista — não existe
* Modo escuro — não implementado
* Animações de entrada dos cards — não implementado
* Skeleton loading (placeholder animado enquanto carrega) — não implementado;
  atual é apenas texto "Carregando livros..."
* Internacionalização — não implementado (textos hardcoded em pt-BR)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRÓXIMOS PASSOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. REDESIGN do frontend — Diego planeja usar o Claude Design para isso.
   O BANK-MEMORY foi populado com máximo de detalhes justamente para isso:
   qualquer IA (incluindo ferramentas de design do Claude) deve conseguir entender
   exatamente o que existe hoje, o que Diego quer preservar e o que pode mudar.
2. Rodar o backend e o Vite juntos para validar integração real no navegador
3. Criar tela de detalhe do livro
4. Criar componentes reutilizáveis (badges, barra de progresso standalone, skeletons)
5. Futuramente: consumir endpoints de métricas quando o backend disponibilizar

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HISTÓRICO DE SESSÕES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20/04/2026 — Sessão de organização, memória e preparação para redesign
* Diego solicitou leitura dos 3 BANK-MEMORYs ao início da sessão
* Diego solicitou atualização das instruções da IA: atualização por resposta,
  instruções didáticas, continuidade com outras IAs, sem limite de tamanho
* Diego cogitou apagar o banco de dados para começar do zero, mas decidiu manter
  após entender que as migrations re-inseririam os dados ao subir o backend.
  Decisão final: banco permanece como está.
* Diego planeja usar o Claude Design para redesenhar o frontend web.
  Este BANK-MEMORY foi populado com o máximo de detalhes (código completo de todos
  os arquivos, paleta completa, decisões de design, rationale) exatamente para isso.
* Nenhuma implementação técnica foi feita nesta sessão.

Frase de encerramento: "Boa hora para abrir um novo chat e garantir precisão."
