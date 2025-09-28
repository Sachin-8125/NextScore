# Informal Credit Score

This project provides a backend service to calculate credit scores for individuals, particularly those in the informal economy where traditional credit data may be scarce. It is built with Node.js and uses Prisma as the ORM for database interactions.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Node.js Backend**: A robust and scalable backend built on the Node.js runtime.
- **Prisma ORM**: Modern, type-safe database access using Prisma.
- **RESTful API**: Exposes endpoints for credit scoring and data management.

## Prerequisites

Make sure you have the following installed on your development machine:

- [Node.js](https://nodejs.org/en/) (v18.18 or higher recommended)
- [npm](https://www.npmjs.com/) (or yarn/pnpm)
- A running database instance (e.g., PostgreSQL, MySQL, SQLite).

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/Informal-Credit-Score.git
    cd Informal-Credit-Score
    ```

2.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

## Environment Variables

This project uses `dotenv` to manage environment variables. Create a `.env` file in the `backend` directory by copying the `.env.example` file (if it exists) or by creating a new one.

```bash
cp .env.example .env
```

You'll need to provide the following variables:

```env
# The connection string for your database
DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"

# Other secrets for your application
# SECRET_KEY="yoursecret"
```

## Usage

1.  **Run database migrations:**
    Apply the database schema to your database.
    ```bash
    npx prisma migrate dev
    ```

2.  **Generate Prisma Client:**
    This is usually done automatically after `npm install`, but you can run it manually if needed.
    ```bash
    npx prisma generate
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application should now be running on your local machine.

## Project Structure

```
Informal-Credit-Score/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma  # Prisma schema file
│   ├── src/               # Application source code
│   ├── .env               # Environment variables (ignored by git)
│   ├── package.json
│   └── ...
└── README.md
```

## Contributing

Guidelines for contributing to the project.

1.  Fork the repository
2.  Create a new branch (`git checkout -b feat/your-feature`)
3.  Make your changes
4.  Commit your changes (`git commit -m 'Add some feature'`)
5.  Push to the branch (`git push origin feat/your-feature`)
6.  Open a pull request

## License

This project is licensed under the MIT License. See the LICENSE file for details.


