import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/reportPage.css';
import financialData from '../data/R13_6_Data.json'; // Ensure this path matches your setup

const DistrictFinancialProjectReport = () => {
  // Map to the "Sheet1" key provided in your JSON sample
  const allData = financialData["Sheet1"] || [];
  
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
        "District Name", 
        "No. Of Projects Received", 
        "Approved", 
        "Rejected", 
        "Under process", 
        "Promoter-(shortfall)", 
        "Total Amount"
    ];
    const csvContent = [
      headers.join(","),
      ...filteredData.map(r => [
        r["S.No."], 
        r["District Name"],
        r["No. Of Projects Received"],
        r["Approved"],
        r["Rejected"],
        r["Under process"],
        r["Promoter-(shortfall)"],
        r["Total Amount"]
      ].join(","))
    ].join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "District_Financial_Project_Report_R13_6.csv";
    link.click();
  };

  return (
    <div className="report-page-wrapper">
      <div className="breadcrumb-blue no-print">
        You are here : <Link to="/" className="text-white underline">Home</Link> / <Link to="/mis-reports" className="text-white underline">MIS Reports</Link> / R13.6 District Wise Financial Report (Projects)
      </div>

      <div className="report-card-container">
        <h2 className="report-title">District Wise Financial Report (Projects)</h2>

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
              <th>District Name</th>
              <th>No. Of Projects Received</th>
              <th>Approved</th>
              <th>Rejected</th>
              <th>Under process</th>
              <th>Promoter-(shortfall)</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? currentItems.map((row, index) => (
              <tr key={index}>
                <td>{row["S.No."]}</td>
                <td className="text-left">{row["District Name"]}</td>
                <td>{row["No. Of Projects Received"]}</td>
                <td>{row["Approved"]}</td>
                <td>{row["Rejected"]}</td>
                <td>{row["Under process"]}</td>
                <td>{row["Promoter-(shortfall)"]}</td>
                <td className="blue-text">{row["Total Amount"]}</td>
              </tr>
            )) : (
              <tr><td colSpan="8" style={{padding: '20px', textAlign: 'center'}}>No records found</td></tr>
            )}
          </tbody>
        </table>

        {/* Multi-page Pagination Footer */}
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

export default DistrictFinancialProjectReport;