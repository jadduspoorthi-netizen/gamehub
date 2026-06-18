import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Leaderboard() {
  const { user } = useContext(AuthContext);

  const players = [
    {
      id: 1,
      name: user?.username || "You",
      xp: user?.xp || 0,
      quizzes: user?.completedQuizzes || 0,
    },
    {
      id: 2,
      name: "Sita",
      xp: 120,
      quizzes: 8,
    },
    {
      id: 3,
      name: "Abhay",
      xp: 90,
      quizzes: 6,
    },
    {
      id: 4,
      name: "Adhi",
      xp: 150,
      quizzes: 10,
    },
  ];

  const sortedPlayers = [...players].sort(
    (a, b) => b.xp - a.xp
  );

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">
        🏆 Leaderboard
      </h1>

      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>XP</th>
            <th>Quizzes</th>
          </tr>
        </thead>

        <tbody>
          {sortedPlayers.map((player, index) => (
            <tr
              key={player.id}
              className={
                player.name === user?.username
                  ? "current-user"
                  : ""
              }
            >
              <td>
                {index === 0
                  ? "🥇"
                  : index === 1
                  ? "🥈"
                  : index === 2
                  ? "🥉"
                  : index + 1}
              </td>

              <td>{player.name}</td>

              <td>{player.xp}</td>

              <td>{player.quizzes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;