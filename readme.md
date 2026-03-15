# create-mern-boilerkit 🔥

<div align="center">

![MERN](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

</div>

A production-ready **MERN stack starter kit** with complete backend authentication and a clean React + Vite frontend setup.

Generate a full MERN project in seconds using a single CLI command:

```bash
npx create-mern-boilerkit my-app
```

---

## 🎯 Overview

`create-mern-boilerkit` provides a solid foundation for full-stack web applications with:

- MongoDB, Express.js, React, Node.js (MERN) stack
- Complete backend authentication system with JWT tokens
- Minimal, ready-to-customize React frontend
- Pre-configured project structure and API utilities

This allows you to focus on **building features, not boilerplate setup**.

---

## ✨ Features

### ✅ Backend Features

- Complete JWT authentication system
- User registration & login APIs
- Protected route middleware
- Password hashing with **bcrypt**
- MongoDB integration with **Mongoose**
- CORS configuration
- Environment variables setup (`.env`)
- Error handling middleware
- Basic security best practices

### ✅ Frontend Features

- **React 18** with **Vite** for fast development
- **React Router DOM** setup
- Pre-configured **Axios** for API calls
- **React Icons** integrated
- Responsive-ready UI structure
- Environment configuration ready
- API utility functions for easy backend interaction
- Clean project structure

---

## ⚠️ What’s NOT Included (By Design)

These are intentionally left for you to implement according to your own needs:

- Frontend authentication state management
- Protected routes on the frontend
- Login/Register form components
- Token storage logic (localStorage/cookies)
- Authentication context/Redux setup

---

## 📝 Backend API Endpoints

| Method | Endpoint           | Description                  | Body                        |
| ------ | ------------------ | ---------------------------- | --------------------------- |
| POST   | `/api/user/signup` | Register new user            | `{ name, email, password }` |
| POST   | `/api/user/signin` | Login user                   | `{ email, password }`       |
| GET    | `/api/user/me`     | Get current user (protected) | `-`                         |
| POST   | `/api/user/logout` | Logout user                  | `-`                         |

---

## 🛠 Tech Stack

**Frontend**

- ⚛️ React 18
- ⚡ Vite
- 🧭 React Router DOM
- 🌐 Axios
- 🎨 React Icons

**Backend**

- 🟢 Node.js
- 🚏 Express.js
- 🍃 MongoDB
- 🧬 Mongoose
- 🔐 JSON Web Tokens (JWT)
- 🧂 bcryptjs
- 🌍 CORS

---

## 📦 Installation & Setup

### 1️⃣ Create a new project

```bash
npx create-mern-boilerkit my-app
cd my-app
```

### 2️⃣ Install dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### 3️⃣ Setup environment variables

**Backend (`server/.env`):**

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-app
JWT_SECRET=your_strong_jwt_secret_here
```

**Frontend (`client/.env`):**

```env
VITE_API_URL=http://localhost:5000/api
```

### 4️⃣ Start development servers

```bash
# Backend
cd server
npm run dev

# Frontend (in another terminal)
cd client
npm run dev
```

---

## 🏗 Project Structure

```text
mern-boilerplate/
├── client/          # React Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utils/
├── server/          # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── config/
└── README.md
```

---

## 🎯 Usage Notes

### Backend Development

- Ready-to-use authentication system
- JWT tokens generated and verified
- Protected routes with middleware
- MongoDB models and connections setup
- Error handling implemented

### Frontend Development

- Basic React app structure ready
- API utility functions provided
- Routing setup complete

You still need to implement:

- Authentication state management
- Token storage (localStorage/cookies)
- Protected route components
- Login/Register UI components

---

## 🔧 Available Scripts

### Backend (inside `server`)

```bash
npm run dev    # Start dev server with nodemon
npm start      # Start production server
```

### Frontend (inside `client`)

```bash
npm run dev     # Start Vite development server
npm run build   # Build for production
npm run preview # Preview production build
```

---

## 🚀 Deployment Ready

- Backend configured for production usage
- Frontend build system optimized
- Environment variables and CORS configuration ready for deployment

---

## 👨‍💻 Ideal For

- Quickly starting new MERN projects
- Learning full-stack development
- Prototyping apps
- Projects needing backend authentication out-of-the-box

---

## 💡 Next Steps After Installation

- Implement frontend authentication context/state
- Create login/register forms
- Add token storage (localStorage or cookies)
- Implement protected routes
- Add your own business logic and features
