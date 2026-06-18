import QuizCard from "../components/QuizCard";

const games = [
  {
    id: 1,
    name: "🏏 Cricket",
    questions: 10,
    time: 15,
  },
  {
    id: 2,
    name: "⚽ Football",
    questions: 10,
    time: 15,
  },
  {
    id: 3,
    name: "🏸Badminton",
    questions: 10,
    time: 15,
  },
  {
    id: 4,
    name: "🏐 Volleyball",
    questions: 10,
    time: 15,
  },
  {
    id: 5,
    name: "🏀 Basketball",
    questions: 10,
    time: 15,
  },
];

function QuizArena() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        🏆 Sports Quiz Arena
      </h1>

      <div className="quiz-grid">
        {games.map((game) => (
          <QuizCard
            key={game.id}
            game={game}
          />
        ))}
      </div>
    </div>
  );
}

export default QuizArena;