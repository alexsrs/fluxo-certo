# Fluxo Certo - Landing Page para Automação B2B

Uma landing page de alta conversão para venda de fluxos de automação empresarial, desenvolvida com foco em performance, SEO e experiência do usuário.

## 🚀 Status do Projeto

**Versão:** 1.1.0-beta  
**Última atualização:** 03/09/2025  
**Fase atual:** 2 - Finalizando Landing Page  
**Progresso geral:** 75% (168h de 280h)

### ✅ Concluído (Fase 1 + 3)

- Arquitetura monorepo TypeScript configurada
- Docker + PostgreSQL + API funcionando 100%
- Schema Prisma com modelos Lead e Appointment
- API REST completa com endpoints CRUD
- Componentes UI base (Button, Header, Footer)
- Linters, formatters e hooks configurados

### 🔄 Em Andamento (Fase 2 - 85% Completa)

- ✅ Todas as seções principais da landing page implementadas
- ✅ Formulário de contato completo com validação robusta
- ✅ Modal responsivo integrado à API backend
- ✅ Service layer para comunicação full-stack
- ✅ Design profissional com prova social e métricas
- 🔄 Refinamentos finais de responsividade mobile
- 🔄 Animações de scroll e micro-interações

## 🛠️ Stack Tecnológica

### Frontend

- **React 19** com TypeScript
- **Vite** para build e desenvolvimento
- **CSS Modules** para estilização
- **ESLint + Prettier** para qualidade de código

### Backend

- **Node.js + Express** com TypeScript
- **Prisma ORM** para banco de dados
- **PostgreSQL** como SGBD principal
- **Validação** com middleware customizado

### DevOps e Infraestrutura

- **Docker + Docker Compose** para containers
- **Husky** para git hooks pré-commit
- **Monorepo** com workspaces do npm

### Integrações Planejadas

- **n8n** para automação de fluxos de trabalho
- **WAHA** para integração com WhatsApp
- **Google Analytics** para tracking de conversões

## 🏗️ Arquitetura do Projeto

```
fluxo-certo/
├── packages/
│   ├── frontend/          # React + Vite
│   │   ├── src/
│   │   │   ├── components/   # Button, Header, Footer
│   │   │   ├── pages/        # HomePage
│   │   │   └── services/     # API integration
│   │   └── package.json
│   └── backend/           # Node.js + Express
│       ├── src/
│       │   ├── controllers/  # Request handlers
│       │   ├── services/     # Business logic
│       │   ├── routes/       # API endpoints
│       │   └── index.ts      # App entry point
│       ├── prisma/
│       │   └── schema.prisma # Database models
│       └── package.json
├── docker-compose.yml     # Container orchestration
├── docker.bat            # Windows container management
└── docs/                 # Project documentation
```

## 🚀 Quick Start

### Pré-requisitos

- **Node.js** 20+
- **Docker Desktop**
- **Git**

### Instalação e Execução

1. **Clone o repositório:**

```powershell
git clone https://github.com/alexsrs/fluxo-certo.git
cd fluxo-certo
```

2. **Instale as dependências:**

```powershell
npm install
```

3. **Inicie o ambiente Docker:**

```powershell
.\docker.bat up
```

4. **Acesse a aplicação:**

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:3001
- **PostgreSQL:** localhost:5432

### Comandos Úteis

```powershell
# Parar containers
.\docker.bat down

# Ver logs em tempo real
.\docker.bat logs

# Executar migrations do Prisma
docker exec fluxo-certo-backend-1 npx prisma migrate dev

# Acessar Prisma Studio
docker exec fluxo-certo-backend-1 npx prisma studio
```

## 📊 API Endpoints

### Leads

```
GET    /api/leads        # Listar leads com paginação
POST   /api/leads        # Criar novo lead
GET    /api/leads/:id    # Buscar lead específico
PUT    /api/leads/:id    # Atualizar lead
DELETE /api/leads/:id    # Excluir lead
```

### Sistema

```
GET    /               # Status do servidor
GET    /health         # Health check da aplicação
```

**Exemplo de uso:**

```javascript
// Criar um novo lead
const response = await fetch('http://localhost:3001/api/leads', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'João Silva',
    email: 'joao@empresa.com',
    phone: '(11) 99999-9999',
    company: 'Empresa XYZ',
  }),
});
```

## 📋 Modelos de Dados

### Lead

```typescript
{
  id: string           # UUID único
  name: string         # Nome completo
  email: string        # Email (único)
  phone?: string       # Telefone (opcional)
  company?: string     # Empresa (opcional)
  status: LeadStatus   # NEW | CONTACTED | QUALIFIED | CONVERTED | LOST
  source?: string      # Fonte de captação
  createdAt: Date      # Data de criação
  updatedAt: Date      # Última atualização
}
```

