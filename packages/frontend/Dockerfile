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

# Expõe a porta do Vite
EXPOSE 5173

# Comando para iniciar o servidor de desenvolvimento do Vite
# O host 0.0.0.0 é necessário para expor o serviço fora do contêiner
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]