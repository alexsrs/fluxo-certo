# Usa uma imagem base do Node.js
FROM node:20-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Expõe a porta que a aplicação vai rodar
EXPOSE 3001

# Comando para iniciar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "dev"]