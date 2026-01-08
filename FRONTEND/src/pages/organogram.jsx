import "../styles/organogram.css";

export default function Organogram() {
  return (
    <div className="org-page">

      {/* Breadcrumb */}
      <div className="breadcrumb">
        You are here : <span>Home</span> / <span>About Us</span> / <span>Organogram</span>
      </div>

      {/* Title */}
      <h2 className="org-title">Organization Structure</h2>
      <div className="org-title-line"></div>

      {/* Screenshot Image */}
      <div className="org-image-wrapper">
        <img
          src="/images/organogram.jpeg"
          alt="APRERA Organization Structure"
        />
      </div>

    </div>
  );
}