# Express PostgreSQL CRUD API

A production-ready RESTful API built with Node.js, Express, PostgreSQL, and Docker. Features robust schema validation, centralized error handling, and modular architecture.

## Tech Stack

* **Backend:** Node.js, Express.js (ES Modules)
* **Database:** PostgreSQL
* **Containerization:** Docker, Docker Desktop
* **Validation:** Joi
* **Environment Management:** Dotenv

---

## Architecture Overview

```text
├── src/
│   ├── config/         # PostgreSQL pool setup
│   ├── controllers/    # Business logic & request handlers
│   ├── data/           # Database scripts & table initialization
│   ├── middlewares/    # Joi schema validation & error handler
│   ├── models/         # Database query layer
│   └── routes/         # Express endpoint definitions
├── .env                # Environment variables (Ignored in Git)
├── docker-compose.yml  # PostgreSQL container config
└── server.js           # Server entry point


Getting Started

1. Prerequisites
Docker Desktop installed and running.

Node.js (v18+ recommended).

2. Database Setup
Start the containerized PostgreSQL instance:

Bash
docker run --name postgres-db -e POSTGRES_PASSWORD=your_password -p 5432:5432 -d postgres
3. Environment Configuration
Create a .env file in the root directory:

Code snippet
PORT=5001
DB_USER=postgres
DB_HOST=localhost
DB_NAME=express-crud
DB_PASSWORD=your_password
DB_PORT=5432
4. Installation & Startup
Bash
# Install dependencies
npm install

# Run application in development mode
npm run dev
The server automatically runs initial table creations on startup at http://localhost:5001.


---

### Step 3: Git Commands to Push Everything

Once you've created the Joi file and `README.md`, run:

```bash
git add .
git commit -m "feat: add Joi schema validation and complete project documentation"
git push -u origin main
