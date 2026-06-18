import { Link } from "react-router-dom";

function QuizCard({ game }) {
  return (
    <div className="quiz-card">

      <h2 className="game-title">
        {game.name}
      </h2>

      <p>
         Questions: {game.questions}
      </p>

      <p>
        ⏱ Time: {game.time}s
      </p>

      <Link to={`/quiz/${game.id}`}>
        <button className="quiz-btn">
          Start Quiz
        </button>
      </Link>

    </div>
  );
}

export default QuizCard;