import { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-hot-toast";

function Profile() {

  const [profile, setProfile] = useState({
    profile_pic: null,
    bio: "",
    education: "",
    college: "",
    degree: "",
    graduation_year: "",
    experience: "",
    current_role: "",
    linkedin: "",
    github: "",
    portfolio: ""
  });

  const [previewImage, setPreviewImage] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile = async () => {

    try {

      const res = await API.get("/profile/me");

      if (res.data) {

        setProfile((prev) => ({
          ...prev,
          ...res.data
        }));

        if (res.data.profile_pic) {

          // Cloudinary URL
          setPreviewImage(res.data.profile_pic);

        }

      }

    } catch (err) {

      console.error(err);

    }

  };

  const handleChange = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });

  };

  const handleImage = (e) => {

    const file = e.target.files[0];

    setProfile({
      ...profile,
      profile_pic: file
    });

    if (file) {

      setPreviewImage(URL.createObjectURL(file));

    }

  };

  const handleSave = async () => {

    try {

      const formData = new FormData();

      if (profile.profile_pic instanceof File) {

        formData.append(
          "profile_pic",
          profile.profile_pic
        );

      }

      formData.append("bio", profile.bio);
      formData.append("education", profile.education);
      formData.append("college", profile.college);
      formData.append("degree", profile.degree);
      formData.append("graduation_year", profile.graduation_year);
      formData.append("experience", profile.experience);
      formData.append("current_role", profile.current_role);
      formData.append("linkedin", profile.linkedin);
      formData.append("github", profile.github);
      formData.append("portfolio", profile.portfolio);

      await API.post("/profile/save", formData);

      toast.success("Profile Saved Successfully");

      fetchProfile();

    } catch (err) {

      console.error(err);

      toast.error("Failed To Save Profile");

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
        padding: "40px"
      }}
    >

      <div
        style={{
          width: "900px",
          background: "white",
          borderRadius: "30px",
          overflow: "hidden",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.08)"
        }}
      >

        {/* HEADER */}

        <div
          style={{
            textAlign: "center",
            padding: "40px",
            borderBottom: "1px solid #e5e7eb"
          }}
        >

          <img
            src={
              previewImage ||
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt="profile"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover"
            }}
          />

          <br /><br />

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

          <h1>{user?.name}</h1>

          <p>{user?.email}</p>

        </div>

        {/* BODY */}

        <div style={{ padding: "40px" }}>

          <h3>About Me</h3>

          <textarea
            rows="4"
            name="bio"
            value={profile.bio || ""}
            onChange={handleChange}
            style={textareaStyle}
          />

          <h3>College</h3>

          <input
            name="college"
            value={profile.college || ""}
            onChange={handleChange}
            style={inputStyle}
          />

          <h3>Degree</h3>

          <input
            name="degree"
            value={profile.degree || ""}
            onChange={handleChange}
            style={inputStyle}
          />

          <h3>Graduation Year</h3>

          <input
            type="number"
            name="graduation_year"
            value={profile.graduation_year || ""}
            onChange={handleChange}
            style={inputStyle}
          />

          <h3>Experience</h3>

          <input
            name="experience"
            value={profile.experience || ""}
            onChange={handleChange}
            style={inputStyle}
          />

          <h3>Current Role</h3>

          <input
            name="current_role"
            value={profile.current_role || ""}
            onChange={handleChange}
            style={inputStyle}
          />

          <h3>LinkedIn</h3>

          <input
            name="linkedin"
            value={profile.linkedin || ""}
            onChange={handleChange}
            style={inputStyle}
          />

          <h3>GitHub</h3>

          <input
            name="github"
            value={profile.github || ""}
            onChange={handleChange}
            style={inputStyle}
          />

          <h3>Portfolio</h3>

          <input
            name="portfolio"
            value={profile.portfolio || ""}
            onChange={handleChange}
            style={inputStyle}
          />

          <button
            onClick={handleSave}
            style={{
              width: "100%",
              padding: "15px",
              background: "#1e293b",
              color: "white",
              border: "none",
              borderRadius: "15px",
              marginTop: "30px",
              cursor: "pointer"
            }}
          >
            Save Profile
          </button>

        </div>

      </div>

    </div>

  );

}

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginBottom: "20px",
  borderRadius: "15px",
  border: "1px solid #d1d5db"
};

const textareaStyle = {
  width: "100%",
  padding: "15px",
  marginBottom: "20px",
  borderRadius: "15px",
  border: "1px solid #d1d5db"
};

export default Profile;