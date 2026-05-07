// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import the App component where ContactForm is rendered

// Optional: Any global app setup before rendering (e.g., context providers, stores)
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// Render the app component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
