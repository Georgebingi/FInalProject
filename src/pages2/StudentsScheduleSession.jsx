import { Calendar, Clock, GraduationCap, Mail, NotebookPen, XCircle, RotateCcw } from "lucide-react";

const StudentsScheduleSession = () => {
    const sessionDetails = [
        {
          icon: <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="profile" style={{ width: "30px", height: "30px", borderRadius: "50%", position: "relative", top: "-12%", left: "80%" }} />,
          label: "Counselor Name",
          value: <span style={styles.highlight}>Daniella Phillips</span>
        },
        {
          icon: <Calendar size={18} style={{ position: "relative", top: "-12%", left: "80%" }} />,
          label: "Date",
          value: (
            <>
              <span style={styles.highlight}>Thursday</span>
              <br />
              19 Nov, 2024
            </>
          ),
        },
        {
          icon: <Clock size={18} style={{ position: "relative", top: "-12%", left: "80%" }} />,
          label: "Time",
          value: (
            <>
              <span style={styles.highlight}>12:30pm</span>
              <br />
              19 Nov, 2024
            </>
          ),
        },
        {
          icon: <GraduationCap size={18} style={{ position: "relative", top: "-12%", left: "80%" }} />,
          label: "Department",
          value: <span style={styles.highlight}> Psychology </span>
        },
        {
          icon: <NotebookPen size={18} style={{ position: "relative", top: "-12%", left: "80%" }} />,
          label: "Session Topic",
          value: <span style={styles.highlight}>Academic Guidance</span>,
        },
        {
          icon: <Mail size={18} style={{ position: "relative", top: "-12%", left: "80%" }} />,
          label: "Email",
          value: <span style={styles.highlight}>DaniPhil@gmail.com </span>
        },
      ];
  return (
    <div style={styles.container}>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <h2 style={styles.heading}>Scheduled Session</h2>
        <div style={styles.buttons}>
          <button style={styles.reschedule}>Reschedule Session <RotateCcw size={16} /></button>
          <button style={styles.cancel}>Cancel Session <XCircle size={16} /> </button>
        </div>
      </div>

        <div style={styles.sessionDetails}>
            {sessionDetails.map((detail, index) => (
            <div key={index} style={styles.card}>
                {detail.icon}
                <span>
                <strong style={{
                  fontFamily: "Manrope", 
                  fontWeight: 300, 
                  fontSize: "18px", 
                  lineHeight: "120%", 
                  letterSpacing: "-0.02em", 
                  verticalAlign: "middle",
                  color: "#3D3D3D"
                }}>{detail.label}</strong>
                <br />
                {detail.value}
                </span>
            </div>
            ))}
        </div>

      
      {/* Added Notes */}
      <div>
        <h3 style={styles.subheading}>Added Notes</h3>
        <textarea style={styles.textarea} readOnly>
          I’ve been feeling unmotivated and stuck in my routines. I’d like to learn ways to boost my confidence and set achievable goals.
        </textarea>
      </div>

      {/* Buttons */}
      <div style={styles.buttons}>
        <button style={styles.reschedule}><RotateCcw size={16} /> Reschedule Session</button>
        <button style={styles.cancel}><XCircle size={16} /> Cancel Session</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    margin: "10px", // Uniform margin on all sides
    color: "#333",
  },
  heading: {
    fontFamily: "Manrope",
    fontWeight: 600,
    fontSize: 28,
    lineHeight: 1.2,
    letterSpacing: "-2%",
    verticalAlign: "middle",
    marginBottom: 30,
  },
  sessionDetails: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    padding: "10px 0",
    height: "365px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#e8f0fe",
    padding: "15px",
    borderRadius: "20px",
    fontSize: "14px",
    width:"306px",
    height: "140px",
  },
  highlight: {
    color: "#0056b3",
    fontFamily: "Manrope",
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 1.2,
    letterSpacing: "-2%",
    verticalAlign: "middle",
    textAlign: "center",
  },
  subheading: {
    marginTop: "20px",
    fontSize: "16px",
    fontWeight: "bold",
  },
  textarea: {
    width: "1043px",
    height: "80px",
    color: "#333",
    backgroundColor:"transparent",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px",
    fontSize: "14px",
    outline: "none",
  },
  buttons: {
    display: "flex",
    gap: "10px",
    marginTop: "15px",
  },
  reschedule: {
    display: "flex",
    height:"40px",
    fontFamily: "Manrope", 
    fontWeight: 600, fontSize: "14px", 
    lineHeight: "120%", letterSpacing: "-2%", 
    alignItems: "center",
    gap: "10px",
    backgroundColor: "rgba(30, 76, 161, 1)",
    justifyContent: 'space-between',
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "7px",
    cursor: "pointer",
  },
  cancel: {
    display: "flex",
    alignItems: "center",
    height:"40px",
    fontFamily: "Manrope", 
    fontWeight: 600, fontSize: "14px", 
    lineHeight: "120%", letterSpacing: "-2%", 
    gap: "10px",
    backgroundColor: "#ffffff",
    color: "#DE0004",
    padding: "10px 15px",
    border: "1px solid rgba(222, 0, 4, 1)",
    borderRadius: "7px",
    cursor: "pointer",
  },
};

export default StudentsScheduleSession;
