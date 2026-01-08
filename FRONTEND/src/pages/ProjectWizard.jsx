import React, { useState } from "react";
import "../styles/projectWizard.css";

export default function ProjectWizard() {
  const [step, setStep] = useState(1);

  const steps = [
    "Promoter Profile",
    "Project Details",
    "Development Details",
    "Associate Details",
    "Upload Documents",
    "Preview",
    "Payment",
    "Acknowledgment"
  ];

  return (
    <div className="wizard-page">

      {/* MAIN BOX */}
      <div className="wizard-card">

        {/* breadcrumb inside card */}
        <div className="wizard-breadcrumb">
          You are here : <span>Home</span> / <span>Registration</span> / Project Registration
        </div>

        {/* TITLE */}
        <h2 className="wizard-title">Project Registration</h2>
        <div className="header-line"></div>

        {/* STEPPER */}
        <div className="stepper">
          {steps.map((label, index) => {
            const num = index + 1;

            return (
              <div key={index} className="step-item">
                <div className={`step-circle ${step === num ? "active" : ""}`}>
                  {num}
                </div>

                <div className="step-label">
                  {label.split(" ").map((w, i) => (
                    <div key={i}>{w}</div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* FORM BODY */}
        <div className="form-body">

          {/* APPLICATION NUMBER */}
          <div className="section-block">
            <h3>Application Number</h3>
            <div className="section-line"></div>

            <label className="field-label">Application Number*</label>
            <input
              type="text"
              defaultValue="0701268144746"
              className="text-input"
            />
          </div>

          {/* PROMOTER TYPE */}
          <div className="section-block">
            <h3>Promoter Type</h3>
            <div className="section-line"></div>

            <div className="radio-row">
              <label>
                <input type="radio" name="ptype" /> Individual
              </label>

              <label>
                <input type="radio" name="ptype" /> Other than Individual
              </label>
            </div>
          </div>

          {/* PAN */}
          <div className="section-block">
            <h3>PAN Card Number</h3>
            <div className="section-line"></div>

            <div className="row">
              <input className="text-input" placeholder="PAN Card Number" />
              <button className="btn">Get Details</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
