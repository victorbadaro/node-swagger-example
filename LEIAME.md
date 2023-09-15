# node-swagger-example

[![README.md](https://img.shields.io/badge/-Read%20in%20English-brightgreen?style=for-the-badge)](./README.md)

## Índice
- [🧾 Sobre o projeto](#-sobre-o-projeto)
- [🚀 Principais tecnologias](#-principais-tecnologias)
- [💻 Como usar](#-como-usar)
- [👌 Requisições](#-requisições)

## 🧾 Sobre o projeto
Este repositório é somente um exemplo de como usar o Swagger em uma aplicação Node/Express.

## 🚀 Principais tecnologias
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Swagger](https://swagger.io/) (_usando a dependência [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)_)

_(Você pode ver todas as dependências do projeto no arquivo [package.json](./package.json))_

## 💻 Como usar
1. Faça o clone do projeto (você vai precisar de um [personal access token](https://docs.github.com/pt/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls)):
   ```bash
   $ git clone https://github.com/victorbadaro/node-swagger-example
   ```

2. Acesse o diretório correspondente:
   ```bash
   $ cd node-swagger-example
   ```

3. Instale as dependências:
   ```bash
   $ yarn
   # sinta-se livre para usar outro gerenciador de pacotes, mas talvez você queira usar o yarn uma vez que já existe um arquivo yarn.lock na raíz do projeto
   ```

4. Crie um arquivo `.env` na raíz do projeto com o mesmo conteúdo que está no arquivo [.env.example](./.env.example) e preencha a variável `SERVER_PORT` com a porta de sua preferência (não se esqueça de alterar a variável `port` no arquivo [requests](./requests.http) se você for usá-lo):<br />
   Por exemplo:<br />
   ![image](https://github.com/victorbadaro/node-swagger-example/assets/9096344/a1602e7a-e0be-4ba0-b383-02b7230d3eae)

6. Inicie o servidor executando o script `dev`:
   ```bash
   $ yarn dev
   ```

## 👌 Requisições
Agora o servidor está pronto para receber suas requisições. A **documentação da API** está disponível em http://localhost:3333/api-docs (ou localhost:{QualquerOutraPortaQueVocêTenhaConfigurado}/api-docs)! Tem um arquivo [requests](./requests.http) na raíz do projeto para que você possa usar (talvez você queira usar a extensão [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)).<br />
Aqui estão as requisições que você pode fazer:

- GET /users
- POST /users
  ```json
  {
    "name": "Shauna Farrell",
    "email": "shauna.farrell@email.com"
  }
  ```
![image](https://github.com/victorbadaro/node-swagger-example/assets/9096344/47694078-8ba2-4d7d-a488-714b35bde713)
---

<p align="center">Este projeto foi criado e desenvolvido com ❤ por <a href="https://github.com/victorbadaro">Victor Badaró</a></p>
