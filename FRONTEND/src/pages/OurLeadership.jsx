import "../styles/OurLeadership.css";

export default function OurLeadership() {
  return (
    <div className="ourleadership-page">

      {/* Breadcrumb */}
      <div className="breadcrumb">
        You are here : <span>Home</span> / <span>About Us</span> /{" "}
        <span className="active">Our Leadership</span>
      </div>

      {/* Page Title */}
      <div className="page-header">
        <h2>OUR LEADERSHIP</h2>
        <div className="title-line"></div>
      </div>

      {/* Leadership Table */}
      <table className="leadership-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>NAME OF THE PERSON</th>
            <th>DESIGNATION</th>
            <th>MAIL ID</th>
            <th>PHOTO</th>
          </tr>
        </thead>
        <tbody>
  <tr>
    <td>1</td>
    <td>SRI A. SIVA REDDY<br />APRERA</td>
    <td>CHAIRPERSON</td>
    <td>chairperson@ap-rera.in</td>
    <td>
      <img src="/images/Chairperson_APRERA.jpeg" alt="Chairperson_APRERA.jpeg" />
    </td>
  </tr>

  <tr>
    <td>2</td>
    <td>SRI RAJASEKHARA REDDY EADA</td>
    <td>MEMBER</td>
    <td>rsr@ap-rera.in</td>
    <td>
      <img src="/images/Rajasekhar sir.jpeg" alt="Rajasekhar sir.jpeg" />
    </td>
  </tr>

  <tr>
    <td>3</td>
    <td>SRI S.L. KAMESWARA RAO UPADRASTA</td>
    <td>MEMBER</td>
    <td>kameswararao@ap-rera.in</td>
    <td>
      <img src="/images/kameswararao sir.jpeg" alt="kameswararao sir.jpeg" />
    </td>
  </tr>

  <tr>
    <td>4</td>
    <td>SRI JAGANNADHA RAO AVALA</td>
    <td>MEMBER</td>
    <td>ajrao1965@ap-rera.in</td>
    <td>
      <img src="/images/JagannadhaRao Sir New.jpeg" alt="JagannadhaRao Sir New.jpeg" />
    </td>
  </tr>

  <tr>
    <td>5</td>
    <td>SRI MANTRIRAO VENKATA RATNAM</td>
    <td>MEMBER</td>
    <td>mantrirao@ap-rera.in</td>
    <td>
      <img src="/images/Venkata Ratnam Sir.jpg" alt="Venkata Ratnam Sir.jpg" />
    </td>
  </tr>

  <tr>
    <td>6</td>
    <td>SRI SRINIVASA RAO DAMACHERLA</td>
    <td>MEMBER</td>
    <td>dsrgntrm@ap-rera.in</td>
    <td>
      <img src="/images/Srinivasa Rao Sir.jpg" alt="Srinivasa Rao Sir.jpg" />
    </td>
  </tr>

  <tr>
    <td>7</td>
    <td>SRI VENKATESWARLU MERUVA</td>
    <td>MEMBER</td>
    <td>venkatmember@ap-rera.in</td>
    <td>
      <img src="/images/Venkateswarlu Sir.jpg" alt="Venkateswarlu Sir.jpg" />
    </td>
  </tr>

  <tr>
    <td>8</td>
    <td>SRI KULADEEP JUJJAVARAPU</td>
    <td>MEMBER</td>
    <td>kuldeepmember@ap-rera.in</td>
    <td>
      <img src="/images/Kuladeep Sir.png" alt="" />
    </td>
  </tr>
</tbody>

      </table>

      {/* Office Section */}
      <div className="office-section">
        <h3>Office</h3>
        <div className="title-line"></div>

        <div className="office-box">
          <div className="office-details">
            <h4>ANDHRA PRADESH REAL ESTATE REGULATORY AUTHORITY</h4>
            <p>
              D.No:60-5-1, Y Tower,<br />
              Siddhartha Nagar 1st Lane,<br />
              Pinnamaneni Polyclinic Road,<br />
              Vijayawada - 520010,<br />
              Krishna District, A.P.
            </p>

            <p className="blue">
              Help Desk ☎ 6304906011 (All Working Days, 10AM - 6PM)
            </p>
            <p className="blue">
              ✉ helpdesk-rera@ap.gov.in <br />
              ✉ complaint@ap-rera.in
            </p>
          </div>

          <div className="map-box">
            <iframe
              title="APRERA Map"
              src="https://www.google.com/maps?q=Andhra%20Pradesh%20Real%20Estate%20Regulatory%20Authority%20Vijayawada&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}