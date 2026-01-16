import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Layout from "./layouts/layout";

// pages
import Home from "./pages/home";
import About from "./pages/About";
// import Aprea from "./pages/Aprea";
import Notifications from "./pages/Notification";
import Registration from "./pages/Registration";
import Reports from "./pages/Reports";
import Registered from "./pages/Registered";
import Judgements from "./pages/Judgement";
import KnowledgeHub from "./pages/KnowledgeHub";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
import Apreat from "./pages/apreat";
import Recruitment from "./pages/recruitment";
import Rti from "./pages/rti";
import Promotregistration from "./pages/promotregistration";
import GuidelinesRegistration from "./pages/guidelinesRegistration";
import FeeCalculator from "./pages/feeCalculater";
import CidcandAPRERAJointNotifications from "./pages/CidcandAPRERAJointNotifications";
import Usermanual from "./pages/usermanual";
import VideoTutorial from "./pages/videoTutorial";
import MobileApp from "./pages/mobileapp";
import ProjectRegistration from "./pages/ProjectRegistration";
import Guidelines from "./pages/Guidelines";
import ProjectWizard from "./pages/ProjectWizard";
import Race from "./pages/Race";
import JudgementHub from "./pages/JudgementHub";
import PressRelease from "./pages/PressRelease";
import Testimonials from "./pages/Testimonials";
import GradingOfAgents from "./pages/GradingOfAgents";
import ChronologyOfEvents from "./pages/ChronologyOfEvents"
import AdvertisementGuidelines from "./pages/AdvertisementGuidelines";
import OurLeadership from "./pages/OurLeadership";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HyperlinkingPolicy from "./pages/HyperlinkingPolicy";
import CopyrightPolicy from "./pages/CopyrightPolicy";
import Disclaimer from "./pages/Disclaimer";
import Accessibility from "./pages/Accessibility";
import TermsConditions from "./pages/TermsConditions";
import RateWebsite from "./pages/RateWebsite";
import AgentRegistration from "./pages/AgentRegistration";
import Guidelines2 from "./pages/Guidelines2";
import AgentDetailNew from "./pages/AgentDetailNew";
import AgentDetailExisting from "./pages/AgentDetailExisting";
import ApplicantDetails from "./pages/ApplicantDetails";
import Aprera from "./pages/Aprea";
import Organogram from "./pages/organogram";
import OurServices from "./pages/ourservices";
import Statistics from "./pages/statistics";
import GOINotifications from "./pages/GOINotifications";
import GoapNotifications from "./pages/GoapNotifications";
import AuthorityNotifications from "./pages/AuthorityNotifications";
import Project from "./pages/projects";
import Agents from "./pages/Agents";
import ComplaintOrders from "./pages/ComplaintOrders";
import EvolutionOfRera from "./pages/evolutionofrera";
import AudioVisualGallery from "./pages/AudioVisualGallery";
import TaskVsTime from "./pages/taskvstime";
import VendorDataBase from "./pages/vendordatabase";
import Acf from "./pages/ACF";
import ComplaintRegistration from "./pages/complaintRegistration";
import GradingOfPromoters from "./pages/GradingOfPromotors";
import FormsDownload from "./pages/formsdownload";
import UploadDocuments from "./pages/UploadDocuments";
import Preview from "./pages/Preview";
import Payment from "./pages/Payment";
import ContactUs from "./pages/contactus";

