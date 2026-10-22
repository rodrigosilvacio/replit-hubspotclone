# HubCRM

Uma plataforma de CRM (Customer Relationship Management) para empresas em crescimento, construída com React e Express.

## Sobre o Projeto

HubCRM é uma aplicação web full-stack que permite gerenciar relacionamentos com clientes. A aplicação oferece uma interface moderna para visualização e gestão de contatos, com uma arquitetura que separa o frontend (React) do backend (Express).

## Funcionalidades Principais

- **Gestão de Contatos**: Visualização de contatos em tabela com busca por nome, email e empresa
- **Dashboard de Contatos**: Interface com informações de nome, email, telefone, empresa, status e última atividade
- **Filtros e Pesquisa**: Campo de busca para filtrar contatos em tempo real
- **Exportação de Dados**: Botão para exportar dados de contatos
- **Navegação Lateral**: Menu de navegação com seções para Contacts, Companies, Deals, Tickets, Tasks, Marketing, Sales, Service e Reports
- **Interface Responsiva**: Layout adaptável com design moderno

## Stack Tecnológica

### Frontend
- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS 4** - Framework de estilos utilitários
- **Radix UI** - Componentes de interface acessíveis
- **shadcn/ui** - Sistema de componentes
- **TanStack Query** - Gerenciamento de estado e cache de dados
- **Wouter** - Roteamento client-side
- **Lucide React** - Ícones

### Backend
- **Express 5** - Framework web para Node.js
- **TypeScript** - Tipagem estática
- **Drizzle ORM** - ORM para banco de dados
- **PostgreSQL** - Banco de dados relacional
- **Zod** - Validação de schemas

### Ferramentas de Desenvolvimento
- **tsx** - Execução de TypeScript em Node.js
- **esbuild** - Bundler para build de produção
- **drizzle-kit** - CLI para migrations do Drizzle

## Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd rest-express
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente (veja seção abaixo).

4. Execute as migrations do banco de dados (se necessário):
```bash
npm run db:push
```

## Execução

### Desenvolvimento
```bash
npm run dev
```
O servidor inicia em `http://localhost:5000` (ou na porta definida pela variável `PORT`).

### Produção
```bash
npm run build
npm start
```

### Verificação de Tipos
```bash
npm run check
```

## Variáveis de Ambiente

| Nome | Descrição |
|------|-----------|
| `DATABASE_URL` | URL de conexão com o banco de dados PostgreSQL |
| `PORT` | Porta do servidor (padrão: 5000) |
| `NODE_ENV` | Ambiente de execução (`development` ou `production`) |

## Estrutura de Pastas

```
.
├── client/                 # Código do frontend
│   ├── public/             # Arquivos estáticos públicos
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   │   ├── layout/     # Componentes de layout (Header, Sidebar, MainLayout)
│   │   │   └── ui/         # Componentes de UI (shadcn/ui)
│   │   ├── hooks/          # Hooks customizados
│   │   ├── lib/            # Utilitários e configurações
│   │   ├── pages/          # Páginas da aplicação
│   │   ├── App.tsx         # Componente principal
│   │   ├── index.css       # Estilos globais
│   │   └── main.tsx        # Ponto de entrada
│   └── index.html          # Template HTML
├── server/                 # Código do backend
│   ├── index.ts            # Ponto de entrada do servidor
│   ├── routes.ts           # Definição de rotas da API
│   ├── storage.ts          # Interface de armazenamento
│   ├── static.ts           # Servir arquivos estáticos
│   └── vite.ts             # Integração com Vite (dev)
├── shared/                 # Código compartilhado
│   └── schema.ts           # Schemas do banco de dados (Drizzle)
├── script/                 # Scripts de build
│   └── build.ts            # Script de build para produção
├── package.json            # Dependências e scripts
├── tsconfig.json           # Configuração do TypeScript
├── vite.config.ts          # Configuração do Vite
├── drizzle.config.ts       # Configuração do Drizzle
└── components.json         # Configuração do shadcn/ui
```

## Licença

MIT
