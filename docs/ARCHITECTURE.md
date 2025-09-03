# 🏗️ Arquitetura do Projeto

## 📁 Estrutura de Diretórios

```
fluxo-certo/
├── 📚 docs/                          # Documentação do projeto
│   ├── README.md                     # Índice da documentação
│   ├── DOCKER_GUIDE.md              # Guia do Docker
│   └── ARCHITECTURE.md              # Este arquivo
│
├── 📦 packages/                      # Monorepo com pacotes
│   ├── 📱 frontend/                  # Aplicação React
│   │   ├── src/
│   │   │   ├── components/           # Componentes reutilizáveis
│   │   │   │   ├── Button/
│   │   │   │   ├── Header/
│   │   │   │   └── Footer/
│   │   │   ├── pages/                # Páginas da aplicação
│   │   │   │   └── HomePage.tsx
│   │   │   └── services/             # Serviços e APIs
│   │   │       └── api.ts
│   │   ├── package.json
│   │   └── Dockerfile
│   │
│   └── 🚀 backend/                   # API Node.js
│       ├── src/
│       │   ├── controllers/          # Controllers da API
│       │   │   └── leadController.ts
│       │   ├── services/             # Lógica de negócio
│       │   │   └── leadService.ts
│       │   ├── routes/               # Definição de rotas
│       │   │   └── leadRoutes.ts
│       │   ├── types/                # Tipos TypeScript
│       │   │   └── schemas.ts
│       │   ├── lib/                  # Utilitários
│       │   │   └── prisma.ts
│       │   └── index.ts              # Ponto de entrada
│       ├── prisma/
│       │   └── schema.prisma         # Schema do banco
│       ├── package.json
│       └── Dockerfile
│
├── 🐳 docker-compose.yml             # Orquestração dos serviços
├── 🛠️ docker.bat                     # Script de gerenciamento
├── 📋 package.json                   # Configuração do monorepo
├── 📖 README.md                      # Documentação principal
├── 🛣️ ROADMAP.md                     # Cronograma do projeto
└── 🔄 NEXT_STEPS.md                  # Próximas tarefas
```

## 🏛️ Arquitetura da Aplicação

### **Frontend (React + Vite)**

```
┌─────────────────────────────────────┐
│              FRONTEND               │
│                                     │
│  ┌─────────────┐  ┌─────────────┐   │
│  │  Components │  │    Pages    │   │
│  │   (UI Kit)  │  │  HomePage   │   │
│  └─────────────┘  └─────────────┘   │
│           │              │          │
│           └──────┬───────┘          │
│                  │                  │
│           ┌─────────────┐            │
│           │  Services   │            │
│           │ (API Calls) │            │
│           └─────────────┘            │
└─────────────────┬───────────────────┘
                  │ HTTP Requests
                  ▼
```

### **Backend (Node.js + Express + Prisma)**

```
┌─────────────────────────────────────┐
│               BACKEND               │
│                                     │
│  ┌─────────────┐  ┌─────────────┐   │
│  │ Controllers │  │   Routes    │   │
│  │  (HTTP)     │◄─┤  (Express)  │   │
│  └─────────────┘  └─────────────┘   │
│           │                         │
│           ▼                         │
│  ┌─────────────┐  ┌─────────────┐   │
│  │  Services   │  │    Types    │   │
│  │ (Business)  │◄─┤ (Validation)│   │
│  └─────────────┘  └─────────────┘   │
│           │                         │
│           ▼                         │
│  ┌─────────────┐                    │
│  │   Prisma    │                    │
│  │    (ORM)    │                    │
│  └─────────────┘                    │
└─────────────────┬───────────────────┘
                  │ SQL
                  ▼
```

### **Banco de Dados (PostgreSQL)**

```
┌─────────────────────────────────────┐
│             DATABASE                │
│                                     │
│  ┌─────────────┐  ┌─────────────┐   │
│  │    leads    │  │appointments │   │
│  │      │      │  │      │      │   │
│  │   ┌─────┐   │  │   ┌─────┐   │   │
│  │   │Lead │   │  │   │Appt │   │   │
│  │   │Data │   │  │   │Data │   │   │
│  │   └─────┘   │  │   └─────┘   │   │
│  └─────────────┘  └─────────────┘   │
│           │              ▲          │
│           └──────────────┘          │
│              1:N Relationship       │
└─────────────────────────────────────┘
```

## 🔄 Fluxo de Dados

### **Captura de Lead**

```
User Input (Frontend)
    ↓
Form Validation (React)
    ↓
API Request (Frontend Service)
    ↓
Route Handler (Express)
    ↓
Controller (Validation)
    ↓
Service (Business Logic)
    ↓
Prisma (Database)
    ↓
Response (Success/Error)
    ↓
Frontend Update
```

### **Integração Externa (Futura)**

```
Lead Created
    ↓
Webhook to n8n
    ↓
Lead Processing
    ↓
WhatsApp Notification (WAHA)
    ↓
Email/Slack Notification
```

## 🔧 Tecnologias por Camada

| Camada          | Tecnologias                          |
| --------------- | ------------------------------------ |
| **Frontend**    | React 19, TypeScript, Vite, CSS3     |
| **Backend**     | Node.js, Express, TypeScript, Prisma |
| **Banco**       | PostgreSQL, Docker                   |
| **Ferramentas** | Docker Compose, ESLint, Prettier     |
| **Integrações** | n8n (externo), WAHA (externo)        |

## 📊 Escalabilidade

- **Frontend**: Build estático, pode ser servido via CDN
- **Backend**: Stateless, pode escalar horizontalmente
- **Banco**: PostgreSQL com possibilidade de read replicas
- **Docker**: Fácil deploy em qualquer ambiente
