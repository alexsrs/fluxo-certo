# Use uma versão mais específica e segura do Node.js
FROM node:lts-alpine

# Crie um usuário não-root para executar a aplicação
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de dependências primeiro (para melhor cache)
COPY package*.json ./
COPY prisma ./prisma/

# Instale as dependências
RUN npm ci --only=production && npm cache clean --force

# Copie o código da aplicação
COPY --chown=nextjs:nodejs . .

# Gere o cliente Prisma
RUN npx prisma generate

# Exponha a porta da aplicação
EXPOSE 3000

# Mude para o usuário não-root
USER nextjs

# Comando para iniciar a aplicação
CMD ["npm", "start"]