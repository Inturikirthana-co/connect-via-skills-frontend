import { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-hot-toast";

function FindMatch() {

  const [skills, setSkills] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchSkills();

  }, []);

  const fetchSkills = async (keyword = "") => {

    try {

      const res = await API.get(
        `/skills?search=${keyword}`
      );

      setSkills(res.data);

    } catch (err) {

      console.error(err);
    }
  };

  const requestMatch = async (
    teacherId,
    skillName
  ) => {

    try {

      const res = await API.post(
        "/match/request",
        {
          teacher_id: teacherId,
          skill: skillName,
          credit: 10
        }
      );

      toast.success(res.data.message);

    } catch (err) {

      toast.error("Match Request Failed");
    }
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#f4e8ff,#eef2ff)",
        padding: "40px",
        position: "relative",
        overflow: "hidden"
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

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          position: "relative"
        }}
      >

        <div
          style={{
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(15px)",
            borderRadius: "30px",
            padding: "35px",
            marginBottom: "35px",
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.08)"
          }}
        >

          <h1
            style={{
              color: "#1e293b",
              marginBottom: "15px"
            }}
          >
            Find a Skill Mentor
          </h1>

          <p
            style={{
              color: "#64748b",
              marginBottom: "25px"
            }}
          >
            Discover experts and request learning sessions.
          </p>

          <input
            type="text"
            placeholder="Search by skill..."
            value={search}
            onChange={(e) => {

              setSearch(e.target.value);

              fetchSkills(e.target.value);

            }}
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "15px",
              border: "1px solid #d1d5db",
              outline: "none"
            }}
          />

        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill,minmax(320px,1fr))",
            gap: "25px"
          }}
        >

          {skills.map((skill) => (

            <div
              key={skill.id}
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(15px)",
                borderRadius: "25px",
                padding: "30px",
                boxShadow:
                  "0 15px 40px rgba(0,0,0,0.08)"
              }}
            >

              <h2
                style={{
                  color: "#1e293b",
                  marginBottom: "20px"
                }}
              >
                {skill.skill_name}
              </h2>

              <p
                style={{
                  color: "#64748b",
                  marginBottom: "12px"
                }}
              >
                👨‍🏫 Teacher : {skill.teacher_name}
              </p>

              <p
                style={{
                  color: "#64748b"
                }}
              >
                🎓 Session Cost : 10 Credits
              </p>

              <button
                onClick={() =>
                  requestMatch(
                    skill.user_id,
                    skill.skill_name
                  )
                }
                style={{
                  width: "100%",
                  marginTop: "25px",
                  padding: "15px",
                  border: "none",
                  borderRadius: "16px",
                  background: "#1e293b",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                Request Session
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default FindMatch;