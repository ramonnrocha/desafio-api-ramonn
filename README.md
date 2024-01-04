

# BACK-END


Pré-requisitos
Docker instalado
Node.js e npm (ou Yarn) instalados
Prisma CLI instalado (npm install -g prisma ou yarn global add prisma)

## 1 .Instale as dependências do projeto:
npm install
   ou
yarn install

## 2 Copie o arquivo de exemplo do ambiente:

cp .env.example .env

## 3 Substitua as variáveis no arquivo .env com as informações necessárias.

## 4 Execute o Docker Compose para iniciar os serviços:
docker-compose up -d

## 5 Execute as migrações do Prisma para criar o banco de dados:
npx prisma migrate dev

## 6 Inicie a aplicação:
npm dev
 ou
yarn dev


