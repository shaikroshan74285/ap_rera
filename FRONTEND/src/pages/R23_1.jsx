import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/reportPage.css';
import qprData from '../data/R23_1_Data.json'; // Ensure this matches your JSON filename

const R23_1 = () => {
  // Map to the "Qpr Projects Report" key from your JSON sample
  const allData = qprData["Qpr Projects Report"] || [];
  
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter Logic
  const filteredData = allData.filter(item => 
    Object.values(item).some(val => String(val).toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const getPageNumbers = () => {
    const pages = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  // CSV Export Logic
  const downloadCSV = () => {
    const headers = [
        "S.No.", 
        "APRERA Registration ID", 
        "Project Name", 
        "Place",
        "Project Type",
        "Status",
        "Date of Approval",
        "Expected Date of Completion"
    ];
    const csvContent = [
      headers.join(","),
      ...filteredData.map(r => [
        `"${r["S.No."]}"`, 
        `"${r["APRERA Registration ID"]}"`,
        `"${r["Project Name"]}"`,
        `"${r["Place"].replace(/"/g, '""')}"`, // Handles commas in address
        `"${r["Project Type"]}"`,
        `"${r["Status"]}"`,
        `"${r["Date of Approval"]}"`,
        `"${r["Expected Date of Completion"]}"`
      ].join(","))
    ].join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "QPR_Projects_Report_R23_1.csv";
    link.click();
  };

  return (
    <div className="report-page-wrapper">
      <div className="breadcrumb-blue no-print">
        You are here : <Link to="/" className="text-white underline">Home</Link> / <Link to="/mis-reports" className="text-white underline">MIS Reports</Link> / R23.1 QPR Projects Report
      </div>

      <div className="report-card-container">
        <h2 className="report-title">QPR Projects Report (Quarterly Progress)</h2>

        <div className="table-controls no-print">
          <div className="show-entries">
            Show 
            <select value={itemsPerPage} onChange={(e) => {setItemsPerPage(Number(e.target.value)); setCurrentPage(1);}}>
              <option value={10}>10</option><option value={25}>25</option><option value={50}>50</option>
            </select> entries
          </div>
          <div className="export-search">
            <div className="icons">
              <i className="fas fa-file-excel excel" onClick={downloadCSV} title="Export to Excel"></i>
              <i className="fas fa-file-pdf pdf" onClick={() => window.print()} title="Print PDF"></i>
            </div>
            <div className="search-box">Search: <input type="text" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value); setCurrentPage(1);}} /></div>
          </div>
        </div>

        <table className="rera-report-table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>APRERA Registration ID</th>
              <th>Project Name</th>
              <th>Place</th>
              <th>Type</th>
              <th>Status</th>
              <th>Approval Date</th>
              <th>Completion Date</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? currentItems.map((row, index) => (
              <tr key={index}>
                <td>{row["S.No."]}</td>
                <td className="blue-text font-bold">{row["APRERA Registration ID"]}</td>
                <td className="text-left font-medium">{row["Project Name"]}</td>
                <td className="text-left text-xs" style={{maxWidth: '200px'}}>{row["Place"]}</td>
                <td>{row["Project Type"]}</td>
                <td className="text-green-700 font-bold">{row["Status"]}</td>
                <td>{row["Date of Approval"]}</td>
                <td className="blue-text">{row["Expected Date of Completion"]}</td>
              </tr>
            )) : (
              <tr><td colSpan="8" style={{padding: '20px', textAlign: 'center'}}>No records found</td></tr>
            )}
          </tbody>
        </table>

        {/* Pagination Footer */}
        <div className="pagination-footer no-print">
          <div className="pagination-info">Showing {filteredData.length > 0 ? indexOfFirstItem + 1 : 0} to {Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} entries</div>
          <div className="pagination-buttons">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(1)} className="page-nav">First</button>
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="page-nav">Prev</button>
            {getPageNumbers().map(num => (
              <button key={num} onClick={() => setCurrentPage(num)} className={`page-num ${currentPage === num ? 'active' : ''}`}>{num}</button>
            ))}
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} className="page-nav">Next</button>
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(totalPages)} className="page-nav">Last</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default R23_1;