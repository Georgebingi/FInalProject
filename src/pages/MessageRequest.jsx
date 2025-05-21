import { ChevronDown, ChevronLeft, ChevronRight, SearchIcon } from "lucide-react";
import { useEffect, useState, useContext } from "react";
import api from "../api/axios";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const MessageRequest = () => {
  const { user } = useContext(UserContext);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (!user) return;
    // Fetch appointments for this counselor (authenticated)
    api.get(`/appointments/user/${user.id}?role=counselor`)
      .then(res => {
        // Only show appointments with status "Pending"
        setAppointments(res.data.filter(app => app.status === "Pending"));
      })
      .catch(() => setAppointments([]));
  }, [user]);

  return (
    <div style={styles.container}>
      <div style={styles.bookSessioncontainer}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "space-between" }}>
          <h2 style={styles.headerTitle}>Student Appointment Requests</h2>
          <div style={styles.filtersContainer}>
            <button style={{ ...styles.filterButton, fontWeight: "bold" }}>
              New Requests
              <span style={styles.filterIcon}>
                <ChevronDown size={20} style={{ transform: "translateY(20%)" }} />
              </span>
            </button>
            <button style={styles.filterButton}>
              Sort by
              <span style={styles.filterIcon}>
                <ChevronDown size={20} style={{ transform: "translateY(20%)" }} />
              </span>
            </button>
          </div>
        </div>

        <div style={styles.searchContainer}>
          <div style={styles.search}>
            <SearchIcon style={styles.searchIcon} />
            <input style={styles.searchInput} type="text" placeholder="Search" />
          </div>
        </div>

        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeaderRow}>
                <th>Student</th>
                <th>Topic</th>
                <th>Level</th>
                {/* <th>Student ID</th> */}
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <tr key={appointment.id} style={styles.tableBodyRow}>
                    <td style={styles.studentCell}>
                      <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile" style={styles.avatar} />
                      {appointment.student?.display_name || "Unknown"}
                    </td>
                    <td>{appointment.session_topic}</td>
                    <td>{appointment.student?.level || "—"}</td>
                    {/* <td>{appointment.student_id}</td> */}
                    <td>{appointment.email || appointment.student?.email || "—"}</td>
                    <td>
                      <strong style={{
                        color: "#FF9500",
                        fontFamily: "Manrope",
                        fontWeight: 700,
                        fontSize: "16px",
                        lineHeight: "120%",
                        letterSpacing: "-2%",
                        textAlign: "center",
                        verticalAlign: "middle"
                      }}>{appointment.status}</strong>
                    </td>
                    <td>
                      <Link
                        to={`/CounselorStudentDetails/${appointment.id}`}
                        style={{ color: "#2255CC", textDecoration: "underline", cursor: "pointer" }}
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", color: "#aaa" }}>
                    No appointment requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MessageRequest;

const styles = {
  container: {
    display: "flex",
    width:"81.5vw",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    gap: "40px",
  },
  bookSessioncontainer: {
    backgroundColor: "#E8F0FF",
    margin:"50px",
    padding: "30px",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "900px",
    boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.25)",
  },
  headerTitle: {
    color: "#030303",
    fontFamily: "Manrope, sans-serif",
    fontSize: "36px",
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
    borderRadius: "10px",
  },
  tableBodyRow: {
    backgroundColor: "#E8F0FF",
    padding: "0px 24px 0px 12px",
    justifyContent: "center",
    height: "80px",
    alignItems: "center",
    textAlign: "center",
  },
  studentCell: {
    alignItems: "center",
    justifyContent: "center",
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
};
