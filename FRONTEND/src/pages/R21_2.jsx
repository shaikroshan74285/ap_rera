import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/reportPage.css';
import timeTakenData from '../data/R21_2_Data.json'; // Ensure filename matches your JSON

const R21_2 = () => {
  // Map to the "Agent Application wise time tak" key from your JSON sample
  const allData = timeTakenData["Agent Application wise time tak"] || [];
  
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
    // Due to high number of columns, we map them carefully
    const headers = [
        "S.No", "Application No", "Agent Name", "Initiation Time", 
        "S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10",
        "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10",
        "Approved Date", "Total Scrutiny", "Total Agent Time", "Total Time"
    ];
    
    const csvContent = [
      headers.join(","),
      ...filteredData.map(r => [
        `"${r["S.No"]}"`, 
        `"${r["Application No"]}"`,
        `"${r["Agent Name"]}"`,
        `"${r["Time taken to submit application (Payment date to Initiated date )"]}"`,
        `"${r["Scrutiny - S1 Days/Hours"]}"`, `"${r["Scrutiny - S2 Days/Hours"]}"`,
        `"${r["Scrutiny - S3 Days/Hours"]}"`, `"${r["Scrutiny - S4 Days/Hours"]}"`,
        `"${r["Scrutiny - S5 Days/Hours"]}"`, `"${r["Scrutiny - S6 Days/Hours"]}"`,
        `"${r["Scrutiny - S7 Days/Hours"]}"`, `"${r["Scrutiny - S8 Days/Hours"]}"`,
        `"${r["Scrutiny - S9 Days/Hours"]}"`, `"${r["Scrutiny - S10 Days/Hours"]}"`,
        `"${r["Time taken to submit shortfall documents by Agent - D1 Days/Hours"]}"`,
        `"${r["Time taken to submit shortfall documents by Agent - D2 Days/Hours"]}"`,
        `"${r["Time taken to submit shortfall documents by Agent - D3 Days/Hours"]}"`,
        `"${r["Approved date"]}"`,
        `"${r["Total no of Days/Hours to scrutiny"]}"`,
        `"${r["Total no of Days/Hours application with Agent"]}"`,
        `"${r["Total Time"]}"`
      ].join(","))
    ].join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Agent_Time_Taken_Report_R21_2.csv";
    link.click();
  };

  return (
    <div className="report-page-wrapper">
      <div className="breadcrumb-blue no-print">
        You are here : <Link to="/" className="text-white underline">Home</Link> / <Link to="/mis-reports" className="text-white underline">MIS Reports</Link> / R21.2 Agent Application Wise Time Taken
      </div>

      <div className="report-card-container">
        <h2 className="report-title">Agent Application Wise Time Taken Report</h2>

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

        {/* Added overflow-x-auto for the wide table */}
        <div className="table-responsive" style={{ overflowX: 'auto' }}>
          <table className="rera-report-table min-w-full">
            <thead>
              <tr className="bg-blue-100">
                <th rowSpan="2">S.No</th>
                <th rowSpan="2">Application No</th>
                <th rowSpan="2">Agent Name</th>
                <th rowSpan="2" style={{minWidth: '150px'}}>Initial Submission</th>
                <th colSpan="5">Scrutiny Stages (S1 - S5)</th>
                <th colSpan="5">Shortfall Stages (D1 - D5)</th>
                <th rowSpan="2">Approved Date</th>
                <th rowSpan="2">Total Scrutiny</th>
                <th rowSpan="2">Total Agent</th>
                <th rowSpan="2">Total Time</th>
              </tr>
              <tr className="bg-blue-50 text-xs">
                <th>S1</th><th>S2</th><th>S3</th><th>S4</th><th>S5</th>
                <th>D1</th><th>D2</th><th>D3</th><th>D4</th><th>D5</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? currentItems.map((row, index) => (
                <tr key={index}>
                  <td>{row["S.No"]}</td>
                  <td className="blue-text font-bold">{row["Application No"]}</td>
                  <td className="text-left" style={{minWidth: '200px'}}>{row["Agent Name"]}</td>
                  <td>{row["Time taken to submit application (Payment date to Initiated date )"]}</td>
                  {/* Scrutiny S1-S5 */}
                  <td>{row["Scrutiny - S1 Days/Hours"]}</td>
                  <td>{row["Scrutiny - S2 Days/Hours"]}</td>
                  <td>{row["Scrutiny - S3 Days/Hours"]}</td>
                  <td>{row["Scrutiny - S4 Days/Hours"]}</td>
                  <td>{row["Scrutiny - S5 Days/Hours"]}</td>
                  {/* Shortfall D1-D5 */}
                  <td>{row["Time taken to submit shortfall documents by Agent - D1 Days/Hours"]}</td>
                  <td>{row["Time taken to submit shortfall documents by Agent - D2 Days/Hours"]}</td>
                  <td>{row["Time taken to submit shortfall documents by Agent - D3 Days/Hours"]}</td>
                  <td>{row["Time taken to submit shortfall documents by Agent - D4 Days/Hours"]}</td>
                  <td>{row["Time taken to submit shortfall documents by Agent - D5 Days/Hours"]}</td>
                  
                  <td>{row["Approved date"]}</td>
                  <td className="font-bold">{row["Total no of Days/Hours to scrutiny"]}</td>
                  <td className="font-bold">{row["Total no of Days/Hours application with Agent"]}</td>
                  <td className="blue-text font-bold">{row["Total Time"]}</td>
                </tr>
              )) : (
                <tr><td colSpan="18" style={{padding: '20px', textAlign: 'center'}}>No records found</td></tr>
              )}
            </tbody>
          </table>
        </div>

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

export default R21_2;