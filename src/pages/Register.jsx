import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, saveUsers } from "../services/storage";

function Register() {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!formData.username.trim()) {
      setError("Username is required");
      return;
    }

    if (formData.username.length < 3) {
      setError("Username must be at least 3 characters");
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setError("Enter a valid email");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setError(
        "Phone number must contain exactly 10 digits"
      );
      return;
    }

    if (formData.password.length < 6) {
      setError(
        "Password must be at least 6 characters"
      );
      return;
    }

    if (!/\d/.test(formData.password)) {
      setError(
        "Password must contain at least one number"
      );
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError("Passwords do not match");
      return;
    }

    const users = getUsers();

    const existingUser = users.find(
      (user) =>
        user.email === formData.email
    );

    if (existingUser) {
      setError(
        "Email already registered"
      );
      return;
    }

    users.push({
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      xp: 0,
      completedQuizzes: 0,
      achievements: [],
    });

    saveUsers(users);

    alert("Registration Successful");

    navigate("/login");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>🎮 Create Account</h1>

        <p>
          Join GameHub Arena Today
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="username"
            placeholder="👤 Username"
            value={formData.username}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="📧 Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="📱 Phone Number"
            value={formData.phone}
            maxLength="10"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="🔒 Password"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="🔒 Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
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
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;