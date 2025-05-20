import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import { UserContext } from "../context/UserContext";

const CounselorStudentDetails = () => {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    if (id) {
      api.get(`/appointments/${id}`)
        .then(res => setAppointment(res.data))
        .catch(() => setAppointment(null));
    }
  }, [id]);
  console.log(appointment);
  return (
    <div style={{ ...styles.container, backgroundColor: "#fff" }}>
      <div style={styles.detailsSection}>
        <h2 style={{ ...styles.headerTitle, color: "#000000" }}>Session Details</h2>
        <form style={styles.form}>
          <label style={{ ...styles.label, color: "#000000" }}>Session Topic</label>
          <input
            type="text"
            value={appointment?.session_topic || ""}
            style={{
              ...styles.input,
              backgroundColor: "#fff",
              color: "#000000",
              width: "200px",
              height: "44px",
              borderRadius: "30px",
            }}
            readOnly
          />

          <div style={{ display: "flex", gap: "20px", alignItems: "flex-end" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ ...styles.label, color: "#000000" }}>Preferred Date</label>
              <input
                type="text"
                value={appointment?.preferred_date || ""}
                style={{
                  ...styles.input,
                  backgroundColor: "#fff",
                  color: "#000000",
                  width: "134px",
                  height: "44px",
                  borderRadius: "30px",
                }}
                readOnly
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ ...styles.label, color: "#000000" }}>Preferred Time</label>
              <input
                type="text"
                value={appointment?.preferred_time || ""}
                style={{
                  ...styles.input,
                  backgroundColor: "#fff",
                  color: "#000000",
                  width: "134px",
                  height: "44px",
                  borderRadius: "30px",
                }}
                readOnly
              />
            </div>
          </div>

          <label style={{ ...styles.label, color: "#000000" }}>Email</label>
          <input
            type="email"
            value={appointment?.email || appointment?.student?.email || ""}
            style={{
              ...styles.input,
              backgroundColor: "#fff",
              color: "#000000",
              width: "450px",
              height: "40px",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
            readOnly
          />

          <label style={{ ...styles.label, color: "#000000" }}>
            Is there anything you'd like your counselor to know before the session? (Optional)
          </label>
          <textarea
            value={appointment?.notes || ""}
            style={{ ...styles.textarea, backgroundColor: "#fff", color: "#000000" }}
            readOnly
          ></textarea>

          <div style={{ display: "flex", gap: "16px", marginTop: "10px" }}>
            <button
              type="button"
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
                backgroundColor: "#28a745",
              }}
            >
              Accept Request
            </button>
            <button
              type="button"
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
                backgroundColor: "#dc3545",
              }}
            >
              Reject Request
            </button>
          </div>
        </form>
      </div>

      <div style={{ ...styles.counselorSection, backgroundColor: "#fff" }}>
        <img
          src="https://randomuser.me/api/portraits/women/75.jpg"
          alt="Counselor"
          style={{ ...styles.avatar }}
        />
        <h3 style={{ ...styles.counselorName, color: "#000000" }}>{user?.name}</h3>
        <p style={{ ...styles.status, color: "#000000" }}>
          Status:{" "}
          <span style={{ color: "green" }}>
            Available
          </span>
        </p>
        <div style={styles.rating}>
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              style={{
                color: index < 4 ? "#FFD700" : "#ccc",
                fontSize: "20px",
              }}
            >
              ★
            </span>
          ))}
        </div>
        <div style={{ ...styles.info, backgroundColor: "#fff", color: "#000000" }}>
          <p>
            <strong>Full Name:</strong> {user?.name}
          </p>
          <p>
            <strong>Email Address:</strong> {user?.email}
          </p>
          <p>
            <strong>Experience:</strong> 12 Years
          </p>
          <p>
            <strong>Office Number:</strong> 4853966
          </p>
          <p>
            <strong>Specialization:</strong> Psychology
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