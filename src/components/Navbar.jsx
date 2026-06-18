import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
        padding: "15px",
      }}
    >
      <h2>🎮 GameHub</h2>

      <Link to="/">Home</Link>

      <Link to="/login">Login</Link>

      <Link to="/register">Register</Link>

      <Link to="/dashboard">
        Dashboard
      </Link>

      <Link to="/quiz-arena">
        Quiz Arena
      </Link>

      <Link to="/leaderboard">
        Leaderboard
      </Link>

      <Link to="/contact">
        Contact
      </Link>

      <div
        style={{
          marginLeft: "auto",
        }}
      >
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;