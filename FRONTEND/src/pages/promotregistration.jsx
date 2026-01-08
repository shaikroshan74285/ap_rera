// src/components/NewRegistration.jsx
import React from 'react';
import '../styles/promotregistration.css';

const Promotregistration = () => {
  return (
    <div className="rera-container">
      {/* Header / Navigation would be here in real project */}
      
      <div className="breadcrumb">
        <span>You are here: </span>
        <a href="/">Home</a> / <span className="current">New Registration</span>
      </div>

      <div className="registration-card">
        <h1>New User Registration</h1>
        <div className="underline"></div>

        <div className="form-group">
          <label htmlFor="pan">
            PAN Card Number<span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <input
              type="text"
              id="pan"
              placeholder="PAN Card Number"
              maxLength={10}
              className="pan-input"
            />
            <button type="button" className="get-details-btn">
              Get Details
            </button>
          </div>
        </div>
      </div>

      {/* Footer would be here in real project */}
    </div>
  );
};

export default Promotregistration;