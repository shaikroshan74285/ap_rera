import "../styles/preview.css";
import { useNavigate } from "react-router-dom";

const Preview = () => {
  const navigate = useNavigate();

  return (
  
      <div className="main-container">

        {/* BREADCRUMB */}
        <div className="breadcrumb-bar">
          You are here :
          <span> Home </span> /
          <span> Registration </span> /
          <span className="active"> Real Estate Agent Registration</span>
        </div>

        <div className="content-padding">

          {/* TITLE */}
          <h2 className="page-title">Real Estate Agent Registration</h2>

          {/* STEPPER */}
          <div className="step-box">
            <div className="step-line"></div>

            <div className="step-item">
              <div className="step-circle completed">1</div>
              <p>Agent Detail</p>
            </div>

            <div className="step-item">
              <div className="step-circle completed">2</div>
              <p>Upload Documents</p>
            </div>

            <div className="step-item">
              <div className="step-circle active">3</div>
              <p>Preview</p>
            </div>

            <div className="step-item">
              <div className="step-circle">4</div>
              <p>Payment</p>
            </div>

            <div className="step-item">
              <div className="step-circle">5</div>
              <p>Acknowledgement</p>
            </div>
          </div>

          {/* AGENT TYPE */}
          <div className="preview-section">
            <div className="preview-row">
              <div className="preview-label">Agent Type</div>
              <div className="preview-value"></div>
            </div>
          </div>

          {/* APPLICANT DETAILS */}
          <h3 className="section-title">Applicant Details</h3>

          <div className="preview-grid">
            <div className="preview-label">Agent Name</div>
            <div className="preview-value"></div>

            <div className="preview-label">Father's Name</div>
            <div className="preview-value"></div>

            <div className="preview-label">Occupation</div>
            <div className="preview-value"></div>

            <div className="preview-label">Email Id</div>
            <div className="preview-value"></div>

            <div className="preview-label">Aadhaar Number</div>
            <div className="preview-value"></div>

            <div className="preview-label">PAN Card Number</div>
            <div className="preview-value"></div>

            <div className="preview-label">PAN Card Proof</div>
            <div className="preview-value"></div>

            <div className="preview-label">Mobile Number</div>
            <div className="preview-value"></div>

            <div className="preview-label">Land Line Number</div>
            <div className="preview-value"></div>

            <div className="preview-label">Registration Number</div>
            <div className="preview-value"></div>

            <div className="preview-label">Registration Upload</div>
            <div className="preview-value"></div>

            <div className="preview-label">Date of Registration</div>
            <div className="preview-value"></div>

            <div className="preview-label">GST Number</div>
            <div className="preview-value"></div>

            <div className="preview-label">GST Document</div>
            <div className="preview-value"></div>
          </div>

          {/* ITR TABLE */}
          <div className="preview-table-wrapper">
            <table className="doc-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>ITR Of Preceding Year 1</th>
                  <th>ITR Of Preceding Year 2</th>
                  <th>ITR Of Preceding Year 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* DECLARATION */}
          <h3 className="section-title">Declaration</h3>

          <div className="declaration-box">
            <label className="declaration-checkbox">
              <input type="checkbox" />
              <span>
                I / We <b></b> solemnly affirm and declare that the particulars
                given above are correct to my/our knowledge and belief.
              </span>
            </label>
          </div>

          {/* ACTION BUTTONS */}
          <div className="action-buttons space-top">
            <button className="submit-btn" onClick={() => window.print()}>
              Print
            </button>

            <button
              className="submit-btn primary"
              onClick={() => navigate("/agent-payment")}
            >
              Proceed for Payment
            </button>
          </div>

        </div>
      </div>
   
  );
};

export default Preview;