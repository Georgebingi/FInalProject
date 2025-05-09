import { useState, useRef, useEffect } from "react";
import { SearchIcon, Bell, User, Settings, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ imageUrl }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleNavigate = (path) => {
    navigate(path, { replace: true });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  };

  const headerVariants = {
    hidden: {
      height: "56px",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    visible: {
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={dropdownOpen ? "visible" : "hidden"}
      style={{
        position: "relative",
        top: 0,
        zIndex: 10,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={styles.welcome}>Welcome Back, John!</h1>
        <span style={styles.greetings}>How are you Today?</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: "10px",
          gap: "10px",
        }}
      >
        <div style={styles.userInfo}>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <Bell
                size={20}
                color="Black"
                style={{ transform: "translateY(20%)" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-3px",
                  right: "10px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  width: "8px",
                  height: "8px",
                  transform: "translateY(50%)",
                }}
              />
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg"
              alt="Nigeria Flag"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <img
            src={imageUrl || "https://randomuser.me/api/portraits/men/75.jpg"}
            alt="Header Profile"
            style={styles.avatar}
            onClick={toggleDropdown}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                ...styles.name,
                fontWeight: "bold",
                fontFamily: "Arial",
              }}
            >
              John Dillingham
            </span>
            <span style={styles.role}>Counsellor</span>
          </div>

          {/* Profile Image Clickable */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                ref={dropdownRef}
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                style={{ position: "relative" }}
              >
                <div style={styles.dropdown}>
                  <div style={styles.profileInfo}>
                    <img
                      src={imageUrl || "https://randomuser.me/api/portraits/men/75.jpg"}
                      alt="Header Profile"
                      style={styles.avatarSmall}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          ...styles.name,
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                        }}
                      >
                        John Dillingham
                      </span>
                      <span style={{ ...styles.role, fontSize: "0.8rem" }}>
                        Counsellor
                      </span>
                    </div>
                  </div>
                  <div style={styles.menuItem}>
                  Profile  <User size={16} />
                  </div>
                  <div style={styles.menuItem} onClick={() => handleNavigate("/settings")}>
                    Settings  <Settings size={16} />
                  </div>
                  <div style={{ ...styles.menuItem, color: "red" }} onClick={() => handleNavigate("/roleselection")}>
                  Log Out <LogOut size={16} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};
const styles = {
  welcome: {
    color: "#0B0A0A", // Using the hex value directly
    fontFamily: "Manrope, sans-serif",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 500,
    margin: "auto",
    lineHeight: "120%", // Can also be "38.4px" for exact spacing
    letterSpacing: "-0.64px",
    alignSelf: "stretch",
  },
  greetings: {
    color: "#808080", // Using the hex value directly
    fontFamily: "Manrope, sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "120%", // Can also be "19.2px" if exact pixels are preferred
    letterSpacing: "-0.32px",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  search: {
    display: "flex",
    alignItems: "center",
    padding: "8px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    width: "300px",
  },
  searchIcon: {
    color: "#888",
    marginRight: "8px",
  },
  searchInput: {
    border: "none",
    outline: "none",
    fontSize: "14px",
    backgroundColor: "transparent",
    color: "#333",
    width: "100%",
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#333",
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
  name: {
    fontSize: "16px",
  },
  role: {
    fontSize: "12px",
    color: "#666",
  },
  notificationDot: {
    position: "absolute",
    top: "-3px",
    right: "10px",
    backgroundColor: "red",
    borderRadius: "50%",
    width: "8px",
    height: "8px",
    transform: "translateY(50%)",
  },
  flag: {
    width: "20px",
    height: "20px",
  },
  dropdown: {
    position: "absolute",
    top: "45px",
    right: "0",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    padding: "8px",
    width: "180px",
    zIndex: 10,
  },
  profileInfo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px",
    borderBottom: "1px solid #eee",
  },
  avatarSmall: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px",
    cursor: "pointer",
    justifyContent: "space-between",
    fontSize: "12px",
  },
  "@media (max-width: 768px)": {
    search: {
      width: "200px",
    },
    searchInput: {
      fontSize: "12px",
    },
    userInfo: {
      gap: "5px",
    },
    avatar: {
      width: "30px",
      height: "30px",
    },
    name: {
      fontSize: "14px",
    },
    role: {
      fontSize: "10px",
    },
  },
  "@media (max-width: 480px)": {
    search: {
      width: "150px",
    },
    searchInput: {
      fontSize: "10px",
    },
    userInfo: {
      gap: "3px",
    },
    avatar: {
      width: "25px",
      height: "25px",
    },
    name: {
      fontSize: "12px",
    },
    role: {
      fontSize: "8px",
    },
  },
  "@media (max-width: 320px)": {
    search: {
      width: "120px",
    },
    searchInput: {
      fontSize: "8px",
    },
    userInfo: {
      gap: "2px",
    },
    avatar: {
      width: "20px",
      height: "20px",
    },
    name: {
      fontSize: "10px",
    },
    role: {
      fontSize: "6px",
    },
  },
};

export default Header;


