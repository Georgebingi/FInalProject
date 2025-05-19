import React from "react";

const CounselorStudentDetails = () => {
  // Sample data for demonstration
  const counselorDetails = {
    name: (
      <span style={{ width: "298px", height: "38px", display: "inline-block" }}>
        Mrs. Daniella Phillips
      </span>
    ),
    specialization: "Psychology",
    experience: "12 Years",
    officeNumber: "4853966",
    email: "daniPhil@example.com",
    status: "Available",
    rating: 4,
    ratingStyle: {
      width: "200px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
    },
  };

  return (
    <div style={{ ...styles.container, backgroundColor: "#fff" }}>
      <div>
        <h2 style={{ ...styles.headerTitle, color: "#000000" }}>Session Details</h2>
        <form style={styles.form}>
          <label style={{ ...styles.label, color: "#000000" }}>Session Topic</label>
          <select
            style={{
              ...styles.input,
              backgroundColor: "#fff",
              color: "#000000",
              width: "200px",
              height: "44px",
              minWidth: "200px",
              minHeight: "44px",
              maxWidth: "200px",
              maxHeight: "44px",
              borderRadius: "30px",
            }}
          >
            <option
              style={{
                color: "#000000",
                border: "1px solid #ccc",
                height: "24px",
                width: "24px",
              }}
            >
              Academic Guidance
            </option>
            <option style={{ color: "#000000" }}>Career Counseling</option>
            <option style={{ color: "#000000" }}>Mental Health</option>
          </select>

          {/* Preferred Date and Time on the same line */}
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-end" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ ...styles.label, color: "#000000" }}>Preferred Date</label>
              <select
                style={{
                  ...styles.input,
                  backgroundColor: "#fff",
                  color: "#000000",
                  width: "134px",
                  height: "44px",
                  minWidth: "134px",
                  minHeight: "44px",
                  maxWidth: "134px",
                  maxHeight: "44px",
                }}
              >
                <option style={{ color: "#000000" }}>Monday</option>
                <option style={{ color: "#000000" }}>Tuesday</option>
                <option style={{ color: "#000000" }}>Wednesday</option>
                <option style={{ color: "#000000" }}>Thursday</option>
                <option style={{ color: "#000000" }}>Friday</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ ...styles.label, color: "#000000" }}>Preferred Time</label>
              <select
                style={{
                  ...styles.input,
                  backgroundColor: "#fff",
                  color: "#000000",
                  width: "134px",
                  height: "44px",
                  minWidth: "134px",
                  minHeight: "44px",
                  maxWidth: "134px",
                  maxHeight: "44px",
                }}
              >
                <option style={{ color: "#000000" }}>10:00am</option>
                <option style={{ color: "#000000" }}>11:00am</option>
                <option style={{ color: "#000000" }}>12:00pm</option>
                <option style={{ color: "#000000" }}>1:00pm</option>
                <option style={{ color: "#000000" }}>2:00pm</option>
                <option style={{ color: "#000000" }}>3:00pm</option>
                <option style={{ color: "#000000" }}>4:00pm</option>
                <option style={{ color: "#000000" }}>5:00pm</option>
              </select>
            </div>
          </div>

          <label style={{ ...styles.label, color: "#000000" }}>
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              ...styles.input,
              backgroundColor: "#fff",
              color: "#000000",
              width: "450px", // width for the email input
              height: "40px", // height for the email input
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
          />

          <label style={{ ...styles.label, color: "#000000" }}>
            Is there anything you'd like your counselor to know before the session? (Optional)
          </label>
          <textarea
            placeholder="Let your counselor know what you'd like to focus on during the session."
            style={{ ...styles.textarea, backgroundColor: "#fff", color: "#000000" }}
          ></textarea>

          <button
            type="submit"
            style={{
              ...styles.button,
              width: "150px",
              height: "44px",
              minWidth: "150px",
              minHeight: "44px",
              maxWidth: "150px",
              maxHeight: "44px",
              gap: "8px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Send Request
          </button>
        </form>
      </div>

      <div style={{ ...styles.counselorSection, backgroundColor: "#fff" }}>
        <img
          src="https://randomuser.me/api/portraits/women/75.jpg"
          alt="Counselor"
          style={{ ...styles.avatar }}
        />
        <h3 style={{ ...styles.counselorName, color: "#000000" }}>{counselorDetails.name}</h3>
        <p style={{ ...styles.status, color: "#000000" }}>
          Status:{" "}
          <span style={{ color: counselorDetails.status === "Available" ? "green" : "red" }}>
            {counselorDetails.status}
          </span>
        </p>
        <div style={styles.rating}>
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              style={{
                color: index < counselorDetails.rating ? "#FFD700" : "#ccc",
                fontSize: "20px",
              }}
            >
              ★
            </span>
          ))}
        </div>
        <div style={{ ...styles.info, backgroundColor: "#fff", color: "#000000" }}>
          <p>
            <strong>Full Name:</strong> {counselorDetails.name}
          </p>
          <p>
            <strong>Email Address:</strong> {counselorDetails.email}
          </p>
          <p>
            <strong>Experience:</strong> {counselorDetails.experience}
          </p>
          <p>
            <strong>Office Number:</strong> {counselorDetails.officeNumber}
          </p>
          <p>
            <strong>Specialization:</strong> {counselorDetails.specialization}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CounselorStudentDetails;

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    gap: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "16px",
    maxWidth: "1200px",
    margin: "0 auto",
    boxShadow: "0px 3px 8px rgba(50, 50, 71, 0.05)",
  },
  detailsSection: {
    flex: 1,
    backgroundColor: "#E8F0FF",
    padding: "20px",
    borderRadius: "16px",
  },
  headerTitle: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "5px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  textarea: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    resize: "none",
    height: "80px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#2255CC",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  counselorSection: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0px 3px 8px rgba(50, 50, 71, 0.05)",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  counselorName: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  status: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  rating: {
    marginBottom: "20px",
  },
  info: {
    textAlign: "left",
    fontSize: "14px",
    lineHeight: "1.6",
  },
};