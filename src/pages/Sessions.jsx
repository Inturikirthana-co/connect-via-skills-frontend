import { useEffect, useState } from "react";
import API from "../services/api";

function Sessions() {

  const [sessions, setSessions] = useState([]);

  useEffect(() => {

    fetchSessions();

  }, []);

  const fetchSessions = async () => {

    try {

      const res = await API.get("/sessions/all");

      setSessions(res.data);

    } catch (err) {

      console.error(err);
    }
  };

  return (

    <div style={{ padding: "40px" }}>

      <h1>My Sessions</h1>

      {sessions.map((session) => (

        <div
          key={session.id}
          style={{
            border: "1px solid gray",
            padding: "20px",
            marginBottom: "20px"
          }}
        >

          <p>
            Session Time:
            {" "}
            {new Date(
              session.session_time
            ).toLocaleString()}
          </p>

          <p>Status: {session.status}</p>

        </div>

      ))}

    </div>
  );
}

export default Sessions;