# 🎬 MovieShowcase

A full-stack movie management web application built using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.

MovieShowcase provides an interactive platform for users to explore movies while providing functionality for managing movie records and user-related data.

---

## 📌 Project Overview

MovieShowcase is a full-stack web application that combines a frontend interface with a Node.js and Express.js backend.

The application allows users to:

- Browse movies
- Search for movies
- View movie details
- Register an account
- Log in
- Like or dislike movies
- Add movies
- Update movie information
- Delete movies
- Submit contact information

The project also includes administrative functionality for managing movie and user data.

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js
- REST APIs

### Database

- MongoDB
- Mongoose

### Other Tools and Libraries

- CORS
- Body Parser
- Chokidar
- Nodemon
- Node.js File System (fs)
- Validator

---

## 🏗️ System Architecture

The project follows a client-server architecture.

```text
                   ┌───────────────────┐
                   │       User        │
                   └─────────┬─────────┘
                             │
                             ▼
                   ┌───────────────────┐
                   │     Frontend      │
                   │   HTML / CSS / JS │
                   └─────────┬─────────┘
                             │
                       HTTP Requests
                             │
                             ▼
                   ┌───────────────────┐
                   │   Express Server  │
                   │   Node.js Backend │
                   └─────────┬─────────┘
                             │
                 ┌───────────┴───────────┐
                 │                       │
                 ▼                       ▼
        ┌─────────────────┐     ┌─────────────────┐
        │     MongoDB     │     │   JSON Files    │
        │    Mongoose     │     │                 │
        └─────────────────┘     └─────────────────┘
```

---

## 📁 Project Structure

```text
movieShowcase/
│
├── images/
│   └── Images and visual assets
│
├── public/
│   └── Public/static resources
│
├── profile/
│   └── Profile-related resources
│
├── front.html
├── home.html
├── admin.html
├── login_page.html
├── signin.html
├── register.html
├── add-movie.html
├── update-movie.html
├── contact.html
├── subscribtion.html
│
├── register.js
├── qrcode.js
├── qrcode.css
│
├── projectbackend.js
│
├── movies.json
├── users.json
├── likes.json
├── contact_data.json
│
├── package.json
├── package-lock.json
│
├── README.md
└── .gitignore
```

---

## 🔄 Data Flow

```text
User
  ↓
Frontend
  ↓
HTTP Request
  ↓
Express.js API
  ↓
Backend Processing
  ↓
MongoDB / JSON Data
  ↓
HTTP Response
  ↓
Frontend
```
