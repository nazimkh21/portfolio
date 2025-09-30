# Portfolio Frontend + Feedback API

This React + Vite portfolio now includes a Feedback section where visitors can post feedback and threaded replies, backed by an Express + MongoDB API in `server/`.

## Frontend

Install and run:

```bash
npm install
npm run dev
```

Optionally set API URL (default `http://localhost:4000`):

```env
VITE_API_URL=http://localhost:4000
```

## Backend (server/)

Install and run the API:

```bash
cd server
npm install
```

Create `server/.env`:

```env
PORT=4000
CORS_ORIGIN=http://localhost:5173
MONGO_URI=mongodb://127.0.0.1:27017/portfolio
```

Start the API:

```bash
npm run dev
```

Endpoints:

- GET `/api/feedback`
- POST `/api/feedback` body: `{ authorName, content }`
- POST `/api/feedback/:id/replies` body: `{ authorName, content }`
"# portfolio" 
"# portfolio" 
"# portfolio" 
