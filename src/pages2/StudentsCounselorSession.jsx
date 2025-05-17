import { UserIcon, SearchIcon, ChevronDown, LucideMessagesSquare, ChevronLeft, ChevronRight} from "lucide-react";
import DiscussionIcon from "../assets/DiscussionIcon.png";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import api from '../api/axios';

const StudentsCounselorSession = () => {
  const [counselors, setCounselors] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    api.get('/counselors')
      .then(res => setCounselors(res.data))
      .catch(err => console.error(err));
  }, []);
  const navigate = useNavigate();
  
  const handleNavigate = (path) => {
    navigate(path,{ replace: true });
  }
    const chatData = [
        { id: 1, name: "Student 12", message: "I think you should focus more on what's ahead and...", isOnline: true },
        { id: 2, name: "Student 23", message: "Don't forget about the assignment due tomorrow...", isOnline: true },
        { id: 3, name: "Jessica Rogers", message: "Looking forward to our next session!", isOnline: false },
      ];

    return(
      
      <div style={{...styles.container}}>
      <div style={styles.messagerequestCard}>
        <p style={{
        color:"#3D3D3D",
        fontFamily: "Manrope",
        fontWeight: 500,
        fontSize: "20px",
        lineHeight: "100%",
        width:"277px",
        letterSpacing: "-3%",
        }}>
        Schedule a live meeting with an
        available counsellor?
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <img style={{height: "60px", width: "60px"}} src={DiscussionIcon} alt="Discussion Icon" />
        <div style={{position: "relative"}}>
          <button style={{
          width: "184px",
          height: "41px",
          ...styles.messagerequestbutton,
          fontSize: "13px",
          lineHeight: "120%",
          letterSpacing: "-2%",
          }} onClick={() => { handleNavigate("/schedulemeeting") }}>
          Schedule Meeting
          </button>
        </div>
        </div>
      </div>

        <div style={styles.chatBox}>
          <p style= {{
          fontFamily: "Manrope",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "100%",
          letterSpacing: "-3%",
          }}
          >
            Chat <span style={{
            backgroundImage: "linear-gradient(90deg, #F7CFFF 8.06%, #3F6AD2 50%, #FE6FA5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            }}
            >anonymously</span> with an avaliable Counselor?
          </p>
          <div 
           style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position:"relative", top:"50px" }}>
            <LucideMessagesSquare size={60} stroke="#6EC158"/>
            <button style={{
              width: "126px",
              height: "41px",
              fontSize: "13px",
              lineHeight: "120%",
              letterSpacing: "-2%",
              ...styles.chatboxbutton}}
              onClick={() => handleNavigate("/startchatting")}
              >
              Start Chatting
            </button>
          </div>
        </div>

        {/* Student Section Sessions */}
        <div id="tableSection" style={styles.bookSessioncontainer}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "space-between" }}>
          <h2 style={styles.headerTitle}>Available Counselors</h2>

          {/* Filters Section */}
          <div style={styles.filtersContainer}>
                  <div style={{ position: "relative" }}>
                  <button
                    style={styles.filterButton}
                    onClick={() => {
                    const dropdown = document.getElementById("dropdownMenu");
                    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
                    }}
                  >
                    <span id="selectedFilter">Upcoming</span>
                    <span style={styles.filterIcon}>
                    <ChevronDown size={20} style={{ transform: "translateY(20%)" }} />
                    </span>
                  </button>
                  <div
                    id="dropdownMenu"
                    style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "white",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    boxShadow: "0px 3px 8px rgba(50, 50, 71, 0.05)",
                    zIndex: 10,
                    display: "none",
                    }}
                  >
                    <button
                    style={{ ...styles.filterButton, width: "100%", textAlign: "left" }}
                    onClick={() => {
                      document.getElementById("selectedFilter").innerText = "Upcoming";
                      document.getElementById("dropdownMenu").style.display = "none";
                      console.log("Upcoming selected");
                    }}
                    >
                    Upcoming
                    </button>
                    <button
                    style={{ ...styles.filterButton, width: "100%", textAlign: "left" }}
                    onClick={() => {
                      document.getElementById("selectedFilter").innerText = "Previous";
                      document.getElementById("dropdownMenu").style.display = "none";
                      console.log("Previous selected");
                    }}
                    >
                    Previous
                    </button>
                  </div>
                  </div>
                </div>
                </div>
            {/* Table Section */}
            <div style={styles.tableWrapper}>
              <table style={styles.table}>
              <thead>
                <tr style={styles.tableHeaderRow}>
                <th>Counsellor</th>
                <th>Date</th>
                {/* <th>Time</th> */}
                <th>Room Number</th>
                <th>Email</th>
                <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {counselors.map( c => (
                <tr key={c.id} style={styles.tableBodyRow}>
                  <td style={styles.studentCell}>
                  <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile" style={styles.avatar} />
                      {c.name}
                  </td>
                  <td>{c.name}</td>
                  {/* <td>{["1:30pm", "1:30pm", "11:30pm", "2:30pm"][index]}</td> */}
                  <td>{c.office_number}</td>
                    <td>{c.email}</td>
                  <td>
                  <button onClick={() => handleNavigate("/studentsschedulesession")}
                   style={styles.viewButton}>View</button>
                  </td>
                </tr>
                ))}
              </tbody>
              </table>
            </div>
        
          </div>
              {/* Chat History */}
          <div style={styles.chatHistory}>
            <h3 style={styles.header}>
            Chat History <span style={styles.seeAll}>See all</span>
            </h3>
            {chatData.map((chat) => (
            <div key={chat.id} style={styles.chatItem}>
              <div style={styles.userSection}>
              <div style={styles.ellipse}>
                <UserIcon style={styles.userIcon} />
                {chat.isOnline && <span style={styles.notificationDot}></span>}
              </div>
              <div style={styles.chatDetails}>
                <strong>{chat.name}</strong>
                <p style={styles.chatMessage}>{chat.message}</p>
              </div>
              </div>
              <div onClick={() => handleNavigate("/studentschatui")}
              style={{display: "flex", alignItems: "center"}}>
                <span style={{...styles.time, fontSize:"12px", marginRight: "20px"}}>2:32pm</span>
                <button style={styles.chatButton}>Continue Chat</button>
              </div>
            </div>
            ))}
          </div>
      </div>
    );
}
export default StudentsCounselorSession;

