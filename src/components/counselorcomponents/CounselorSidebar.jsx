import { Link, useLocation, useNavigate } from "react-router-dom";
import NileLogo from "../../assets/Nile_logo.png";
import Glassmorphic from "../../assets/Glassmorphic.png";
import DashboardIcon from "../../assets/DashboardIcon.png";
import { SettingsIcon, LogOut, UserIcon, LucideLayers } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import api from "../../api/axios";
import { UserContext } from "../../context/UserContext";

const CounselorSidebar = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSetActive = (path) => setActivePath(path);

  // Logout handler (replicated from Settings)
  const handleLogout = async () => {
    try {
      await api.post('/logout');
      setUser(null);
      navigate("/roleselection", { replace: true });
    } catch (err) {
      alert("Logout failed. Please try again.");
      console.error("Logout error:", err);
    }
  };

  return (
    <aside style={styles.sidebar}>
      <div style={styles.logoContainer}>
        <img src={NileLogo} alt="Nile University Logo" style={styles.logo} />
      </div>
      <div style={styles.navContainer}>
        <nav style={styles.nav}>
          <Link
            to="/counselor"
            style={{
              ...styles.navItem,
              ...(activePath === "/counselor" && styles.active),
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => handleSetActive("/counselor")}
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
          </Link>
          <Link
            to="/mystudent"
            style={{
              ...styles.navItem,
              ...(
                (activePath === "/mystudent" ||
                activePath === "/messagerequest" ||
                activePath === "/studentchat" ||
                activePath === "/scheduledsession" ||
                activePath === "/chatui") && styles.active
              ),
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => handleSetActive("/mystudent")}
          >
            <UserIcon
              size={20}
              style={{
                marginRight: "5px",
                transform: "translateY(20%)",
              }}
            />
            My Students
          </Link>
          <Link
            to="/aiinsights"
            style={{
              ...styles.navItem,
              marginTop: "px",
              ...(activePath === "/aiinsights" && styles.active),
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => handleSetActive("/aiinsights")}
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
            AI Insights
          </Link>
          <Link
            to="/resources"
            style={{
              ...styles.navItem,
              ...(
                (activePath === "/resources" || activePath === "/mentalhealtharticle") && styles.active
              ),
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => handleSetActive("/resources")}
          >
            <LucideLayers
              size={20}
              style={{
                marginRight: "5px",
                transform: "translateY(20%)",
              }}
            />
            Resources
          </Link>
          <Link
            to="/settings"
            style={{
              ...styles.navItem,
              ...(activePath === "/settings" && styles.active),
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => handleSetActive("/settings")}
          >
            <SettingsIcon
              size={20}
              style={{
                ...styles.icon,
                marginRight: "5px",
                transform: "translateY(20%)",
              }}
            />
            Settings
          </Link>
          <Link
            to="#"
            style={{
              ...styles.logout,
              ...(activePath === "/" && styles.active),
              display: "flex",
              alignItems: "center",
            }}
            onClick={handleLogout}
          >
            <LogOut
              size={20}
              style={{
                marginRight: "10px",
                transform: "translateY(20%)",
              }}
            />
            Logout
          </Link>
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

export default CounselorSidebar;

