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
* URL base atual: http://localhost:8080
* Endpoint consumido: GET /books
* O backend precisa estar rodando antes de abrir o web
* Se o backend estiver offline, o web exibe: "Biblioteca não encontrada. Verifique se o servidor está rodando."

Model — Book.ts
Interface TypeScript usada pelo frontend:
* id: number
* title: string
* author: string
* genre: string | null
* totalPages: number | null
* currentPage: number | null
* status: string | null
* bookRating: number | null
* publisher: string | null

Fluxo Atual
* App.tsx renderiza BookList
* BookList usa useBooks para buscar livros e renderiza estados de carregamento, erro, vazio e sucesso
* useBooks chama GET http://localhost:8080/books com fetch
* BookCard exibe titulo, autor, editora, genero, status, progresso de leitura e avaliacao
* Status mapeados: NAO_LIDO, LENDO, LIDO, ABANDONADO

Direção de Design
* Projeto web é o laboratório principal de design
* Objetivo visual: bonito, moderno, responsivo, clean, minimalista e elegante
* Evitar visual genérico de template
* Buscar uma identidade consistente antes de portar ideias para o iOS
* Futuras decisões de tipografia, cores, espaçamento, cards, animações e layout devem ser registradas aqui

Endpoints Consumidos
* GET /books — retorna lista de todos os livros

Pendências Críticas
Nenhuma pendência crítica no momento.

Próximos Passos
1. Definir a linguagem visual base do web
2. Evoluir a tela de lista de livros como vitrine visual do produto
3. Criar tela de detalhe do livro no web antes de levar a ideia para o iOS
4. Planejar componentes reutilizáveis para cards, badges, progresso e estados vazios
5. Futuramente consumir endpoints de métricas quando o backend disponibilizar

Frase de encerramento: "Boa hora para abrir um novo chat e garantir precisão."
