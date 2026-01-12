import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/reportPage.css';
import soldInfoData from '../data/R20_2_Data.json'; // Ensure this matches your JSON filename

const R20_2 = () => {
  // Map to the "SoldInformationReport" key from your JSON sample
  const allData = soldInfoData["SoldInformationReport"] || [];
  
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
        "Total Units",
        "Units Available",
        "Units Sold"
    ];
    const csvContent = [
      headers.join(","),
      ...filteredData.map(r => [
        `"${r["S.No."]}"`, 
        `"${r["Registered ID"]}"`,
        `"${r["Project Name"]}"`,
        `"${r["Total No of Flats/Villas/Units"]}"`,
        `"${r["Total no of Flats/Villas/Units available for Sale"]}"`,
        `"${r["Toal no of Flats/Villas/Units sold"]}"` // Matches the typo in JSON "Toal"
      ].join(","))
    ].join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Sold_Information_Report_R20_2.csv";
    link.click();
  };

  return (
    <div className="report-page-wrapper">
      <div className="breadcrumb-blue no-print">
        You are here : <Link to="/" className="text-white underline">Home</Link> / <Link to="/mis-reports" className="text-white underline">MIS Reports</Link> / R20.2 Sold Information Report
      </div>

      <div className="report-card-container">
        <h2 className="report-title">Sold Information Report</h2>

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
              <th>Total Units</th>
              <th>Units Available</th>
              <th>Units Sold</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? currentItems.map((row, index) => (
              <tr key={index}>
                <td>{row["S.No."]}</td>
                <td className="blue-text font-bold">{row["Registered ID"]}</td>
                <td className="text-left">{row["Project Name"]}</td>
                <td>{row["Total No of Flats/Villas/Units"]}</td>
                <td className="text-green-600 font-bold">{row["Total no of Flats/Villas/Units available for Sale"]}</td>
                <td className="text-red-600 font-bold">{row["Toal no of Flats/Villas/Units sold"]}</td>
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

export default R20_2;