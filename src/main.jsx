import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./context/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary";
import ThemeProvider from "./context/ThemeContext";
import "./App.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
  <AuthProvider>
    <App />
  </AuthProvider>
</ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);