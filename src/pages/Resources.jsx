import Glassmorphic from "../assets/Glassmorphic.png";
import vd_1 from "../assets/vd_1.png";
import vd_2 from "../assets/vd_2.png";
import Users from "../assets/users.png";
import MentalIcon from "../assets/MentalIcon.png";
import { 
    MessageCircle, 
    LucideCalendarDays, 
    LucideBookOpen, 
    LucideGraduationCap, 
    LucideBicepsFlexed, 
    LucideBriefcaseBusiness 
} from "lucide-react";
import { useNavigate} from "react-router-dom";

  const Resources = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
      navigate(path, { replace: true });
    };

    return (
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Resources</h2>
        <div style={styles.resourcesGrid}>
          <div style={styles.resourceCard}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={Glassmorphic} 
                alt="photo"
                style={{height:"75px", width:"75px", marginBottom: "-10px",}}/>
                <h3 style={{fontSize:"20px", color: "#414F58", marginBottom: "0", textAlign: "center" }}>MentorMind AI</h3>
                <p style={{ paddingBottom: "10px", borderBottom: "1px solid #C6CDD5", marginBottom: "5px" , fontSize: "12px", color: "#C6CDD5", textAlign: "center" }}>
                    Ask MentorMind anything on your mind
                </p>
            </div>
            <div style={{marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "15px" }}>
                <p style={{ marginBottom:"-4px", margin: 0, color: "#C6CDD5" }}>Chats:</p>
                <strong>24</strong>
              </div>
              <div style={{ width: "1px", height: "20px", backgroundColor: "#C6CDD5", margin: "0 10px" }} />
              <button style={{ ...styles.button, ...styles.greenButton }}>
                <MessageCircle size={16} style={{ marginRight: "5px", transform: "translateY(2px)" }} /> 
                See Insights  
              </button>
            </div>
          </div>
          <div style={styles.resourceCard}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img src={Users} 
                    alt="photo"
                    style={{height:"37.5px", width:"68.75px", marginTop: "10px", padding: "9px",}}/>
                    <h3 style={{fontSize:"20px", color: "#414F58", marginBottom: "0", textAlign: "center" }}>Counsellor Section</h3>
                    <p style={{ paddingBottom: "10px", borderBottom: "1px solid #C6CDD5", marginBottom: "5px" , fontSize: "12px", color: "#C6CDD5", textAlign: "center" }}>
                        Schedule a session and speak with a counselor
                    </p>
                </div>
                <div style={{marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "15px"}}>
                        <p style={{ marginBottom:"-4px", margin: 0, color: "#C6CDD5" }}>Upcoming:</p>
                        <strong>4</strong>
                    </div>
                    <div style={{ width: "1px", height: "20px", backgroundColor: "#C6CDD5", margin: "0 10px" }} />
                    <button onClick={() => handleNavigate("/mystudent")} style={{ ...styles.button, ...styles.blueButton }}>
                        <LucideCalendarDays size={16} style={{ marginRight: "5px", transform: "translateY(2px)" }} /> 
                        Schedule
                    </button>
                </div>
          </div>
            <div style={styles.resourceCard}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img src={MentalIcon} 
                    alt="photo"
                    style={{height:"70px", width:"70px",}}/>
                    <h3 style={{fontSize:"20px", color: "#414F58", marginBottom: "0", textAlign: "center" }}>Mental Health</h3>
                    <p style={{ paddingBottom: "10px", borderBottom: "1px solid #C6CDD5", marginBottom: "5px" , fontSize: "12px", color: "#C6CDD5", textAlign: "center" }}>
                    Guides on stress management, anxiety, and more
                    </p>
                </div>
                <div style={{marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "15px" }}>
                        <p style={{ marginBottom:"-4px", margin: 0, color: "#C6CDD5" }}>Read Time:</p>
                        <strong>10 mins</strong>
                    </div>
                    <div style={{ width: "1px", height: "20px", backgroundColor: "#C6CDD5", margin: "0 10px" }} />
                    <button onClick={() => handleNavigate("/mentalhealtharticle")} style={{ ...styles.button, ...styles.blackButton }}>
                        <LucideBookOpen size={16} style={{ marginRight: "5px", transform: "translateY(2px)" }} /> 
                        Read More
                    </button>
                </div>
            </div>
        </div>
        <br />
        <div style={styles.resourcesGrid}>
            <div style={styles.resourceCard}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <LucideGraduationCap
                        color="#9D1EA1" // Sets the stroke color
                        strokeWidth="2" // Adjusts the thickness of the stroke
                        fill="none" // Ensures there is no fill
                        size={75}
                    />
                    <h3 style={{fontSize:"20px", color: "#414F58", marginBottom: "0", textAlign: "center" }}>Academic Support</h3>
                    <p style={{ paddingBottom: "10px", borderBottom: "1px solid #C6CDD5", marginBottom: "5px" , fontSize: "12px", color: "#C6CDD5", textAlign: "center" }}>
                    Study tips, time management strategies, and more
                    </p>
                </div>
                <div style={{marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "15px" }}>
                        <p style={{ marginBottom:"-4px", margin: 0, color: "#C6CDD5" }}>Read Time:</p>
                        <strong>10 mins</strong>
                    </div>
                    <div style={{ width: "1px", height: "20px", backgroundColor: "#C6CDD5", margin: "0 10px" }} />
                    <button style={{ ...styles.button, ...styles.pinkButton }}>
                        <LucideBookOpen size={16} style={{ marginRight: "5px", transform: "translateY(2px)" }} /> 
                        Read More
                    </button>
                </div>
            </div>
            <div style={styles.resourceCard}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <LucideBriefcaseBusiness
                        color="#A1821E" // Sets the stroke color
                        strokeWidth="2" // Adjusts the thickness of the stroke
                        fill="none" // Ensures there is no fill
                        size={75} // Optional: Adjust the size of the icon
                    />
                    <h3 style={{fontSize:"20px", color: "#414F58", marginBottom: "0", textAlign: "center" }}>Career Development</h3>
                    <p style={{ paddingBottom: "10px", borderBottom: "1px solid #C6CDD5", marginBottom: "5px" , fontSize: "12px", color: "#C6CDD5", textAlign: "center" }}>
                    Resume building, interview tips, and more
                    </p>
                </div>
                <div style={{marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "15px" }}>
                        <p style={{ marginBottom:"-4px", margin: 0, color: "#C6CDD5" }}>Read Time:</p>
                        <strong>10 mins</strong>
                    </div>
                    <div style={{ width: "1px", height: "20px", backgroundColor: "#C6CDD5", margin: "0 10px" }} />
                    <button style={{ ...styles.button, ...styles.brownButton }}>
                        <LucideBookOpen size={16} style={{ marginRight: "5px", transform: "translateY(2px)" }} /> 
                        Read More
                    </button>
                </div>
            </div>
            <div style={styles.resourceCard}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <LucideBicepsFlexed
                        color="#58A0C1" 
                        strokeWidth="2" 
                        fill="none"
                        size={75} 
                    />
                    <h3 style={{fontSize:"20px", color: "#414F58", marginBottom: "0", textAlign: "center" }}>Personal Development</h3>
                    <p style={{ paddingBottom: "10px", borderBottom: "1px solid #C6CDD5", marginBottom: "5px" , fontSize: "12px", color: "#C6CDD5", textAlign: "center" }}>
                    Resources on building confidence and skills
                    </p>
                </div>
                <div style={{marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "15px" }}>
                        <p style={{ marginBottom:"-4px", margin: 0, color: "#C6CDD5" }}>Read Time:</p>
                        <strong>10 mins</strong>
                    </div>
                    <div style={{ width: "1px", height: "20px", backgroundColor: "#C6CDD5", margin: "0 10px" }} />
                    <button style={{ ...styles.button, ...styles.skyblueButton }}>
                        <LucideBookOpen size={16} style={{ marginRight: "5px", transform: "translateY(2px)" }} /> 
                        Read More
                    </button>
                </div>
            </div>
        </div>
        
        <h2 style={styles.sectionTitle}>Recently Accessed Resources</h2>
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
  
  export default Resources;
  
  const styles = {
    container: {
      padding: "20px",
      width: "78.55vw",
      fontFamily: "Arial, sans-serif",
    },
    sectionTitle: {
      fontSize: "32px",
      fontWeight: "500",
      marginBottom: "20px",
      lineHeight: "120%",
      letterSpacing: "-2%",
      fontFamily: "Manrope, sans-serif",
      color:"black",
    },
    resourcesGrid: {
      display: "flex",
      flexWrap: "wrap",
      height:"264px",
      borderRadius:"15px",
      gap: "10px",
      alignItems: "center",
      backgroundColor: "rgba(245, 249, 255, 1)",
      justifyContent:"space-evenly",
    },
    resourceCard: {
      background: "rgba(255, 255, 255, 1)",
      borderRadius: "15px",
      width:"300px",
      padding: "10px",
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
    blueButton: {
      background: "#1E4CA1",
    },
    goldButton: {
      background: "#D4AF37",
    },
    pinkButton: {
        background: "#9D1EA1",
    },
    blackButton: {
        background: "#3D3D3D",
    },
    brownButton: {
        background: "#A1821E",
    },
    skyblueButton: {
        background: "#58A0C1",
    },
    recentlyAccessedGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      marginTop: "30px",
    },
    recentlyAccessedCard: {
      background: "#EAF2FF",
      borderRadius: "10px",
      padding: "15px",
      textAlign: "center",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      color: "black",
    },
  };
