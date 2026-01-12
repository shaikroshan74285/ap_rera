import React, { useState } from 'react';
import '../styles/MisReports.css'; 

const MisReports = () => {
  // State to track which report is currently expanded
  const [expandedId, setExpandedId] = useState(null);

  const toggleReport = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const reportData = [
    {
      id: 'R1', title: 'General Report',
      subItems: [
        { label: 'R1.1 - Status of Application for Projects', link: '/reports/R1.1' },
        { label: 'R1.2 - Status of Application for Agents', link: '/reports/R1.2' },
        { label: 'R1.3 - Status of Complaints', link: '#' },
      ]
    },
    {
      id: 'R2', title: 'Special reports',
      subItems: [
        { label: 'R2.1 - Assembly constituency wise', link: '#' },
        { label: 'R2.2 - Parliament constituency wise', link: '#' },
        { label: 'R2.3 - CM Dash Board Reports', link: '#' },
      ]
    },
    {
      id: 'R3', title: 'Type of housing',
      subItems: [
        { label: 'R3.1 - Apartments', link: '/reports/R3.1' },
        { label: 'R3.2 - Group housing', link: '#' },
        { label: 'R3.3 - GDS', link: '#' },
        { label: 'R3.4 - Commercial', link: '/reports/R3.4' },
        { label: 'R3.5 - Mixed', link: '/reports/R3.5' },
        { label: 'R3.6 - Layouts-for Plot Development', link: '/reports/R3.6' },
        { label: 'R3.7 - Layouts-for Plots & Houses', link: '/reports/R3.7' },
      ]
    },
    {
      id: 'R4', title: 'Tentative Reports',
      subItems: [
        { label: 'R4.1 - Approved Projects', link: '/reports/R4.1' },
        { label: 'R4.2 - Approved Agents', link: '/reports/R4.2' },
      ]
    },
    {
      id: 'R5', title: 'Local Body Reports',
      subItems: [
        { label: 'R5.1 - APCRDA', link: '/reports/R5.1' },
        { label: 'R5.2 - UDA(8) wise', link: '/reports/R5.2' },
        { label: 'R5.3 - ULB(110) wise', link: '/reports/R5.3' },
        { label: 'R5.4 - DTCP', link: '/reports/R5.4' },
      ]
    },
    {
      id: 'R6', title: 'Daily alerts / reports',
      subItems: [
        { label: 'R6.1 - Fund availability', link: '#' },
        { label: 'R6.2 - Abstract of Application status', link: '#' },
        { label: 'R6.3 - Complaint pending status', link: '#' },
        { label: 'R6.4 - Pending Applications against officer', link: '/reports/R6.4' },
      ]
    },
    { id: 'R7', title: 'Project Progress Report', subItems: [{label: 'R7.1 - Gant Charts', link: '#'}] },
    { id: 'R8', title: 'Agent Progress Report', subItems: [{label: 'R8.1 - Area sold', link: '#'}] },
    { id: 'R9', title: 'Category wise Reports', 
      subItems: [
        {label: 'R9.1 - Upto 1000 sq.m', link: '/reports/approved-detailed'},
        {label: 'R9.2 - Abstract of Application status', link: '/reports/R9.2' },
        { label: 'R9.3 - Project Detailed Report', link: '/reports/R9.3' }
      ] },
    { id: 'R10', title: 'Fee -Reconciliation report', subItems: [{label: 'R10.1 - Project wise', link: '#'}] },
    { id: 'R11', title: 'Group Housing by Govt', subItems: [{label: 'R11.1 - Project wise', link: '#'}] },
    { id: 'R12', title: 'Region Wise Reports', subItems: [{label: 'R12.1 - Visakhapatnam', link: '#'}] },
    { id: 'R13', title: 'Financial Reports', 
      subItems: [
        {label: 'R13.1 - Fee Received', link: '#'},
        {label: 'R13.2 - Fee Received', link: '#'},
        {label: 'R13.3 - Fee Received', link: '#'},
        {label: 'R13.4 - Fee Received', link: '#'},
        { label: 'R13.5 - District Wise Financial (Agents)', link: '/reports/R13.5' },
        { label: 'R13.6 - District Wise Financial (Projects)', link: '/reports/R13.6' }
      ] },
    { id: 'R14', title: 'Registers', 
      subItems: [
        {label: 'R14.1 - Form Q', link: '#'}
      ] },
    { id: 'R15', title: 'Rating by User - Reports', 
      subItems: [
        {label: 'R15.1 - Feedback', link: '#'},
        { label: 'R15.2 - Status of Application for Agent', link: '/reports/R15.2' },

      ] },
    { id: 'R16', title: 'Application Initiated - Reports', subItems: [{label: 'R16.1 - Initiated Report', link: '#'}] },
    { id: 'R17', title: 'Login wise Pending Reports', 
      subItems: [
        {label: 'R17.1 - Pending Projects', link: '/reports/R17.1'},
        { label: 'R17.2 - Pending Agents Report', link: '/reports/R17.2' }
      ] },
    { id: 'R18', title: 'Third Party Scrutinized Applications Reports', subItems: [{label: 'R18.1 - Projects', link: '#'}] },
    { id: 'R19', title: 'DPMS Reports', subItems: [{label: 'R19.1 - Eligible Projects', link: '#'}] },
    { id: 'R20', title: 'Micro Reports', 
      subItems: [
        { label: 'R20.1 - Dwelling Units (Flats / Villas)', link: '/reports/R20.1' },
        { label: 'R20.2 - Sold Information Report', link: '/reports/R20.2' },
        { label: 'R20.3 - Total Built-Up Area Report', link: '/reports/R20.3' }
      ] },
    { id: 'R21', title: 'Application Wise Time Taken Report', 
      subItems: [
        {label: 'R21.1 - Project', link: '#'},
        { label: 'R21.2 - Agent Application Wise Time Taken', link: '/reports/R21.2' }
      ] },
    { id: 'R22', title: 'Validity Reports', 
      subItems: [
        {label: 'R22.1 - Project', link: '#'},
        { label: 'R22.2 - Agent Renewal Countdown', link: '/reports/R22.2' }
      ] },
    { id: 'R23', title: 'Quarterly Updates Reports', 
      subItems: [{label: 'R23.1 - Project', link: '/reports/R23.1'}

      ] },
    { id: 'R24', title: 'Project Closure Report', 
      subItems: [
        {label: 'R24.1 - Application Status', link: '/reports/R24.1'}
      ] },
  ];

  return (
    <div className="mis-container">
      <div className="breadcrumb-bar">
        You are here : <span className="link">Home</span> / MIS Reports
      </div>

      <div className="reports-content-box">
        <h2 className="page-title">MIS Reports</h2>
        
        <div className="reports-grid">
          {reportData.map((report) => (
            <div key={report.id} className="report-wrapper">
              {/* Clickable Card */}
              <div 
                className={`report-card ${expandedId === report.id ? 'active' : ''}`}
                onClick={() => toggleReport(report.id)}
              >
                <i className={`fas ${expandedId === report.id ? 'fa-minus' : 'fa-plus'} icon-blue`}></i>
                <span className="report-text">
                  {report.id} - {report.title}
                </span>
              </div>

              {/* Sub-items list appearing inside the grid column */}
              {expandedId === report.id && (
                <ul className="sub-list">
                  {report.subItems.map((sub, idx) => (
                    <li key={idx} className="sub-item">
                      <a href={sub.link}>{sub.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MisReports;