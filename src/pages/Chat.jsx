import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API from "../services/api";

function Chat() {

  const [searchParams] = useSearchParams();

  const [receiverId] = useState(
    searchParams.get("user") || ""
  );

  const [receiverName, setReceiverName] = useState("");

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const messagesEndRef = useRef(null);

  const currentUser = JSON.parse(
    localStorage.getItem("user")
  );

  const loadMessages = async () => {

    if (!receiverId) return;

    try {

      const res = await API.get(
        `/messages/${receiverId}`
      );

      setMessages(res.data);

    } catch (err) {

      console.error(err);
    }
  };

  const loadReceiver = async () => {

    try {

      const res = await API.get(
        `/messages/user/${receiverId}`
      );

      setReceiverName(res.data.name);

    } catch (err) {

      console.error(err);
    }
  };

  const sendMessage = async () => {

    if (!message.trim()) return;

    try {

      await API.post(
        "/messages/send",
        {
          receiver_id: receiverId,
          message: message.trim()
        }
      );

      setMessage("");

      loadMessages();

    } catch (err) {

      console.error(err);
    }
  };

  useEffect(() => {

    loadMessages();

    loadReceiver();

    const interval = setInterval(() => {

      loadMessages();

    }, 2000);

    return () => clearInterval(interval);

  }, [receiverId]);

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });

  }, [messages]);

  const startVideoCall = () => {

    const roomName =
      Number(currentUser.id) < Number(receiverId)
        ? `connect-via-skills-${currentUser.id}-${receiverId}`
        : `connect-via-skills-${receiverId}-${currentUser.id}`;

    window.open(
      `https://meet.jit.si/${roomName}`,
      "_blank"
    );
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#f4e8ff,#eef2ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px"
      }}
    >

      <div
        style={{
          width: "900px",
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(15px)",
          borderRadius: "30px",
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
        }}
      >

        {/* Header */}

        <div
          style={{
            padding: "25px 35px",
            borderBottom: "1px solid #e5e7eb",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >

          <div>

            <h2
              style={{
                color: "#1e293b",
                marginBottom: "5px"
              }}
            >
              Session Chat
            </h2>

            <p
              style={{
                color: "#64748b"
              }}
            >
              Connected with {receiverName}
            </p>

          </div>

          <button
            onClick={startVideoCall}
            style={{
              background: "#1e293b",
              color: "white",
              border: "none",
              padding: "12px 18px",
              borderRadius: "15px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            📹 Video Call
          </button>

        </div>


        {/* Messages */}

        <div
          style={{
            height: "500px",
            overflowY: "auto",
            padding: "25px",
            background: "#fafafa"
          }}
        >

          {messages.length === 0 ? (

            <p
              style={{
                color: "#64748b"
              }}
            >
              No messages yet
            </p>

          ) : (

            messages.map((msg) => (

              <div
                key={msg.id}
                style={{
                  textAlign:
                    msg.sender_id === currentUser.id
                      ? "right"
                      : "left",
                  marginBottom: "18px"
                }}
              >

                <div
                  style={{
                    display: "inline-block",
                    maxWidth: "70%",
                    padding: "14px 18px",
                    borderRadius: "18px",
                    background:
                      msg.sender_id === currentUser.id
                        ? "#1e293b"
                        : "#e5e7eb",
                    color:
                      msg.sender_id === currentUser.id
                        ? "white"
                        : "#111827"
                  }}
                >
                  {msg.message}
                </div>

              </div>

            ))

          )}

          <div ref={messagesEndRef}></div>

        </div>


        {/* Input */}

        <div
          style={{
            display: "flex",
            gap: "15px",
            padding: "25px",
            borderTop: "1px solid #e5e7eb"
          }}
        >

          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            onKeyDown={(e) => {

              if (e.key === "Enter") {

                sendMessage();
              }
            }}
            style={{
              flex: 1,
              padding: "15px",
              borderRadius: "15px",
              border: "1px solid #d1d5db",
              outline: "none"
            }}
          />

          <button
            onClick={sendMessage}
            style={{
              background: "#1e293b",
              color: "white",
              border: "none",
              padding: "15px 25px",
              borderRadius: "15px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Send
          </button>

        </div>

      </div>

    </div>

  );
}

export default Chat;