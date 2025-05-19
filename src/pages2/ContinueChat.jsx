import { useEffect, useState, useContext } from "react";
import { Phone, Info, Paperclip, Send } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios"; // Axios instance
import { UserContext } from "../context/UserContext";



const ContinueChat = ({ studentId, counselorId }) => {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [counselor, setCounselor] = useState(null);

  useEffect(() => {
    api.get(`/counselors/${id}`)
      .then(res => setCounselor(res.data))
      .catch(() => navigate('/'));
  }, [id]);

  const fetchMessages = async () => {
    if (!counselor || !counselor.id) return;
    try {
      const res = await api.get(`/messages/${counselor.id}?student_id=${user.id}`);
      console.log("Fetched messages:", res.data);
      setMessages(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (err) {
      console.error("Fetch messages failed:", err);
      setMessages([]);
    }
  };

  const handleSend = async () => {
    if (!newMsg.trim()) return;
    setLoading(true);
    try {
      const studentId = user.id;
      await api.post("/messages", {
        sender_id: studentId,
        receiver_id: counselor.id,
        content: newMsg,
      });
      setNewMsg("");
      fetchMessages(); // Refresh messages
    } catch (err) {
      console.error("Send message failed:", err);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (counselor && counselor.id) {
      fetchMessages();
    }
    // eslint-disable-next-line
  }, [counselor]);
  if (!counselor) return <p>Loading...</p>;
  const profile = counselor.counselor_profile || {};
  

  
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.profileSection}>
          <img src="https://randomuser.me/api/portraits/women/75.jpg" alt="profile" style={styles.profileImage} />
          <div>
            <h3 style={styles.name}> {counselor.name}</h3>
            <div style={styles.stars}>
              {Array.from({ length: 5 }).map((_, idx) => (
                <span key={idx} style={{ color: idx < (profile.rating || 0) ? "#FFD700" : "#ccc", fontSize: "18px" }}>
                  ★
                </span>
              ))}
            </div>
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
          messages.map((msg, idx) => {
            const isSent = msg.sender_id === user.id;
            return (
              <div
                key={msg.id || idx}
                style={isSent ? styles.messageContainerSent : styles.messageContainer}
              >
                {!isSent && (
                  <img
                    src="https://randomuser.me/api/portraits/women/75.jpg"
                    alt="profile"
                    style={styles.messageProfile}
                  />
                )}
                <div style={isSent ? styles.sentMessage : styles.receivedMessage}>
                  {msg.content}
                </div>
                {isSent && (
                  <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
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


      {/* Input */}
      <div style={styles.inputContainer}>
        <Paperclip style={styles.attachIcon} />
        <input
          type="text"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder="Type Here..."
          style={styles.input}
        />
        <button style={styles.sendButton} onClick={handleSend} disabled={loading}>
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
    maxWidth: "767px",
    minHeight:"655px",
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
    backgroundColor: "#FFFFFF",
    padding: "10px",
    borderRadius: "15px",
    boxShadow:" 0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
    maxWidth: "362px",
    minheight:"58px",
    fontFamily: "Manrope",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "-2%",
    verticalAlign: "middle",
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
    borderRadius:"15px",
    boxShadow:" 0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
    maxWidth: "362px",
    minheight:"58px",
    fontFamily: "Manrope",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "-2%",
    verticalAlign: "middle",
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

export default ContinueChat;