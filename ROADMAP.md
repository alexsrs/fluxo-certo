# Roadmap do Projeto: Landing Page de Automação B2B

Este documento descreve as principais fases do desenvolvimento do projeto, desde a concepção até o lançamento. O tempo total estimado para o projeto é de **280 horas**.

---

### Fase 1: Estrutura e Fundação do Projeto (≈40 horas)

- [x] Definição da arquitetura (Monorepo vs. Repositórios separados) - (4 horas)
- [ ] Configuração do ambiente de desenvolvimento (Docker, linters, formatters) - (16 horas)
- [x] Inicialização dos projetos front-end (React/Vite) e back-end (Node/Express) - (8 horas)
- [ ] Definição do schema inicial do banco de dados com Prisma - (12 horas)

---

### Fase 2: Desenvolvimento da Landing Page - Front-end (≈80 horas)

- [ ] Criação do wireframe e design UI/UX da página - (24 horas)
- [ ] Desenvolvimento dos componentes React reutilizáveis (Header, Footer, Button, Card) - (16 horas)
- [ ] Desenvolvimento das seções da página:
  - [ ] Seção Herói (Proposta de valor clara) - (8 horas)
  - [ ] Seção de Problemas/Soluções - (8 horas)
  - [ ] Seção de Benefícios/Funcionalidades - (8 horas)
  - [ ] Seção de Prova Social (Depoimentos) - (4 horas)
  - [ ] Seção de CTA (Call-to-Action) com formulário de contato/agendamento - (8 horas)
- [ ] Implementação da responsividade para dispositivos móveis - (4 horas)

---

### Fase 3: Desenvolvimento do Back-end e Banco de Dados (≈60 horas)

- [ ] Implementação dos endpoints da API REST para captura de leads - (24 horas)
- [ ] Validação de dados de entrada (ex: Zod) - (8 horas)
- [ ] Criação dos serviços para salvar os leads no banco de dados via Prisma - (16 horas)
- [ ] Configuração de variáveis de ambiente e segurança da API - (12 horas)

---

### Fase 4: Integração com Automações (n8n & WAHA) (≈40 horas)

- [ ] Criação de um webhook no back-end para se comunicar com o n8n - (8 horas)
- [ ] Desenvolvimento do fluxo no n8n para:
  - [ ] Receber os dados do lead - (8 horas)
  - [ ] Qualificar o lead (ex: enriquecimento de dados) - (8 horas)
  - [ ] Enviar notificação para a equipe de vendas (e.g., Slack, Email) - (4 horas)
  - [ ] Enviar uma mensagem de confirmação/boas-vindas via WhatsApp (WAHA) - (8 horas)
- [ ] Testes de integração ponta a ponta do fluxo de captura - (4 horas)

---

### Fase 5: Otimização, Testes e Lançamento (≈60 horas)

- [ ] Otimização de Performance (Core Web Vitals) - (24 horas)
- [ ] Otimização de SEO On-Page - (16 horas)
- [ ] Configuração do pipeline de CI/CD para deploy automatizado - (12 horas)
- [ ] Lançamento (Go-live) - (8 horas)