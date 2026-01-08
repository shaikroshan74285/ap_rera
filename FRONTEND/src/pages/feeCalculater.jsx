import React, { useState } from "react";
import "../styles/feeCalculater.css";

const FeeCalculator = () => {
  const [projectType, setProjectType] = useState("");

  return (
    <div className="page-wrapper">
      <div className="content-card">
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          You are here : <span>Home</span> / <span>Registration</span> /{" "}
          <span className="active">Fee Calculator</span>
        </div>

        {/* Title */}
        <h2 className="page-title">Fee Calculator for Project Registration</h2>

        {/* Form */}
        <form className="fee-form">
          {/* Project Type */}
          <div className="form-row">
            <label>
              Project Type<span className="required">*</span>
            </label>
            <select value={projectType} onChange={(e) => setProjectType(e.target.value)}>
              <option value="">Select</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Mixed">Mixed Development</option>
              <option value="Plots">Layout for Plots</option>
              <option value="PlotsBuildings">Layouts for Plots & Buildings</option>
            </select>
          </div>

          {/* Plan Approval Date */}
          <div className="form-row">
            <label>
              Plan Approval Date<span className="required">*</span>
            </label>
            <input type="date" />
          </div>

          {/* Date of Payment */}
          <div className="form-row">
            <label>
              Date of Payment for Registration<span className="required">*</span>
            </label>
            <input type="date" />
          </div>

          {/* ---------------- COMMON SITE AREA ---------------- */}
          {(projectType === "Residential" ||
            projectType === "Commercial" ||
            projectType === "Mixed") && (
            <div className="form-row">
              <label>
                Site Area<span className="required">*</span> (In Sq.m)
              </label>
              <input type="text" placeholder="Site Area" />
            </div>
          )}

          {(projectType === "Plots" || projectType === "PlotsBuildings") && (
            <div className="form-row">
              <label>
                Site Area<span className="required">*</span> (Acre)
              </label>
              <input type="text" placeholder="Site Area" />
            </div>
          )}

          {/* ---------------- BUILT-UP AREA ---------------- */}
          {(projectType === "Residential" ||
            projectType === "Commercial" ||
            projectType === "Mixed") && (
            <div className="form-row last-row">
              <label>
                Total Built-up area of all the Floors
                <br />
                (including stilt area) <span className="required">*</span> (In Sq.m)
              </label>
              <input
                type="text"
                placeholder="Total Built-up area of all the Floors (including stilt area)"
              />
              <button type="button" className="calculate-btn">
                Calculate
              </button>
            </div>
          )}

          {/* ---------------- PLOTS & BUILDINGS ---------------- */}
          {projectType === "PlotsBuildings" && (
            <>
              <div className="form-row">
                <label>
                  Residential Built-up area
                  <br />
                  (including stilt area) <span className="required">*</span> (In Sq.m)
                </label>
                <input type="text" placeholder="Residential Built-up Area" />
              </div>

              <div className="form-row last-row">
                <label>
                  Commercial Built-up area
                  <br />
                  (including stilt area) <span className="required">*</span> (In Sq.m)
                </label>
                <input type="text" placeholder="0.00" />
                <button type="button" className="calculate-btn">
                  Calculate
                </button>
              </div>
            </>
          )}

          {/* ---------------- ONLY PLOTS ---------------- */}
          {projectType === "Plots" && (
            <div className="form-row last-row">
              <button type="button" className="calculate-btn">
                Calculate
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FeeCalculator;