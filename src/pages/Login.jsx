import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import { getUsers } from "../services/storage";

function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    const users = getUsers();

    const existingUser = users.find(
      (user) => user.email === email
    );

    if (!existingUser) {
      setError(
        "User not found. Please register."
      );
      return;
    }

    if (
      existingUser.password !== password
    ) {
      setError("Incorrect password");
      return;
    }

    login(existingUser);

    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>🎮 Login</h1>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="📧 Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="🔒 Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          {error && (
            <p className="error-text">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

        <div className="register-section">

          <p>
            Don't have an account?
          </p>

          <Link to="/register">
            <button
              className="register-btn"
            >
              Create Account
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Login;