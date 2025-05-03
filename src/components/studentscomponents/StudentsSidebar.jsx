import { useNavigate, useLocation } from "react-router-dom";
import NileLogo from "../../assets/Nile_logo.png";
import Glassmorphic from "../../assets/Glassmorphic.png";
import DashboardIcon from "../../assets/DashboardIcon.png";
import { SettingsIcon, LogOut, UserIcon, LucideLayers, LucideGoal, LucideHistory } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";


const StudentsSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const handleNavigate = (path) => {
    setActivePath(path);
    navigate(path, { replace: true });
  };

  return (
    <aside style={styles.sidebar}>
      <div style={styles.logoContainer}>
        <img src={NileLogo} alt="Nile University Logo" style={styles.logo} />
      </div>
      <div style={styles.navContainer}>
      <nav style={styles.nav}>
        <motion.div
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          onClick={() => handleNavigate("/studentsdashboard")}
          style={{
            ...styles.navItem,
            ...(activePath === "/studentsdashboard" && styles.active),
          }}
        >
          <img
            src={DashboardIcon}
            alt="Person Icon"
            style={{
              ...styles.icon,
              marginRight: "10px",
              transform: "translateY(20%)",
            }}
          />
          Dashboard
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          onClick={() => handleNavigate("/studentsmentormind")}
          style={{
            ...styles.navItem,
            marginTop: "px",
            ...(activePath === "/studentsmentormind" && styles.active),
          }}
        >
          <img
            src={Glassmorphic}
            alt="Person Icon"
            style={{
              ...styles.icon,
              marginLeft: `-6px`,
              marginTop: `-8px`,
              marginBottom: `-7px`,
              marginRight: "2px",
              width: "30px",
              height: "30px",
              transform: "translateY(10%)",
            }}
          />
          MentorMind
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          onClick={() => handleNavigate("/studentscounselorsession")}
          style={{
            ...styles.navItem,
            ...(activePath === "/studentscounselorsession" && styles.active 
                || activePath === "/studentsschedulesession" && styles.active
                || activePath === "/studentschatui" && styles.active)
          }}
        >
          <UserIcon size={20} style={{ marginRight: "5px", transform: "translateY(20%)" }} />
          Counselling Sessions
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          onClick={() => handleNavigate("/studentresources")}
          style={{
            ...styles.navItem,
            ...(activePath === "/studentresources" && styles.active || activePath === "#" && styles.active),
          }}
        >
          <LucideLayers size={20} 
          style={{marginRight: "5px",
            transform: "translateY(20%)"}}
          />
          Resources
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          onClick={() => handleNavigate("/goalsandprogress")}
          style={{
            ...styles.navItem,
            ...(activePath === "/goalsandprogress" && styles.active || activePath === "/goalsandprogress" && styles.active),
          }}
        >
          <LucideGoal size={20} 
          style={{marginRight: "5px",
            transform: "translateY(20%)"}}
          />
          Goals & Progress
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          onClick={() => handleNavigate("/chathistory")}
          style={{
            ...styles.navItem,
            ...(activePath === "/chathistory" && styles.active || activePath === "/chathistory" && styles.active),
          }}
        >
          <LucideHistory size={20} 
          style={{marginRight: "5px",
            transform: "translateY(20%)"}}
          />
          Chat History
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          onClick={() => handleNavigate("/studentssettings")}
          style={{
            ...styles.navItem,
            ...(activePath === "/studentssettings" && styles.active),
          }}
        >
          <SettingsIcon size={20} style={{ ...styles.icon, marginRight: "5px", transform: "translateY(20%)" }} />
          Settings
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          onClick={() => handleNavigate("/roleselection")}
          style={{
            ...styles.logout,
            ...(activePath === "/" && styles.active),
          }}
        >
          <LogOut size={20} style={{ marginRight: "10px", transform: "translateY(20%)" }} />
          Logout
        </motion.div>
      </nav>
      </div>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: "240px",
    backgroundColor: "#fff",
    boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
    paddingTop: "20px",
    "@media (min-width: 1920px)": {
      width: "240px",
    },
    "@media (min-width: 1440px) and (max-width: 1919px)": {
      width: "200px",
    },
    "@media (min-width: 1024px) and (max-width: 1439px)": {
      width: "180px",
    },
    "@media (min-width: 768px) and (max-width: 1023px)": {
      width: "160px",
    },
    "@media (min-width: 480px) and (max-width: 767px)": {
      width: "140px",
    },
    "@media (max-width: 479px)": {
      width: "100vw",
      height: "60px",
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      boxShadow: "0 -2px 4px rgba(0,0,0,0.1)",
    },
  },
  logoContainer: {
    marginBottom: "20px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  logo: {
    width: "120px",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    width: "202px",
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  navItem: {
    padding: "10px",
    fontSize: "16px",
    width:"193.5px",
    marginBottom: "9px",
    textDecoration: "none",
    color: "#333",
    "@media (max-width: 768px)": {
      padding: "10px",
    },
  },
  active: {
    backgroundColor: "#E8F0FE",
    color: "#15469E",
    fontWeight: "bold",
    borderRadius: "7px",
    padding: "10px",
  },
  logout: {
    marginTop: "auto",
    padding: "10px 20px",
    color: "#D32F2F",
    fontSize: "16px",
    textDecoration: "none",
    position: "absolute",
    top: "85%",
    "@media (max-width: 768px)": {
      position: "relative",
      top: "auto",
      margin: 0,
    },
  },
};

export default StudentsSidebar;


