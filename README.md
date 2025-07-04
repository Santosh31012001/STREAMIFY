# STREAMIFY

A modern full-stack chat and video call application for language learners, built with React, Vite, Node.js, Express, MongoDB, and Stream API.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)




---

## Overview
STREAMIFY is a real-time chat and video call platform designed to connect language learners. Users can sign up, onboard with their language preferences, find friends, send/accept friend requests, chat, and make video calls. The app leverages the Stream API for scalable chat and video features.

## Features
- User authentication (sign up, login, logout)
- Onboarding with language and profile info
- Friend system (send, accept requests, friend list)
- Real-time chat (powered by Stream API)
- Video calls (powered by Stream API)
- Notifications for friend requests and activity
- Responsive, modern UI with theme support

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, Zustand, React Router, Stream Video/Chat SDK
- **Backend:** Node.js, Express, MongoDB (Mongoose), JWT, Stream Chat API
- **Other:** Cookie-based auth, CORS, dotenv, bcryptjs

## Project Structure
```
STREAMIFY/
  backend/         # Express API, MongoDB models, controllers
    src/
      controllers/ # Auth, user, chat logic
      lib/         # DB and Stream API helpers
      middleware/  # Auth middleware
      models/      # User, FriendRequest schemas
      routes/      # API routes
      server.js    # Entry point
  frontend/        # React app
    src/
      components/  # UI components
      pages/       # App pages (Home, Chat, Call, etc.)
      hooks/       # Custom React hooks
      lib/         # API/axios helpers
      store/       # Zustand state
      App.jsx      # Main app/router
```
### 2. Backend Setup
```bash
cd backend
npm install
# Create a .env file (see below)
npm start
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
