import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

function Dashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");

  };

  const hour = new Date().getHours();

  let greeting = "Good Evening 🌙";

  if (hour < 12) {

    greeting = "Good Morning ☀️";

  } else if (hour < 18) {

    greeting = "Good Afternoon 🌤️";

  }

  const quotes = [

    "Learning never exhausts the mind.",
    "Knowledge shared is knowledge multiplied.",
    "Every expert was once a beginner.",
    "Teach to learn twice."

  ];

  const randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];

  return (

    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#f4e8ff,#eef2ff)"
      }}
    >

      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "40px"
        }}
      >

        {/* Greeting */}

        <div
          style={{
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(15px)",
            borderRadius: "30px",
            padding: "35px",
            boxShadow:
              "0 15px 40px rgba(0,0,0,0.08)"
          }}
        >

          <h1
            style={{
              color: "#1e293b",
              fontSize: "40px",
              marginBottom: "10px"
            }}
          >
            {greeting}
          </h1>

          <h2
            style={{
              color: "#334155"
            }}
          >
            Welcome Back, {user?.name}
          </h2>

          <p
            style={{
              color: "#64748b"
            }}
          >
            Continue learning and sharing skills.
          </p>

        </div>


        {/* Stat Cards */}

        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
            marginTop: "35px"
          }}
        >

          <StatCard
            title="Credits"
            value={user?.credit || 0}
            icon="💎"
          />

          <StatCard
            title="Membership"
            value="Free"
            icon="⭐"
          />

          <StatCard
            title="Sessions"
            value={user?.completed_sessions || 0}
            icon="📚"
          />

        </div>


        {/* Recent Activity */}

        <div
          style={{
            marginTop: "40px",
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(15px)",
            borderRadius: "30px",
            padding: "30px",
            boxShadow:
              "0 15px 40px rgba(0,0,0,0.08)"
          }}
        >

          <h2
            style={{
              color: "#1e293b"
            }}
          >
            📈 Recent Activity
          </h2>

          <br />

          <p style={{ color: "#64748b" }}>
            📩 Match requests will appear here
          </p>

          <br />

          <p style={{ color: "#64748b" }}>
            💬 Latest chats will appear here
          </p>

          <br />

          <p style={{ color: "#64748b" }}>
            🎯 New skill matches will appear here
          </p>

        </div>


        {/* Quote */}

        <div
          style={{
            marginTop: "40px",
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(15px)",
            borderRadius: "30px",
            padding: "30px",
            boxShadow:
              "0 15px 40px rgba(0,0,0,0.08)"
          }}
        >

          <h2
            style={{
              color: "#1e293b"
            }}
          >
            💡 Quote Of The Day
          </h2>

          <br />

          <h3
            style={{
              color: "#7c3aed",
              fontWeight: "600"
            }}
          >
            "{randomQuote}"
          </h3>

        </div>


        {/* Quick Actions */}

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap"
          }}
        >

          <button
            onClick={() => navigate("/find-match")}
            style={{
              background: "#1e293b",
              color: "white",
              border: "none",
              padding: "15px 28px",
              borderRadius: "16px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            🎯 Find Match
          </button>

          <button
            onClick={() => navigate("/add-skill")}
            style={{
              background: "#d8d1ca",
              color: "#1e293b",
              border: "none",
              padding: "15px 28px",
              borderRadius: "16px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            ➕ Add Skill
          </button>

          <button
            onClick={() => navigate("/requests")}
            style={{
              background: "#7c3aed",
              color: "white",
              border: "none",
              padding: "15px 28px",
              borderRadius: "16px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            📩 Requests
          </button>

        </div>


        {/* Logout */}

        <button
          onClick={logout}
          style={{
            marginTop: "50px",
            background: "#ef4444",
            color: "white",
            border: "none",
            padding: "15px 30px",
            borderRadius: "16px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Logout
        </button>

      </div>

    </div>

  );

}

export default Dashboard;