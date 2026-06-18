import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } =
    useContext(AuthContext);

  return (
    <div className="dashboard-container">

      <div className="dashboard-card">

        <h1>🎮 Dashboard</h1>

        <h2>
          Welcome, {user?.username}
        </h2>

        <p className="dashboard-subtitle">
          Ready for your next challenge?
        </p>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>⭐ XP</h3>

            <p>
              {user?.xp || 0}
            </p>
          </div>

          <div className="stat-card">
            <h3>📚 Quizzes</h3>

            <p>
              {user?.completedQuizzes || 0}
            </p>
          </div>

          <div className="stat-card">
            <h3>🏆 Achievements</h3>

            <p>
              {user?.achievements?.length || 0}
            </p>
          </div>

        </div>

        <div className="achievement-section">

          <h3>
            🎖 Unlocked Badges
          </h3>

          {user?.achievements?.length >
          0 ? (
            <ul>
              {user.achievements.map(
                (
                  achievement,
                  index
                ) => (
                  <li key={index}>
                    {achievement}
                  </li>
                )
              )}
            </ul>
          ) : (
            <p>
              Complete quizzes to unlock
              achievements.
            </p>
          )}

        </div>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Dashboard;