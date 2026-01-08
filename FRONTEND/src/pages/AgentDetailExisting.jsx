import "../styles/agentDetail.css";
import { useState } from "react";

const steps = [
  "Agent Detail",
  "Upload Documents",
  "Preview",
  "Payment",
  "Acknowledgement",
];

const AgentDetailExisting = () => {
  const [pan, setPan] = useState("");

  const handleGetOtp = () => {
    if (!pan) {
      alert("Please enter PAN Card Number");
      return;
    }
    alert("OTP sent to registered mobile number");
  };

  return (
    <div className="container-wrapper">
      {/* BREADCRUMB */}
      <div className="breadcrumb-box">
        You are here :
        <span className="link"> Home </span> /
        <span> Registration </span> /
        <span> Real Estate Agent Registration</span>
      </div>

      {/* MAIN WHITE BOX */}
      <div className="main-container">
        <h2 className="page-title">Real Estate Agent Registration</h2>

        {/* STEPPER */}
        <div className="step-box">
          <div className="step-line"></div>
          {steps.map((step, index) => (
            <div className="step-item" key={index}>
              <div className={`step-circle ${index === 0 ? "active" : ""}`}>
                {index + 1}
              </div>
              <p>{step}</p>
            </div>
          ))}
        </div>

        {/* PAN CENTER SECTION */}
        <div className="pan-center-box">
          <div className="pan-field">
            <label>
              PanCard Number<span className="red-text">*</span>
            </label>
            <input
              type="text"
              placeholder="PanCard Number"
              value={pan}
              onChange={(e) => setPan(e.target.value.toUpperCase())}
            />
          </div>

          <button className="btn-blue" onClick={handleGetOtp}>
            Get OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentDetailExisting;