import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NileLogo from "../assets/Nile_logo.png";

const useStyles = {
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d47a1",
    color: "#fff",
    textAlign: "center",
    overflow: "hidden",
  },
  contentBox: {
    padding: "40px",
    borderRadius: "10px",
    position: "relative",
  },
  heading: { fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px" },
  subheading: { fontSize: "1.2rem", marginBottom: "20px" },
  logo: {
    width: "150px",
    height: "150px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    padding: "10px",
    marginBottom: "20px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#fff",
    color: "#0d47a1",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px",
  },
};

const Welcome = () => {
  const [animateToRight, setAnimateToRight] = useState(false);

  const handleContinue = () => {
    setAnimateToRight(true);
  };

  return (
    <motion.div style={useStyles.container}>
      <motion.div
        style={useStyles.contentBox}
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <motion.h1
          style={useStyles.heading}
          initial={{ opacity: 0, y: "100vh" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Welcome to MentorMind AI
        </motion.h1>
        <motion.p
          style={useStyles.subheading}
          initial={{ opacity: 0, y: "100vh" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          A supportive AI mentor for mental and academic growth.
        </motion.p>
        <motion.img
          src={NileLogo}
          alt="Nile University Logo"
          style={useStyles.logo}
          initial={{ opacity: 0, y: "100vh" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.div style={{ textAlign: "center" }}>
          <motion.button
            style={useStyles.button}
            onClick={handleContinue}
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5}}
          >
            <Link to="/roleselection">Get Started</Link>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Welcome;

