import { Save, Trash, LogOut } from "lucide-react";
import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Datetime from 'react-datetime';
import "../styles/react-datetime.css";

const StudentsSettings =({ studentImageUrl, handleStudentImageChange, handleStudentDeleteImage})=> {

  const [selectedDate, setSelectedDate] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();


  const handleNavigate = (path) => {
    navigate(path, { replace: true });
  };

  return (
    <div style={styles.container}>
      <div style={styles.firstContainer}>
        <h2 style={styles.title}>Settings</h2>
      </div>

      <div style={styles.secondContainer}>
        {/*Profile Section*/}
        <div style={styles.profileSection}>
          <div style={{display: "flex", 
                      flexDirection: "column",
                      alignItems: "flex-start", 
                      marginBottom: "20px",
                      marginRight: "17%",
                      }}>
            <h3 style={{ color: "black", marginBottom: 0}}>Your Photo</h3>
            <span style={{fontSize: "12px", color: "rgba(0,0,0,0.5)"}}>
              This will be displayed at the top right screen
            </span>
          </div>
          <div style={{display: "flex", alignItems: "center"}}>
            <img src={studentImageUrl || "https://randomuser.me/api/portraits/men/75.jpg"} alt="Profile" style={styles.profileImage} />
            <div style={styles.buttonRow}>
              <label style={{...styles.button, ...styles.uploadButton, cursor: "pointer"}}>
                <Save size={15} style={{transform: "translateY(14%)"}}/>
                update
                <input type="file" accept="image/*" onChange={handleStudentImageChange} style={{display: "none"}}/>
              </label>
              <button style={{...styles.button, ...styles.deleteButton }} onClick={handleStudentDeleteImage}>
                <Trash size={15}/>
                Delete
              </button>
            </div>
          </div>
        </div>

        {/*Form Section*/}
          <form style={{width: "85%"}}>
            <div style={styles.inputGroup}>
              <label style={{display: "flex", alignItems: "center"}}>
                <span style={{color: "black", marginRight: "auto"}}>Username</span>
                <input type="text" defaultValue={"John Dillinham"} style={styles.input} />
              </label>
            </div>

            <div style={styles.inputGroup}>
              <label style={{display: "flex", alignItems: "center"}}>
                <span style={{color: "black", marginRight: "auto"}}>Email</span>
                <input type="email" defaultValue="johndillingham434@gmail.com" style={styles.input} />
              </label>
            </div>

            {/* <div style={styles.inputGroup}>
              <label style={{display: "flex", alignItems: "center",}}>
                <span style={{color: "black", marginRight: "auto"}}>Language</span>
                <select style={styles.select}>
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
                </select>
              </label>
            </div> */}

            <div style={styles.inputGroup}>
              <label style={{display: "flex", alignItems: "center",}}>
                <span style={{color: "black", marginRight: "auto"}}>Time Zone</span>
                <select style={styles.select}>
            <option>GMT+</option>
            <option>GMT-</option>
                </select>
              </label>
            </div>

            {/* <div style={styles.inputGroup}>
              <label style={{display: "flex", alignItems: "center"}}>
                <span style={{color: "black", marginRight: "auto"}}>Date and Time</span>
                <Datetime
              value={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              style={{border: "1px solid #ccc", borderRadius: "5px", padding: "5px"}}
            />
              </label>
            </div> */}

            <div style={styles.inputGroup}>
              <label style={{display: "flex", alignItems: "center"}}>
                <span style={{color: "black", marginRight: "auto"}}>Nationality</span>
                <select style={styles.select}>
            <option value="nigeria">Nigeria</option>
            <option value="usa">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="canada">Canada</option>
            <option value="germany">Germany</option>
            <option value="france">France</option>
            <option value="india">India</option>
            <option value="china">China</option>
            <option value="japan">Japan</option>
                </select>
              </label>
            </div>

            {/*Password Section*/}
            <div style={styles.inputGroup}>
              <label style={{display: "flex", alignItems: "center"}}>
                <span style={{color: "black", marginRight: "auto"}}>Current Password</span>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={e => setCurrentPassword(e.target.value)}
                  style={styles.input}
                  placeholder="Enter current password"
                  required
                />
              </label>
            </div>
            <div style={styles.inputGroup}>
              <label style={{display: "flex", alignItems: "center"}}>
                <span style={{color: "black", marginRight: "auto"}}>New Password</span>
                <input
                  type="password"
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  style={styles.input}
                  placeholder="Enter new password"
                  required
                />
              </label>
            </div>
            <div style={styles.inputGroup}>
              <label style={{display: "flex", alignItems: "center"}}>
                <span style={{color: "black", marginRight: "auto"}}>Confirm New Password</span>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  style={styles.input}
                  placeholder="Confirm new password"
                  required
                />
              </label>
            </div>

            {/*Button Container*/}
          <div style={{display: "flex", marginTop: "40px", marginBottom: "20px", justifyContent: "space-between"}}>
            <div style={{display: "flex", gap: "10px"}}>
              <button style={{...styles.button, ...styles.saveButton}}>
                <span>Save</span>
              </button>
              <button style={{...styles.button, ...styles.cancelButton}}>
                <span>Cancel</span>
              </button>
            </div>
            <button style={{...styles.button, ...styles.logoutButton}} onClick={() => handleNavigate("/roleselection")}>
              <LogOut size={14} />
              <span>Log Out</span>
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}
export default StudentsSettings;

const styles = {
  container: {
    height: "85vh",
    width:"78.5vw",
    margin: "0 auto",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    "@media (min-width: 480px)": {
      padding: "10px",
    },
    "@media (min-width: 768px)": {
      padding: "20px",
    },
  },
  firstContainer: {
    width: "100%",
    "@media (min-width: 768px)": {
      flexDirection: "column",
    },
  },
  secondContainer: {
    width: "100%",
    margin: 0,
    "@media (min-width: 768px)": {
      flexDirection: "column",
    },
  },
  title: {
    fontSize: "24px",
    color: "#333",
    fontWeight: "bold",
    marginBottom: "20px",
    "@media (min-width: 480px)": {
      fontSize: "20px",
    },
    "@media (min-width: 768px)": {
      fontSize: "24px",
    },
  },
  profileSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
    "@media (min-width: 768px)": {
      flexDirection: "column",
    },
  },
  profileImage: {
    width: "60px",
    height: "60px",
    marginRight: "50px",
    borderRadius: "50%",
    border: "2px solid #ddd",
    objectFit: "cover",
    "@media (min-width: 480px)": {
      width: "50px",
      height: "50px",
    },
    "@media (min-width: 768px)": {
      width: "60px",
      height: "60px",
    },
  },
  buttonRow: {
    display: "flex",
    gap: "10px",
    "@media (min-width: 768px)": {
      flexDirection: "column",
    },
  },
  button: {
    padding: "6px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    "@media (min-width: 480px)": {
      padding: "4px 8px",
    },
    "@media (min-width: 768px)": {
      padding: "6px 12px",
    },
  },
  uploadButton: {
    backgroundColor: "#3498db",
    color: "white",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#555",
    "@media (min-width: 480px)": {
      fontSize: "12px",
    },
    "@media (min-width: 768px)": {
      fontSize: "14px",
    },
  },
  select: {
    width: "10%",
    color: "#333",
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    position: "relative",
    left: "-38.2%",
    transform: "translateX(-38.2%)",
    fontSize: "14px",
    backgroundColor: "#fff",
    "@media (min-width: 480px)": {
      width: "15%",
    },
    "@media (min-width: 768px)": {
      width: "10%",
    },
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    color: "white",
  },
  inputGroup: {
    marginBottom: "15px",
    "@media (min-width: 480px)": {
      marginBottom: "10px",
    },
    "@media (min-width: 768px)": {
      marginBottom: "15px",
    },
  },
  input: {
    width: "50%",
    backgroundColor: "#f5f5f5",
    color: "#333",
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
    "@media (min-width: 480px)": {
      width: "100%",
    },
    "@media (min-width: 768px)": {
      width: "50%",
    },
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
    "@media (min-width: 768px)": {
      flexDirection: "column",
    },
  },
  saveButton: {
    backgroundColor: "#1E4CA1",
    color: "white",
    borderRadius: "10px",
    height: "42px",
    width: "107px", 
  },
  logoutButton: {
    backgroundColor: "#fff",
    color: "#333",
    display: "flex",
    borderRadius: "10px",
    border: "1px solid #959595",
    height: "42px",
    width: "101px", 
    alignItems: "center",
    gap: "5px",
  },
  cancelButton: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    color: "#333",
    border: "1px solid #959595",
    height: "42px",
    width: "101px", 
  },
};

