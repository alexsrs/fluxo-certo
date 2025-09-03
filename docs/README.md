# 📚 Documentação do Projeto Fluxo Certo

Esta pasta contém toda a documentação técnica e guias do projeto.

## 📋 Índice de Documentação

### 🚀 **Primeiros Passos**

- [README.md](../README.md) - Visão geral do projeto e stack tecnológica
- [ROADMAP.md](../ROADMAP.md) - Cronograma detalhado de desenvolvimento
- [NEXT_STEPS.md](../NEXT_STEPS.md) - Próximas tarefas prioritárias

### 🐳 **Docker & Infraestrutura**

- [DOCKER_GUIDE.md](./DOCKER_GUIDE.md) - Guia completo para usar Docker no projeto

### 🏗️ **Arquitetura**

- [ARCHITECTURE.md](./ARCHITECTURE.md) - Estrutura detalhada do projeto e fluxo de dados

### 🔧 **Configuração**

- [.env.example](../packages/backend/.env.example) - Variáveis de ambiente do backend
- [docker-compose.yml](../docker-compose.yml) - Configuração dos serviços Docker

### 📁 **Estrutura do Projeto**

```
fluxo-certo/
├── docs/                    # 📚 Documentação
├── packages/
│   ├── frontend/           # 📱 React + Vite
│   └── backend/            # 🚀 Node.js + Express + Prisma
├── docker-compose.yml      # 🐳 Configuração Docker
├── docker.bat             # 🛠️ Script de gerenciamento
└── README.md              # 📖 Documentação principal
```

## 🔗 Links Úteis

### **URLs de Desenvolvimento**

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001
- PostgreSQL: localhost:5432
- pgAdmin: http://localhost:5050 (quando habilitado)

### **Comandos Rápidos**

```powershell
# Iniciar ambiente de desenvolvimento
.\docker.bat up

# Ver logs dos serviços
.\docker.bat logs

# Parar serviços
.\docker.bat down
```

---

💡 **Dica**: Mantenha esta documentação sempre atualizada conforme o projeto evolui!
