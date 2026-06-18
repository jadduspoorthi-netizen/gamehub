import { useLocation, Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateUser } from "../services/storage";

function Result() {
  const location = useLocation();

  const { user, login } = useContext(AuthContext);

  const score = location.state?.score || 0;
  const total = location.state?.total || 0;

  const percentage =
    total > 0
      ? ((score / total) * 100).toFixed(0)
      : 0;

  const earnedXP = score * 10;

  useEffect(() => {
    if (!user) return;

    const updatedUser = {
      ...user,
      xp: (user.xp || 0) + earnedXP,
      completedQuizzes:
        (user.completedQuizzes || 0) + 1,
      achievements: [...(user.achievements || [])],
    };

    const completed =
      updatedUser.completedQuizzes;

    // First Quiz Badge
    if (
      completed >= 1 &&
      !updatedUser.achievements.includes(
        "🏅 First Quiz"
      )
    ) {
      updatedUser.achievements.push(
        "🏅 First Quiz"
      );

      alert(
        "🎉 Achievement Unlocked!\n🏅 First Quiz"
      );
    }

    // Quiz Expert Badge
    if (
      completed >= 5 &&
      !updatedUser.achievements.includes(
        "🏆 Quiz Expert"
      )
    ) {
      updatedUser.achievements.push(
        "🏆 Quiz Expert"
      );

      alert(
        "🎉 Achievement Unlocked!\n🏆 Quiz Expert"
      );
    }

    // Quiz Master Badge
    if (
      completed >= 10 &&
      !updatedUser.achievements.includes(
        "👑 Quiz Master"
      )
    ) {
      updatedUser.achievements.push(
        "👑 Quiz Master"
      );

      alert(
        "🎉 Achievement Unlocked!\n👑 Quiz Master"
      );
    }

    updateUser(updatedUser);

    login(updatedUser);
  }, []);

  return (
  <div className="result-container">

    <div className="result-card">

      <h1>🎉 Quiz Completed!</h1>

      <h2>
        Score: {score} / {total}
      </h2>

      <h3>
        📊 Percentage: {percentage}%
      </h3>

      <h3>
        ⭐ XP Earned: +{earnedXP}
      </h3>

      {percentage >= 80 ? (
        <p className="result-message">
          🏆 Excellent Performance!
        </p>
      ) : percentage >= 50 ? (
        <p className="result-message">
          👍 Good Job!
        </p>
      ) : (
        <p className="result-message">
          📚 Keep Practicing!
        </p>
      )}

      <div className="result-buttons">

        <Link to="/quiz-arena">
          <button>
            🎮 Play Again
          </button>
        </Link>

        <Link to="/dashboard">
          <button>
            📊 Dashboard
          </button>
        </Link>

      </div>

    </div>

  </div>
);
}

export default Result;