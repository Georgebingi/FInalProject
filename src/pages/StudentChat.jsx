import { ChevronDown, ChevronLeft, ChevronRight, SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";


const StudentChat = () => {
  const navigate = useNavigate();

  const students = [
    { name: "Daniella Phillips", topic: "Academic Guidance", level: "300 Level", id: "4853966", email: "jt@gmail.com", status: "Available" },
    { name: "Jesse Thomas", topic: "Academic Guidance", level: "300 Level", id: "4853966", email: "jt@gmail.com", status: "Available" },
    { name: "Jesse Thomas", topic: "Academic Guidance", level: "300 Level", id: "4853966", email: "jt@gmail.com", status: "Available" },
    { name: "Daniella Phillips", topic: "Academic Guidance", level: "300 Level", id: "4853966", email: "jt@gmail.com", status: "Available" },
  ];

  const handleRowClick = (student) => {
    if (student.status === "Available") {
      navigate(`/ChatUI/`);
    } 
  };

  return (
    <div style={styles.container}>
      <div style={styles.bookSessioncontainer}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "space-between" }}>
          <h2 style={styles.headerTitle}>Student</h2>

          <div style={styles.filtersContainer}>
            <select style={{ ...styles.filterButton, fontWeight: "bold", appearance: "none" }}>
              <option value="all">All Students</option>
              <option value="recent">Recent Students</option>
            </select>
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
                <th>Student ID</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={index}
                  style={{
                    ...styles.tableBodyRow,
                    cursor: student.status === "Avaliable" ? "pointer" : "default",
                  }}
                  onClick={() => handleRowClick(student)}
                >
                  <td style={styles.studentCell}>
                    <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile" style={styles.avatar} />
                    {student.name}
                  </td>
                  <td>{student.topic}</td>
                  <td>{student.level}</td>
                  <td>{student.id}</td>
                  <td>{student.email}</td>
                  <td>
                    <strong style={{
                      color: "#6EC158",
                      fontFamily: "Manrope",
                      fontWeight: 700,
                      fontSize: "16px",
                      lineHeight: "120%",
                      letterSpacing: "-2%",
                      textAlign: "center",
                      verticalAlign: "middle"
                    }}>{student.status}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentChat;

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    gap: "40px",
    width:"81.5vw",
  },
  bookSessioncontainer: {
    backgroundColor: "#E7F5E3",
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
    backgroundColor: "#6EC158",
    color: "white",
    fontWeight: "bold",
    height: "55px",
    borderRadius: "10px",
  },
  tableBodyRow: {
    backgroundColor: "#E7F5E3",
    padding: "0px 24px 0px 12px",
    justifyContent: "center",
    height: "80px",
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
};
