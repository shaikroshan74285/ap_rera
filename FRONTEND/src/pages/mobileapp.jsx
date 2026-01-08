import React from "react";
import "../styles/mobileapp.css";
import WorkInProgress from "../assets/images/work-in-progress.jpg"

const MobileApp = () => {
  return (
    <div className="wip-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>You are here :</span>
        <a href="/">Home</a>
        <span>/</span>
        <span className="active">Work in Progress</span>
      </div>

      <div>
      {/* Main Content */}
      <div className="wip-box">
          <img src={WorkInProgress} alt="Construction" />
      
      </div>
      </div>
    </div>
  );
};

export default MobileApp;