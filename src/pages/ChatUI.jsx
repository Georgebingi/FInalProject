import { useEffect, useState, useContext } from "react";
import { Phone, Info, Paperclip, Send } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { UserContext } from "../context/UserContext";

const ChatUI = () => {
  const { user } = useContext(UserContext); // The logged-in counselor
  const { id } = useParams(); // student id from route
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/students/${id}`)
      .then(res => setStudent(res.data))
      .catch(() => navigate('/'));
  }, [id, navigate]);

  const fetchMessages = async () => {
    if (!student || !student.id) return;
    try {
      const res = await api.get(`/messages/${user.id}?student_id=${student.id}`);
      setMessages(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      setMessages([]);
    }
  };

  const handleSend = async () => {
    if (!newMsg.trim()) return;
    setLoading(true);
    try {
      await api.post("/messages", {
        sender_id: user.id,
        receiver_id: student.id,
        content: newMsg,
      });
      setNewMsg("");
      fetchMessages();
    } catch (err) {
      // Optionally handle error
    }
    setLoading(false);
  };

  useEffect(() => {
    if (student && student.id) {
      fetchMessages();
    }
    // eslint-disable-next-line
  }, [student]);

  if (!student) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.profileSection}>
          <img
            src={student.avatar || "https://randomuser.me/api/portraits/men/75.jpg"}
            alt="profile"
            style={styles.profileImage}
          />
          <div>
            <h3 style={styles.name}>{student.name}</h3>
            <div style={styles.stars}>⭐ ⭐ ⭐ ⭐ ☆</div>
          </div>
        </div>
        <div style={styles.icons}>
          <Phone style={styles.icon} />
          <Info style={styles.icon} />
        </div>
      </div>

      {/* Chat Messages */}
      <div style={styles.chatArea}>
        <p style={styles.date}>Today</p>
        {Array.isArray(messages) && messages.length > 0 ? (
          messages.map((msg) => {
            const isSent = msg.sender_id === user?.id;
            return (
              <div key={msg.id} style={isSent ? styles.messageContainerSent : styles.messageContainer}>
                {!isSent && (
                  <img
                    src={student.avatar || "https://randomuser.me/api/portraits/men/75.jpg"}
                    alt="profile"
                    style={styles.messageProfile}
                  />
                )}
                <div style={isSent ? styles.sentMessage : styles.receivedMessage}>
                  {msg.content}
                </div>
                {isSent && (
                  <img
                    src={user.avatar || "https://randomuser.me/api/portraits/women/75.jpg"}
                    alt="profile"
                    style={styles.messageProfile}
                  />
                )}
              </div>
            );
          })
        ) : (
          <div style={{ textAlign: "center", color: "#aaa", marginTop: "30px" }}>
            No messages yet.
          </div>
        )}
      </div>

      {/* Chat Input */}
      <div style={{display: "flex", alignItems: "center", 
        height:"60px",
        border: "1px solid #54545657", 
        padding: "5px", borderRadius: "15px"}}>
        <Paperclip style={styles.attachIcon} />
        <input
          type="text"
          placeholder="Type Here..."
          style={{flex: 1, ...styles.input}}
          value={newMsg}
          onChange={e => setNewMsg(e.target.value)}
        />
        <button
          style={{...styles.sendButton, marginLeft: "10px"}}
          onClick={handleSend}
          disabled={loading}
        >
          <Send size={28} style={styles.sendIcon} />
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: "55px auto 0", // Adding top margin for space
    backgroundColor: "#fff",
    width: "767px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    padding: "10px",
    color: "#333",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  profileSection: {
    display: "flex",
    alignItems: "center",
  },
  profileImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  name: {
    margin: "0",
    fontSize: "16px",
    fontWeight: "bold",
  },
  stars: {
    fontSize: "14px",
  },
  icons: {
    display: "flex",
    gap: "10px",
  },
  icon: {
    fontSize: "18px",
    cursor: "pointer",
  },
  chatArea: {
    padding: "15px",
    height: "400px",
    overflowY: "auto",
  },
  date: {
    textAlign: "center",
    fontSize: "14px",
    color: "gray",
    marginBottom: "10px",
  },
  messageContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  messageProfile: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  receivedMessage: {
    backgroundColor: "#f1f1f1",
    padding: "10px",
    borderRadius: "15px",
    maxWidth: "60%",
  },
  messageContainerSent: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "10px",
  },
  sentMessage: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px",
    borderRadius: "15px",
    maxWidth: "60%",
  },
  time: {
    fontSize: "12px",
    color: "gray",
    textAlign: "right",
  },
  typing: {
    backgroundColor: "#f1f1f1",
    padding: "10px",
    borderRadius: "15px",
    maxWidth: "60%",
    fontSize: "18px",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    borderTop: "1px solid #ddd",
    padding: "10px",
  },
  attachIcon: {
    fontSize: "18px",
    cursor: "pointer",
    marginRight: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    backgroundColor:"transparent",
    border: "none",
    color:"#3D3D3D",
    outline: "none",
    fontSize: "16px",
  },
  sendIcon: {
    cursor: "pointer",
    color: "white",
    transform: "translateX(-50%)",
  },
  sendButton: {
    backgroundColor: "#6EC158",
    border: "none",
    cursor: "pointer",
    width:"40px",
    height:"40px",
  },
};

export default ChatUI;