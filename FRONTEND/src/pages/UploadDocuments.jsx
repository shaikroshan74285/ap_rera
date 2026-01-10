import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Upload.css";

const UploadDocuments = () => {
  const navigate = useNavigate();

  const [files, setFiles] = useState({
    year1: null,
    year2: null,
    year3: null,
  });

  const [agree, setAgree] = useState(false);
  const [popup, setPopup] = useState({ show: false, message: "" });

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const closePopup = () => setPopup({ show: false, message: "" });

  const handleSaveAndContinue = () => {
    if (!files.year1)
      return setPopup({
        show: true,
        message:
          "Please Upload Income Tax Return Acknowledgement of Preceding Year 1",
      });

    if (!files.year2)
      return setPopup({
        show: true,
        message:
          "Please Upload Income Tax Return Acknowledgement of Preceding Year 2",
      });

    if (!files.year3)
      return setPopup({
        show: true,
        message:
          "Please Upload Income Tax Return Acknowledgement of Preceding Year 3",
      });

    if (!agree)
      return setPopup({
        show: true,
        message: "Please accept the declaration",
      });

    navigate("/agent-preview");
  };

  return (
    <div className="ud-wrapper">
      <div className="ud-main">

        {/* ===== BREADCRUMB ===== */}
        <div className="ud-breadcrumb">
          You are here :
          <span className="ud-link"> Home </span>
          {" / "}
          <span>Registration</span>
          {" / "}
          <span className="ud-current">Real Estate Agent Registration</span>
        </div>

        <div className="ud-content">

          {/* ===== TITLE ===== */}
          <h2 className="ud-title">Real Estate Agent Registration</h2>

          {/* ===== STEPPER ===== */}
          <div className="ud-stepper">
            <div className="ud-step-line"></div>

            <div className="ud-step done">
              <div className="ud-circle">1</div>
              <p>Agent Detail</p>
            </div>

            <div className="ud-step active">
              <div className="ud-circle">2</div>
              <p>Upload Documents</p>
            </div>

            <div className="ud-step">
              <div className="ud-circle">3</div>
              <p>Preview</p>
            </div>

            <div className="ud-step">
              <div className="ud-circle">4</div>
              <p>Payment</p>
            </div>

            <div className="ud-step">
              <div className="ud-circle">5</div>
              <p>Acknowledgement</p>
            </div>
          </div>

          {/* ===== SECTION ===== */}
          <h3 className="ud-section-title">Upload Documents</h3>

          <p className="ud-note">
            <b>Note :</b> If the entity is registered below 3 years period and IT
            returns are not available, upload available returns with reason.
          </p>

          {/* ===== TABLE ===== */}
          <table className="ud-table">
            <thead>
              <tr>
                <th>Document Name</th>
                <th>Upload Document</th>
                <th>Uploaded Document</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Income Tax Return Acknowledgement of Preceding Year 1 *</td>
                <td>
                  <input type="file" name="year1" onChange={handleFileChange} />
                </td>
                <td>{files.year1?.name}</td>
              </tr>

              <tr>
                <td>Income Tax Return Acknowledgement of Preceding Year 2 *</td>
                <td>
                  <input type="file" name="year2" onChange={handleFileChange} />
                </td>
                <td>{files.year2?.name}</td>
              </tr>

              <tr>
                <td>Income Tax Return Acknowledgement of Preceding Year 3 *</td>
                <td>
                  <input type="file" name="year3" onChange={handleFileChange} />
                </td>
                <td>{files.year3?.name}</td>
              </tr>
            </tbody>
          </table>

          {/* ===== DECLARATION ===== */}
          <h3 className="ud-section-title">Declaration</h3>

          <label className="ud-declaration">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
            />
            &nbsp; I / We solemnly affirm and declare that the particulars given
            above are correct.
          </label>

          {/* ===== BUTTON ===== */}
          <div className="ud-btn-row">
            <button className="ud-btn" onClick={handleSaveAndContinue}>
              Save And Continue
            </button>
          </div>
        </div>
      </div>

      {/* ===== MODAL ===== */}
      {popup.show && (
        <div className="ud-modal-overlay">
          <div className="ud-modal">
            <button className="ud-modal-close" onClick={closePopup}>×</button>
            <p>{popup.message}</p>
            <button className="ud-modal-ok" onClick={closePopup}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadDocuments;