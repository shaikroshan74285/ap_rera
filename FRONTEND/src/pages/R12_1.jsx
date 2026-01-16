import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/reportPage.css';

// Import the two different datasets
import agentData from '../data/R12_1_Agent.json';
import projectData from '../data/R12_1_Project.json';

const R12_1 = () => {
  // Filter States
  const [district, setDistrict] = useState('All');
  const [appType, setAppType] = useState('Project');
  
  // Display States (updated only on button click)
  const [activeData, setActiveData] = useState([]);
  const [activeType, setActiveType] = useState(null);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Logic to handle filter and display
  const handleGetDetails = () => {
    // 1. Select the source file
    let sourceData = appType === 'Project' 
      ? projectData["RegionWise Project DetailsVisak"] 
      : agentData["RegionWise Agent DetailsVisakha"];

    // 2. Apply District Filter
    let filteredByDistrict = district === 'All' 
      ? sourceData 
      : sourceData.filter(item => item["District Name"] === district);

    setActiveData(filteredByDistrict);
    setActiveType(appType);
    setCurrentPage(1);
  };

  // Search Logic
  const searchedData = activeData.filter(item => 
    Object.values(item).some(val => String(val).toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Pagination Logic
  const totalPages = Math.ceil(searchedData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchedData.slice(indexOfFirstItem, indexOfLastItem);

  const getPageNumbers = () => {
    const pages = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  const downloadCSV = () => {
    const headers = activeType === 'Project'
      ? ["Sl.No", "District Name", "Application No", "Project Name", "Submission Date", "Promoter Name", "Status"]
      : ["Sl.No", "District Name", "Application No", "Agent Name", "Submission Date", "Status"];

    const csvContent = [
      headers.join(","),
      ...searchedData.map(r => activeType === 'Project'
        ? [r["Sl.No"], r["District Name"], r["Application No"], `"${r["Project Name"]}"`, r["Submission Date"], `"${r["Promoter Name"]}"`, r["ApplicationStatus"]]
        : [r["Sl.No"], r["District Name"], r["Application No"], `"${r["Agent Name"]}"`, r["Submission Date"], r["ApplicationStatus"]]
      ).map(row => row.join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `RegionWise_Report_${activeType}.csv`;
    link.click();
  };

  return (
    <div className="report-page-wrapper">
      <div className="breadcrumb-blue no-print">
        You are here : <Link to="/" className="text-white">Home</Link> / <Link to="/mis-reports" className="text-white">MIS Reports</Link> / Region Wise Reports R12.1 - Visakhapatnam
      </div>

      <div className="report-card-container">
        <h2 className="report-title-left">Region Wise Report: <strong>R12.1 - Visakhapatnam</strong></h2>
        <hr className="title-underline" />

        {/* Filter Section matching image_06698b.png */}
        <div className="filter-container no-print">
          <div className="filter-group">
            <label>District Name:</label>
            <select value={district} onChange={(e) => setDistrict(e.target.value)}>
              <option value="All">All</option>
              <option value="Srikakulam">Srikakulam</option>
              <option value="Vizianagaram">Vizianagaram</option>
              <option value="Visakhapatnam">Visakhapatnam</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Application Type:</label>
            <select value={appType} onChange={(e) => setAppType(e.target.value)}>
              <option value="Project">Project</option>
              <option value="Agent">Agent</option>
            </select>
          </div>

          <button className="get-details-btn" onClick={handleGetDetails}>GetDetails</button>
        </div>

        {activeType && (
          <>
            <div className="table-controls no-print">
              <div className="show-entries">
                Show <select value={itemsPerPage} onChange={(e) => {setItemsPerPage(Number(e.target.value)); setCurrentPage(1);}}>
                  <option value={10}>10</option><option value={25}>25</option><option value={50}>50</option>
                </select> entries
              </div>
              <div className="export-search">
                <div className="icons">
                  <i className="fas fa-file-excel excel" onClick={downloadCSV} title="Export to Excel"></i>
                  <i className="fas fa-file-pdf pdf" onClick={() => window.print()} title="Print PDF"></i>
                </div>
                <div className="search-box">Search: <input type="text" onChange={(e) => {setSearchTerm(e.target.value); setCurrentPage(1);}} /></div>
              </div>
            </div>

            <table className="rera-report-table">
              <thead>
                {activeType === 'Project' ? (
                  <tr>
                    <th>Sl.No</th>
                    <th>District Name</th>
                    <th>Application No</th>
                    <th>Project Name</th>
                    <th>Submission Date</th>
                    <th>Promoter Name</th>
                    <th>Application Status</th>
                  </tr>
                ) : (
                  <tr>
                    <th>Sl.No</th>
                    <th>District Name</th>
                    <th>Application No</th>
                    <th>Agent Name</th>
                    <th>Submission Date</th>
                    <th>Application Status</th>
                  </tr>
                )}
              </thead>
              <tbody>
                {currentItems.length > 0 ? currentItems.map((row, index) => (
                  <tr key={index}>
                    <td>{row["Sl.No"]}</td>
                    <td>{row["District Name"]}</td>
                    <td className="blue-text font-bold">{row["Application No"]}</td>
                    <td className="text-left">{activeType === 'Project' ? row["Project Name"] : row["Agent Name"]}</td>
                    <td>{row["Submission Date"]}</td>
                    {activeType === 'Project' && <td className="text-left">{row["Promoter Name"]}</td>}
                    <td className="status-cell">{row["ApplicationStatus"]}</td>
                  </tr>
                )) : (
                  <tr><td colSpan={activeType === 'Project' ? 7 : 6} style={{padding: '20px', textAlign: 'center'}}>No records found</td></tr>
                )}
              </tbody>
            </table>

            {/* Pagination controls */}
            <div className="pagination-footer no-print">
              <div className="pagination-info">Showing {searchedData.length > 0 ? indexOfFirstItem + 1 : 0} to {Math.min(indexOfLastItem, searchedData.length)} of {searchedData.length} entries</div>
              <div className="pagination-buttons">
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(1)} className="page-nav">First</button>
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="page-nav">Prev</button>
                {getPageNumbers().map(num => (
                  <button key={num} onClick={() => setCurrentPage(num)} className={`page-num ${currentPage === num ? 'active' : ''}`}>{num}</button>
                ))}
                <button disabled={currentPage === totalPages || totalPages === 0} onClick={() => setCurrentPage(currentPage + 1)} className="page-nav">Next</button>
                <button disabled={currentPage === totalPages || totalPages === 0} onClick={() => setCurrentPage(totalPages)} className="page-nav">Last</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default R12_1;