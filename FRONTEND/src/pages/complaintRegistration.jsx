import React, { useState } from "react";
import "../styles/complaintRegistration.css";
import ComplaintDetails from "./ComplaintDetails";
import { useNavigate } from "react-router-dom";



/* ================= STEP WIZARD COMPONENT ================= */
function StepWizard({ currentStep }) {
    const steps = [
        "Complaint Registration",
        "Complaint Registration Details",
        "Preview",
        "Payment",
        "Acknowledgement",
    ];

    return (
        <div className="complaintReg-stepwizard">
            <div className="complaintReg-stepwizard-row">
                {steps.map((label, index) => {
                    const step = index + 1;
                    return (
                        <div className="complaintReg-stepwizard-step" key={step}>
                            <div
                                className={`complaintReg-step-circle ${currentStep === step ? "active" : ""
                                    }`}
                            >
                                {step}
                            </div>
                            <p>{label}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default function ComplaintRegistration() {
    const navigate = useNavigate();

    const [currentStep, setCurrentStep] = useState(1);

    const [documents, setDocuments] = useState({
        saleAgreement: null,
        feeReceipt: null,
        interimOrder: null,
    });

    const [declaration, setDeclaration] = useState({
        agree1: false,
        agree2: false,
        name: "",
    });

    /* ================= DOWNLOAD FORM (EDITABLE DOC) ================= */
    const downloadForm = (type) => {
        const fileMap = {
            M: "/docx/FORMM.docx",
            N: "/docx/FORMN.docx",
        };

        const link = document.createElement("a");
        link.href = fileMap[type];
        link.setAttribute("download", "");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };



    /* ================= FILE UPLOAD ================= */
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (!files[0]) return;

        if (files[0].type !== "application/pdf") {
            alert("Only PDF files are allowed");
            return;
        }

        if (files[0].size > 70 * 1024 * 1024) {
            alert("File size must be less than 70MB");
            return;
        }

        setDocuments((prev) => ({
            ...prev,
            [name]: files[0],
        }));
    };

    const handleDeclarationChange = (e) => {
        const { name, checked, value } = e.target;
        setDeclaration((prev) => ({
            ...prev,
            [name]: checked ?? value,
        }));
    };

    /* ================= UI ================= */
    return (
        <div className="complaintReg-page-wrapper">
            <div className="complaintReg-container">
                <div className="complaintReg-breadcrumb">
                    <span>You are here : </span>
                    <a href="/">Home</a> / Registration /{" "}
                    <span>Complaint Registration</span>
                </div>

                <h2 className="complaintReg-main-heading">Complaint Registration</h2>

                <StepWizard currentStep={currentStep} />

                {/* STEP 1 */}
                {currentStep === 1 && (
                    <div className="complaintReg-step-box">

                        <h3 className="complaintReg-section-title">General Instructions :</h3>

                        <ol className="complaintReg-instruction-list">
                            <li>Clear the cookies before filling the online form</li>
                            <li>Remove pop-up block from your browser</li>
                            <li>
                                All the documents that are to be uploaded in the application should be in
                                PDF format, self-attested (every page of every document) and should not be
                                password protected.
                            </li>
                            <li>
                                Site best viewed in "Google Chrome (Version 62.0.3202.94)"
                            </li>
                            <li>
                                Fields marked with <span className="complaintReg-required">*</span> are mandatory.
                            </li>
                            <li>
                                The Applicants are hereby informed to submit their application either in{" "}
                                <a
                                    href="#"
                                    className="complaintReg-link-text"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        downloadForm("M");
                                    }}
                                >
                                    Form M
                                </a>{" "}
                                or{" "}
                                <a
                                    href="#"
                                    className="complaintReg-link-text"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        downloadForm("N");
                                    }}
                                >
                                    Form N
                                </a>
                            </li>

                            <li>
                                The Complainant is directed to submit the four sets of hard copies filed
                                along with the documentary evidence by mentioning the application number
                                on the top of it to this Authority.
                            </li>
                            <li>
                                The Complainant is also directed to send the other side copies to this
                                Authority along with the documents filed, which enables this Authority
                                to issue notices as per the provision of RERA Act and AP RERA Rules.
                            </li>
                        </ol>

                        <h3 className="complaintReg-section-title">Guide to fill online registration form :</h3>

                        <ol className="complaintReg-instruction-list">
                            <li>
                                For step by step understanding of filing online application, kindly refer{" "}
                                <span
                                    className="complaintReg-link-text"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => navigate("/guidelinesRegistration")}
                                >
                                    Guidelines for Registration
                                </span>
                                page.
                            </li>
                            <li>
                                List of documents required for complaint registration are fee receipt,
                                agreement for sale, interim order and other supporting documents which
                                are proofs of complaint.
                            </li>
                            <li>
                                Select complaint against – (on whom your are going to give complaint
                                i.e respondent)
                            </li>
                            <li>Select complaint by – (complainant)</li>
                            <li>
                                The entire form is divided to various parts with "Save and Continue"
                                facilities for each part
                            </li>
                        </ol>

                        <div className="complaintReg-footer right">
                            <button
                                className="complaintReg-proceed-btn"
                                onClick={() => setCurrentStep(2)}
                            >
                                Proceed
                            </button>
                        </div>

                    </div>
                )}


                {/* STEP 2 */}
                {currentStep === 2 && (
                    <ComplaintDetails setCurrentStep={setCurrentStep} />
                )}

                {/* STEP 4 */}
                {currentStep === 4 && (
                    <>
                        <h3 className="complaintReg-subheading">Upload Documents</h3>

                        <div className="complaintReg-row">
                            <div className="complaintReg-col">
                                <label>
                                    Agreement for Sale <span className="complaintReg-required">*</span>
                                </label>
                                <input
                                    type="file"
                                    name="saleAgreement"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                />
                            </div>

                            <div className="complaintReg-col">
                                <label>
                                    Fee Receipt <span className="complaintReg-required">*</span>
                                </label>
                                <input
                                    type="file"
                                    name="feeReceipt"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                    </>
                )}

                {/* STEP 5 */}
                {currentStep === 5 && (
                    <>
                        <h3 className="complaintReg-subheading">Declaration</h3>

                        <div className="complaintReg-declaration-box">
                            <label>
                                <input
                                    type="checkbox"
                                    name="agree1"
                                    checked={declaration.agree1}
                                    onChange={handleDeclarationChange}
                                />
                                Complaint is not pending in any court.
                            </label>
                        </div>

                        <div className="complaintReg-declaration-box">
                            <label>
                                <input
                                    type="checkbox"
                                    name="agree2"
                                    checked={declaration.agree2}
                                    onChange={handleDeclarationChange}
                                />
                                I{" "}
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Your Name"
                                    value={declaration.name}
                                    onChange={handleDeclarationChange}
                                    className="complaintReg-inline-input"
                                />{" "}
                                confirm details are correct.
                            </label>

                            <div className="complaintReg-footer">
                                <button className="complaintReg-proceed-btn">
                                    Submit Complaint
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}