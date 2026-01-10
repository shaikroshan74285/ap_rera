import { useState } from "react";
import axios from "axios";
import "../styles/agentDetail.css";

const steps = [
  "Agent Detail",
  "Upload Documents",
  "Preview",
  "Payment",
  "Acknowledgement",
];

const AgentDetailExisting = () => {
  const [pan, setPan] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  /* SEND OTP */
  const handleGetOtp = async () => {
    if (pan.length !== 10) {
      alert("Please enter valid PAN number");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/otp/send", {
        panNumber: pan,
        mobile: "9876544857",
      });

      setOtpSent(true);
      alert("OTP sent to registered mobile number");
    } catch (error) {
      alert("Failed to send OTP");
    }
  };

  /* VERIFY OTP */
  const handleVerifyOtp = async () => {
    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/otp/verify", {
        panNumber: pan,
        otp,
      });

      alert("OTP verified successfully");
      // navigate to Upload Documents page
    } catch (error) {
      alert("Invalid or expired OTP");
    }
  };

  return (
    <div className="agent-registration-page">
      <div className="outer-box">

        {/* BREADCRUMB */}
        <div className="breadcrumb-box">
          You are here :
          <span className="crumb-link"> Home </span> /
          <span> Registration </span> /
          <span> Real Estate Agent Registration</span>
        </div>

        {/* TITLE */}
        <h2 className="page-title">Real Estate Agent Registration</h2>

        {/* STEPPER */}
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

        {/* PAN + OTP FORM */}
        <div className="form-box">
          <div className="pan-wrapper">

            {/* PAN INPUT */}
            <div className="pan-input-group">
              <label>
                PanCard Number <span className="required">*</span>
              </label>
              <input
                type="text"
                value={pan}
                maxLength={10}
                onChange={(e) => setPan(e.target.value.toUpperCase())}
                placeholder="PanCard Number"
              />
            </div>

            <button className="btn-primary" onClick={handleGetOtp}>
              {otpSent ? "Resend OTP" : "Get OTP"}
            </button>
          </div>

          {/* OTP INPUT (APPEARS BELOW) */}
          {otpSent && (
            <div className="pan-wrapper">
              <div className="pan-input-group">
                <label>
                  OTP <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                />
              </div>

              <button className="btn-primary" onClick={handleVerifyOtp}>
                Verify OTP
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AgentDetailExisting;