import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios"; // Adjust the import based on your project structure

import { UserContext } from "../context/UserContext";

const StudentCounselorDetails = () => {
  const { user, logout } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [counselor, setCounselor] = useState(null);
  const [topic, setTopic] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get(`/counselors/${id}`)
      .then(res => setCounselor(res.data))
      .catch(() => navigate('/'));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const studentId = user.id;
      
      await api.post('/appointments', {
        student_id: studentId,
        counselor_id: counselor.id,
        session_topic: topic,
        preferred_date: date,
        preferred_time: time,
        email: email,
        notes,
      });
      setMessage('Appointment scheduled!');
      navigate('/MessageRequest'); // Redirect to appointment list
    } catch (err) {
      setMessage('Failed to schedule appointment');
    }
  };

  if (!counselor) return <p>Loading...</p>;

  const profile = counselor.counselor_profile || {};


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
        <form onSubmit={handleSubmit} style={styles.form} >
          <label style={{ ...styles.label, color: "#000000" }}>Session Topic</label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            style={{
              ...styles.input,
              backgroundColor: "#fff",
              color: "#000000",
              width: "200px",
              height: "44px",
              borderRadius: "30px",
            }}
          >
            <option value="Academic Guidance">Academic Guidance</option>
            <option value="Career Counseling">Career Counseling</option>
            <option value="Mental Health">Mental Health</option>
          </select>

          {/* Preferred Date and Time on the same line */}
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-end" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ ...styles.label, color: "#000000" }}>Preferred Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{
                  ...styles.input,
                  backgroundColor: "#fff",
                  color: "#000000",
                  width: "134px",
                  height: "44px",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ ...styles.label, color: "#000000" }}>Preferred Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                style={{
                  ...styles.input,
                  backgroundColor: "#fff",
                  color: "#000000",
                  width: "134px",
                  height: "44px",
                }}
              />
            </div>
          </div>

          <label style={{ ...styles.label, color: "#000000" }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Let your counselor know what you'd like to focus on during the session."
            style={{ ...styles.textarea, backgroundColor: "#fff", color: "#000000" }}
          ></textarea>

          <button
            type="submit"
            style={{
              ...styles.button,
              width: "150px",
              height: "44px",
              gap: "8px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Send Request
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>

      <div style={{ ...styles.counselorSection, backgroundColor: "#fff" }}>
        <img
          src="https://randomuser.me/api/portraits/women/75.jpg"
          alt="Counselor"
          style={{ ...styles.avatar }}
        />
        <h3 style={{ ...styles.counselorName, color: "#000000" }}>{counselor.name}</h3>
        <p style={{ ...styles.status, color: "#000000" }}>
          Status:{" "}
          <span style={{ color: profile.status === "Available" ? "green" : "red" }}>
            {profile.status}
          </span>
        </p>
        <div style={styles.rating}>
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              style={{
                color: index < profile.rating ? "#FFD700" : "#ccc",
                fontSize: "20px",
              }}
            >
              ★
            </span>
          ))}
        </div>
        <div style={{ ...styles.info, backgroundColor: "#fff", color: "#000000" }}>
          <p>
            <strong>Full Name:</strong> {counselor.name}
          </p>
          <p>
            <strong>Email Address:</strong> {counselor.email}
          </p>
          <p>
            <strong>Experience:</strong> {profile.experience}
          </p>
          <p>
            <strong>Office Number:</strong> {profile.office_number}
          </p>
          <p>
            <strong>Specialization:</strong> {profile.specialization}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentCounselorDetails;

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