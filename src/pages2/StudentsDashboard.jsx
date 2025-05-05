import vd_1 from "../assets/vd_1.png";
import vd_2 from "../assets/vd_2.png";
import Glassmorphic from "../assets/Glassmorphic.png"
import { SearchIcon, ChevronDown, ChevronRight, ChevronLeft, LucideMessagesSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentsDashboard = () => {
  const chatData = [
    { id: 1, name: "Student 12", message: "I think you should focus more on what's ahead and...", isOnline: true },
    { id: 2, name: "Student 23", message: "Don't forget about the assignment due tomorrow...", isOnline: true },
    { id: 3, name: "Jessica Rogers", message: "Looking forward to our next session!", isOnline: false },
  ];

  const navigate = useNavigate();

  const handleNavigate = (path) =>{
    navigate(path, { replace: true });
  }
  return (
      <div style={{ ...styles.container, }}>
        {/* Availability Status */}
          <div style={styles.availabilityCard}>
            <img src={Glassmorphic} alt="mental" style={styles.logo} />
            <h3 style={styles.availabilityTitle}>MentorMind AI</h3>
            <p style={styles.description}>Write an amazing description in this dedicated card section. Each word counts. </p>
              <div onClick={() => handleNavigate("/studentsmentormind")
              }
             style={{ display: "flex", justifyContent: "space-between", alignItems: "center",}}>
                <button style={{
              width: "163px",
              height: "41px",
              fontSize: "13px",
              ...styles.chatboxbutton}}>
                <LucideMessagesSquare size={18} stroke="#E8F0FF" style={{ marginRight: "5px", transform: "translateY(2px)" }}/>
              Start Chatting
                </button>
              </div>
          </div>
            
          {/* Chat History */}
            <div style={styles.chatHistory}>
              <h2 style={{...styles.header, fontSize: "24px"}}>
                Chat History 
                <button 
            style={{ ...styles.seeAll, background: "none", border: "none", cursor: "pointer", color: "#1E4CA1", fontSize: "14px" }} 
            onClick={() => handleNavigate("/chathistory")}
                >
            See all
                </button>
              </h2>
              {chatData.map((chat) => (
                <div key={chat.id} style={styles.chatItem}>
            <div style={styles.userSection}>
              {chat.id === 2 ? (
                <div style={styles.ellipse}>
            <img src="https://randomuser.me/api/portraits/women/75.jpg" alt="profile" style={{...styles.userIcon, height:"40px", width:"40px"}} />
            {chat.isOnline && <span style={styles.notificationDot}></span>}
                </div>
              ) : (
                <div style={styles.ellipse}>
            <img src={Glassmorphic} alt="mentalIcon" style={{...styles.userIcon, height:"40px", width:"40px"}} />
            {chat.isOnline && <span style={styles.notificationDot}></span>}
                </div>
              )}
              <div style={styles.chatDetails}>
                <strong>{chat.name}</strong>
                <p style={styles.chatMessage}>{chat.message}</p>
              </div>
            </div>
            {chat.id === 2 && <button onClick={() => handleNavigate("/continuechat")}
             style={styles.chatButton}>Continue Chat</button>}
                </div>
              ))}
            </div>
              
            {/* Quick Actions */}
        <div style={styles.wrapper}>
          <h2 style={{...styles.title, margin: "0 0 20px 0"}}>Quick Actions</h2>
          <div style={{...styles.cardContainer, height: "50px"}}>
            <div style={{...styles.card, height: "100%"}}>
              <div style={{...styles.iconContainer}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  style={styles.icon}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10h.01M12 10h.01M16 10h.01M8 16h8M4 6h16M4 6a2 2 0 012-2h12a2 2 0 012 2M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6"
                  />
                </svg>
              </div>
              <div  onClick={() => handleNavigate("#")}
              style={{...styles.textContainer, height: "100%"}}>
                <strong style={styles.cardTitle}>Book a Session</strong>
                <p style={{...styles.subtitle,
                  fontSize: "12px",
                  margin: "auto",}
                }>Subtitle text</p>
              </div>
            </div>
    
            <div style={{...styles.card, height: "100%"}}>
              <div style={styles.iconContainer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  style={styles.icon}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h11M9 21h6M3 6h18M3 6a2 2 0 012-2h12a2 2 0 012 2M3 6v12a2 2 0 002 2h12a2 2 0 002-2V6"
                  />
                </svg>
              </div>
              <div onClick={() => handleNavigate("#")}>
                <p style={styles.cardTitle}>View Resources</p>
                <p style={{...styles.subtitle,
                  fontSize: "12px",
                  margin: "auto",
                }}>Subtitle text</p>
              </div>
            </div>
          </div>
        </div>
    
        {/* Progress Snapshot */}
        <div style={styles.progressCard}>
          <strong>Progress Snapshot</strong>
          <div style={styles.graph}>Chart Placeholder</div>
        </div>
    
        {/* Booked Sessions */}
          <div style={styles.bookSessioncontainer}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "space-between" }}>
              <h2 style={styles.headerTitle}>Upcoming Sessions</h2>
            
              {/* Filters Section */}
              <div style={styles.filtersContainer}>
                <select style={styles.filterButton}>
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
                </select>
              </div>
            </div>
            
              {/* Search Section */}
          <div style={styles.searchContainer}>
            <div style={styles.search}>
              <SearchIcon style={styles.searchIcon} />
              <input
                style={styles.searchInput}
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
    
          {/* Table Section */}
          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <div style={{ borderRadius: "20px", marginBottom: "20px" }} />
                <tr style={styles.tableHeaderRow}>
                  <th>Student</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Student ID</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((_, index) => (
                  <tr key={index} style={styles.tableBodyRow}>
                    <td style={styles.studentCell}>
                      <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile" style={styles.avatar} />
                      Jesse Thomas
                    </td>
                    <td>12/2/2024</td>
                    <td>{["1:30pm", "1:30pm", "11:30pm", "2:30pm"][index]}</td>
                    <td>4853966</td>
                    <td>jt@gmail.com</td>
                    <td>
                      <button onClick={() => handleNavigate("/studentsschedulesession")}
                      style={styles.viewButton}>View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    
          {/* Footer Section */}
          <div style={styles.footerContainer}>
            <span>Showing <b>4</b> of 4</span>
            <div style={styles.paginationContainer}>
              <button style={{ backgroundColor: "#EAEAEA", width:"32px", height:"32px", borderRadius:"4px", padding: "0", border: "none" }}>
                <ChevronLeft size={20} style={{ transform: "translateY(20%)", color: "#959595" }} />
              </button>
              <button style={{...styles.paginationButton, border: "1px solid #089156"}}>
                1
              </button>
              <button style={styles.paginationButton}>2</button>
              <button style={styles.paginationButton}>3</button>
              <button style={{ backgroundColor: "#EAEAEA", width:"32px", height:"32px", borderRadius:"4px", padding: "0", border: "none" }}>
                <ChevronRight size={20} style={{ transform: "translateY(20%)", color: "#959595" }} />
              </button>
            </div>
          </div>
        </div>
                  <div style={styles.recentlyAccessedGrid}>
                    <div style={styles.recentlyAccessedCard}>
                      <div style={{ position: "relative", width: "100%", height: "200px" }}>
                        <video width="100%" height="200px" style={{ borderRadius: "16px" }} controls poster={vd_1} id="video1">
                          <source src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none" }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#FFF" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </div>
                      </div>
                      <h3>Getting better at School</h3>
                      <p>Write an amazing description in this dedicated card section. Each word counts.</p>
                      <button style={{ ...styles.button, ...styles.greenButton, height: "42px", width: "121px" }} onClick={() => {
                        const video = document.getElementById("video1");
                        video.play();
                      }}>Watch Video</button>
                    </div>
                    <div style={styles.recentlyAccessedCard}>
                    <div style={{ position: "relative", width: "100%", height: "200px" }}>
                        <video width="100%" height="200px" style={{ borderRadius: "16px" }} controls poster={vd_2} id="video2">
                          <source src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none" }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#FFF" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </div>
                      </div>
                      <h3>How to improve your health</h3>
                      <p>Write an amazing description in this dedicated card section. Each word counts.</p>
                      <button style={{ ...styles.button, ...styles.greenButton, height: "42px", width: "121px" }} onClick={() =>{
                          const video = document.getElementById("video2");
                          video.play();
                      }} >Read Article</button>
                    </div>
                    <div style={styles.recentlyAccessedCard}>
                    <div style={{ position: "relative", width: "100%", height: "200px" }}>
                        <video width="100%" height="200px" style={{ borderRadius: "16px" }} controls poster={vd_1} id="video1">
                          <source src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none" }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#FFF" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </div>
                      </div>
                      <h3>Getting better Friends</h3>
                      <p>Write an amazing description in this dedicated card section. Each word counts.</p>
                      <button style={{ ...styles.button, ...styles.greenButton, height: "42px", width: "121px"}} onClick={() => {
                        const video = document.getElementById("video1");
                        video.play();
                      }}>Watch Video</button>
                    </div>
                  </div>
      </div>
    );
    };
    
    const styles = {
    container: {
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      gap: "45px",
      paddingTop: "30px",
      position: "relative",
      margin: "0 auto",
      backgroundColor: "#f9f9f9",
      color: "#333",
    },
    availabilityCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      maxWidth: "320px",
      borderRadius: "16px",
      background: "#E8F0FF",
      boxShadow: "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px rgba(50, 50, 71, 0.05)",
    },
    wrapper: {
      backgroundColor: "#E8F0FF",
      padding: "20px",
      borderRadius: "16px",
      width: "320px",
      height: "240px",
      boxShadow: "0px 3px 8px rgba(50, 50, 71, 0.05)",
    },
    logo: {
        width:"153px",
        height:"153px",
    },
    chatHistory: {
      padding: "15px",
      width: "100%",
      maxWidth: "600px",
      marginRight: "30px",
      background: "#E8F0FF",
      borderRadius: "16px",
      color: "#333",
      boxShadow: "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px rgba(50, 50, 71, 0.05)",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "18px",
    },
    seeAll: {
      color: "#1E4CA1",
      fontSize: "14px",
      cursor: "pointer",
    },
    chatItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 16px",
      borderRadius: "10px",
      background: "#FFF",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      marginBottom: "10px",
    },
    userSection: {
      display: "flex",
      alignItems: "center",
    },
    ellipse: {
      position: "relative",
      height: "48px",
      width: "48px",
      backgroundColor: "#EAF4E8",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    notificationDot: {
      position: "absolute",
      top: "4px",
      right: "4px",
      width: "10px",
      height: "10px",
      backgroundColor: "red",
      borderRadius: "50%",
    },
    chatDetails: {
      marginLeft: "10px",
    },
    chatMessage: {
      color: "#425466",
      fontSize: "12px",
      fontWeight: 400,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      marginTop: "5px",
      maxWidth: "350px",
    },
    chatButton: {
      padding: "12px 15px",
      borderRadius: "10px",
      background: "#6EC158",
      color: "#FFF",
      fontSize: "12px",
      fontWeight: 600,
      border: "none",
      cursor: "pointer",
    },
    graph: {
      height: "150px",
      backgroundColor: "#ddd",
      borderRadius: "5px",
    },
    table: {
      gridColumn: "span 2",
      padding: "20px",
      borderRadius: "10px",
      color: "#333",
      width: "100%",
      borderCollapse: "collapse",
    },
    viewButton: {
      backgroundColor: "#6EC158",
      color: "#FFF",
      padding: "8px 12px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    },
    // Progress Snapshot
    progressCard: {
      display: "flex",
      padding: "15px",
      width: "100%",
      maxWidth: "600px",
      marginRight: "30px",
      background: "#E8F0FF",
      borderRadius: "16px",
      color: "#333",
      boxShadow: "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px rgba(50, 50, 71, 0.05)",
      height: "340px",
    },
    availabilityTitle: {
        fontFamily: "Manrope",
        fontWeight: 600,
        fontSize: "32px",
        lineHeight: "23px",
        letterSpacing: "0%",
        color: "#16192C",
        margin:"0px",
    },
    description: {
        fontFamily: "Manrope",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "23px",
        letterSpacing: "0%",
        textAlign: "center",
        color: "#425466",        
    },
    cardContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    card: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: "12px",
      borderRadius: "12px",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
    },
    iconContainer: {
      backgroundColor: "#2255CC",
      padding: "10px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "12px",
    },
    icon: {
      width: "24px",
      height: "24px",
      color: "white",
    },
    cardTitle: {
      fontSize: "16px",
      fontWeight: 500,
      margin: "auto",
      color: "rgb(51, 51, 51)",
    },
    subtitle: {
      fontSize: "12px",
    },
    userIcon: {
      width: "20px",
      height: "20px",
      color: "#333",
    },
    bookSessioncontainer: {
      backgroundColor: "#E8F0FF",
      padding: "20px",
      borderRadius: "16px",
      width: "100%",
      marginBottom: "30px",
      maxWidth: "1010px",
      boxShadow: "0px 3px 8px rgba(50, 50, 71, 0.05)",
    },
    headerTitle: {
      color: "#030303",
      fontFamily: "Manrope, sans-serif",
      fontSize: "28px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "120%", // Can also be "28.8px" for exact spacing
      letterSpacing: "-0.48px",
    },
    // Filters
    filtersContainer: {
      display: "flex",
      gap: "10px",
      marginBottom: "10px",
    },
    filterButton: {
      backgroundColor: "white",
      padding: "8px 12px",
      border: "1px solid #ccc",
      borderRadius: "30px",
      cursor: "pointer",
      color: "var(--Base-Base-Black, #0B0A0A)",
      fontFamily: "Manrope",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "120%", /* 16.8px */
      letterSpacing: "-0.28px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "13px",
    },
    filterIcon: {
      marginLeft: "6px",
    },
    // Selected Filters
    selectedFiltersContainer: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      marginBottom: "10px",
    },
    selectedFilter: {
      backgroundColor: "#ddd",
      padding: "6px 10px",
      borderRadius: "20px",
      fontSize: "12px",
      cursor: "pointer",
    },
    clearAll: {
      cursor: "pointer",
      marginLeft: "auto",
      color: "green",
      fontSize: "14px",
    },
    // Search
    searchContainer: {
      display: "flex",
      alignItems: "center",
      maxWidth: "312px",
      gap: "8px",
      marginBottom: "20px",
    },
    search: {
      display: "flex",
      alignItems: "center",
      padding: "8px",
      backgroundColor: "white",
      height:"38px",
      borderRadius: "15px",
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
    // Table
    tableWrapper: {
      overflowX: "auto",
      borderRadius: "12px",
    },
    tableHeaderRow: {
      backgroundColor: "#2255CC",
      color: "white",
      fontWeight: "bold",
      height: "55px",
      borderRadius: "10px",
      padding: "0px 24px 0px 12px",
    },
    tableBodyRow: {
      backgroundColor: "#E8F0FF",
      height: "80px",
      padding: "0px 24px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    studentCell: {
      display: "flex",
      gap: "10px",
      padding: "10px",
    },
    avatar: {
      width: "38px",
      height: "38px",
      marginRight: "25px",
      borderRadius: "50%",
    },
    // Footer
    footerContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#030303",
      marginTop: "10px",
    },
    paginationContainer: {
      display: "flex",
      gap: "6px",
    },
    paginationButton: {
      border: "1px solid #ccc",
      padding: "6px 10px",
      color: "#333",
      borderRadius: "6px",
      backgroundColor: "#FFFFFF",
      cursor: "pointer",
    },
    "@media (max-width: 768px)": {
      container: {
        flexDirection: "column",
        alignItems: "center",
      },
      progressCard: {
        width: "100%",
        marginRight: 0,
      },
      chatHistory: {
        width: "100%",
        marginRight: 0,
      },
      table: {
        width: "100%",
      },
    },
    recentlyAccessedGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        maxWidth:"1040px",
        gap: "20px",
      },
      recentlyAccessedCard: {
        background: "#EAF2FF",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        color: "black",
      },
      button: {
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        color: "#FFFFFF",
        fontFamily: "Manrope",
        fontWeight: 500,
        fontSize: 14,
        letterSpacing: "-2%",
      },
      greenButton: {
        background: "#6EC158",
      },
      chatboxbutton:{
        borderRadius: "8px",
        background: "#6EC158",
    },
    };

export default StudentsDashboard;



