@echo off
echo ==================================================
echo           FLUXO CERTO - DOCKER MANAGER
echo ==================================================
echo.

set "choice=%1"

if "%choice%"=="" (
    echo Escolha uma opcao:
    echo 1. Iniciar servicos [up]
    echo 2. Parar servicos [down]
    echo 3. Rebuild servicos [rebuild]
    echo 4. Ver logs [logs]
    echo 5. Status dos servicos [status]
    echo 6. Iniciar com pgAdmin [tools]
    echo 7. Limpar volumes [clean]
    echo.
    set /p choice="Digite sua escolha (1-7): "
)

if "%choice%"=="1" goto :up
if "%choice%"=="up" goto :up
if "%choice%"=="2" goto :down
if "%choice%"=="down" goto :down
if "%choice%"=="3" goto :rebuild
if "%choice%"=="rebuild" goto :rebuild
if "%choice%"=="4" goto :logs
if "%choice%"=="logs" goto :logs
if "%choice%"=="5" goto :status
if "%choice%"=="status" goto :status
if "%choice%"=="6" goto :tools
if "%choice%"=="tools" goto :tools
if "%choice%"=="7" goto :clean
if "%choice%"=="clean" goto :clean

echo Opcao invalida!
goto :end

:up
echo 🚀 Iniciando servicos...
docker-compose up -d
echo.
echo ✅ Servicos iniciados!
echo 📱 Frontend: http://localhost:5173
echo 🚀 Backend API: http://localhost:3001
echo 🗄️  PostgreSQL: localhost:5432
echo.
goto :end

:down
echo 🛑 Parando servicos...
docker-compose down
echo ✅ Servicos parados!
goto :end

:rebuild
echo 🔨 Reconstruindo e iniciando servicos...
docker-compose down
docker-compose build --no-cache
docker-compose up -d
echo ✅ Servicos reconstruidos e iniciados!
goto :end

:logs
echo 📋 Mostrando logs dos servicos...
docker-compose logs -f
goto :end

:status
echo 📊 Status dos servicos:
docker-compose ps
goto :end

:tools
echo 🛠️ Iniciando com ferramentas de desenvolvimento...
docker-compose --profile tools up -d
echo.
echo ✅ Servicos iniciados com ferramentas!
echo 📱 Frontend: http://localhost:5173
echo 🚀 Backend API: http://localhost:3001
echo 🗄️  PostgreSQL: localhost:5432
echo 🔧 pgAdmin: http://localhost:5050
echo    - Email: admin@fluxocerto.com
echo    - Senha: admin123
goto :end

:clean
echo 🧹 Limpando volumes e containers...
docker-compose down -v
docker system prune -f
echo ✅ Limpeza concluida!
goto :end

:end
echo.
pause
