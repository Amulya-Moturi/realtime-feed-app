# Realtime Coaching Feed Application

A fullstack realtime coaching feed application built using Node.js, Express, MongoDB, Redis, Socket.IO, and Next.js.

The application allows admins to publish coaching updates in realtime and instantly sync them across all connected users without page refresh.

---

# Features

- Realtime feed updates using Socket.IO
- REST APIs with Express.js
- MongoDB database integration
- Redis caching for GET feed API
- Admin panel to publish feeds
- Next.js frontend UI
- Automatic realtime updates without refresh
- Cache invalidation after new feed creation
- Loading and error handling
- Duplicate socket event prevention
- Socket reconnection support

---

# Tech Stack

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Redis (Upstash)
- Socket.IO

## Frontend
- Next.js
- React.js
- Socket.IO Client

---

# API Endpoints

## GET Feed

```http
GET /api/feed
```

Returns all feed messages.

---

## POST Feed

```http
POST /api/feed
```

Request Body:

```json
{
  "message": "New coaching session scheduled"
}
```

Creates a new realtime feed update.

---

# Project Structure

```text
realtime-feed-app/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── server.js
│   └── .env.example
│
├── frontend/
│   ├── pages/
│   │   ├── index.js
│   │   └── admin.js
│
├── README.md
└── .gitignore
```

---

# Environment Variables

Create a `.env` file inside the `backend` folder.

Example:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

REDIS_URL=your_redis_connection_string
```

---

# Local Setup

## 1. Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

---

## 2. Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

## 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:3000
```

---

# Application Pages

## Home Page

```text
http://localhost:3000
```

Displays realtime coaching feeds.

---

## Admin Page

```text
http://localhost:3000/admin
```

Allows admin users to publish realtime feed updates.

---

# Realtime Workflow

1. Admin creates new feed
2. Feed stored in MongoDB
3. Redis cache invalidated
4. Socket.IO emits realtime event
5. Connected clients receive instant updates

---

# Scalability Considerations

- Redis caching reduces database load
- Realtime event-driven architecture
- Duplicate socket event prevention
- Socket reconnection handling
- Decoupled frontend and backend architecture

---

# Author

Developed as part of realtime fullstack engineering assignment.