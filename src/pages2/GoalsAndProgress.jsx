import { useState } from "react";

const styles = {
  container: {
    minHeight: "100vh",
    width: "93%",
    backgroundColor: "#fff",
    padding: "2rem",
    color: "#1F2937", // Tailwind's text-gray-800
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: "1.875rem",
    fontWeight: 600,
    marginBottom: "1.5rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "1.5rem",
  },
  gridLarge: {
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "2fr 1fr",
  },
  card: {
    backgroundColor: "#1D4ED8", // blue-700
    color: "white",
    borderRadius: "1rem",
    width: "580px",
    height: "427px",
    padding: "1.5rem",
  },
  snapshotHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  monthBar: {
    display: "flex",
    alignItems: "end",
    gap: "0.5rem",
    height: "12rem",
  },
  monthLabel: {
    fontSize: "0.75rem",
    marginTop: "0.25rem",
  },
  gpaCard: {
    backgroundColor: "#DBEAFE", // blue-100
    borderRadius: "0.75rem",
    padding: "1rem",
    textAlign: "center",
  },
  gpaSmall: {
    fontSize: "0.875rem",
    color: "#4B5563", // gray-600
  },
  gpaSub: {
    fontSize: "0.75rem",
    color: "#6B7280", // gray-500
  },
  gpaValue: {
    fontSize: "2.25rem",
    fontWeight: 700,
    marginTop: "0.5rem",
  },
  badge: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    backgroundColor: "#D1FAE5", // green-100
    color: "#059669", // green-600
    fontSize: "0.75rem",
    padding: "0.25rem 0.5rem",
    borderRadius: "9999px",
  },
  inputRow: {
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "1fr auto",
    marginTop: "2rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    border: "1px solid #D1D5DB",
  },
  button: {
    backgroundColor: "#10B981",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    border: "none",
  },
  trackerCard: {
    backgroundColor: "white",
    borderRadius: "0.75rem",
    padding: "1.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "24rem",
    marginTop: "2.5rem",
  },
  trackerTitle: {
    fontSize: "1.125rem",
    fontWeight: 600,
    textAlign: "center",
    marginBottom: "1rem",
  },
  trackerText: {
    textAlign: "center",
    color: "#4B5563",
    marginBottom: "0.5rem",
  },
  trackerSubText: {
    textAlign: "center",
    fontSize: "0.875rem",
    color: "#6B7280",
    marginBottom: "1rem",
  },
  trackerStats: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    fontSize: "0.875rem",
    color: "#4B5563",
  },
  formSection: {
    flex: 1,
  },
  header: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    marginBottom: '0.25rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    border: '1px solid #ccc',
    marginBottom: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    border: '1px solid #ccc',
    minHeight: '100px',
    marginBottom: '1rem',
  },
  button: {
    backgroundColor: '#2563EB',
    color: '#fff',
    padding: '0.5rem 1.5rem',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
  },
  goalListSection: {
    flex: 1,
    backgroundColor: '#EFF6FF',
    padding: '1.5rem',
    borderRadius: '1rem',
  },
  goalListHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  goalItem: {
    backgroundColor: '#ffffff',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    marginBottom: '0.5rem',
  },
  circle: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#D8B4FE',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: '1.5rem',
    fontSize: '0.875rem',
  },
  paginationBtn: {
    padding: '0.25rem 0.75rem',
    borderRadius: '0.375rem',
    border: '1px solid #ccc',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
  },
};


