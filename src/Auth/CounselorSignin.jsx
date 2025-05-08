import { useState } from "react";

const handleFormSubmit = (e, email, studentId) => {
  e.preventDefault();
  console.log("Email:", email);
  console.log("Counsellor ID:", studentId);
};
import NileLogo from "../assets/Nile_logo.png";
import Vector from "../assets/Vector.png";
import { Link } from "react-router-dom";

const CounselorSignin = () => {
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div style={styles.container}>
      {/* Left Section - Sign In Form */}
      <div style={styles.leftSection}>
        <h2 style={styles.heading}>Sign in</h2>
        <p style={styles.subText}>Welcome back to MentorMindAI</p>

        {/* School Email Input */}
        <label style={styles.label}>School Email</label>
        <div style={styles.inputContainer}>
          <input
            type="email"
            placeholder="thisguy@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <span style={styles.icon}>
            <img src={Vector} alt="Vector" style={styles.vector} />
          </span>
        </div>

        {/* Student ID Input */}
        <label style={styles.label}>Counsellor ID</label>
        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Enter Counsellor ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            style={styles.input}
          />
          <span style={styles.icon}>
            <img src={Vector} alt="Vector" style={styles.vector} />
          </span>
        </div>

        {/* Remember Me & Forgot Password */}
        <div style={styles.rememberContainer}>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              style={styles.checkbox}
            />
            Remember me?
          </label>
          <a href="#" style={styles.forgotPassword}>
            Forgot password?
          </a>
        </div>

        {/* Sign-in Button */}
        <Link to="/counselor">
        <button style={styles.signInButton}
        >Sign in</button>
        </Link>
      </div>

      {/* Right Section - Branding */}
      <div style={styles.rightSection}>
              <div style={styles.logoContainer}>
                <img
                  src={NileLogo}
                  alt="Nile University Logo"
                  style={{
                    ...styles.logo,
                    imageRendering: "-webkit-optimize-contrast",
                    imageResolution: "300dpi",
                  }}
                />
              </div>
            </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "space-around",
    gap: "2rem",
    backgroundColor: "white",
    padding: "0 2rem",
    margin: 0,
    boxSizing: "border-box",
  },
  leftSection: {
    flex: 1,
    padding: "2rem",
    maxWidth: "35%",
  },
  heading: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#333",
  },
  subText: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "2rem",
  },
  label: {
    display: "block",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "0.5rem",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "0.5rem",
    marginBottom: "1rem",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "1rem",
    backgroundColor: "transparent",
    color: "#333",
  },
  icon: {
    fontSize: "1.2rem",
    cursor: "pointer",
  },
  rememberContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  checkboxLabel: {
    fontSize: "0.9rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#333",
  },
  checkbox: {
    width: "16px",
    height: "16px",
  },
  forgotPassword: {
    fontSize: "0.9rem",
    textDecoration: "none",
    color: "#15469E",
  },
  signInButton: {
    width: "100%",
    padding: "0.8rem",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  rightSection: {
    width: "30%",
    height: "40%",
    backgroundColor: "#1E4CA1",
    display: "flex",
    padding: "190px 70px 200px 70px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: "20px",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  logoContainer: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "10px",
  },
  logo: {
    width: "171.739px",
    height: "150px",
    flexShrink: 0,
  },
};

export default CounselorSignin;
