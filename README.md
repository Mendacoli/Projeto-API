# Projeto API

Este projeto é uma API REST desenvolvida em Node.js com Express, criada para demonstrar conhecimentos práticos em desenvolvimento backend, organização de código e versionamento com Git.

A proposta é apresentar uma aplicação objetiva, funcional e fácil de entender, simulando um cenário real de uso, sem complexidade desnecessária.

---

## Objetivo

Demonstrar, de forma prática:

- Criação de APIs REST
- Implementação de CRUD completo
- Organização básica de um projeto backend
- Uso do Express para criação de rotas
- Manipulação de requisições e respostas HTTP
- Versionamento de código com Git e GitHub

---

## Estrutura do Projeto

```text
projeto_api/
│
├── src/
│   └── app.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
Tecnologias Utilizadas
Node.js

Express

JavaScript

Git

GitHub

Como Executar o Projeto
Pré-requisitos
Node.js instalado

NPM

Passos para execução
bash
Copiar código
npm install
npm start
Após iniciar, o servidor estará disponível em:

arduino
Copiar código
http://localhost:3000
Rotas Disponíveis
GET /
Rota raiz utilizada para verificação de status da API.

Exemplo de resposta:

json
Copiar código
{
  "message": "API em execução"
}
GET /users
Retorna uma lista de usuários em formato JSON.

json
Copiar código
[
  {
    "id": 1,
    "name": "João",
    "email": "joao@email.com"
  },
  {
    "id": 2,
    "name": "Maria",
    "email": "maria@email.com"
  }
]
GET /users/:id
Retorna um usuário específico pelo ID.

POST /users
Cria um novo usuário.

Exemplo de corpo da requisição:

json
Copiar código
{
  "name": "Carlos",
  "email": "carlos@email.com"
}
PUT /users/:id
Atualiza um usuário existente ou cria um novo caso o ID não exista (upsert).

DELETE /users/:id
Remove um usuário pelo ID.

Retorna status 204 No Content em caso de sucesso.

Observações Técnicas
Os dados são armazenados em memória (array), sem uso de banco de dados

A aplicação está preparada para futuras integrações com banco e autenticação

Os endpoints foram testados utilizando Thunder Client

Sobre o Autor
Desenvolvido por Guilherme Mendaçoli de Carvalho, com foco em oportunidades na área de desenvolvimento backend e construção de APIs.

GitHub: https://github.com/Mendacoli