# Fastify-Prisma

Um projeto utilizando :
                                  [Fastify](https://www.fastify.io/) 
                                                  +
                                  [Prisma ORM](https://www.prisma.io/) 
para construção de APIs rápidas, seguras e com acesso a banco de dados eficiente.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Como Executar](#como-executar)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Como Contribuir](#como-contribuir)


---

## Sobre o Projeto

Este projeto demonstra como criar uma API RESTful utilizando Fastify como framework web e Prisma como ORM para manipulação de banco de dados. O objetivo é fornecer uma base sólida para desenvolvimento de aplicações Node.js modernas, com foco em performance e boas práticas.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Fastify](https://www.fastify.io/)
- [Prisma ORM](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [dotenv](https://github.com/motdotla/dotenv) para variáveis de ambiente

## Pré-requisitos

- Node.js v16 ou superior
- npm ou yarn
- Banco de dados relacional (ex: PostgreSQL, MySQL, SQLite)

## Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/Fastify-Prisma.git
cd Fastify-Prisma
```

Instale as dependências:

```bash
npm install
# ou
yarn install
```

## Configuração

1. Copie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente, especialmente a string de conexão do banco de dados:

```bash
cp .env.example .env
```

2. Execute as migrações do Prisma para criar as tabelas no banco de dados:

```bash
npx prisma migrate dev
```

## Como Executar

Para rodar o servidor em modo desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O servidor estará disponível em `http://localhost:3000` (ou porta configurada).

## Scripts Disponíveis

- `dev`: Executa o servidor em modo desenvolvimento com hot reload.
- `build`: Compila o projeto (caso use TypeScript).
- `start`: Inicia o servidor em modo produção.
- `prisma migrate dev`: Executa as migrações do banco de dados.
- `prisma studio`: Abre o Prisma Studio para visualizar e editar dados.

