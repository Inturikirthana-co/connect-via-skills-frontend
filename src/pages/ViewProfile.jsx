import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function ViewProfile() {

  const { id } = useParams();

  const [profile, setProfile] = useState(null);

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile = async () => {

    try {

      const res = await API.get(`/profile/${id}`);

      setProfile(res.data);

    } catch (err) {

      console.error(err);

    }

  };

  if (!profile) {

    return (

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px"
        }}
      >
        Loading Profile...
      </div>

    );

  }

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#f4e8ff,#eef2ff)",
        padding: "40px"
      }}
    >

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "white",
          borderRadius: "30px",
          overflow: "hidden",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.08)"
        }}
      >

        {/* Header */}

        <div
          style={{
            textAlign: "center",
            padding: "40px",
            borderBottom: "1px solid #e5e7eb"
          }}
        >

          <img
            src={
              profile.profile_pic
                ? `http://localhost:5000/uploads/${profile.profile_pic}`
                : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt="Profile"
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              objectFit: "cover"
            }}
          />

          <h1
            style={{
              marginTop: "20px",
              color: "#1e293b"
            }}
          >
            {profile.name}
          </h1>

          <p style={{ color: "#64748b" }}>
            {profile.email}
          </p>

        </div>

        {/* Details */}

        <div
          style={{
            padding: "40px"
          }}
        >

          <Section
            title="About Me"
            value={profile.bio}
          />

          <Section
            title="Education"
            value={profile.education}
          />

          <Section
            title="College"
            value={profile.college}
          />

          <Section
            title="Degree"
            value={profile.degree}
          />

          <Section
            title="Graduation Year"
            value={profile.graduation_year}
          />

          <Section
            title="Experience"
            value={profile.experience}
          />

          <Section
            title="Current Role"
            value={profile.current_role}
          />

          <Section
            title="LinkedIn"
            value={profile.linkedin}
          />

          <Section
            title="GitHub"
            value={profile.github}
          />

          <Section
            title="Portfolio"
            value={profile.portfolio}
          />

        </div>

      </div>

    </div>

  );

}

function Section({ title, value }) {

  if (!value) return null;

  return (

    <div
      style={{
        marginBottom: "25px"
      }}
    >

      <h3
        style={{
          color: "#1e293b"
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#475569"
        }}
      >
        {value}
      </p>

    </div>

  );

}

export default ViewProfile;