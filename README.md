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
text
                   ┌───────────────────┐
                   │       User        │
                   └─────────┬─────────┘
                             │
                             ▼
                   ┌───────────────────┐
                   │     Frontend      │
                   │ HTML / CSS / JS   │
                   └─────────┬─────────┘
                             │
                       HTTP Requests
                             │
                             ▼
                   ┌───────────────────┐
                   │   Express Server  │
                   │ Node.js Backend   │
                   └─────────┬─────────┘
                             │
                 ┌───────────┴───────────┐
                 │                       │
                 ▼                       ▼
        ┌─────────────────┐     ┌─────────────────┐
        │     MongoDB     │     │   JSON Files    │
        │    Mongoose     │     │                 │
        └─────────────────┘     └─────────────────┘



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
│   └── Front/landing page
│
├── home.html
│   └── Main home page
│
├── admin.html
│   └── Administrative interface
│
├── login_page.html
│   └── Login page
│
├── signin.html
│   └── Sign-in interface
│
├── register.html
│   └── User registration page
│
├── add-movie.html
│   └── Interface for adding movies
│
├── update-movie.html
│   └── Interface for updating movies
│
├── contact.html
│   └── Contact page
│
├── subscribtion.html
│   └── Subscription page
│
├── register.js
│   └── Registration-related JavaScript
│
├── qrcode.js
│   └── QR code functionality
│
├── qrcode.css
│   └── QR code styling
│
├── projectbackend.js
│   └── Main Node.js/Express backend
│
├── movies.json
│   └── Movie data
│
├── users.json
│   └── User data
│
├── likes.json
│   └── Like/dislike data
│
├── contact_data.json
│   └── Contact form data
│
├── package.json
│   └── Project dependencies and scripts
│
├── package-lock.json
│   └── Dependency lock file
│
└── README.md
    └── Project documentation
