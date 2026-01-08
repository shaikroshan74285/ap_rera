import React from "react";
import "../styles/usermanual.css";

const UserManual = () => {
  return (
    <div className="page-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        You are here :
        <a href="#"> Home </a> /
        <a href="#"> Registration </a> /
        <span> User Manuals</span>
      </div>

      {/* Title */}
      <div className="title-section">
        <h2>User Manuals</h2>
        <div className="title-underline"></div>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table className="manual-table">
          <thead>
            <tr>
              <th className="blank-header"></th>
              <th>Subject</th>
              <th className="download-header">Download</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="category" rowSpan="2">Project</td>
              <td>User Manual for Project Individual Registration</td>
              <td className="download">
                <span className="icon">⬇</span>
              </td>
            </tr>

            <tr>
              <td>User Manual for Project Other-than Individual Registration</td>
              <td className="download">
                <span className="icon">⬇</span>
              </td>
            </tr>

            <tr>
              <td className="category" rowSpan="2">Agent</td>
              <td>User Manual for Agent Individual Registration</td>
              <td className="download">
                <span className="icon">⬇</span>
              </td>
            </tr>

            <tr>
              <td>User Manual for Agent Other-than Individual Registration</td>
              <td className="download">
                <span className="icon">⬇</span>
              </td>
            </tr>

            <tr>
              <td className="category">Complaint Registration</td>
              <td>User Manual for Complaint Registration</td>
              <td className="download">
                <span className="icon">⬇</span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManual;