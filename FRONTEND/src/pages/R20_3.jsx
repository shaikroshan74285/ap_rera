import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/reportPage.css';
import builtUpData from '../data/R20_3_Data.json'; // Ensure this matches your JSON filename

const R20_3 = () => {
  // Map to the "TotalBuildulpAreaReport" key from your JSON sample
  const allData = builtUpData["TotalBuildulpAreaReport"] || [];
  
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
        "Registered ID", 
        "Project Name", 
        "Promoter Name",
        "Location",
        "Total Built-Up Area"
    ];
    const csvContent = [
      headers.join(","),
      ...filteredData.map(r => [
        `"${r["S.No."]}"`, 
        `"${r["Registered ID"]}"`,
        `"${r["Project Name"]}"`,
        `"${r["Promoter Name"]}"`,
        `"${r["Location"].replace(/"/g, '""')}"`, // Handles semicolons/commas in addresses
        `"${r["Total BuiltUp Area"]}"`
      ].join(","))
    ].join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Total_BuiltUp_Area_Report_R20_3.csv";
    link.click();
  };

  return (
    <div className="report-page-wrapper">
      <div className="breadcrumb-blue no-print">
        You are here : <Link to="/" className="text-white underline">Home</Link> / <Link to="/mis-reports" className="text-white underline">MIS Reports</Link> / R20.3 Total Built-Up Area Report
      </div>

      <div className="report-card-container">
        <h2 className="report-title">Total Built-Up Area Report</h2>

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
              <th>Registered ID</th>
              <th>Project Name</th>
              <th>Promoter Name</th>
              <th>Location</th>
              <th>Total Built-Up Area (sq.mt)</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? currentItems.map((row, index) => (
              <tr key={index}>
                <td>{row["S.No."]}</td>
                <td className="blue-text font-bold">{row["Registered ID"]}</td>
                <td className="text-left">{row["Project Name"]}</td>
                <td className="text-left">{row["Promoter Name"]}</td>
                <td className="text-left text-sm">{row["Location"]}</td>
                <td className="font-bold">{row["Total BuiltUp Area"]}</td>
              </tr>
            )) : (
              <tr><td colSpan="6" style={{padding: '20px', textAlign: 'center'}}>No records found</td></tr>
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

export default R20_3;