import { useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const buttonStyle = {
    width: "100%",
    padding: "16px",
    marginBottom: "15px",
    border: "none",
    borderRadius: "18px",
    cursor: "pointer",
    background: "transparent",
    color: "#cbd5e1",
    fontWeight: "600",
    fontSize: "15px",
    textAlign: "left",
    transition: "0.3s ease"
  };

  return (

    <div
      style={{
        width: "270px",
        background: "#1e293b",
        padding: "30px",
        borderRadius: "30px",
        minHeight: "92vh",
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
      }}
    >

      <h1
        style={{
          color: "#f8fafc",
          textAlign: "center",
          marginBottom: "50px",
          fontSize: "28px"
        }}
      >
        Connect Via Skills
      </h1>

      <button
        style={buttonStyle}
        onClick={() => navigate("/dashboard")}
      >
        🏠 Dashboard
      </button>

      <button
        style={buttonStyle}
        onClick={() => navigate("/profile")}
      >
        👤 Profile
      </button>

      <button
        style={buttonStyle}
        onClick={() => navigate("/add-skill")}
      >
        ➕ Add Skill
      </button>

      <button
        style={buttonStyle}
        onClick={() => navigate("/search-users")}
      >
        🔍 Search Users
      </button>

      <button
        style={buttonStyle}
        onClick={() => navigate("/find-match")}
      >
        🎯 Find Match
      </button>

      <button
        style={buttonStyle}
        onClick={() => navigate("/requests")}
      >
        📩 Requests
      </button>

      <button
        style={buttonStyle}
        onClick={() => navigate("/notifications")}
      >
        🔔 Notifications
      </button>

      <button
        style={buttonStyle}
        onClick={() => navigate("/reviews")}
      >
        ⭐ Reviews
      </button>

      <button
        style={buttonStyle}
        onClick={() => navigate("/membership")}
      >
        💎 Membership
      </button>

    </div>

  );

}

export default Sidebar;