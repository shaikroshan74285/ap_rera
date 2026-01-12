import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/reportPage.css';
import agentFeedbackData from '../data/R15_2_Data.json'; // Ensure this matches your JSON filename

const R15_2 = () => {
  // Map to the "Status of Application for Agent" key from your JSON sample
  const allData = agentFeedbackData["Status of Application for Agent"] || [];
  
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter Logic (Searches across all columns)
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

  // CSV Export Logic (Updated with Agent specific headers)
  const downloadCSV = () => {
    const headers = [
        "S.No.", 
        "Name", 
        "Mobile No", 
        "Feedback Type", 
        "Email ID", 
        "Message", 
        "Feedback Date"
    ];
    const csvContent = [
      headers.join(","),
      ...filteredData.map(r => [
        `"${r["S.No."]}"`, 
        `"${r["Name"]}"`,
        `"${r["Mobile No"]}"`,
        `"${r["Feedback Type"]}"`,
        `"${r["Email ID"]}"`,
        `"${r["Message"].replace(/"/g, '""')}"`, // Handle quotes in messages
        `"${r["Feedback Date"]}"`
      ].join(","))
    ].join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Status_of_Application_for_Agent_R15_2.csv";
    link.click();
  };

  return (
    <div className="report-page-wrapper">
      <div className="breadcrumb-blue no-print">
        You are here : <Link to="/" className="text-white underline">Home</Link> / <Link to="/mis-reports" className="text-white underline">MIS Reports</Link> / R15.2 Status of Application for Agent
      </div>

      <div className="report-card-container">
        <h2 className="report-title">Status of Application for Agent</h2>

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
              <th>Name</th>
              <th>Mobile No</th>
              <th>Feedback Type</th>
              <th>Email ID</th>
              <th>Message</th>
              <th>Feedback Date</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? currentItems.map((row, index) => (
              <tr key={index}>
                <td>{row["S.No."]}</td>
                <td className="text-left font-bold">{row["Name"]}</td>
                <td>{row["Mobile No"]}</td>
                <td>{row["Feedback Type"]}</td>
                <td>{row["Email ID"]}</td>
                <td className="text-left" style={{maxWidth: '300px'}}>{row["Message"]}</td>
                <td className="blue-text">{row["Feedback Date"]}</td>
              </tr>
            )) : (
              <tr><td colSpan="7" style={{padding: '20px', textAlign: 'center'}}>No records found</td></tr>
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

export default R15_2;