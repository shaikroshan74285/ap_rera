import "../styles/ourServices.css";

export default function OurServices() {
  return (
    <div className="services-page">

      {/* Breadcrumb */}
      <div className="breadcrumb">
        You are here : <span>Home</span> / <span>About Us</span> / <span>Our Services</span>
      </div>

      {/* ===== PROMOTERS ===== */}
      <div className="service-section">
        <div className="service-text">
          <h3 className="section-title">For PROMOTERS</h3>

          <ul className="arrow-list">
            <li>
              All the Real Estate Projects for development of plots, buildings and
              apartments for the purpose of selling, must be registered with APRERA.
            </li>
            <li>
              Without APRERA registration of the Project, the promoter should not
              advertise or sell any plot, apartment/building.
            </li>
          </ul>

          <p className="blue-text">
            Promoter will be provided the following services:
          </p>

          <ol className="number-list">
            <li>Registration of the Real Estate Project.</li>
            <li>Extension of registration upon valid reasons as per the provisions of Act.</li>
            <li>Designated web page for each project.</li>
            <li>Provision for updating quarterly updates on the projects.</li>
            <li>Complaint filing in case of any grievance.</li>
            <li>Claim interest in case of delay.</li>
          </ol>
        </div>

        <div className="service-image">
          <img src="/public/images/building3.jfif" alt="Promoters" />
        </div>
      </div>

      <div className="dotted-line"></div>

      {/* ===== AGENTS ===== */}
      <div className="service-section">
        <div className="service-text">
          <h3 className="section-title">For AGENTS</h3>

          <ul className="arrow-list">
            <li>
              No real estate agent shall facilitate sale or purchase without
              obtaining registration from APRERA.
            </li>
            <li>
              Every registered Real Estate Agent shall quote the APRERA registration
              number in every sale under the Act, 2016.
            </li>
          </ul>

          <p className="blue-text">
            Real Estate Agents will be provided the following services:
          </p>

          <ol className="number-list">
            <li>Registration of the Real Estate Agents upon application.</li>
            <li>Renewal of registration.</li>
            <li>Complaint filing in case of grievance.</li>
          </ol>
        </div>

        <div className="service-image">
          <img src="/images/agents.jfif" alt="Agents" />
        </div>
      </div>

      <div className="dotted-line"></div>

      {/* ===== ALLOTTEES ===== */}
      <div className="service-section">
        <div className="service-text">
          <h3 className="section-title">For ALLOTTEES</h3>

          <p className="blue-text">
            Allottees will be provided the following services:
          </p>

          <ol className="number-list">
            <li>Access to sanctioned plan and specifications.</li>
            <li>Access to stage-wise project completion schedule.</li>
            <li>
              Claim refund (along with interest) in case:
              <ol className="roman-list">
                <li>Promoter fails to give possession on time.</li>
                <li>Promoter discontinues business due to suspension or revocation.</li>
              </ol>
            </li>
            <li>File complaint with the Authority or adjudicating officer.</li>
            <li>Appeal before the Appellate Tribunal.</li>
            <li>Get compensation for structural or workmanship defects.</li>
          </ol>
        </div>

        <div className="service-image">
          <img src="/images/allottes.jfif" alt="Allottees" />
        </div>
      </div>

      <div className="dotted-line"></div>

      {/* ===== CITIZENS ===== */}
      <div className="service-section">
        <div className="service-text">
          <h3 className="section-title">For CITIZENS</h3>

          <p className="blue-text">
            Citizens will be provided the following services:
          </p>

          <ol className="number-list">
            <li>Access to information regarding real estate projects and agents.</li>
            
              <li>Complaint filing on any promoter or agent in case of any default.</li>
            
          </ol>
        </div>

        <div className="service-image">
          <img src="/images/citizens.jfif" alt="Citizens" />
        </div>
      </div>

    </div>
  );
}