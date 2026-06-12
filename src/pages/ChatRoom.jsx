import { useState } from "react";

function ChatRoom() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const sendMessage = () => {

    if (!message.trim()) return;

    setMessages([
      ...messages,
      {
        sender: "You",
        text: message
      }
    ]);

    setMessage("");
  };

  return (
    <div style={{ padding: "40px" }}>

      <h1>Skill Session Chat</h1>

      <div
        style={{
          border: "1px solid gray",
          height: "300px",
          overflowY: "scroll",
          padding: "10px",
          marginBottom: "20px"
        }}
      >
        {messages.map((msg, index) => (

          <div key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>

        ))}
      </div>

      <input
        type="text"
        value={message}
        placeholder="Type message..."
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={sendMessage}
        style={{ marginLeft: "10px" }}
      >
        Send
      </button>

    </div>
  );
}

export default ChatRoom;