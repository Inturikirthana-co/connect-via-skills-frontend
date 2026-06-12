import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-hot-toast";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      toast.success("Login Successful");

      navigate("/dashboard");

    } catch (err) {

      toast.error("Login Failed");

    }

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#f4e8ff,#eef2ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      <div
        style={{
          width: "420px",
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(15px)",
          padding: "45px",
          borderRadius: "30px",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.08)"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            color: "#1e293b",
            marginBottom: "10px"
          }}
        >
          Welcome Back
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "35px"
          }}
        >
          Login to continue learning
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "18px",
              borderRadius: "15px",
              border: "1px solid #e2e8f0",
              outline: "none"
            }}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "25px",
              borderRadius: "15px",
              border: "1px solid #e2e8f0",
              outline: "none"
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              background: "#1e293b",
              color: "white",
              border: "none",
              padding: "15px",
              borderRadius: "15px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Login
          </button>

        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "25px",
            color: "#64748b"
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#1e293b",
              fontWeight: "bold",
              textDecoration: "none"
            }}
          >
            Register
          </Link>
        </p>

      </div>

    </div>

  );

}

export default Login;