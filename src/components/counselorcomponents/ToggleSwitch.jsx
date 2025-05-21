import { useState, useEffect, useContext } from "react";
import api from "../../api/axios";
import { UserContext } from "../../context/UserContext";

const ToggleSwitch = ({ counselorId, onStatusChange }) => {
  const { user } = useContext(UserContext);

  const [isOn, setIsOn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user && user.counselor_profile) {
      setIsOn(user.counselor_profile.status === "Available");
      setLoading(false);
    } else if (user) {
      // User loaded but no counselor profile
      setIsOn(false);
      setLoading(false);
    }
  }, [user]);

  if (!user || !user.id) return null; // User not loaded at all

  const toggleSwitch = async () => {
    setLoading(true);
    const newStatus = isOn ? "Unavailable" : "Available";
    try {
      await api.patch(`/counselors/${user.id}/status`, { status: newStatus });
      setIsOn(!isOn);
      if (onStatusChange) onStatusChange(newStatus);
    } catch (err) {
      alert("Failed to update status");
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        width: "60px",
        height: "30px",
        borderRadius: "15px",
        backgroundColor: isOn ? "#4CAF50" : "#ccc",
        display: "flex",
        alignItems: "center",
        padding: "5px",
        cursor: loading ? "not-allowed" : "pointer",
        opacity: loading ? 0.6 : 1,
        transition: "background-color 0.3s",
      }}
      onClick={loading ? undefined : toggleSwitch}
    >
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          transition: "transform 0.3s",
          transform: isOn ? "translateX(30px)" : "translateX(0px)",
        }}
      ></div>
      {loading && (
        <span style={{ marginLeft: 10, color: "#888", fontSize: 12 }}>
          Loading...
        </span>
      )}
    </div>
  );
};

export default ToggleSwitch;
