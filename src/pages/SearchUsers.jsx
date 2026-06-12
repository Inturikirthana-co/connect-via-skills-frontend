import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function SearchUsers() {

  const [keyword, setKeyword] = useState("");

  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const searchUsers = async () => {

    try {

      const res = await API.get(
        `/users/search?name=${keyword}`
      );

      setUsers(res.data);

    } catch (err) {

      console.error(err);

    }

  };

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
          margin: "auto"
        }}
      >

        {/* Header */}

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
              fontSize: "40px"
            }}
          >
            🔍 Search Users
          </h1>

          <br />

          <div
            style={{
              display: "flex",
              gap: "15px"
            }}
          >

            <input
              type="text"
              placeholder="Search by name..."
              value={keyword}
              onChange={(e) =>
                setKeyword(e.target.value)
              }
              style={{
                flex: 1,
                padding: "16px",
                borderRadius: "16px",
                border: "1px solid #d1d5db",
                outline: "none"
              }}
            />

            <button
              onClick={searchUsers}
              style={{
                background: "#1e293b",
                color: "white",
                border: "none",
                padding: "16px 28px",
                borderRadius: "16px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Search
            </button>

          </div>

        </div>


        {/* Results */}

        <div
          style={{
            marginTop: "35px"
          }}
        >

          {users.map((user) => (

            <div
              key={user.id}
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(15px)",
                borderRadius: "25px",
                padding: "25px",
                marginBottom: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow:
                  "0 15px 40px rgba(0,0,0,0.08)"
              }}
            >

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px"
                }}
              >

                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "#1e293b",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "28px",
                    fontWeight: "bold"
                  }}
                >
                  {user.name?.charAt(0)}
                </div>

                <div>

                  <h2
                    style={{
                      color: "#1e293b"
                    }}
                  >
                    {user.name}
                  </h2>

                  <p
                    style={{
                      color: "#64748b"
                    }}
                  >
                    Skill Sharing Member
                  </p>

                </div>

              </div>

              <button
                onClick={() =>
                  navigate(`/profile/${user.id}`)
                }
                style={{
                  background: "#7c3aed",
                  color: "white",
                  border: "none",
                  padding: "14px 24px",
                  borderRadius: "16px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
              >
                View Profile
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default SearchUsers;