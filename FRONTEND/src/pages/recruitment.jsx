import "../styles/recruitment.css";
 import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";


const Recruitment = () => {
  return (
    <div className="recruitment-page">

      {/* OUTER WHITE BOX */}
      <div className="recruitment-outer-box">

        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
  You are here :

  {/* Home – yellow */}
  <Link to="/" className="breadcrumb-home"> Home</Link>

  <span className="breadcrumb-separator"> / </span>

  {/* About Us – white */}
  <span className="breadcrumb-text">About Us</span>

  <span className="breadcrumb-separator"> / </span>

  {/* Recruitment – white */}
  <span className="breadcrumb-text">Recruitment</span>
</div>



        {/* Content */}
        <div className="recruitment-container">
          <h2 className="recruitment-title">Recruitment</h2>

          <table className="recruitment-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Circular No</th>
                <th>Date</th>
                <th>Subject</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>A/3/2018</td>
                <td></td>
                <td>Applications are invited for the post of Legal Assistant.</td>
                <td className="download-cell">
  <a
    href="https://rera.ap.gov.in/RERA/DOCUMENTS/Notice/Assistant_Leagal_officer.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="download-link"
  >
    <FaDownload />
  </a>
</td>

              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Recruitment;