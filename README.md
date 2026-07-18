# Task Manager

<p align="center">
  <img src="https://github.com/user-attachments/assets/6937136f-5849-4e04-9458-9a83e330757c" alt="Task Manager Banner">
</p>

<p align="center">
  A modern task management application built with Next.js, focused on productivity, organization and user experience.
</p>

<p align="center">

![Status](https://img.shields.io/badge/status-completed-success)


</p>

<p align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

</p>

<p align="center">
  <b>Click the buttons below to open the project:</b>
</p>

<p align="center">

<a href="https://gerenciador-de-tarefas-one-pearl.vercel.app/">
<img src="https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge">
</a>

<a href="https://github.com/murilotecoteco/Gerenciador-de-Tarefas">
<img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge">
</a>

</p>

<p align="center">
  <b>Demo video:</b>
</p>

https://github.com/user-attachments/assets/dfb83876-a519-404e-841d-f92b181d4144

---

# Table of Contents

- About
- Why this project
- Screenshots
- Features
- Technology Stack
- Architecture
- Project Structure
- Getting Started
- Production Build
- Deployment
- Roadmap
- License

---

# About

Task Manager is a modern web application developed with Next.js that allows users to organize daily activities through a simple and intuitive task management system.

The application provides task creation, editing, completion tracking, filtering and statistics, with a responsive interface optimized for desktop and mobile devices.

The project focuses on frontend architecture, state management, user experience and modern web development practices.

---

# Why this project

This project was built to practice and demonstrate:

- Next.js application development
- React component architecture
- TypeScript usage
- Responsive interface development
- Client-side data persistence
- UI/UX improvements
- Modern frontend workflows
- Deployment with Vercel

---

# Screenshots

## Dashboard

![Dashboard](https://github.com/user-attachments/assets/6937136f-5849-4e04-9458-9a83e330757c)

---

# Features

- ✅ Create new tasks
- ✅ Edit existing tasks
- ✅ Delete tasks
- ✅ Mark tasks as completed
- ✅ Filter tasks by status
- ✅ Task statistics dashboard
- ✅ Dark/light theme toggle
- ✅ Toast notifications
- ✅ Responsive layout for desktop and mobile
- ✅ LocalStorage data persistence

---

# Technology Stack

| Layer | Technology |
|------|------------|
| Framework | Next.js 16 |
| Frontend Library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Storage | Browser LocalStorage |
| Deployment | Vercel |
| Version Control | Git & GitHub |

---

# Architecture

```
User Browser
      │
      ▼
Next.js Application
      │
 ┌────┴────┐
 │         │
 ▼         ▼
React Components     LocalStorage
      │                   │
      ▼                   ▼
Task Management     Data Persistence
```

The application uses a component-based architecture with React and Next.js.

Task data is stored locally in the browser using LocalStorage, allowing users to maintain their tasks without requiring an external database.

---

# Project Structure

```
gerenciador-tarefas/
│
├── public/
│
├── app/
├── components/
├── hooks/
├── types/
│
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

---

# Getting Started

## Prerequisites

- Node.js 20.9+
- npm

## Installation

```bash
git clone https://github.com/murilotecoteco/Gerenciador-de-Tarefas.git

cd Gerenciador-de-Tarefas

npm install

npm run dev
```

The development server will be available at:

```
http://localhost:3000
```

---

# Production Build

To create a production build:

```bash
npm run build
npm start
```

---

# Deployment

The application is deployed on Vercel.

Every push to the main branch automatically triggers a new deployment.

Production URL:

```
https://gerenciador-de-tarefas-one-pearl.vercel.app/
```

---

# Roadmap

- [x] Task creation system
- [x] Task editing and deletion
- [x] Status filtering
- [x] Statistics dashboard
- [x] Responsive interface
- [x] Dark/light theme
- [x] LocalStorage persistence
- [ ] Authentication system
- [ ] Cloud database integration
- [ ] User accounts
- [ ] Task sharing

---

# License

This project was developed for educational and portfolio purposes.

No license has been applied.
