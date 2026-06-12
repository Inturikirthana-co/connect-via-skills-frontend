import { useEffect, useState } from "react";
import API from "../services/api";

function Notifications() {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {

    fetchNotifications();

  }, []);

  const fetchNotifications = async () => {

    try {

      const res = await API.get("/notifications");

      setNotifications(res.data);

    } catch (err) {

      console.error(err);

    }

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#f4e8ff,#eef2ff)",
        display: "flex",
        justifyContent: "center",
        padding: "40px"
      }}
    >

      <div
        style={{
          width: "900px"
        }}
      >

        <div
          style={{
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(15px)",
            borderRadius: "30px",
            padding: "35px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
          }}
        >

          <h1
            style={{
              color: "#1e293b",
              fontSize: "36px",
              marginBottom: "30px"
            }}
          >
            🔔 Notifications
          </h1>

          {notifications.length === 0 ? (

            <div
              style={{
                background: "#fafafa",
                borderRadius: "20px",
                padding: "25px",
                color: "#64748b",
                textAlign: "center"
              }}
            >
              No notifications yet.
            </div>

          ) : (

            notifications.map((note) => (

              <div
                key={note.id}
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "25px",
                  marginBottom: "20px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
                }}
              >

                <p
                  style={{
                    color: "#1e293b",
                    fontSize: "17px",
                    marginBottom: "10px"
                  }}
                >
                  {note.message}
                </p>

                <small
                  style={{
                    color: "#64748b"
                  }}
                >
                  {new Date(note.created_at).toLocaleString()}
                </small>

              </div>

            ))

          )}

        </div>

      </div>

    </div>

  );

}

export default Notifications;