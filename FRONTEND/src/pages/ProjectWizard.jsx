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
    <div className="projwizard-page">

      {/* MAIN BOX */}
      <div className="projwizard-card">

        {/* breadcrumb inside card */}
        <div className="projwizard-breadcrumb">
          You are here : <span>Home</span> / <span>Registration</span> / Project Registration
        </div>

        {/* TITLE */}
        <h2 className="projwizard-title">Project Registration</h2>
        <div className="projwizard-header-line"></div>

        {/* STEPPER */}
        <div className="projwizard-stepper">
          {steps.map((label, index) => {
            const num = index + 1;

            return (
              <div key={index} className="projwizard-step-item">
                <div className={`projwizard-step-circle ${step === num ? "projwizard-active" : ""}`}>
                  {num}
                </div>

                <div className="projwizard-step-label">
                  {label.split(" ").map((w, i) => (
                    <div key={i}>{w}</div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* FORM BODY */}
        <div className="projwizard-form-body">

          {/* APPLICATION NUMBER */}
          <div className="projwizard-section-block">
            <h3 className="projwizard-h3">Application Number</h3>
            <div className="projwizard-section-line"></div>

            <label className="projwizard-field-label">Application Number*</label>
            <input
              type="text"
              defaultValue="0701268144746"
              className="projwizard-text-input"
            />
          </div>

          {/* PROMOTER TYPE */}
          <div className="projwizard-section-block">
            <h3 className="projwizard-h3">Promoter Type</h3>
            <div className="projwizard-section-line"></div>

            <div className="projwizard-radio-row">
              <label>
                <input type="radio" name="ptype" /> Individual
              </label>

              <label>
                <input type="radio" name="ptype" /> Other than Individual
              </label>
            </div>
          </div>

          {/* PAN */}
          <div className="projwizard-section-block">
            <h3 className="projwizard-h3">PAN Card Number</h3>
            <div className="projwizard-section-line"></div>

            <div className="projwizard-row">
              <input className="projwizard-text-input" placeholder="PAN Card Number" />
              <button className="projwizard-btn">Get Details</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
