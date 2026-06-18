import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Achievements() {
  const { user } =
    useContext(AuthContext);

  return (
    <div>
      <h1>🏆 Achievements</h1>

      {user?.achievements?.length > 0 ? (
        <ul>
          {user.achievements.map(
            (achievement, index) => (
              <li key={index}>
                {achievement}
              </li>
            )
          )}
        </ul>
      ) : (
        <p>
          Complete quizzes to unlock
          achievements!
        </p>
      )}

      <hr />

      <h3>Available Badges</h3>

      <ul>
        <li>🏅 First Quiz (1 Quiz)</li>
        <li>🏆 Quiz Expert (5 Quizzes)</li>
        <li>👑 Quiz Master (10 Quizzes)</li>
      </ul>
    </div>
  );
}

export default Achievements;