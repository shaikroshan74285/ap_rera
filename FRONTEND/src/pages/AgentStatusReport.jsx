import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/reportPage.css';
import agentData from '../data/AgentStatusData.json'; // Ensure path is correct

const AgentStatusReport = () => {
  // Map to the specific key in your JSON
  const allData = agentData["AgentStatusReort "] || [];
  
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [now, setNow] = useState(new Date());

  // Real-time update for countdown
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  /**
   * STRICT PARSER: Corrects the "263 Days" error by manually 
   * extracting Day, Month, and Year from the DD/MM/YYYY string.
   */
  const parseStrictDate = (dateStr) => {
    if (!dateStr || typeof dateStr !== 'string') return null;
    try {
      const parts = dateStr.trim().split(' ');
      const dateParts = parts[0].split('/');
      
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
   * COUNTDOWN LOGIC: Limits to a 30-day span from "Received Date".
   */
  const calculateSLA = (receivedDateStr) => {
    const startDate = parseStrictDate(receivedDateStr);
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

  // CSV Export
  const downloadCSV = () => {
    const headers = ["S.No", "Application No", "Agent Name", "Agent Type", "Submission Date", "Status"];
    const csvContent = [
      headers.join(","),
      ...filteredData.map(r => [
        r["Sl.No"], r["Application No"], `"${r["Agent Name"]}"`, 
        r["Agent Type"], r["Date of Submission"], r["Status"]
      ].join(","))
    ].join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Agent_Status_Report.csv";
    link.click();
  };

  return (
    <div className="report-page-wrapper">
      <div className="breadcrumb-blue no-print">
        You are here : <Link to="/" className="text-white underline">Home</Link> / MIS Reports / R1.2 Agent Status
      </div>

      <div className="report-card-container">
        <h2 className="report-title">R1.2 Status of Application for Agents</h2>

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
              <th>S.No.</th>
              <th>Application No</th>
              <th>Agent Name</th>
              <th>Agent Type</th>
              <th>Date of Submission</th>
              <th>Status</th>
              <th className="sla-header">SLA Count Down</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, index) => {
              const timer = calculateSLA(row["Received Date"]);
              return (
                <tr key={index}>
                  <td>{row["Sl.No"]}</td>
                  <td className="blue-text">{row["Application No"]}</td>
                  <td className="text-left">{row["Agent Name"]}</td>
                  <td>{row["Agent Type"]}</td>
                  <td>{row["Date of Submission"]}</td>
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

export default AgentStatusReport;