import React from "react";
import "../styles/apreat.css";

export default function Apreat() {
  return (
    <>
      {/* ================= CONTENT ================= */}
      <div className="page-wrapper">
        <div className="content-box">
          <div className="breadcrumb">
            You are here : APREAT Contact Us
          </div>

          {/* CHAIRPERSON */}
          <div className="section-title">CHAIRPERSON</div>
          <div className="underline"></div>

          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Designation</th>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>Email ID</th>
                <th>Photo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>CHAIRPERSON</td>
                <td className="name">
                  HON'BLE JUSTICE SRI M. GANGARAO
                </td>
                <td>-</td>
                <td>-</td>
                <td>
                  <img
                    className="photo"
                    src="/public/images/JUSTICEMGangarao.jpg"
                    alt="Chairperson"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          {/* MEMBERS */}
          <div className="section-title">MEMBERS</div>
          <div className="underline"></div>

          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Designation</th>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>Email ID</th>
                <th>Photo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>JUDICIAL MEMBER</td>
                <td className="name">
                  SRI RAMACHANDRA REDDY MANDALAPU
                </td>
                <td>-</td>
                <td>-</td>
                <td>
                  <img
                    className="photo"
                    src="/public/images/Ramachandrareddy sir.jpeg"
                    alt="Ramachandra Reddy Sir"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          {/* REGISTRAR */}
          <div className="section-title">REGISTRAR</div>
          <div className="underline"></div>

          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Designation</th>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>Email ID</th>
                <th>Photo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>REGISTRAR</td>
                <td className="name">SRI GUDURI RAMA KRISHNA</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="footer-links">
        <div>
          › Privacy Policy › Hyperlinking Policy › Copyright Policy › Disclaimer
          › Accessibility › Terms & Conditions › Site Map › Rate our website
        </div>

        <div className="footer-social">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" />
        </div>
      </div>

      <div className="footer-main">
        <div className="left">
          Copyright © 2017, All Rights Reserved by APRERA,
          Govt of A.P. India
        </div>

        <div className="center">
          No. Of Visitors :
          <div className="counter">
            <span>9</span><span>2</span><span>0</span>
            <span>2</span><span>0</span><span>6</span>
          </div>
          | Last Updated on : 22/12/2025 17:14:45
        </div>

        <div className="right">
          Designed and Developed by
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/AP_Online_Logo.png/200px-AP_Online_Logo.png" />
        </div>
      </div>

      {/* Scroll to top */}
      <div className="scroll-top" onClick={() => window.scrollTo(0, 0)}>
        ↑
      </div>
    </>
  );
}