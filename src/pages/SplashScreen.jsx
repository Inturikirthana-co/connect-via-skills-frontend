import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function SplashScreen() {

  const navigate = useNavigate();

  useEffect(() => {

    const timer = setTimeout(() => {

      navigate("/welcome");

    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  return (

    <div
      style={{
        height: "100vh",
        background:
          "linear-gradient(135deg,#f4e8ff,#eef2ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "rgba(168,85,247,0.12)",
          borderRadius: "50%",
          top: "-150px",
          left: "-150px"
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "450px",
          height: "450px",
          background: "rgba(96,165,250,0.12)",
          borderRadius: "50%",
          bottom: "-150px",
          right: "-150px"
        }}
      />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1
        }}
        style={{
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(15px)",
          padding: "70px",
          borderRadius: "35px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
          textAlign: "center"
        }}
      >

        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1
          }}
          style={{
            fontSize: "70px",
            color: "#1e293b",
            fontWeight: "bold"
          }}
        >
          Connect Via Skills
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1
          }}
          style={{
            color: "#64748b",
            fontSize: "22px"
          }}
        >
          Learn • Teach • Grow
        </motion.p>

      </motion.div>

    </div>

  );
}

export default SplashScreen;