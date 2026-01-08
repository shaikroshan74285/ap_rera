import React from "react";
import "../styles/PressRelease.css";
import PressNotepdf from "../assets/PressNote.pdf";
import LastDatepdf from "../assets/LastDate_News.pdf";

const PressRelease = () => {
  return (
    <div className="press-page">
      <div className="press-container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          You are here :&nbsp;
          <a href="#">Home</a> /&nbsp;
          <a href="#">Promotions</a> /&nbsp;
          <span>Press Releases</span>
        </div>

        {/* Content */}
        <div className="press-content">
          <h2 className="page-title">Press Releases</h2>

          <table className="press-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Date</th>
                <th>Download</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="subject-text">Press note on Web launch</td>
                <td className="date-text">05th Feb 2018</td>
                <td>
                  <span className="download-link" onClick={() => window.open(PressNotepdf, "_blank")}>⬇️</span>
                </td>
              </tr>

              <tr>
                <td className="subject-text">
                  Press Note on Last Date to register with APRERA
                </td>
                <td className="date-text">27th Aug 2019</td>
                <td>
                  <span className="download-link" onClick={() => window.open(LastDatepdf, "_blank")}>⬇️</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PressRelease;