import "../styles/dashboard.css";
import AnalysisChart from "./AnalysisCharts";
// import AnalysisChart from "./AnalysisCharts";

export default function Dashboard1() {
  return (
    <section className="dashboard-wrapper">

      {/* LEFT : DATA ANALYSIS */}
      <div className="analysis-box">
        <div className="box-header">DATA ANALYSIS</div>

        <div className="filters">
          <div>
            Year :
            <select>
              <option>2026</option>
            </select>
          </div>

          <div>
            Month :
            <select>
              <option>All</option>
            </select>
          </div>
        </div>

        <h4 className="analysis-title">
          STATUS OF PROJECTS, AGENTS AND COMPLAINTS
        </h4>

        {/* GRAPH */}
        <AnalysisChart />
      </div>

      {/* RIGHT : DASHBOARD */}
      <div className="dashboard-box">
        <div className="box-header">DASHBOARD</div>

        {/* PROJECTS */}
        <div className="dash-row">
          <div className="dash-icon">📊</div>
          <div className="dash-content">
            <h4>STATUS OF PROJECTS</h4>
            <p>Received : <b>7134</b></p>
            <p>Approved : <b>6289</b></p>
          </div>
        </div>

        {/* AGENTS */}
        <div className="dash-row">
          <div className="dash-icon">👥</div>
          <div className="dash-content">
            <h4>STATUS OF AGENTS</h4>
            <p>Received : <b>303</b></p>
            <p>Approved : <b>295</b></p>
          </div>
        </div>

        {/* COMPLAINTS */}
        <div className="dash-row">
          <div className="dash-icon">⚖️</div>
          <div className="dash-content">
            <h4>STATUS OF COMPLAINTS</h4>

            <div className="complaints-grid">
              <div>
                <p>Total Cases (Form-M)</p>
                <p>Received : 657</p>
                <p>Disposed : 372</p>
                <p>Reserved : Nil</p>
                <p>Before NCLT : 04</p>
                <p>Running : 281</p>
              </div>

              <div>
                <p>Total Cases (Form-N)</p>
                <p>Received : 141</p>
                <p>Disposed : 133</p>
                <p>Reserved : Nil</p>
                <p>Before NCLT : 02</p>
                <p>Running : 06</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}