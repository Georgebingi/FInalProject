import { useState } from "react";
import api from "../../api/axios";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
const ToggleSwitch = ({ counselorId, onStatusChange }) => {
  const { user } = useContext(UserContext);

  // Guard: Wait until user is loaded
  if (!user || !user.id) return null;

  counselorId = user.id;
  const initialStatus = user.counselor_profile?.status || "Unavailable"; // Use counselor_profile if available
  const [isOn, setIsOn] = useState(initialStatus === "Available");
  const [loading, setLoading] = useState(false);

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
    </div>
  );
};

export default ToggleSwitch;
