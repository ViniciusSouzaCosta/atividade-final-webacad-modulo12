1. Pré-requisitos
Ter instalado:
Docker

2. Configurar variáveis de ambiente
Backend (/backend/.env)
PORTA=4444
DATABASE_URL="mysql://root:root123@db:3306/webacademy"
ESCREVER_LOG_ARQUIVO=false

Frontend (/frontend/.env)
VITE_API_BASE_URL=http://localhost:4444/api
VITE_ROTA_LIVROS=http://localhost:4444/api/livros
VITE_ROTA_INFOS_API=http://localhost:4444/api

3. Subir os contêineres
Na raiz do projeto, execute:
docker-compose up --build

4. Acessar a aplicação
Frontend: http://localhost:8000⁠
Backend: http://localhost:4444/api⁠
phpMyAdmin: http://localhost:8080⁠

5. Inicialização do banco de dados
Caso as tabelas não existam, execute:
docker exec -it backend_app npx prisma migrate dev

6. Parar os contêineres
docker-compose down