const styles = {
    container: {
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        gap: "40px",
        paddingTop: "30px",
        position: "relative",
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
        color: "#333",
    },
    messagerequestCard: {
        display:"flex",
        flexDirection: "column",
        width: "370px",
        height: "170px",
        background: "#E8F0FF",
        justifyContent: "space-between",
        borderRadius: "20px",
        padding: "20px",
        boxShadow: "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px rgba(50, 50, 71, 0.05)",
    },
    chatBox: { 
        backgroundColor: "#E7F5E3",
        width: "370px",
        height: "170px",
        borderRadius: "20px",
        justifyContent: "space-between",
        padding: "20px",   
        boxShadow: "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px rgba(50, 50, 71, 0.05)",    
    },
    messagerequestbutton: {
        backgroundColor: "#1E4CA1",
        color: "white",
        borderRadius: "8px",
        padding: "12px 16.5px",
    },
    chatboxbutton:{
        borderRadius: "8px",
        paddingTop: "12px",
        paddingRight: "16.5px",
        paddingBottom: "12px",
        paddingLeft: "16.5px",
        background: "#6EC158",
    },
    bookSessioncontainer: {
        backgroundColor: "#E8F0FF",
        padding: "20px",
        borderRadius: "16px",
        width: "100%",
        maxWidth: "900px",
        boxShadow: "0px 3px 8px rgba(50, 50, 71, 0.05)",
      },
      headerTitle: {
        color: "#030303",
        fontFamily: "Manrope, sans-serif",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: 600,
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
        borderRadius: "10px",
        border: "1px solid #ccc",
        width: "300px",
        height: "35px",
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
      table: {
        gridColumn: "span 2",
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "10px",
        color: "#333",
        width: "100%",
        borderCollapse: "collapse",

      },
      viewButton: {
        backgroundColor: "#2255CC",
        color: "#FFF",
        padding: "8px 12px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
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
      },
      tableBodyRow: {
        backgroundColor: "#E8F0FF",
        height:"80px",
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
      //ChatHistory
      chatHistory: {
        padding: "15px",
        width: "100%",
        maxWidth: "900px",
        marginRight: "30px",
        background: "#E7F5E3",
        marginBottom: "30px",
        borderRadius: "16px",
        color: "#333",
        boxShadow: "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px rgba(50, 50, 71, 0.05)",
      },
      header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "20px",
      },
      seeAll: {
        color: "green",
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
        transform: "translateY(10%)",
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
}

