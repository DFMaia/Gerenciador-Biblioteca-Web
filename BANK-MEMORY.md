BANK-MEMORY — Gerenciador de Biblioteca Web
Instrução para a IA: Leia este arquivo inteiro no início de cada sessão antes de qualquer resposta. Ele é a memória principal do projeto web. Ao final de cada sessão, reescreva este arquivo com tudo que foi decidido, aprendido ou alterado.

Sobre o Projeto
Frontend web do aplicativo pessoal de gerenciamento de biblioteca. Produto real e também laboratório de design para validar a linguagem visual antes de levá-la ao app iOS.
* Criar um site bem bonito, moderno, responsivo, clean, minimalista e elegante
* Servir como laboratório visual e de experiência do produto
* Exibir lista de livros com dados principais vindos do backend Java/Micronaut
* Acompanhar progresso de leitura
* Exibir métricas e estatísticas no futuro
* Inspirar a futura linguagem visual do app iOS quando estiver maduro

Sobre o Diego
* Usa Mac, IntelliJ IDEA, MySQL Community, Postman, Xcode e ambiente web local
* Tem depressão crônica e é autista com superdotação
* Dias de crise: ritmo mais leve, sem pressão
* Às vezes se chama de burro quando erra — lembrar que NÃO É BURRICE
* Estilo: progressivo — pensa → discute → implementa
* IMPORTANTE: Diego tem depressão severa. Em momentos de crise, priorizar bem-estar antes de qualquer código. CVV: 188.

Instruções para a IA
* Projeto tratado como real, de produção
* Nunca assumir, nunca inferir — perguntar antes de agir
* Sempre avisar proativamente sobre melhorias
* A IA é guia, professor e colega sênior (TechLead) — não executor
* SÓ fornecer código completo quando Diego pedir explicitamente
* Para frontend/design, evitar resultado genérico. A direção visual deve ser intencional, moderna, responsiva, limpa, minimalista e elegante
* O web pode experimentar mais livremente; o iOS deve herdar a ideia visual só depois que o design estiver maduro

Stack
* Linguagem: TypeScript
* UI: React 19
* Build/dev server: Vite 8
* Estilo: Tailwind CSS 4
* Lint: ESLint
* Backend consumido: Java 21, Micronaut 4.10.11, Maven, MySQL, Flyway

Estrutura de Arquivos Atual

```
Gerenciador-Biblioteca-Web/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── api/
│   │   └── booksApi.ts
│   ├── components/
│   │   └── BookCard.tsx
│   ├── hooks/
│   │   └── useBooks.ts
│   ├── pages/
│   │   └── BookList.tsx
│   └── types/
│       └── Book.ts
└── public/
    ├── favicon.svg
    └── icons.svg
```

Conexão com o Backend
* Aplicacao web deve ser executada em http://localhost:8081
* No browser, a chamada padrao e feita para /api/books
* O Vite proxy redireciona /api para http://localhost:8080 durante desenvolvimento local
* Endpoint real consumido: GET http://localhost:8080/books, que corresponde ao BookController.getAllBooks()
* A URL base pode ser sobrescrita com VITE_API_BASE_URL quando necessario
* O backend precisa estar rodando antes de abrir o web
* Se o backend estiver offline, o web exibe: "Biblioteca não encontrada. Verifique se o servidor está rodando."

Model — Book.ts
Interface TypeScript usada pelo frontend:
* id: number
* title: string
* author: string
* genre: string | null
* description: string | null
* coverUrl: string | null
* isbn: string | null
* totalPages: number | null
* publishedYear: number | null
* currentPage: number | null
* startDate: string | null
* endDate: string | null
* status: ReadingStatus | null (NAO_LIDO, LENDO, LIDO, ABANDONADO)
* bookRating: number | null
* publisher: string | null

Fluxo Atual
* App.tsx renderiza BookList
* booksApi.ts centraliza getAllBooks() e chama GET /api/books com Accept: application/json
* useBooks usa getAllBooks(), AbortController e estados de loading, refreshing, erro e sucesso
* BookList renderiza hero, indicadores do acervo, estados de carregamento/erro/vazio e grid responsivo
* BookCard exibe capa ou iniciais, titulo, autor, editora, genero, ano, status, progresso de leitura e avaliacao
* Status mapeados: NAO_LIDO, LENDO, LIDO, ABANDONADO

Direção de Design
* Projeto web é o laboratório principal de design
* Objetivo visual: bonito, moderno, responsivo, clean, minimalista e elegante
* Direção visual em teste: tons claros com base branca/azulada e acentos pastel em azul, verde, amarelo e vermelho/rosa
* Ajuste visual decidido: sem degradê no topo e sem degradê no fundo geral; topo em azul pastel um pouco mais escuro e corpo em azul pastel claro uniforme
* Hero principal deve manter "Laboratório de design" e o titulo "Sua biblioteca", mas sem o complemento "com calma e presença." e sem o texto descritivo abaixo
* Barra de progresso deve usar degradê com ordem semântica: vermelho pastel → amarelo pastel → azul pastel → verde pastel
* Mantido da primeira direção: tipografia serifada para títulos, cards arredondados, sombras suaves e layout responsivo
* Evitar visual genérico de template
* Buscar uma identidade consistente antes de portar ideias para o iOS
* Futuras decisões de tipografia, cores, espaçamento, cards, animações e layout devem ser registradas aqui

Endpoints Consumidos
* GET /books — retorna lista de todos os livros

Pendências Críticas
Nenhuma pendência crítica no momento.

Próximos Passos
1. Rodar o backend em localhost:8080 e o Vite em localhost:8081 para validar a integração real no navegador
2. Evoluir a tela de lista de livros como vitrine visual do produto
3. Criar tela de detalhe do livro no web antes de levar a ideia para o iOS
4. Planejar componentes reutilizáveis para cards, badges, progresso e estados vazios
5. Futuramente consumir endpoints de métricas quando o backend disponibilizar

Frase de encerramento: "Boa hora para abrir um novo chat e garantir precisão."
