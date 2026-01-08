import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ useNavigate ఇంపోర్ట్ చేయండి
import "../styles/agentDetail.css";

const steps = [
  "Agent Detail",
  "Upload Documents",
  "Preview",
  "Payment",
  "Acknowledgement",
];

const AgentDetail = () => {
  const [agentType, setAgentType] = useState("");
  const [pan, setPan] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // ✅ నావిగేషన్ కోసం ఇక్కడ డిక్లేర్ చేయండి

  const handleGetDetails = () => {
    if (!agentType) {
      setShowPopup(true);
      return;
    }
    
    
    if (pan.length !== 10) {
      alert("Please enter a valid 10-digit PAN Number");
      return;
    }


    navigate("/applicant-details", { state: { agentType, pan } });
  };

  return (
    <div className="agent-registration-page">
      <div className="outer-box">
        <div className="breadcrumb-box">
          You are here :
          <span className="crumb-link"> Home </span> /
          <span> Registration </span> /
          <span> Real Estate Agent Registration</span>
        </div>

        <h2 className="page-title">Real Estate Agent Registration</h2>

        <div className="stepper-box">
          <div className="stepper-line"></div>
          {steps.map((step, index) => (
            <div className="stepper-item" key={index}>
              <div className={`stepper-circle ${index === 0 ? "active" : ""}`}>
                {index + 1}
              </div>
              <div className="stepper-text">{step}</div>
            </div>
          ))}
        </div>

        <div className="form-box">
          <h3 className="section-title">Agent Type</h3>

          <div className="agent-type-row">
            <label>
              <input
                type="radio"
                name="agentType"
                value="Individual"
                checked={agentType === "Individual"}
                onChange={() => setAgentType("Individual")}
              />
              Individual
            </label>

            <label>
              <input
                type="radio"
                name="agentType"
                value="Other"
                checked={agentType === "Other"}
                onChange={() => setAgentType("Other")}
              />
              Other than individual
            </label>
          </div>

          <div className="pan-wrapper">
            <div className="pan-input-group">
              <label>
                PAN Card Number <span className="required">*</span>
              </label>
              <input
                type="text"
                value={pan}
                maxLength={10}
                onChange={(e) => setPan(e.target.value.toUpperCase())}
                placeholder="PAN Card Number"
              />
            </div>

            <button className="btn-primary" onClick={handleGetDetails}>
              Get Details
            </button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="modal-overlay">
          <div className="modal-box">
            <span className="modal-close" onClick={() => setShowPopup(false)}>
              ×
            </span>
            Select Agent Type
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentDetail;