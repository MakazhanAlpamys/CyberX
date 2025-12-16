# CyberX — Frontend and Backend Project

A full-stack project with a React client (Create React App) and Node.js API (Express) with PostgreSQL database. The backend handles contact form submissions and stores requests in the database, while the frontend serves as the public CyberX website.

## Tech Stack
- Frontend: React 19 (CRA), React Router, styled-components, axios
- Backend: Node.js, Express, CORS, dotenv, pg
- Database: PostgreSQL

## Repository Structure
```
CyberXСайт/
  backend/
    index.js            # Express API (contacts, status)
    package.json        # Backend scripts and dependencies
    package-lock.json
    schema.sql          # Database schema (contacts table)
  frontend/
    package.json        # Frontend scripts and dependencies (CRA)
    package-lock.json
    public/
      index.html        # HTML template
      X.png, manifest.json, ...
    src/
      index.js, App.js  # Entry point and root component
      pages/            # Pages: Home, About, Catalog, Contacts, Partners, CyberBatyr
      components/       # Shared components: Header, Footer, ProductCard
      data/             # Demo data: catalog.js, news.js
      images/           # Static images
```

## Requirements
- Node.js 18+ (LTS recommended)
- npm 8+
- PostgreSQL 13+ (local or cloud)

## Installation
Run these commands once to install dependencies for both parts:

```bash
# 1) Backend
cd CyberXСайт/backend
npm install

# 2) Frontend
cd ../frontend
npm install
```

> On Windows, use PowerShell or cmd terminal. The commands above are standard.

## Environment Setup (Backend)
Create a `.env` file in the `backend` folder:

```env
# Server
PORT=5000

# PostgreSQL connection
DB_HOST=localhost
DB_PORT=5432
DB_NAME=cyberx
DB_USER=postgres
DB_PASSWORD=postgres
```

Variables have default values in `index.js`, but it's recommended to set them explicitly in `.env`.

## Database Initialization
1. Create the database and tables using `schema.sql`:
   ```bash
   # From the backend folder or specify the full file path
   psql -U postgres -h localhost -p 5432 -c "CREATE DATABASE cyberx;"
   psql -U postgres -h localhost -p 5432 -d cyberx -f schema.sql
   ```
   - You'll need `psql` (PostgreSQL client) installed. On Windows, it comes with PostgreSQL.
   - Replace username/password/port if necessary.

2. Verify database connection: on startup, the backend will display "Database connected successfully" or an error.

## Running in Development Mode
Open two terminals:

- Terminal 1 — Backend:
  ```bash
  cd CyberXСайт/backend
  npm run dev
  # or npm start
  # API: http://localhost:5000
  ```

- Terminal 2 — Frontend:
  ```bash
  cd CyberXСайт/frontend
  npm start
  # UI: http://localhost:3000
  ```

The frontend proxies requests to the backend (see `frontend/package.json`: `"proxy": "http://localhost:5000"`).

## Building Production Frontend
```bash
cd CyberXСайт/frontend
npm run build
# The production build will be in the build/ folder
```

> Deployment of frontend and backend depends on your infrastructure (VPS/PAAS/Docker/Render/Heroku, etc.).

## API
Default base URL: `http://localhost:5000`

- POST `/api/contacts`
  - Purpose: save a contact form submission
  - Request body (JSON):
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+77001234567",
      "subject": "Service inquiry",
      "message": "We'd like to discuss cooperation"
    }
    ```
  - Response 201:
    ```json
    {
      "success": true,
      "message": "Message sent successfully",
      "contactId": 1
    }
    ```

- GET `/api/status`
  - API health check: `{ "status": "API is running" }`

## Useful Scripts
- Backend (`CyberXСайт/backend/package.json`):
  - `npm start` — run Express server
  - `npm run dev` — run with `nodemon` (auto-restart on changes)
- Frontend (`CyberXСайт/frontend/package.json`):
  - `npm start` — CRA development mode
  - `npm run build` — production build
  - `npm test` — CRA tests

## Common Issues and Solutions
- Cannot connect to PostgreSQL
  - Check `.env` and verify host/port accessibility.
  - Ensure the `cyberx` database is created and `schema.sql` is applied.
- CORS/proxy in development
  - Use `npm start` in the frontend — proxy is configured (`http://localhost:5000`).
- Port already in use
  - Change `PORT` in backend `.env` or stop the service occupying the port.

## License
- Backend: ISC (see `backend/package.json`).
- Frontend: your project's default license; update as needed.
