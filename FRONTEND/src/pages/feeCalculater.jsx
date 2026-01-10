import React, { useState } from "react";
import "../styles/feeCalculater.css";

const FeeCalculator = () => {
  const [projectType, setProjectType] = useState("");

  return (
    <div className="feecalc-page-wrapper">
      <div className="feecalc-content-card">

        {/* Breadcrumb */}
        <div className="feecalc-breadcrumb-bar">
          You are here : <span>Home</span> / <span>Registration</span> /{" "}
          <span className="feecalc-active">Fee Calculator</span>
        </div>

        {/* Title */}
        <h2 className="feecalc-page-title">Fee Calculator for Project Registration</h2>

        <form className="feecalc-fee-form">

          {/* ---------------- PROJECT TYPE ---------------- */}
          <div className="feecalc-form-row">
            <label>
              Project Type<span className="feecalc-required">*</span>
            </label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Mixed">Mixed Development</option>
              <option value="Plots">Layout for Plots</option>
              <option value="PlotsBuildings">
                Layouts for Plots & Buildings
              </option>
            </select>
          </div>

          {/* ================= COMMON FIELDS (ALWAYS SHOWN) ================= */}
          <div className="feecalc-form-row">
            <label>
              Plan Approval Date<span className="feecalc-required">*</span>
            </label>
            <input type="date" />
          </div>

          <div className="feecalc-form-row">
            <label>
              Date of Payment for Registration
              <span className="feecalc-required">*</span>
            </label>
            <input type="date" />
          </div>

          {/* ================= SITE AREA ================= */}
          {(projectType === "" ||
            projectType === "Residential" ||
            projectType === "Commercial" ||
            projectType === "Mixed") && (
            <div className="feecalc-form-row">
              <label>
                Site Area<span className="feecalc-required">*</span>
                {(projectType === "Residential" ||
                  projectType === "Commercial" ||
                  projectType === "Mixed") && " (In Sq.m)"}
              </label>
              <input type="text" placeholder="Site Area" />
            </div>
          )}

          {(projectType === "Plots" || projectType === "PlotsBuildings") && (
            <div className="feecalc-form-row">
              <label>
                Site Area<span className="feecalc-required">*</span> (Acre)
              </label>
              <input type="text" placeholder="Site Area" />
            </div>
          )}

          {/* ================= BUILT-UP AREA ================= */}
          {(projectType === "" ||
            projectType === "Residential" ||
            projectType === "Commercial" ||
            projectType === "Mixed") && (
            <div className="feecalc-form-row">
              <label>
                Total Built-up area of all the Floors
                <br />
                (including stilt area)
                <span className="feecalc-required">*</span>
                {(projectType === "Residential" ||
                  projectType === "Commercial" ||
                  projectType === "Mixed") && " (In Sq.m)"}
              </label>
              <input
                type="text"
                placeholder="Total Built-up area of all the Floors (including stilt area)"
              />
            </div>
          )}

          {/* ================= PLOTS & BUILDINGS ================= */}
          {projectType === "PlotsBuildings" && (
            <>
              <div className="feecalc-form-row">
                <label>
                  Residential Built-up area
                  <br />
                  (including stilt area)
                  <span className="feecalc-required">*</span> (In Sq.m)
                </label>
                <input
                  type="text"
                  placeholder="Residential Built-up Area (including stilt area)"
                />
              </div>

              <div className="feecalc-form-row">
                <label>
                  Commercial Built-up area
                  <br />
                  (including stilt area)
                  <span className="feecalc-required">*</span> (In Sq.m)
                </label>
                <input type="text" placeholder="0.00" />
              </div>
            </>
          )}

          {/* ================= CALCULATE BUTTON ================= */}
          <div className="feecalc-form-row feecalc-last-row">
            <button type="button" className="feecalc-calculate-btn">
              Calculate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeeCalculator;