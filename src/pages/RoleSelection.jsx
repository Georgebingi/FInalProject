import { useState } from "react";
import NileLogo from "../assets/Nile_logo.png";
import Ph_Student from "../assets/Ph_Student-fill.png";
import Hearing_symbol from "../assets/material-symbols_hearing.png";
import { Link } from "react-router-dom";
import { LucideCheck } from "lucide-react";

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    if (selectedRole === role) {
      setSelectedRole(null);
    } else {
      setSelectedRole(role);
    }
  };

  return (
    <div style={styles.container}>
      {/* Left Section - Role Selection */}
      <div style={styles.leftSection}>
        <h2 style={styles.heading}>
          Are you joining as a student or as a counselor providing support?
        </h2>
        <p style={styles.subText}>
          To ensure the app works best for you, we need you to select your role
          to customize your experience and access tailored features.
        </p>

        <div style={styles.rolesContainer}>
          {/* Student Card */}
          <div
            style={{
              ...styles.roleCard,
              backgroundColor: selectedRole === "student" ? "#15469E" : "#eee",
              color: selectedRole === "student" ? "white" : "black",
            }}
            onClick={() => handleRoleSelect("student")}
          >
            <span style={styles.roleText}>STUDENT</span>
            <img src={Ph_Student} alt="Student Icon" style={styles.icon} />
            {selectedRole === "student" && (
              <LucideCheck style={{...styles.checkmark, color: selectedRole === "student" ? "white" : "black", role: "roleselection"}} />
            )}
          </div>

          {/* Counselor Card */}
          <div
            style={{
              ...styles.roleCard,
              backgroundColor: selectedRole === "counselor" ? "#15469E" : "#eee",
              color: selectedRole === "counselor" ? "white" : "black",
            }}
            onClick={() => handleRoleSelect("counselor")}
          >
            <span style={{...styles.roleText, color: selectedRole === "counselor" ? "white" : "black"}}>COUNSELOR</span>
            <span style={styles.icon}>
              <img src={Hearing_symbol}
                alt="Hearing Symbol Icon" style={styles.icon} />
            </span>
            {selectedRole === "counselor" && (
              <LucideCheck style={{...styles.checkmark, color: selectedRole === "counselor" ? "white" : "black", role: "roleselection"}} />
            )}
          </div>
        </div>
        {selectedRole === "student" && (
          <Link to="/signin">
            <button style={styles.button}>Continue</button>
          </Link>
        )}
        {selectedRole === "counselor" && (
          <Link to="/counselorsignin">
            <button style={styles.button}>Continue</button>
          </Link>
        )}
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
    "@media screen and (maxWidth: 768px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  leftSection: {
    flex: 1,
    padding: "2rem",
    maxWidth: "35%",
    "@media screen and (maxWidth: 768px)": {
      maxWidth: "100%",
    },
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
  rolesContainer: {
    display: "flex",
    width: "100%",
    marginBottom: "2rem",
    gap: "1rem",
    border: "2px solid #DFF2E0",
    padding: "20px 15px",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "20px",
    background: "rgba(110, 193, 88, 0.17)",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    "@media screen and (maxWidth: 768px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  roleCard: {
    flex: 1,
    padding: "2rem",
    textAlign: "center",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #DFF2E0",
    transition: "0.3s",
    height: "170px",
    maxWidth: "180px",
    borderRadius: "20px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    "@media screen and (maxWidth: 768px)": {
      maxWidth: "100%",
    },
  },
  roleText: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  icon: {
    fontSize: "2rem",
  },
  checkmark: {
    position: "relative",
    top: "-95%",
    right: "-55%",
    fontSize: "1.5rem",
  },
  button: {
    padding: "0.8rem 2rem",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#15469E",
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
    "@media screen and (maxWidth: 768px)": {
      width: "100%",
      height: "unset",
      padding: "2rem",
    },
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

export default RoleSelection;