### Appointment

```typescript
{
  id: string              # UUID único
  leadId: string          # Referência ao Lead
  scheduledFor: Date      # Data/hora agendada
  status: AppointmentStatus # SCHEDULED | CONFIRMED | COMPLETED | CANCELLED
  notes?: string          # Observações
  createdAt: Date         # Data de criação
  updatedAt: Date         # Última atualização
}
```

## 🎯 Objetivos de Negócio

### Métricas Alvo

- **Conversão:** > 3% de visitantes em leads qualificados
- **Performance:** < 3s tempo de carregamento (Core Web Vitals)
- **SEO:** Posicionamento top 10 para palavras-chave alvo
- **Automação:** > 90% dos leads processados automaticamente

### Fluxo de Conversão

1. **Visitante** acessa a landing page
2. **Captura** de interesse através de CTAs estratégicos
3. **Qualificação** via formulário otimizado
4. **Automação** com n8n + WhatsApp (WAHA)
5. **Conversão** em reunião comercial agendada

## 📅 Roadmap

| Fase       | Descrição                 | Status              | Prazo    |
| ---------- | ------------------------- | ------------------- | -------- |
| **Fase 1** | Fundação e infraestrutura | ✅ **Concluída**    | Set/2025 |
| **Fase 2** | Landing page e UX         | 🔄 **Em andamento** | Out/2025 |
| **Fase 3** | Backend e banco de dados  | ✅ **Concluída**    | Set/2025 |
| **Fase 4** | Automações (n8n + WAHA)   | 🔲 Pendente         | Nov/2025 |
| **Fase 5** | Deploy e otimizações      | 🔲 Pendente         | Dez/2025 |

Ver [ROADMAP.md](./ROADMAP.md) para detalhes completos.

## 📖 Documentação

- **[ROADMAP.md](./ROADMAP.md)** - Planejamento detalhado das fases
- **[NEXT_STEPS.md](./NEXT_STEPS.md)** - Próximas tarefas imediatas
- **[FILE-TREE.md](./FILE-TREE.md)** - Estrutura completa do projeto
- **[docs/](./docs/)** - Documentação técnica detalhada

## 🤝 Contribuição

Este é um projeto em desenvolvimento ativo. Todas as contribuições seguem os padrões definidos:

- **TypeScript** para type safety
- **ESLint + Prettier** para code style
- **Conventional Commits** para mensagens
- **Husky** para hooks pré-commit

## 📞 Contato e Suporte

**Developed by:** alexsrs e Dagoberto (GitHub Copilot)  
**Repository:** https://github.com/alexsrs/fluxo-certo  
**Issues:** Use GitHub Issues para bugs e feature requests

---

**Última atualização:** 03/09/2025 - Sistema totalmente funcional com Docker + API + Banco de dados operacionais. Próximo foco: desenvolvimento das seções da landing page.

## 4. Setup do Ambiente

### Pré-requisitos

- Docker e Docker Compose instalados
- Node.js 20+ (para desenvolvimento local)
- Git

### Iniciando com Docker (Recomendado)

1. **Clone e acesse o projeto:**

```powershell
git clone <repository-url>
cd fluxo-certo
```

2. **Inicie todos os serviços:**

```powershell
docker-compose up -d
```

3. **Configure o banco de dados:**

```powershell
cd packages/backend
npx prisma generate
npx prisma migrate dev --name init
```

4. **Acesse os serviços:**

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001
- n8n (Automação): http://localhost:5678 (admin/admin123)
- pgAdmin: http://localhost:5050 (admin@fluxocerto.com/admin123)

### Desenvolvimento Local (Alternativo)

1. **Instale dependências:**

```powershell
npm install
cd packages/backend && npm install
cd ../frontend && npm install
```

2. **Configure variáveis de ambiente:**

```powershell
cp packages/backend/.env.example packages/backend/.env
```

3. **Inicie os serviços:**

```powershell
# Terminal 1 - Backend
cd packages/backend
npm run dev

# Terminal 2 - Frontend
cd packages/frontend
npm run dev
```

## 5. Documentação

### 📚 **Documentação Completa**

- 📖 [Índice de Documentação](./docs/README.md) - Acesso centralizado a toda documentação
- 🐳 [Guia Docker](./docs/DOCKER_GUIDE.md) - Setup completo com containers

### 📋 **Planejamento**

- �️ [Roadmap do Projeto](./ROADMAP.md) - Cronograma detalhado de 280h
- 🔄 [Próximos Passos](./NEXT_STEPS.md) - Tarefas prioritárias imediatas

### � **Configuração**

- ⚙️ [Variáveis de Ambiente](./packages/backend/.env.example)
- 🗄️ [Schema do Banco](./packages/backend/prisma/schema.prisma)
