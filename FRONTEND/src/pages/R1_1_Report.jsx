import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/reportPage.css';
import reportData from '../data/R1_1_Data.json';

const R1_1_Report = () => {
  // Map to your new JSON key exactly (note the trailing space in your JSON)
  const allData = reportData["ProjectStatusReort "] || [];
  
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [now, setNow] = useState(new Date());

  // Update clock every second for live countdown
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  /**
   * STRICT PARSER: Solves the "263 Days" error by manually 
   * extracting Day, Month, and Year from the DD/MM/YYYY string.
   */
  const parseStrictDate = (dateStr) => {
    if (!dateStr || typeof dateStr !== 'string') return null;
    try {
      const parts = dateStr.trim().split(' ');
      const dateParts = parts[0].split('/');
      
      // Forces Day/Month/Year logic regardless of browser settings
      const day = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10) - 1; // JS Months are 0-11
      const year = parseInt(dateParts[2], 10);

      let hours = 0, minutes = 0;
      if (parts[1]) {
        const timeParts = parts[1].split(':');
        hours = parseInt(timeParts[0], 10);
        minutes = parseInt(timeParts[1], 10);
        
        if (parts[2]) {
          const ampm = parts[2].toUpperCase();
          if (ampm === 'PM' && hours < 12) hours += 12;
          if (ampm === 'AM' && hours === 12) hours = 0;
        }
      }
      return new Date(year, month, day, hours, minutes);
    } catch (e) { return null; }
  };

  /**
   * COUNTDOWN LOGIC: Limits to a 30-day span from "Receiving Date".
   */
  const calculateSLA = (receivingDateStr) => {
    const startDate = parseStrictDate(receivingDateStr);
    if (!startDate || isNaN(startDate.getTime())) return { d: "00", h: "00", m: "00", s: "00" };

    const targetDate = new Date(startDate);
    targetDate.setDate(startDate.getDate() + 30); // 30-day SLA window
    
    const diff = targetDate - now;

    // Show 00 if the 30-day time span is completed
    if (diff <= 0) return { d: "00", h: "00", m: "00", s: "00" };

    return {
      d: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0'),
      h: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
      m: String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, '0'),
      s: String(Math.floor((diff / 1000) % 60)).padStart(2, '0'),
    };
  };

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

  // Excel CSV Export
  const downloadCSV = () => {
    const headers = ["S.No", "Application No", "Project Name", "Project Status", "Submission Date", "Status"];
    const csvContent = [
      headers.join(","),
      ...filteredData.map(r => [
        r["Sl.No"], r["Application No"], `"${r["Project Name"]}"`, 
        r["ProjectStatus"], r["Date of Submission"], r["Status"]
      ].join(","))
    ].join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "AP_RERA_Report.csv";
    link.click();
  };

  return (
    <div className="report-page-wrapper">
      <div className="breadcrumb-blue no-print">
        You are here : <Link to="/" className="text-white underline">Home</Link> / MIS Reports / R1.1
      </div>

      <div className="report-card-container">
        <h2 className="report-title">Project Status Report</h2>

        <div className="table-controls no-print">
          <div className="show-entries">
            Show <select value={itemsPerPage} onChange={(e) => {setItemsPerPage(Number(e.target.value)); setCurrentPage(1);}}>
              <option value={10}>10</option><option value={25}>25</option><option value={50}>50</option>
            </select> entries
          </div>
          <div className="export-search">
            <div className="icons">
              <i className="fas fa-file-excel excel" onClick={downloadCSV}></i>
              <i className="fas fa-file-pdf pdf" onClick={() => window.print()}></i>
            </div>
            <div className="search-box">Search: <input type="text" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value); setCurrentPage(1);}} /></div>
          </div>
        </div>

        <table className="rera-report-table">
          <thead>
            <tr>
              <th>S.No.</th><th>Application No</th><th>Project Name</th><th>Project Status</th><th>Date of Submission</th><th>Promoter Name</th><th>Status</th><th className="sla-header">SLA Count Down</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, index) => {
              const timer = calculateSLA(row["Receiving Date"]);
              return (
                <tr key={index}>
                  <td>{row["Sl.No"]}</td>
                  <td className="blue-text">{row["Application No"]}</td>
                  <td className="text-left">{row["Project Name"]}</td>
                  <td>{row["ProjectStatus"]}</td>
                  <td>{row["Date of Submission"]}</td>
                  <td className="text-left">{row["Promoter Name"]}</td>
                  <td className="text-left">{row["Status"]}</td>
                  <td>
                    <div className="countdown-container">
                      <div className="time-block"><span>{timer.d}</span><small>Days</small></div><span className="separator">:</span>
                      <div className="time-block"><span>{timer.h}</span><small>Hours</small></div><span className="separator">:</span>
                      <div className="time-block"><span>{timer.m}</span><small>Mins</small></div><span className="separator">:</span>
                      <div className="time-block"><span>{timer.s}</span><small>Secs</small></div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Multi-page Pagination Footer */}
        <div className="pagination-footer no-print">
          <div className="pagination-info">Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} entries</div>
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

export default R1_1_Report;