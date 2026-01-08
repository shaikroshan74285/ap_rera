import { useNavigate } from "react-router-dom";
import "../styles/ApplicantDetails.css";

const steps = [
  "Agent Detail",
  "Upload Documents",
  "Preview",
  "Payment",
  "Acknowledgement",
];

const ApplicantDetails = () => {
  const navigate = useNavigate();

  const handleSaveContinue = () => {
    // simulate successful save
    navigate("/upload-documents");
  };

  return (
    <div className="page-wrapper">

      {/* Breadcrumb */}
      <div className="breadcrumb">
        You are here :
        <span> Home </span> /
        <span> Registration </span> /
        <span> Real Estate Agent Registration</span>
      </div>

      {/* Main Container */}
      <div className="content-box">

        <h2 className="page-title">Real Estate Agent Registration</h2>

        {/* Stepper */}
        <div className="stepper">
          <div className="step-line"></div>
          {steps.map((s, i) => (
            <div className="step" key={i}>
              <div className={`circle ${i === 0 ? "active" : ""}`}>
                {i + 1}
              </div>
              <span>{s}</span>
            </div>
          ))}
        </div>

        {/* Agent Type */}
        <section className="section">
          <h3 className="section-title">Agent Type</h3>
          <div className="radio-group">
            <label>
              <input type="radio" name="agentType" defaultChecked /> Individual
            </label>
            <label>
              <input type="radio" name="agentType" /> Other than Individual
            </label>
          </div>
        </section>

        {/* Applicant Details */}
        <section className="section">
          <h3 className="section-title">Applicant Details</h3>

          <div className="form-grid">
            <div>
              <label>Agent Name *</label>
              <input type="text" />
            </div>

            <div>
              <label>Upload Photograph *</label>
              <input type="file" />
            </div>

            <div>
              <label>Father's Name *</label>
              <input type="text" />
            </div>

            <div>
              <label>Occupation *</label>
              <select>
                <option>Self</option>
                <option>Business</option>
              </select>
            </div>

            <div>
              <label>Email Id *</label>
              <input type="email" />
            </div>

            <div>
              <label>Aadhaar Number *</label>
              <input type="text" />
            </div>

            <div>
              <label>PAN Card Number *</label>
              <input type="text" />
            </div>

            <div>
              <label>Upload PAN Card *</label>
              <input type="file" />
            </div>
          </div>
        </section>

        {/* Local Address */}
        <section className="section">
          <h3 className="section-title">Local Address For Communication</h3>

          <div className="form-grid">
            <div>
              <label>Address Line 1 *</label>
              <input type="text" />
            </div>

            <div>
              <label>Address Line 2</label>
              <input type="text" />
            </div>

            <div>
              <label>State *</label>
              <select>
                <option>Andhra Pradesh</option>
              </select>
            </div>

            <div>
              <label>District *</label>
              <select>
                <option>Select</option>
              </select>
            </div>
          </div>
        </section>

        {/* Radio Sections */}
        <section className="section">
          <label className="radio-inline">
            Any Civil / Criminal Cases *
            <input type="radio" name="case" /> Yes
            <input type="radio" name="case" defaultChecked /> No
          </label>
        </section>

        {/* Address Proof */}
        <ul className="note-list">
          <li>
            <span className="red-text">List of Address Proof:</span>
            Aadhaar / Passport / Voter ID / Bank Passbook
          </li>
        </ul>

        {/* Save Button */}
        <div className="btn-row">
          <button className="primary-btn" onClick={handleSaveContinue}>
            Save And Continue
          </button>
        </div>

      </div>
    </div>
  );
};

export default ApplicantDetails;