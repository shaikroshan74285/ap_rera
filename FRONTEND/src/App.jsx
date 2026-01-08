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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
