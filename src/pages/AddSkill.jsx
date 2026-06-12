import { useState } from "react";
import API from "../services/api";
import { toast } from "react-hot-toast";

function AddSkill() {

  const [skillData, setSkillData] = useState({
    skill_name: "",
    skill_type: "teach"
  });

  const handleChange = (e) => {

    setSkillData({
      ...skillData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/skills/add",
        skillData
      );

      toast.success(
        "Skill Added Successfully"
      );

      setSkillData({
        skill_name: "",
        skill_type: "teach"
      });

    } catch (err) {

      toast.error(
        "Failed to add skill"
      );
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
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "40px"
      }}
    >

      {/* Background Circles */}

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "rgba(168,85,247,0.08)",
          borderRadius: "50%",
          top: "-180px",
          left: "-180px"
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "rgba(96,165,250,0.08)",
          borderRadius: "50%",
          bottom: "-150px",
          right: "-150px"
        }}
      />

      {/* Main Card */}

      <form
        onSubmit={handleSubmit}
        style={{
          width: "450px",
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(15px)",
          borderRadius: "30px",
          padding: "45px",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.08)",
          position: "relative"
        }}
      >

        <h1
          style={{
            color: "#1e293b",
            textAlign: "center",
            marginBottom: "10px"
          }}
        >
          Add New Skill
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "35px"
          }}
        >
          Share what you can teach or learn
        </p>

        <input
          type="text"
          name="skill_name"
          placeholder="Skill Name"
          value={skillData.skill_name}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "15px",
            border: "1px solid #d1d5db",
            outline: "none",
            marginBottom: "20px"
          }}
        />

        <select
          name="skill_type"
          value={skillData.skill_type}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "15px",
            border: "1px solid #d1d5db",
            outline: "none"
          }}
        >
          <option value="teach">
            Teach
          </option>

          <option value="learn">
            Learn
          </option>
        </select>

        <button
          type="submit"
          style={{
            marginTop: "30px",
            width: "100%",
            padding: "16px",
            border: "none",
            borderRadius: "16px",
            background: "#1e293b",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Add Skill
        </button>

      </form>

    </div>

  );
}

export default AddSkill;