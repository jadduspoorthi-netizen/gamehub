import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="overlay">

        <h1 className="hero-title">
          🎮 GAMEHUB ARENA
        </h1>

        <h2 className="hero-subtitle">
          Play • Compete • Conquer
        </h2>

        <p className="hero-text">
  Test your sports knowledge,
  earn XP, unlock achievements,
  compete with players, and climb
  the leaderboard to become the
  ultimate champion.
</p>

        <Link to="/quiz-arena">
          <button className="play-btn">
            🚀 Start Playing
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Home;