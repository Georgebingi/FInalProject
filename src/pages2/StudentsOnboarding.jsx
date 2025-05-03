import { useState } from "react";
import NileLogo from "../assets/Nile_logo.png";
import { Link } from "react-router-dom";


const StudentsOnboarding = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div style={styles.container}>
      {/* Left Section - Role Selection */}
      <div style={styles.leftSection}>
        <h2 style={styles.heading}>
        Discover the Tools That Empower You
        </h2>
        <p style={styles.subText}>
        From personalized AI insights to real-time counselor support—your journey to clarity starts here.
        </p>

        <div style={styles.rolesContainer}>

          {/* Student Card */}
          <div
            style={styles.roleCard}>
            <div style={{
              width: "218px",
              height: "121px",
              top: "73px",
              left: "21px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
              <span style={styles.roleText}>Personalized Insights
              and Recommendations</span>
              <p style={{
                marginTop: "10px",
                fontFamily: "Manrope",
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "-4%",
                textAlign: "center",
                color: "rgba(75, 75, 75, 0.5)",
              }}>
                Get customized recommendations and advice tailored to your unique needs and concerns.
              </p>
            </div>
          </div>

          {/* Counselor Card */}
          <div
            style={{...styles.roleCard,
              position: "relative",
              top: 0,
              right: "14%", 
            }}>
            <div style={{
              width: "218px",
              height: "121px",
              top: "73px",
              left: "21px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

            }}>
              <span style={styles.roleText}>Anonymous Real-Time
              Counseling</span>
              <p style={{
                marginTop: "10px",
                fontFamily: "Manrope",
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "-4%",
                textAlign: "center",
                color: "rgba(75, 75, 75, 0.5)",
              }}>
                Connect with licensed counselors in a safe and private environment for live, judgment-free support.
              </p>
            </div>
          </div>

          <div
            style={{...styles.roleCard,
            backgroundColor: " rgba(30, 76, 161, 1)",
            position: "relative",
            top: 0,
            right: "22.9%", 
            }}>
            <div style={{
              width: "218px",
              height: "121px",
              top: "73px",
              left: "21px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
              <span style={{...styles.roleText, 
                color:"#FFFFFF"
                , width: "107px "}}>AI-Powered 
              Guidance</span>
              <p style={{
                marginTop: "10px",
                fontFamily: "Manrope",
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "-4%",
                textAlign: "center",
                color: "#FFFFFF",
              }}>
Ask our intelligent AI for instant, practical advice on academics, mental health, and more—anytime, anywhere.              </p>
            </div>
          </div>

        </div>
          <Link to="/studentsdashboard">
            <button style={styles.button}>Continue</button>
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
    "@media screen and (maxWidth: 768px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  leftSection: {
    flex: 1,
    padding: "2rem",
    maxWidth: "678px",
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
    fontFamily: "Manrope",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "100%",
    letterSpacing: "-0.04em",
    color: "#515151",
  },
  rolesContainer: {
    display: "flex",
    position: "relative",
    marginBottom: "2rem",
    border: "2px solid #DFF2E0",
    padding: "20px 15px",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: "20px",
    maxWidth: "595px",
    background: "rgba(110, 193, 88, 0.17)",
    boxShadow: "-4px 2px 4.2px -1px rgba(0,0,0,0.17)",
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
    backgroundColor: "rgba(232, 240, 255, 1)",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.3s",
    height: "170px",
    maxWidth: "180px",
    borderRadius: "20px",
    boxShadow: "-4px 2px 4.2px -1px rgba(0,0,0,0.17)",
    "@media screen and (maxWidth: 768px)": {
      maxWidth: "100%",
    },
  },
  roleText: {
    fontFamily: "Manrope",
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 1,
    letterSpacing: "-4%",
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.5)",
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

export default StudentsOnboarding;


