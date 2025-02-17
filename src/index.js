// src/index.js
import React from "react"; // Import React library
import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering the app
import App from "./App"; // Import the main App component

// Render the App component into the root div in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);