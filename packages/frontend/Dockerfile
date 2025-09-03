# Usa uma versão mais segura do Node.js
FROM node:20.17.0-alpine3.20

# Crie um usuário não-root para executar a aplicação
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install && npm cache clean --force

# Copia o restante do código da aplicação
COPY --chown=nodejs:nodejs . .

# Expõe a porta do Vite
EXPOSE 5173

# Mude para o usuário não-root
USER nodejs

# Comando para iniciar o servidor de desenvolvimento do Vite
# O host 0.0.0.0 é necessário para expor o serviço fora do contêiner
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]