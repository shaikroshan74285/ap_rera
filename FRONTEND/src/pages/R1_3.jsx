import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/reportPage.css';
import complaintData from '../data/R1_3_Data.json';

const R1_3 = () => {
  const allData = complaintData["ComplaintStatusReort "] || [];
  
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Helper function to handle scientific notation if the JSON data is numeric
  const formatComplaintNo = (val) => {
    if (!val) return "-";
    // If the value is a number or looks like scientific notation, convert it to a fixed string
    const num = Number(val);
    if (!isNaN(num) && String(val).toLowerCase().includes('e')) {
      return num.toLocaleString('fullwide', {useGrouping:false});
    }
    return String(val);
  };

  const filteredData = allData.filter(item => 
    Object.values(item).some(val => String(val).toLowerCase().includes(searchTerm.toLowerCase()))
  );

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

  const downloadCSV = () => {
    const headers = [
      "S.No.", "Application No", "SR No", "CCP No (As per Form N)", 
      "CP No (As per form M)", "Complaint By", "Complainant Name", 
      "Complaint Against", "Respondent Name", "Status of the Complaint"
    ];
    const csvContent = [
      headers.join(","),
      ...filteredData.map(r => [
        `"${r["Sl.No"]}"`, 
        `'${formatComplaintNo(r["Complaint No"])}`, // Added single quote to prevent Excel from converting back to scientific
        `"-"`, 
        `"-"`, 
        `"-"`, 
        `"${r["Complaint By"]}"`,
        `"${r["Complainant Name"]}"`,
        `"${r["Complaint Against"]}"`,
        `"${r["Respondent Name"] || "-"}"`,
        `"${r["Application Status"]}"`
      ].join(","))
    ].join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Status_Of_Complaints_R1_3.csv";
    link.click();
  };

  return (
    <div className="report-page-wrapper">
      <div className="breadcrumb-blue no-print">
        You are here : <Link to="/" className="text-white">Home</Link> / Reports / Status Of Complaints
      </div>

      <div className="report-card-container">
        <h2 className="report-title-left">Status Of Complaints</h2>

        <div className="table-controls no-print">
          <div className="show-entries">
            Show entries 
            <select value={itemsPerPage} onChange={(e) => {setItemsPerPage(Number(e.target.value)); setCurrentPage(1);}}>
              <option value={10}>10</option><option value={25}>25</option><option value={50}>50</option>
            </select>
          </div>
          <div className="export-search">
            <div className="icons">
              <img src="/assets/excel-icon.png" alt="Excel" className="export-icon" onClick={downloadCSV} title="Export to Excel" style={{width: '30px', cursor: 'pointer'}} />
              <img src="/assets/pdf-icon.png" alt="PDF" className="export-icon" onClick={() => window.print()} title="Print PDF" style={{width: '30px', cursor: 'pointer', marginLeft: '10px'}} />
            </div>
            <div className="search-box">
              Search: <input type="text" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value); setCurrentPage(1);}} />
            </div>
          </div>
        </div>

        <div className="table-responsive" style={{ overflowX: 'auto' }}>
          <table className="rera-report-table custom-ui-table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Application No</th>
                <th>SR No</th>
                <th>CCP No (As per Form N)</th>
                <th>CP No (As per form M)</th>
                <th>Complaint By</th>
                <th>Complainant Name</th>
                <th>Complaint Against</th>
                <th>Respondent Name</th>
                <th>Status of the Complaint</th>
                <th>Next hearing Date</th>
                <th>IA</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? currentItems.map((row, index) => (
                <tr key={index}>
                  <td>{row["Sl.No"]}</td>
                  {/* Updated column to use the formatting helper */}
                  <td>{formatComplaintNo(row["Complaint No"])}</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>{row["Complaint By"]}</td>
                  <td className="text-left">{row["Complainant Name"]}</td>
                  <td>{row["Complaint Against"]}</td>
                  <td className="text-left">{row["Respondent Name"] || "-"}</td>
                  <td>
                    <button className="view-btn">View</button>
                  </td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              )) : (
                <tr><td colSpan="12" className="p-4 text-center">No records found</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination logic remains same */}
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

export default R1_3;