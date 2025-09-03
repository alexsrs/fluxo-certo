# Use uma versão mais específica e segura do Node.js
FROM node:20.17.0-alpine3.20

# Instale OpenSSL para compatibilidade com Prisma
RUN apk add --no-cache openssl

# Crie um usuário não-root para executar a aplicação
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de dependências primeiro (para melhor cache)
COPY package*.json ./
COPY prisma ./prisma/

# Instale as dependências (incluindo devDependencies para build)
RUN npm install && npm cache clean --force

# Copie o código da aplicação
COPY --chown=nodejs:nodejs . .

# Gere o cliente Prisma
RUN npx prisma generate

# Faça o build do TypeScript
RUN npm run build

# Exponha a porta da aplicação
EXPOSE 3001

# Mude para o usuário não-root
USER nodejs

# Comando para iniciar a aplicação
CMD ["npx", "tsx", "src/index.ts"]