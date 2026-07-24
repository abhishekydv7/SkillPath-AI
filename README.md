# 🚀 SkillPath AI

> An AI-powered personalized learning platform that generates custom roadmaps, tracks progress, recommends projects, and acts as an intelligent learning mentor.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 🌟 Overview

SkillPath AI is a full-stack MERN application designed to solve one of the biggest challenges in self-learning:

> **"I know what I want to learn, but I don't know where to start."**

Instead of searching dozens of websites and YouTube playlists, users simply enter their learning goal, current experience level, and available study time.

SkillPath AI generates a personalized AI roadmap, recommends resources, tracks progress, and suggests real-world projects—all from one dashboard.

---

# ✨ Features

### 🤖 AI Roadmap Generator
- Personalized learning paths
- Beginner → Intermediate → Advanced
- Weekly milestones
- Estimated completion time

---

### 📈 Progress Tracking

- Mark topics as completed
- Visual progress dashboard
- Learning streaks
- Overall completion percentage

---

### 💬 AI Mentor

- Ask learning questions
- Get concept explanations
- Guidance powered by LLM

---

### 🧩 Project Recommendations

- Portfolio-ready project ideas
- Difficulty based suggestions
- Real-world development focus

---

### 📚 Resource Library

- Articles
- Documentation
- Videos
- Courses
- Development Tools

---

### 👤 Authentication

- JWT Authentication
- Secure HTTP-only Cookies
- Protected Routes
- Role-based Authorization

---

# 🏗 Tech Stack

## Frontend

- React
- Vite
- React Router
- Axios
- Framer Motion
- React Icons

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cookie Parser
- Helmet
- CORS

---

## AI

- Groq API
- Llama Models

---

# 📂 Project Structure

```
SkillPath-AI
│
├── Frontend
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── hooks
│   │   ├── pages
│   │   ├── routes
│   │   ├── utils
│   │   └── assets
│
├── Backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── server.js
```

---

# 🔐 Authentication Flow

```
User Login/Register
        │
        ▼
Generate JWT
        │
        ▼
HTTP Only Cookie
        │
        ▼
Protected Routes
        │
        ▼
Authenticated Dashboard
```

---

# ⚡ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/SkillPath-AI.git
```

---

## Backend

```bash
cd Backend
npm install
npm run dev
```

---

## Frontend

```bash
cd Frontend
npm install
npm run dev
```

---

# Environment Variables

## Backend

```env
PORT=3000
NODE_ENV=development

MONGODB_URI=

JWT_SECRET=

GROQ_API_KEY=

CLIENT_URL=http://localhost:5173
```

---

## Frontend

```env
VITE_API_URL=http://localhost:3000/api
```

---

# 🚀 Deployment

Frontend

- Vercel

Backend

- Render

Database

- MongoDB Atlas

---

# Screenshots

## Landing Page

_Add screenshot here_

---

## Dashboard

_Add screenshot here_

---

## AI Roadmap

_Add screenshot here_

---

## Chat

_Add screenshot here_

---

# Future Improvements

- AI Quiz Generation
- Resume Analyzer
- Interview Preparation
- Certificates
- Calendar Integration
- Community Learning
- Gamification
- Leaderboards

---

# Contributing

Contributions are welcome!

1. Fork the repository

2. Create your branch

```bash
git checkout -b feature/new-feature
```

3. Commit

```bash
git commit -m "Add new feature"
```

4. Push

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# License

MIT License

---

# Developer

**Abhishek Yadav**

---

⭐ If you found this project useful, consider giving it a star!
