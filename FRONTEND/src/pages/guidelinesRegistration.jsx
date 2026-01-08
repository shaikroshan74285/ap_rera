import React from 'react';
import '../styles/guidelinesRegistration.css';

const GuidelinesRegistration = () => {
  return (
    <div className="rera-guidelines-page">
      <div className="breadcrumb">
        You are here: <a href="#">Home</a> / <span>Registration</span> /{' '}
        <span>Guidelines for Registration</span>
      </div>

      <div className="guidelines-container">
        <div className="intro-text blue-bar">
          Download the forms for Project/Agent/Complaint Registration from the link given below.
        </div>

        {/* Step 1 */}
        <div className="step step-red">
          <div className="step-arrow">
            <div className="step-number">
              <small>STEP</small>
              <strong>1</strong>
            </div>
          </div>

          <div className="step-content">
            <div className="main-text">
              <strong>Application form for Project/Agent/Complaint Registration</strong>{' '}
              <a href="#" className="click-here">Click Here</a>
            </div>
            <div className="note">
              <strong>NOTE :</strong> The documents and Drawings must be self-attested and in PDF
              Format (70MB), Photo in JPEG Format
              <br />
              (35mm×45mm, 300DPI, straight view/light background)
            </div>
          </div>

          <div className="step-icon red-icon">
            <span className="download-icon">↓</span>
          </div>
        </div>

        {/* Step 2 */}
        <div className="step step-orange">
          <div className="step-arrow orange-arrow">
            <div className="step-number">
              <small>STEP</small>
              <strong>2</strong>
            </div>
          </div>

          <div className="step-content">
            <div className="main-text">
              Fill the required application form (printable/digital), it would be more useful during
              the submission for online application.
            </div>
          </div>

          <div className="step-icon orange-icon">
            <span className="doc-icon">📄</span>
          </div>
        </div>

        {/* Step 3 */}
        <div className="step step-blue">
          <div className="step-arrow blue-arrow">
            <div className="step-number">
              <small>STEP</small>
              <strong>3</strong>
            </div>
          </div>

          <div className="step-content">
            <div className="main-text">
              For better understanding of registration screens verify the below user manuals and
              video tutorials.
            </div>
            <ul className="manual-list">
              <li>
                ► User manuals for Project/Agent/Complaint Registration{' '}
                <a href="#" className="click-here">Click Here</a>
              </li>
              <li>
                ► Video tutorials <a href="#" className="click-here">Click Here</a>
              </li>
            </ul>
          </div>

          <div className="step-icon blue-icon">
            <span className="search-icon">🔍</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidelinesRegistration;