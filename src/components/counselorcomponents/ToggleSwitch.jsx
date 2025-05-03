import { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
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
        cursor: "pointer",
        transition: "background-color 0.3s",
      }}
      onClick={toggleSwitch}
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
