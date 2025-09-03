# Scripts Docker para o projeto Fluxo Certo

## Comandos básicos

### Iniciar todos os serviços

```powershell
docker-compose up -d
```

### Iniciar apenas os serviços essenciais (sem pgAdmin)

```powershell
docker-compose up -d db backend frontend n8n
```

### Parar todos os serviços

```powershell
docker-compose down
```

### Ver logs dos serviços

```powershell
# Todos os logs
docker-compose logs -f

# Logs específicos
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f db
docker-compose logs -f n8n
```

### Rebuild dos containers

```powershell
docker-compose up -d --build
```

## Serviços disponíveis após iniciar

| Serviço            | URL                   | Credenciais                                      |
| ------------------ | --------------------- | ------------------------------------------------ |
| Frontend           | http://localhost:5173 | -                                                |
| Backend API        | http://localhost:3001 | -                                                |
| PostgreSQL         | localhost:5432        | user: `user` / pass: `password`                  |
| n8n (Automação)    | http://localhost:5678 | user: `admin` / pass: `admin123`                 |
| pgAdmin (opcional) | http://localhost:5050 | email: `admin@fluxocerto.com` / pass: `admin123` |

## Configuração inicial do banco

Após iniciar o Docker, execute no backend:

```powershell
# Navegar para o backend
cd packages/backend

# Gerar o cliente Prisma
npx prisma generate

# Executar migrations
npx prisma migrate dev --name init

# (Opcional) Abrir Prisma Studio
npx prisma studio
```

## Comandos úteis

### Limpar dados do banco

```powershell
docker-compose down -v
docker-compose up -d
```

### Acessar container do banco

```powershell
docker-compose exec db psql -U user -d fluxocerto
```

### Ver status dos containers

```powershell
docker-compose ps
```

### Reiniciar apenas um serviço

```powershell
docker-compose restart backend
```
