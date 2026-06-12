import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Requests() {

  const [requests, setRequests] = useState([]);
  const [sessionDate, setSessionDate] = useState({});
  const [sessionTime, setSessionTime] = useState({});

  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {

    fetchRequests();

    const interval = setInterval(() => {

      fetchRequests();

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  const fetchRequests = async () => {

    try {

      const res = await API.get("/match/all");

      setRequests(res.data);

    } catch (err) {

      console.error(err);

    }

  };

  const acceptRequest = async (id) => {

    try {

      await API.put(`/match/accept/${id}`);

      fetchRequests();

    } catch (err) {

      console.error(err);

    }

  };

  const rejectRequest = async (id) => {

    try {

      await API.put(`/match/reject/${id}`);

      fetchRequests();

    } catch (err) {

      console.error(err);

    }

  };

  const scheduleSession = async (id) => {

    if (!sessionDate[id] || !sessionTime[id]) {

      alert("Please select both date and time");

      return;

    }

    try {

      await API.put(`/match/schedule/${id}`, {
        session_date: sessionDate[id],
        session_time: sessionTime[id]
      });

      alert("Session Scheduled Successfully");

      fetchRequests();

    } catch (err) {

      alert("Failed to schedule session");

    }

  };

  const completeSession = async (id) => {

    try {

      await API.put(`/match/complete/${id}`);

      alert("Session Completed Successfully");

      fetchRequests();

    } catch (err) {

      alert("Failed to complete session");

    }

  };

  const openChat = (req) => {

    const otherUser =
      currentUser.id === req.teacher_id
        ? req.learner_id
        : req.teacher_id;

    navigate(`/chat?user=${otherUser}`);

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
          maxWidth: "1100px",
          margin: "auto",
          position: "relative"
        }}
      >

        <h1
          style={{
            color: "#1e293b",
            marginBottom: "35px"
          }}
        >
          📩 Match Requests
        </h1>

        {requests.length === 0 ? (

          <div
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(15px)",
              padding: "30px",
              borderRadius: "25px",
              boxShadow:
                "0 20px 50px rgba(0,0,0,0.08)"
            }}
          >
            No requests available.
          </div>

        ) : (

          requests.map((req) => (

            <div
              key={req.id}
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(15px)",
                borderRadius: "25px",
                padding: "30px",
                marginBottom: "30px",
                boxShadow:
                  "0 20px 50px rgba(0,0,0,0.08)"
              }}
            >

              <h2 style={{ color: "#1e293b" }}>
                🎯 {req.skill}
              </h2>

              <p style={{ color: "#64748b" }}>
                Teacher : {req.teacher_name}
              </p>

              <p style={{ color: "#64748b" }}>
                Learner : {req.learner_name}
              </p>

              <p style={{ marginTop: "15px" }}>
                Status :
                <span
                  style={{
                    marginLeft: "10px",
                    fontWeight: "bold",
                    color:
                      req.status === "accepted"
                        ? "#16a34a"
                        : req.status === "rejected"
                        ? "#ef4444"
                        : req.status === "completed"
                        ? "#2563eb"
                        : "#f59e0b"
                  }}
                >
                  {req.status.toUpperCase()}
                </span>
              </p>

              {/* Pending */}

              {req.status === "pending" &&
                currentUser.id === req.teacher_id && (

                <div style={{ marginTop: "20px" }}>

                  <button
                    onClick={() => acceptRequest(req.id)}
                    style={{
                      background: "#16a34a",
                      color: "white",
                      border: "none",
                      padding: "12px 20px",
                      borderRadius: "14px",
                      cursor: "pointer"
                    }}
                  >
                    Accept
                  </button>

                  <button
                    onClick={() => rejectRequest(req.id)}
                    style={{
                      background: "#ef4444",
                      color: "white",
                      border: "none",
                      padding: "12px 20px",
                      borderRadius: "14px",
                      cursor: "pointer",
                      marginLeft: "15px"
                    }}
                  >
                    Reject
                  </button>

                </div>

              )}

              {/* Accepted */}

              {req.status === "accepted" && (

                <div style={{ marginTop: "25px" }}>

                  <button
                    onClick={() => openChat(req)}
                    style={{
                      background: "#1e293b",
                      color: "white",
                      border: "none",
                      padding: "12px 20px",
                      borderRadius: "14px",
                      cursor: "pointer"
                    }}
                  >
                    💬 Open Chat
                  </button>

                  {currentUser.id === req.teacher_id && (

                    <button
                      onClick={() => completeSession(req.id)}
                      style={{
                        background: "#16a34a",
                        color: "white",
                        border: "none",
                        padding: "12px 20px",
                        borderRadius: "14px",
                        cursor: "pointer",
                        marginLeft: "15px"
                      }}
                    >
                      Complete Session
                    </button>

                  )}

                  {currentUser.id === req.teacher_id && (

                    <div
                      style={{
                        marginTop: "25px",
                        display: "flex",
                        gap: "15px",
                        flexWrap: "wrap"
                      }}
                    >

                      <input
                        type="date"
                        value={sessionDate[req.id] || ""}
                        onChange={(e) =>
                          setSessionDate({
                            ...sessionDate,
                            [req.id]: e.target.value
                          })
                        }
                        style={{
                          padding: "12px",
                          borderRadius: "12px",
                          border: "1px solid #d1d5db"
                        }}
                      />

                      <input
                        type="time"
                        value={sessionTime[req.id] || ""}
                        onChange={(e) =>
                          setSessionTime({
                            ...sessionTime,
                            [req.id]: e.target.value
                          })
                        }
                        style={{
                          padding: "12px",
                          borderRadius: "12px",
                          border: "1px solid #d1d5db"
                        }}
                      />

                      <button
                        onClick={() => scheduleSession(req.id)}
                        style={{
                          background: "#7c3aed",
                          color: "white",
                          border: "none",
                          padding: "12px 20px",
                          borderRadius: "14px",
                          cursor: "pointer"
                        }}
                      >
                        Schedule Session
                      </button>

                    </div>

                  )}

                  {req.session_date && (

                    <div
                      style={{
                        marginTop: "25px",
                        background: "#f8fafc",
                        padding: "20px",
                        borderRadius: "18px"
                      }}
                    >

                      <h3>📅 Scheduled Session</h3>

                      <p>Date : {req.session_date}</p>

                      <p>Time : {req.session_time}</p>

                    </div>

                  )}

                </div>

              )}

              {req.status === "completed" && (

                <div
                  style={{
                    marginTop: "25px",
                    background: "#dcfce7",
                    padding: "20px",
                    borderRadius: "18px"
                  }}
                >

                  <h3>✅ Session Completed</h3>

                  <p>This learning session has been completed.</p>

                </div>

              )}

            </div>

          ))

        )}

      </div>

    </div>

  );

}

export default Requests;