
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from "./Components/SignupForm";
import OtpVerification from "./Components/OtpVerification";
import UserRegistration from "./Components/UserRegisteration";
import ProfileDetails from "./Pages/ProfileDetails";
import ApplicationFee from "./Pages/ApplicationFee";
import PersonalDetails from "./Pages/PersonalDetails";
import AcademicDetails from "./Pages/AcademicDetails";
import ExtraCurricularActivities from "./Pages/ExtraCurricularActivities";
import WrittenEssay from "./Pages/WrittenEssay";
import VideoSubmission from "./Pages/VideoSubmission";
import TestScore from "./Pages/TestScore";
import ReviewSubmit from "./Pages/ReviewSubmit";
import { EmailProvider } from "./Context/EmailContext";

const App = () => {
  return (
    <EmailProvider>
    <Router>
      <div className="app-container">
        
      
          <Routes>
          <Route path="/" element={<SignupForm />} />
            <Route path="/signup-form" element={<SignupForm />} />
            <Route path="/otp-verification" element={<OtpVerification />} />
            <Route path="/user-registration" element={<UserRegistration />} />
            <Route path="/profile-details" element={<ProfileDetails />} />
            <Route path="/application-fee" element={<ApplicationFee />} />
            <Route path="/personal-details" element={<PersonalDetails />} />
            <Route path="/academic-details" element={<AcademicDetails />} />
            <Route path="/extra-curricular" element={<ExtraCurricularActivities />} />
            <Route path="/written-essay" element={<WrittenEssay />} />
            <Route path="/video-submission" element={<VideoSubmission />} />
            <Route path="/test-score" element={<TestScore />} />
            <Route path="/review-submit" element={<ReviewSubmit />} />
          </Routes>
        </div>
    </Router>
    </EmailProvider>
  );
};

export default App;
