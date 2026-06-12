import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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
        "/auth/signup",
        formData
      );

      alert(res.data.message);

      navigate("/login");

    } catch (err) {

      alert("Registration Failed");

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
          width: "450px",
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
          Create Account
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "35px"
          }}
        >
          Start your learning journey
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px"
          }}
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: "15px",
              borderRadius: "15px",
              border: "1px solid #e2e8f0",
              outline: "none"
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: "15px",
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
              padding: "15px",
              borderRadius: "15px",
              border: "1px solid #e2e8f0",
              outline: "none"
            }}
          />

          <button
            type="submit"
            style={{
              background: "#1e293b",
              color: "white",
              border: "none",
              padding: "15px",
              borderRadius: "15px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Register
          </button>

        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "25px",
            color: "#64748b"
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#1e293b",
              fontWeight: "bold",
              textDecoration: "none"
            }}
          >
            Login
          </Link>
        </p>

      </div>

    </div>

  );

}

export default Register;