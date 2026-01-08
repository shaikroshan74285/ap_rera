// src/components/NewRegistration.jsx
import React, { useState } from "react";
import "../styles/promotregistration.css";


const STATES = [
  { id: 1, name: "Andaman and Nicobar Island (UT)" },
  { id: 2, name: "Andhra Pradesh" },
  { id: 3, name: "Arunachal Pradesh" },
  { id: 4, name: "Assam" },
  { id: 5, name: "Bihar" },
  { id: 6, name: "Chandigarh (UT)" },
  { id: 7, name: "Chhattisgarh" },
  { id: 8, name: "Dadra and Nagar Haveli (UT)" },
  { id: 9, name: "Daman and Diu (UT)" },
  { id: 10, name: "Delhi (NCT)" },
  { id: 11, name: "Goa" },
  { id: 12, name: "Gujarat" },
  { id: 13, name: "Haryana" },
  { id: 14, name: "Himachal Pradesh" },
  { id: 15, name: "Jammu and Kashmir" },
  { id: 16, name: "Jharkhand" },
  { id: 17, name: "Karnataka" },
  { id: 18, name: "Kerala" },
  { id: 19, name: "Lakshadweep (UT)" },
  { id: 20, name: "Madhya Pradesh" },
  { id: 21, name: "Maharashtra" },
  { id: 22, name: "Manipur" },
  { id: 23, name: "Meghalaya" },
  { id: 24, name: "Mizoram" },
  { id: 25, name: "Nagaland" },
  { id: 26, name: "Odisha" },
  { id: 27, name: "Puducherry (UT)" },
  { id: 28, name: "Punjab" },
  { id: 29, name: "Rajasthan" },
  { id: 30, name: "Sikkim" },
  { id: 31, name: "Tamil Nadu" },
  { id: 32, name: "Telangana" },
  { id: 33, name: "Tripura" },
  { id: 34, name: "Uttar Pradesh" },
  { id: 35, name: "Uttarakhand" },
  { id: 36, name: "West Bengal" }
];

// Example districts (you can expand later)
const DISTRICTS = {
  "Andhra Pradesh": ["Anantapur", "Chittoor", "Guntur", "Krishna"],
  Telangana: ["Hyderabad", "Warangal", "Karimnagar"],
  Karnataka: ["Bengaluru Urban", "Mysuru"],
  "Tamil Nadu": ["Chennai", "Coimbatore"],
  Maharashtra: ["Mumbai", "Pune"]
};
const NewUserRegistration = () => {
  const [step, setStep] = useState(1);
  const [pan, setPan] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  const validatePAN = (pan) => /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan);

  const handleGetDetails = () => {
    if (!validatePAN(pan)) {
      alert("Invalid PAN Card Number");
      return;
    }
    setStep(2);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registered Successfully");
    setPan("");
    setStep(1);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
    setDistrict(""); // reset district
  };

  return (
    <div className="nur-page">
      <div className="nur-card">
        {/* Breadcrumb */}
        <div className="nur-breadcrumb">
          You are here : <span>Home</span> /{" "}
          <span className="active">New User Registration</span>
        </div>

        {/* Title */}
        <h2 className="nur-title">New User Registration</h2>

        {/* STEP 1 : PAN PAGE */}
        {step === 1 && (
          <div className="nur-form">
            <div className="nur-input-row">
              <div className="pan-field">
                <label>
                  PAN Card Number<span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={pan}
                  maxLength={10}
                  onChange={(e) =>
                    setPan(e.target.value.toUpperCase())
                  }
                  placeholder="PAN Card Number"
                />
              </div>

              <button
                type="button"
                className="nur-btn"
                onClick={handleGetDetails}
              >
                Get Details
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 : REGISTRATION FORM */}
        {step === 2 && (
          <form className="nur-form" onSubmit={handleRegister}>
            <div className="nur-row single">
              <div className="nur-field">
                <label>PAN Card Number *</label>
                <input type="text" value={pan} disabled />
              </div>
            </div>

            <div className="nur-row two">
              <div className="nur-field">
                <label>Select User Type *</label>
                <select>
                  <option>Developer</option>
                </select>
              </div>
              <div className="nur-field">
                <label>Select Category *</label>
                <select>
                  <option>Individual</option>
                </select>
              </div>
            </div>

            <div className="nur-row three">
              <div className="nur-field">
                <label>Name of the Applicant *</label>
                <input type="text" required />
              </div>
              <div className="nur-field">
                <label>Father's Name *</label>
                <input type="text" required />
              </div>
              <div className="nur-field">
                <label>Mobile Number *</label>
                <input type="text" required />
              </div>
            </div>

            <div className="nur-row three">
              <div className="nur-field">
                <label>Email Id *</label>
                <input type="email" required />
              </div>
              <div className="nur-field">
                <label>State/UT <span className="required">*</span></label>
                <select
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                    setDistrict("");
                  }}
                  required
                >
                  <option value="">Select</option>
                  {STATES.map((st) => (
                    <option key={st.id} value={st.name}>
                      {st.name}
                    </option>
                  ))}

                </select>
              </div>

              <div className="nur-field">
                <label>District <span className="required">*</span></label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  required
                  disabled={!state}
                >
                  <option value="">Select</option>
                  {state &&
                    DISTRICTS[state]?.map((dist) => (
                      <option key={dist} value={dist}>
                        {dist}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="nur-row two">
              <div className="nur-field">
                <label>Upload License certificate</label>
                <input type="file" />
              </div>
              <div className="nur-field">
                <label>
                  Captcha<span className="required">*</span>
                </label>
                <div className="captcha-box">
                  <span className="captcha-text">7LNT8I</span>
                  <input type="text" required />
                  <button type="button" className="refresh-btn">↻</button>
                </div>
              </div>
            </div>

            <div className="nur-actions">
              <button type="submit" className="nur-register-btn">
                Register
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
};

export default NewUserRegistration;