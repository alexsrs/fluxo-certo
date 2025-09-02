# Roadmap do Projeto: Landing Page de Automação B2B

Este documento descreve as principais fases do desenvolvimento do projeto, desde a concepção até o lançamento.

---

### Fase 1: Estrutura e Fundação do Projeto (≈1 semana)

- [x] Definição da arquitetura (Monorepo vs. Repositórios separados).
- [ ] Configuração do ambiente de desenvolvimento (Docker, linters, formatters).
- [x] Inicialização dos projetos front-end (React/Vite) e back-end (Node/Express).
- [ ] Definição do schema inicial do banco de dados com Prisma.

---

### Fase 2: Desenvolvimento da Landing Page - Front-end (≈2 semanas)

- [ ] Criação do wireframe e design UI/UX da página.
- [ ] Desenvolvimento dos componentes React reutilizáveis (Header, Footer, Button, Card).
- [ ] Desenvolvimento das seções da página:
  - [ ] Seção Herói (Proposta de valor clara).
  - [ ] Seção de Problemas/Soluções.
  - [ ] Seção de Benefícios/Funcionalidades.
  - [ ] Seção de Prova Social (Depoimentos).
  - [ ] Seção de CTA (Call-to-Action) com formulário de contato/agendamento.
- [ ] Implementação da responsividade para dispositivos móveis.

---

### Fase 3: Desenvolvimento do Back-end e Banco de Dados (≈1.5 semanas)

- [ ] Implementação dos endpoints da API REST para captura de leads.
- [ ] Validação de dados de entrada (ex: Zod).
- [ ] Criação dos serviços para salvar os leads no banco de dados via Prisma.
- [ ] Configuração de variáveis de ambiente e segurança da API.

---

### Fase 4: Integração com Automações (n8n & WAHA) (≈1 semana)

- [ ] Criação de um webhook no back-end para se comunicar com o n8n.
- [ ] Desenvolvimento do fluxo no n8n para:
  - [ ] Receber os dados do lead.
  - [ ] Qualificar o lead (ex: enriquecimento de dados).
  - [ ] Enviar notificação para a equipe de vendas (e.g., Slack, Email).
  - [ ] Enviar uma mensagem de confirmação/boas-vindas via WhatsApp (WAHA).
- [ ] Testes de integração ponta a ponta do fluxo de captura.

---

### Fase 5: Otimização, Testes e Lançamento (≈1.5 semanas)

- [ ] Otimização de Performance (Core Web Vitals).
- [ ] Otimização de SEO On-Page.
- [ ] Configuração do pipeline de CI/CD para deploy automatizado.
- [ ] Lançamento (Go-live).
