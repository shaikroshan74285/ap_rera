import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/reportPage.css';

// Import both JSON files
import agentData from '../data/R16_1_Agent.json';
import projectData from '../data/R16_1_Project.json';

const R16_1 = () => {
  const [selectedType, setSelectedType] = useState('');
  const [reportType, setReportType] = useState(null); 
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Handle "Get Details" click
  const handleGetDetails = () => {
    if (selectedType) {
      setReportType(selectedType);
      setCurrentPage(1);
    } else {
      alert("Please select an Application Type first.");
    }
  };

  // Get data based on selection
  const rawData = reportType === 'agent' 
    ? agentData["Application Initiated Report agent"] 
    : reportType === 'project' 
    ? projectData["Application Initiated Report project"] 
    : [];

  // Filter Logic
  const filteredData = rawData.filter(item => 
    Object.values(item).some(val => String(val).toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Advanced Pagination Logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Logic to show a window of page numbers (e.g., 2 before and 2 after current)
  const getPageNumbers = () => {
    const pages = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  const downloadCSV = () => {
    const headers = reportType === 'agent' 
      ? ["S.No.", "Application No", "Agent Type", "Place", "Status"]
      : ["S.No.", "Application No", "Promoter Name", "Project Name", "Build Plan Number", "Place", "Status"];
    
    const csvContent = [
      headers.join(","),
      ...filteredData.map(r => reportType === 'agent' 
        ? [r["S.No."], r["Application No"], r["Agent Type"], `"${r["Place"]}"`, r["Status"]].join(",")
        : [r["S.No."], r["Application No"], `"${r["Promoter Name"]}"`, `"${r["Project Name"]}"`, r["Build Plan Number"], `"${r["Place"]}"`, r["Status"]].join(",")
      )
    ].join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `R16_1_${reportType}_Report.csv`;
    link.click();
  };

  return (
    <div className="report-page-wrapper">
      <div className="breadcrumb-blue no-print">
        You are here : <Link to="/" className="text-white underline">Home</Link> / <Link to="/mis-reports" className="text-white underline">MIS Reports</Link> / R16.1 Application Initiated Report
      </div>

      <div className="report-card-container">
        <h2 className="report-title-left">R16.1 Application Initiated Report</h2>
        
        {/* Filter Section */}
        <div className="filter-section no-print" style={{ display: 'flex', alignItems: 'flex-end', gap: '20px', marginBottom: '30px' }}>
          <div className="input-group">
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Application Type<span style={{ color: 'red' }}>*</span>
            </label>
            <select 
              className="filter-select" 
              value={selectedType} 
              onChange={(e) => setSelectedType(e.target.value)}
              style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '250px' }}
            >
              <option value="">Select</option>
              <option value="agent">Agent Registration</option>
              <option value="project">Project Registration</option>
            </select>
          </div>
          <button className="get-details-btn" onClick={handleGetDetails}>
            Get Details
          </button>
        </div>

        {reportType && (
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
                {reportType === 'agent' ? (
                  <tr>
                    <th>S.No.</th>
                    <th>Application No</th>
                    <th>Agent Type</th>
                    <th>Place</th>
                    <th>Status</th>
                  </tr>
                ) : (
                  <tr>
                    <th>S.No.</th>
                    <th>Application No</th>
                    <th>Promoter Name</th>
                    <th>Project Name</th>
                    <th>Build Plan Number</th>
                    <th>Place</th>
                    <th>Status</th>
                  </tr>
                )}
              </thead>
              <tbody>
                {currentItems.length > 0 ? currentItems.map((row, index) => (
                  <tr key={index}>
                    <td>{row["S.No."]}</td>
                    <td className="blue-text font-bold">{row["Application No"]}</td>
                    {reportType === 'agent' ? (
                      <>
                        <td>{row["Agent Type"]}</td>
                        <td className="text-left text-sm">{row["Place"]}</td>
                      </>
                    ) : (
                      <>
                        <td className="text-left">{row["Promoter Name"]}</td>
                        <td className="text-left">{row["Project Name"]}</td>
                        <td>{row["Build Plan Number"]}</td>
                        <td className="text-left text-sm">{row["Place"]}</td>
                      </>
                    )}
                    <td className="font-bold" style={{ color: '#007bff' }}>{row["Status"]}</td>
                  </tr>
                )) : (
                  <tr><td colSpan={reportType === 'agent' ? 5 : 7} style={{padding: '20px', textAlign: 'center'}}>No records found</td></tr>
                )}
              </tbody>
            </table>

            {/* Comprehensive Pagination Footer */}
            <div className="pagination-footer no-print">
              <div className="pagination-info">
                Showing {filteredData.length > 0 ? indexOfFirstItem + 1 : 0} to {Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} entries
              </div>
              <div className="pagination-buttons">
                <button 
                  disabled={currentPage === 1} 
                  onClick={() => setCurrentPage(1)} 
                  className="page-nav"
                >First</button>
                <button 
                  disabled={currentPage === 1} 
                  onClick={() => setCurrentPage(currentPage - 1)} 
                  className="page-nav"
                >Prev</button>
                
                {getPageNumbers().map(num => (
                  <button 
                    key={num} 
                    onClick={() => setCurrentPage(num)} 
                    className={`page-num ${currentPage === num ? 'active' : ''}`}
                  >
                    {num}
                  </button>
                ))}

                <button 
                  disabled={currentPage === totalPages || totalPages === 0} 
                  onClick={() => setCurrentPage(currentPage + 1)} 
                  className="page-nav"
                >Next</button>
                <button 
                  disabled={currentPage === totalPages || totalPages === 0} 
                  onClick={() => setCurrentPage(totalPages)} 
                  className="page-nav"
                >Last</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default R16_1;