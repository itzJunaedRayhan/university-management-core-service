# backend-node-express-prisma-postgresql-typescript-boilerplate

# Node PostgreSQL Prisma Express TypeScript Boilerplate

A Backend Boilerplate using Node.js, PostgreSQL, Prisma, Express, and TypeScript. This boilerplate provides a solid foundation for building robust applications quickly.

## Features

### Core Dependencies:
- **@prisma/client (v5.21.1)**: The Prisma Client for TypeScript/JavaScript, which is used to interact with your PostgreSQL database.
- **cookie-parser (v1.4.7)**: Middleware for parsing Cookie headers.
- **cors (v2.8.5)**: Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv (v16.4.5)**: Loads environment variables from a `.env` file into `process.env`.
- **express (v4.21.1)**: A minimal and flexible Node.js web application framework.
- **http-status (v2.0.0)**: Utility for standard HTTP status codes.
- **zod (v3.23.8)**: A TypeScript-first schema declaration and validation library.

### Development Dependencies:
- **@eslint/js (v9.13.0)**: ESLint rules for modern JavaScript.
- **eslint (v9.13.0)**: A tool for identifying and reporting on patterns in JavaScript.
- **globals (v15.11.0)**: Provides common global variables for Node.js and browser environments.
- **husky (v8.0.0)**: Git hooks made easy.
- **lint-staged (v15.2.10)**: Run linters on pre-committed files.
- **npm-run-all (v4.1.5)**: Run multiple npm scripts in parallel or sequentially.
- **prettier (v3.3.3)**: An opinionated code formatter.
- **typescript (v5.6.3)**: A superset of JavaScript that compiles to clean JavaScript output.
- **ts-node-dev (v2.0.0)**: A development tool that helps run TypeScript applications.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/itzJunaedRayhan/backend-node-express-prisma-postgresql-typescript-boilerplate.git
   cd backend-node-express-prisma-postgresql-typescript-boilerplate
   ```

2. Install dependencies using Yarn:
   ```bash
   yarn install
   ```

3. Create a `.env` file in the root directory and add your environment variables. Here’s an example:
   ```env
   PORT=5000
   DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/DATABASE_NAME
   ```

## Usage

To start the application, use the following command:
```bash
yarn start
```
This command will run the server using `ts-node-dev`, which watches for file changes and automatically restarts the server.

## Scripts

Here are some helpful scripts you can run:

- **Start the server**:  
  ```bash
  yarn start
  ```

- **Check for linting errors**:  
  ```bash
  yarn lint:check
  ```

- **Fix linting errors**:  
  ```bash
  yarn lint:fix
  ```

- **Check formatting with Prettier**:  
  ```bash
  yarn prettier:check
  ```

- **Fix formatting issues**:  
  ```bash
  yarn prettier:fix
  ```

- **Run lint and prettier checks on staged files**:  
  This is automatically triggered on pre-commit using Husky:  
  ```bash
  yarn lint-prettier
  ```

- **Prepare Husky for Git hooks**:  
  ```bash
  yarn prepare
  ```

## Linting and Formatting
To ensure your code is well-structured, you can use `lint-staged` in combination with `husky`. This will run your linting and formatting checks on staged files before committing.

## Author
**itzJunaedRayhan**

## License

This project is licensed under the MIT License.
# university-management-core-service
