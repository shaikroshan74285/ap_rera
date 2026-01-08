import "../styles/recruitment.css";

const Recruitment = () => {
  return (
    <div className="recruitment-page">

      {/* Breadcrumb */}
      <div className="breadcrumb">
        You are here : <span>Home</span> / <span>About Us</span> /{" "}
        <span className="active">Recruitment</span>
      </div>

      {/* Content Box */}
      <div className="content-box">
        <h2>Recruitment</h2>
        <div className="title-line"></div>

        {/* Table */}
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
              <td>
                Applications are invited for the post of Legal Assistant.
              </td>
              <td className="download">
                <a href="#">
                  ⬇
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Recruitment;