//// new imports for mis reports
import MisReports from './pages/MisReports';
import R1_1_Report from './pages/R1_1_Report';
import AgentStatusReport from './pages/AgentStatusReport';
import ApartmentsReport from './pages/ApartmentsReport';
import CommercialReport from './pages/CommercialReport';
import MixedReport from './pages/MixedReport';
import LayoutForPlotsReport from './pages/LayoutForPlotsReport';
import LayoutForPlotsBuildingsReport from './pages/LayoutForPlotsBuildingsReport';
import ApprovedProjectReport from './pages/ApprovedProjectReport';
import ApprovedAgentReport from './pages/ApprovedAgentReport';
import ApcrdaReport from './pages/ApcrdaReport';
import UdaReport from './pages/UdaReport';
import UlbReport from './pages/UlbReport';
import DtcpReport from './pages/DtcpReport';
import OfficerPendingReport from './pages/OfficerPendingReport';
import ApprovedProjectReportSheet from './pages/ApprovedProjectReportSheet';
import R9_2_Report from './pages/R9_2_Report';
import R9_3_Report from './pages/R9_3_Report';
import DistrictFinancialAgentReport from './pages/DistrictFinancialAgentReport';
import DistrictFinancialProjectReport from './pages/DistrictFinancialProjectReport';
import R15_2 from './pages/R15_2';
import R17_1 from './pages/R17_1';
import R17_2 from './pages/R17_2';
import R20_1 from './pages/R20_1';
import R20_2 from './pages/R20_2';
import R20_3 from './pages/R20_3';
import R21_2 from './pages/R21_2';
import R22_2 from './pages/R22_2';
import R23_1 from './pages/R23_1';
import R24_1 from './pages/R24_1';
import R1_3 from './pages/R1_3';
import R2_1 from './pages/R2_1';
import R2_2 from './pages/R2_2';
import R2_3 from './pages/R2_3';
import R3_2 from './pages/R3_2';
import R3_3 from './pages/R3_3';
import R6_1 from './pages/R6_1';
import R6_2_1 from './pages/R6_2_1';
import R6_2_2 from './pages/R6_2_2';
import R6_2_3 from './pages/R6_2_3';
import R6_3 from './pages/R6_3';
import R7_1 from './pages/R7_1';
import R7_3 from './pages/R7_3';
import R7_2 from './pages/R7_2';
import R8_1 from './pages/R8_1';
import R8_2 from './pages/R8_2';
import R10_1 from './pages/R10_1';
import R10_2 from './pages/R10_2';
import R10_3 from './pages/R10_3';
import R11_1 from './pages/R11_1';
import R13_1 from './pages/R13_1';
import R13_2 from './pages/R13_2';
import R13_3 from './pages/R13_3';
import R13_4 from './pages/R13_4';
import R14_1 from './pages/R14_1';
import R14_2 from './pages/R14_2';
import R14_3 from './pages/R14_3';
import R18_1 from './pages/R18_1';
import R18_2 from './pages/R18_2';
import R16_1 from './pages/R16_1';
import R12_1 from './pages/R12_1';
import R12_2 from './pages/R12_2';
import R12_3 from './pages/R12_3';
import R12_4 from './pages/R12_4';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="apreat" element={<Aprea />} /> */}
          <Route path="notifications" element={<Notifications />} />
          <Route path="registration" element={<Registration />} />
          <Route path="reports" element={<Reports />} />
          <Route path="registered" element={<Registered />} />
          <Route path="judgements" element={<Judgements />} />
          <Route path="knowledge-hub" element={<KnowledgeHub />} />
          <Route path="login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/apreat" element={<Apreat />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/rti" element={<Rti/>} />
          <Route path="/promotregistration" element={<Promotregistration />} />
           <Route path="/guidelinesRegistration" element={<GuidelinesRegistration />} />
           <Route path="/feecalculater" element={<FeeCalculator />} />
           <Route path="/cidcandaprerajoint" element={<CidcandAPRERAJointNotifications/>} />
           <Route path="/usermanual"element={<Usermanual />} />
          <Route path="/videoTutorial"element={<VideoTutorial />} />
          <Route path="/mobileapp" element={<MobileApp />} />
          <Route path="/project-registration" element={<ProjectRegistration />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/project-registration-wizard" element={<ProjectWizard />} />
          <Route path="/race" element={<Race />}/>
          <Route path="/JudgementHub" element={<JudgementHub />}/>
          <Route path="/PressRelease" element={<PressRelease />}/>
           <Route path="/Testimonials" element={<Testimonials />}/>
           <Route path="/GradingOfAgents" element={<GradingOfAgents />}/>
           <Route path="/ChronologyOfEvents" element={<ChronologyOfEvents />}/>
           <Route path="/AdvertisementGuidelines" element={<AdvertisementGuidelines />}/>
            <Route path="/our-leadership" element={<OurLeadership />} />
            <Route path="/contact-us/aprera" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/hyperlinking-policy" element={<HyperlinkingPolicy />} />
          <Route path="/copyrightPolicy" element={< CopyrightPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/termsConditions" element={< TermsConditions />} />
          <Route path="/rateWebsite" element={<RateWebsite />} />
          <Route path="/agent-registration" element={<AgentRegistration />} />
           <Route path="/Guidelines" element={<Guidelines />} />
           <Route path="/agent-detail-new" element={<AgentDetailNew />} />
           <Route path="/agent-detail-existing" element={<AgentDetailExisting />} />
           <Route path="/applicant-details" element={<ApplicantDetails />} />
           <Route path="/aprera" element={<Aprera />} />
          <Route path="/organogram" element={<Organogram />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/goinotifications" element={<GOINotifications />}/>
          <Route path="/goapnotifications" element={<GoapNotifications />}/>
          <Route path="/authoritynotifications" element={<AuthorityNotifications />}/>
          <Route path="/agents" element={<Agents />} />
          <Route path="/registered/projects" element={<Project />} />
          <Route path="/complaint-orders" element={<ComplaintOrders />} />
          <Route path="evolutionofrera" element={<EvolutionOfRera />} />
          <Route path="taskvstime" element={<TaskVsTime />} />
          <Route path="vendordatabase" element={<VendorDataBase />} />
          <Route path="gradingofpromotors" element={<GradingOfPromoters />} />
          <Route path="ACF" element={<Acf/>} />
          <Route path="AudioVisualGallery" element={<AudioVisualGallery />} />
          <Route path="/complaintregistration" element={<ComplaintRegistration />} />
          <Route path="/formsdownload"element={<FormsDownload/>} />
          <Route path="/agent-upload-documents" element={<UploadDocuments />} />
            <Route path="/agent-preview" element={<Preview />} />
            <Route path="/agent-payment" element={<Payment />} />


             <Route path="/mis-reports" element={<MisReports />} />
             <Route path="/reports/R1.1" element={<R1_1_Report />} />
             <Route path="/reports/R1.2" element={<AgentStatusReport />} />
             <Route path="/reports/R3.1" element={<ApartmentsReport />} />
             <Route path="/reports/R3.4" element={<CommercialReport />} />
             <Route path="/reports/R3.5" element={<MixedReport />} />
             <Route path="/reports/R3.6" element={<LayoutForPlotsReport />} />
             <Route path="/reports/R3.7" element={<LayoutForPlotsBuildingsReport />} />
             <Route path="/reports/R4.1" element={<ApprovedProjectReport />} />
             <Route path="/reports/R4.2" element={<ApprovedAgentReport />} />
             <Route path="/reports/R5.1" element={<ApcrdaReport />} />
             <Route path="/reports/R5.2" element={<UdaReport />} />
             <Route path="/reports/R5.3" element={<UlbReport />} />
             <Route path="/reports/R5.4" element={<DtcpReport />} />
             <Route path="/reports/R6.4" element={<OfficerPendingReport />} />
             <Route path="/reports/approved-detailed" element={<ApprovedProjectReportSheet />} />
             <Route path="/reports/R9.2" element={<R9_2_Report />} />
             <Route path="/reports/R9.3" element={<R9_3_Report />} />
             <Route path="/reports/R13.5" element={<DistrictFinancialAgentReport />} />
             <Route path="/reports/R13.6" element={<DistrictFinancialProjectReport />} />
             <Route path="/reports/R15.2" element={<R15_2 />} />
             <Route path="/reports/R17.1" element={<R17_1 />} />
             <Route path="/reports/R17.2" element={<R17_2 />} />
             <Route path="/reports/R20.1" element={<R20_1 />} />
             <Route path="/reports/R20.2" element={<R20_2 />} />
             <Route path="/reports/R20.3" element={<R20_3 />} />
             <Route path="/reports/R21.2" element={<R21_2 />} />
             <Route path="/reports/R22.2" element={<R22_2 />} />
             <Route path="/reports/R23.1" element={<R23_1 />} />
             <Route path="/reports/R24.1" element={<R24_1 />} />
             <Route path="/reports/R1.3" element={<R1_3 />} />
             <Route path="/reports/R2.1" element={<R2_1 />} />
             <Route path="/reports/R2.2" element={<R2_2 />} />
             <Route path="/reports/R2.3" element={<R2_3 />} />
             <Route path="/reports/R3.2" element={<R3_2 />} />
             <Route path="/reports/R3.3" element={<R3_3 />} />
             <Route path="/reports/R6.1" element={<R6_1 />} />
             <Route path="/reports/R6.2.1" element={<R6_2_1 />} />
             <Route path="/reports/R6.2.2" element={<R6_2_2 />} />
             <Route path="/reports/R6.2.3" element={<R6_2_3 />} />
             <Route path="/reports/R6.3" element={<R6_3 />} />
             <Route path="/reports/R7.3" element={<R7_3 />} />
             <Route path="/reports/R7.2" element={<R7_2 />} />
             <Route path="/reports/R7.1" element={<R7_1 />} />
             <Route path="/reports/R8.1" element={<R8_1 />} />
             <Route path="/reports/R8.2" element={<R8_2 />} />
             <Route path="/reports/R10.2" element={<R10_2 />} />
             <Route path="/reports/R10.3" element={<R10_3 />} />
             <Route path="/reports/R11.1" element={<R11_1 />} />
             <Route path="/reports/R10.1" element={<R10_1 />} />
             <Route path="/reports/R13.1" element={<R13_1 />} />
             <Route path="/reports/R13.2" element={<R13_2 />} />
             <Route path="/reports/R13.4" element={<R13_4 />} />
             <Route path="/reports/R13.3" element={<R13_3 />} />
             <Route path="/reports/R14.1" element={<R14_1 />} />
             <Route path="/reports/R14.2" element={<R14_2 />} />
             <Route path="/reports/R14.3" element={<R14_3 />} />
             <Route path="/reports/R18.1" element={<R18_1 />} />
             <Route path="/reports/R18.2" element={<R18_2 />} />
             <Route path="/reports/R16.1" element={<R16_1 />} />
             <Route path="/reports/R12.1" element={<R12_1 />} />
             <Route path="/reports/R12.2" element={<R12_2 />} />
             <Route path="/reports/R12.3" element={<R12_3 />} />
             <Route path="/reports/R12.4" element={<R12_4 />} />



        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
