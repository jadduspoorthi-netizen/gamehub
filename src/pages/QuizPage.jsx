import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import questionsData from "../data/questions.json";

function QuizPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const questions = questionsData[id];

  if (!questions) {
    return <h2>No Questions Found</h2>;
  }

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const handleTimeout = () => {
  const nextQuestion = currentQuestion + 1;

  if (nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion);
    setTimeLeft(15);
  } else {
    navigate("/result", {
      state: {
        score,
        total: questions.length,
      },
    });
  }
};
  const handleAnswer = (option) => {
    let newScore = score;

    if (
      option === questions[currentQuestion].answer
    ) {
      newScore += 1;
      setScore(newScore);
    }

    const nextQuestion =
      currentQuestion + 1;

    if (
      nextQuestion < questions.length
    ) {
     setCurrentQuestion(nextQuestion);
     setTimeLeft(15);
    } else {
      navigate("/result", {
        state: {
          score: newScore,
          total: questions.length,
        },
      });
    }
  };
  useEffect(() => {
  if (timeLeft === 0) {
    handleTimeout();
    return;
  }

  const timer = setTimeout(() => {
    setTimeLeft(timeLeft - 1);
  }, 1000);

  return () => clearTimeout(timer);
}, [timeLeft]);

  return (
  <div className="quiz-page">
    <div className="quiz-box">

      <h2 className="timer">
        ⏳ Time Left:
        <span
          style={{
            color:
              timeLeft > 10
                ? "green"
                : timeLeft > 5
                ? "orange"
                : "red",
            marginLeft: "8px",
          }}
        >
          {timeLeft}s
        </span>
      </h2>

      <h1>🏆 Quiz Challenge</h1>

      <h3>
        Question {currentQuestion + 1} of{" "}
        {questions.length}
      </h3>

      <h2 className="question-text">
        {questions[currentQuestion].question}
      </h2>

      <div className="options-container">
        {questions[currentQuestion].options.map(
          (option) => (
            <button
              key={option}
              className="option-btn"
              onClick={() =>
                handleAnswer(option)
              }
            >
              {option}
            </button>
          )
        )}
      </div>

    </div>
  </div>
);
  
}

export default QuizPage;