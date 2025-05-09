import { SearchIcon, ChevronDown, ChevronLeft, ChevronRight} from "lucide-react";
import Glassmorphic from "../assets/Glassmorphic.png";

const AiInsights = () =>{

    const chatData = [
        { id: 1, name: "Being better at school", message: "Multiple students have asked this question or a related one", notification: "128 Questions"},
        { id: 2, name: "Being better at school", message: "Multiple students have asked this question or a related one", notification: "47 Questions"},
        { id: 3, name: "Being better at school", message: "Multiple students have asked this question or a related one", notification: "76 Questions" },
        { id: 4, name: "Being better at school", message: "Multiple students have asked this question or a related one", notification: "18 Questions" },
      ]

    return(
        <div style={{...styles.container}}>

            <div style={{display: "flex", 
                      alignItems: "flex-start", 
                }}>
                <h1 style={{fontWeight:"500px", fontFamily:"Manrope",}}>Hi there, <span style={{backgroundImage: "linear-gradient(90deg, #F7CFFF 8.06%, #3F6AD2 50%, #FE6FA5 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",}}>{user.name}.</span> 
                <br /><span>What would you like to know?</span>
                </h1>
                <div style={{display: "flex", alignItems: "center"}}>
                <img src={Glassmorphic}
                alt="Image"/>
                </div>
            </div>
                      {/* Student FAQs Sessions */}
                        <div style={styles.bookSessioncontainer}>
                          <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "space-between" }}>
                            <h2 style={{ ...styles.headerTitle, fontWeight: "500px", fontFamily: "Manrope" }}>Student FAQs</h2>

                            {/* Filters Section */}
                            <div style={styles.filtersContainer}>
                              <select style={{ ...styles.filterButton, appearance: "none", paddingRight: "30px" }}>
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
            
                                          {/* Chat History */}
                <div style={styles.chatHistory}>
                    {chatData.map((chat) => (
                    <div key={chat.id} style={styles.chatItem}>
                        <div style={styles.userSection}>
                        <div style={styles.ellipse}>
                        <img src={Glassmorphic}
                            alt="Image"
                            style={styles.userIcon}/>
                        </div>
                        <div style={styles.chatDetails}>
                            <strong>{chat.name}</strong>
                            <p style={styles.chatMessage}>{chat.message}</p>
                        </div>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <strong style={{...styles.notification, fontSize:"15px", fontFamily:"Manrope", color: "#565656", fontWeight:"bold"}}>{chat.notification}</strong>
                        </div>
                    </div>
                    ))}
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
        </div>
    );
};

export default AiInsights;

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
    bookSessioncontainer: {
        backgroundColor: "#E8F0FF",
        padding: "20px",
        borderRadius: "16px",
        width: "100%",
        marginBottom: "30px",
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
        backgroundColor: "#6EC158",
        color: "#FFF",
        padding: "8px 12px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
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
        width: "100%",
        marginBottom: "30px",
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
      userIcon: {
        width: "34px",
        height: "34px",
      },
}