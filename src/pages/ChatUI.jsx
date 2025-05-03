import { Phone, Info, Paperclip, Send } from "lucide-react";

const ChatUI = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.profileSection}>
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="profile"
            style={styles.profileImage}
          />
          <div>
            <h3 style={styles.name}>Daniella Phillips</h3>
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

        {/* Received Message */}
        <div style={styles.messageContainer}>
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="profile"
            style={styles.messageProfile}
          />
          <div>
            <div style={styles.receivedMessage}>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,</div>
            <p style={{...styles.time, textAlign:"left"}}>8:00 PM</p>
          </div>
        </div>

        {/* Sent Message */}
        <div style={styles.messageContainerSent}>
          <div style={styles.sentMessage}>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,</div>
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="profile"
            style={styles.messageProfile}
          />
        </div>
        <p style={styles.time}>8:00 PM</p>

        {/* Typing Indicator */}
        <div style={styles.messageContainer}>
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="profile"
            style={styles.messageProfile}
          />
          <div style={styles.typing}>...</div>
        </div>
      </div>

      {/* Chat Input */}
      <div style={{display: "flex", alignItems: "center", 
      height:"60px",
      border: "1px solid #54545657", 
        padding: "5px", borderRadius: "15px"}}>
        <Paperclip style={styles.attachIcon} />
        <input type="text" placeholder="Type Here..." style={{flex: 1, ...styles.input}} />
        <button style={{...styles.sendButton, marginLeft: "10px"}}>
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