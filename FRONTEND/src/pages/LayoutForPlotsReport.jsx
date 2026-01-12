import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/reportPage.css';
import layoutData from '../data/LayoutForPlotsData.json'; // Ensure this path is correct

const LayoutForPlotsReport = () => {
  // Map to the specific key in your JSON (noting the trailing space provided in sample)
  const allData = layoutData["Housing Type-R3.6 - Layout-for "] || [];
  
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter Logic based on search input
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

  // CSV Export Logic (No external libraries required)
  const downloadCSV = () => {
    const headers = ["S.No.", "Project Type", "Application No", "Project Name", "Project Status", "Name Type", "Name", "Application Status", "Payment Date"];
    const csvContent = [
      headers.join(","),
      ...filteredData.map(r => [
        r["S.No."], 
        r["Project Type"], 
        r["Application No"], 
        `"${r["Project Name"]}"`, 
        r["Project Status"], 
        r["Name Type"], 
        `"${r["Name"]}"`, 
        r["Application Status"], 
        r["Payment Date"]
      ].join(","))
    ].join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Layout_Plots_Report_R3_6.csv";
    link.click();
  };

  return (
    <div className="report-page-wrapper">
      <div className="breadcrumb-blue no-print">
        You are here : <Link to="/" className="text-white underline">Home</Link> / <Link to="/mis-reports" className="text-white underline">MIS Reports</Link> / Type of Housing - R3.6 - Layouts-for Plot Development Report
      </div>

      <div className="report-card-container">
        <h2 className="report-title">Type Of Housing - R3.6 - Layouts-for Plot Development Report</h2>

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
              <th>Project Type</th>
              <th>Application No</th>
              <th>Project Name</th>
              <th>Project Status</th>
              <th>Name Type</th>
              <th>Name</th>
              <th>Application Status</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? currentItems.map((row, index) => (
              <tr key={index}>
                <td>{row["S.No."]}</td>
                <td>{row["Project Type"]}</td>
                <td className="blue-text">{row["Application No"]}</td>
                <td className="text-left">{row["Project Name"]}</td>
                <td>{row["Project Status"]}</td>
                <td>{row["Name Type"]}</td>
                <td className="text-left">{row["Name"]}</td>
                <td>{row["Application Status"]}</td>
                <td>{row["Payment Date"]}</td>
              </tr>
            )) : (
              <tr><td colSpan="9" style={{padding: '20px'}}>No records found</td></tr>
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

export default LayoutForPlotsReport;