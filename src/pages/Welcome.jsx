import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Welcome() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#f4e8ff,#eef2ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        position: "relative",
        overflow: "hidden"
      }}
    >

      {/* Background Circle */}

      <div
        style={{
          position: "absolute",
          width: "450px",
          height: "450px",
          background: "rgba(168,85,247,0.08)",
          borderRadius: "50%",
          top: "-150px",
          left: "-150px"
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: "rgba(96,165,250,0.08)",
          borderRadius: "50%",
          bottom: "-120px",
          right: "-120px"
        }}
      />

      {/* Main Card */}

      <div
        style={{
          width: "650px",
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(15px)",
          borderRadius: "30px",
          padding: "60px 55px",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.08)",
          textAlign: "center"
        }}
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1
          }}
        >

          <h1
            style={{
              fontSize: "48px",
              color: "#1e293b",
              lineHeight: "60px",
              margin: 0
            }}
          >
            You're where
            <br />
            you need to be
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "18px",
              marginTop: "25px",
              marginBottom: "40px"
            }}
          >
            Learn Skills • Teach Skills • Build Connections
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px"
            }}
          >

            <button
              onClick={() => navigate("/register")}
              style={{
                background: "#1e293b",
                color: "white",
                border: "none",
                padding: "15px 32px",
                borderRadius: "15px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "16px"
              }}
            >
              Get Started
            </button>

            <button
              onClick={() => navigate("/login")}
              style={{
                background: "#d8d1ca",
                color: "#1e293b",
                border: "none",
                padding: "15px 32px",
                borderRadius: "15px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "16px"
              }}
            >
              Login
            </button>

          </div>

        </motion.div>

      </div>

    </div>

  );
}

export default Welcome;