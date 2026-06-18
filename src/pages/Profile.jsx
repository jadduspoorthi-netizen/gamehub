import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateUser } from "../services/storage";

function Profile() {
  const { user, login } =
    useContext(AuthContext);

  const [username, setUsername] =
    useState(user?.username || "");

  const [phone, setPhone] =
    useState(user?.phone || "");

  const handleSave = () => {
    if (!/^\d{10}$/.test(phone)) {
      alert(
        "Phone number must be exactly 10 digits"
      );
      return;
    }

    const updatedUser = {
      ...user,
      username,
      phone,
    };

    updateUser(updatedUser);

    login(updatedUser);

    alert("Profile Updated Successfully");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">

        <div className="profile-avatar">
          👤
        </div>

        <h1>My Profile</h1>

        <p className="profile-email">
          {user?.email}
        </p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

        <div className="profile-stats">

          <div className="stat-card">
            <h3>⭐ XP</h3>
            <p>{user?.xp || 0}</p>
          </div>

          <div className="stat-card">
            <h3>📚 Quizzes</h3>
            <p>
              {user?.completedQuizzes || 0}
            </p>
          </div>

        </div>

        <button
          className="save-btn"
          onClick={handleSave}
        >
          Save Changes
        </button>

      </div>
    </div>
  );
}

export default Profile;