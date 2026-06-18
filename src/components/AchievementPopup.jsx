function AchievementPopup({
  achievement,
}) {
  if (!achievement) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        backgroundColor: "#ffd700",
        padding: "15px",
        borderRadius: "10px",
        boxShadow:
          "0px 0px 10px gray",
        zIndex: 999,
      }}
    >
      <h3>
        🎉 Achievement Unlocked!
      </h3>

      <p>{achievement}</p>
    </div>
  );
}

export default AchievementPopup;