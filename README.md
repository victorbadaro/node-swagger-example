# node-swagger-example

[![LEIAME.md](https://img.shields.io/badge/-Leia%20em%20Portugu%C3%AAs-brightgreen?style=for-the-badge)](./LEIAME.md)

## Summary
- [🧾 About](#-about)
- [🚀 Main technologies](#-main-technologies)
- [💻 Usage](#-usage)
- [👌 Requests](#-requests)

## 🧾 About
This is an example of how to use swagger in a Node/Express application

## 🚀 Main technologies
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Swagger](https://swagger.io/) (_using the [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express) dependency_)

_(You can see all the dependencies in the [package.json](./package.json) file)_

## 💻 Usage
1. Clone the project (you'll need a [personal access token](https://docs.github.com/pt/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls)):
   ```bash
   $ git clone https://github.com/victorbadaro/node-swagger-example
   ```

2. Access its directory:
   ```bash
   $ cd node-swagger-example
   ```

3. Install its dependencies:
   ```bash
   $ yarn
   # feel free to use another package manager, but you might want use yarn once there's already a yarn.lock file in the root directory
   ```

4. Create a `.env` file in the root directory with the same content that is in the [.env.example](./.env.example) file and fill the `SERVER_PORT` variable with your own data (don't forget to change the `port` variable in the [requests](./requests.http) file if you're going to use it):<br />
   For example:<br />
   ![image](https://github.com/victorbadaro/node-swagger-example/assets/9096344/a1602e7a-e0be-4ba0-b383-02b7230d3eae)

5. Start the server by running the `dev` script:
   ```bash
   $ yarn dev
   ```

## 👌 Requests
Now the server is ready to receive your requests. The **Swagger docs** are available on http://localhost:3333/api-docs (or localhost:{AnyOtherServerPortYouAreGoingToUse}/api-docs)! There's a [requests](./requests.http) file in the root directory so you can use (you might want to use the [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension).<br />
Here are the requests you can make:

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

<p align="center">This project was created and developed with ❤ by <a href="https://github.com/victorbadaro">Victor Badaró</a></p>