const GoalsAndProgress = () => {

  
  const months = [
    1, 1.5, 2.5, 2.8, 2.3, 2, 2, 1.2, 2.8, 3.5, 4.2, 4.8,
  ];
  
  const [goals, setGoals] = useState([
    'Practice 200 push-ups weekly',
    'Read 10 Books before February',
    'Practice 100 push-ups weekly',
    'Read 5 Books before January',
  ]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Goals & Progress</h1>

      <div style={styles.gridLarge}>
        {/* Progress Snapshot */}
        <div style={styles.card}>
  <div style={styles.snapshotHeader}>
    <h2 style={{ fontSize: "1rem", fontWeight: 500 }}>Progress Snapshot</h2>
    <span style={{ opacity: 0.7 }}>Academics</span>
  </div>
  <div style={styles.monthBar}>
    {months.map((val, idx) => (
      <div key={idx} style={{ textAlign: "center", width: "100%" }}>
        <div
          style={{
            backgroundColor: "#34D399", // green-400
            width: "0.55rem",
            height: `${(val / 5) * 100}%`,
            margin: "0 auto",
            borderRadius: "0.45rem",
          }}
        ></div>
        <div style={styles.monthLabel}>
          {["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][idx]}
        </div>
      </div>
    ))}
  </div>
</div>


      {/* GPA Comparison */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(150px, 2fr))", gap: "0.5rem" }}>
            <div style={{ ...styles.gpaCard, padding: "0.75rem" }}>
              <p style={{ ...styles.gpaSmall, fontSize: "0.75rem" }}>Last Year</p>
              <p style={{ ...styles.gpaSub, fontSize: "0.625rem" }}>Your GPA was:</p>
              <p style={{ ...styles.gpaValue, fontSize: "1.5rem" }}>4.58</p>
            </div>
            <div style={{ ...styles.gpaCard, position: "relative", padding: "0.75rem" }}>
              <p style={{ ...styles.gpaSmall, fontSize: "0.75rem" }}>This Year</p>
              <p style={{ ...styles.gpaSub, fontSize: "0.625rem" }}>Your GPA is:</p>
              <p style={{ ...styles.gpaValue, fontSize: "1.5rem" }}>4.88</p>
              <span style={{ ...styles.badge, fontSize: "0.625rem", padding: "0.2rem 0.4rem" }}>+13.1%</span>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
                {/* Reading Tracker */}
      <div style={styles.trackerCard}>
        <h2 style={styles.trackerTitle}>Reading Tracker</h2>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem", width: "275px",  }}>
          <svg width="120" height="120">
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="#E5E7EB"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="#10B981"
              strokeWidth="12"
              fill="none"
              strokeDasharray={314}
              strokeDashoffset={314 - (7 / 10) * 314}
              strokeLinecap="round"
              transform="rotate(-90 60 60)"
            />
            <text
              x="60"
              y="65"
              textAnchor="middle"
              fontSize="18"
              fill="#111827"
              fontWeight="bold"
            >
              7/10
            </text>
          </svg>
        </div>
        <p style={styles.trackerText}>Books Read</p>
        <p style={styles.trackerSubText}>Read 10 Books before February</p>
        <div style={styles.trackerStats}>
          <div>
            <p style={{ fontWeight: 500 }}>Goal</p>
            <p>10 Books</p>
          </div>
          <div>
            <p style={{ fontWeight: 500 }}>Books Read</p>
            <p>7 Books</p>
          </div>
        </div>
      </div>
        </div>     
            </div>
                      {/* GPA Entry */}
      <div style={{ position: "relative", top: "-100px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem", marginTop: "2rem" }}>
      <p style={{ position: "absolute", top: "-3.5rem", left: "0rem" }}>GPA Entry</p>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <input type="text" placeholder="Enter Current GPA" style={styles.input} />
          <button style={styles.button}>➤</button>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <input type="text" placeholder="Enter New GPA" style={styles.input} />
          <button style={styles.button}>➤</button>
        </div>   
      </div>
              </div>
      
      {/* Set Goals Form */}
      <div style={styles.formSection}>
        <h2 style={styles.header}>Set Goals</h2>

        <label style={styles.label}>Goal Type</label>
        <select style={styles.input}>
          <option>Personal</option>
          <option>Work</option>
        </select>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>Timeframe</label>
            <select style={styles.input}>
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>

          <div style={{ flex: 1 }}>
            <label style={styles.label}>Preferred Time</label>
            <select style={styles.input}>
              <option>8:00am</option>
              <option>12:30pm</option>
              <option>6:00pm</option>
            </select>
          </div>
        </div>

        <label style={styles.label}>Goal Title</label>
        <input type="text" style={styles.input} placeholder="Practice 200 push-ups weekly" />

        <label style={styles.label}>Description</label>
        <textarea style={styles.textarea} placeholder="Reduce daily stress by practicing push-up exercises." />

        <button style={styles.button}>Set Goal</button>
      </div>

      {/* Goals List */}
      <div style={styles.goalListSection}>
        <div style={styles.goalListHeader}>
          <h2 style={{ ...styles.header, fontSize: '1.25rem', marginBottom: 0 }}>Goals</h2>
          <select style={{ ...styles.input, width: 'auto', padding: '0.25rem 0.75rem', marginBottom: 0 }}>
            <option>August</option>
            <option>September</option>
          </select>
        </div>

        <input type="text" placeholder="Search" style={styles.input} />

        {goals.map((goal, index) => (
          <div key={index} style={styles.goalItem}>
            <span style={styles.circle}></span>
            {goal}
          </div>
        ))}

        {/* Pagination */}
        <div style={styles.pagination}>
          <span>Showing {goals.length} of {goals.length}</span>
          <button style={styles.paginationBtn}>1</button>
          <button style={styles.paginationBtn}>2</button>
          <button style={styles.paginationBtn}>3</button>
        </div>
      </div>
    </div>
  );
};

export default GoalsAndProgress;
