


import React, { useContext, useState } from "react";
import { EmailContext } from "../Context/EmailContext";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/Navbar.scss";

const Navbar = () => {
  const { email, setEmail } = useContext(EmailContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const pageTitles = {
    "/profile-details": "Profile Details",
    "/application-fee": "Application Fee",
    "/personal-details": "Personal Details",
    "/academic-details": "Academic Details",
    "/extra-curricular": "Extracurricular Activities",
    "/written-essay": "Written Essay Submission",
    "/video-submission": "Video Essay Submission",
    "/test-score": "Test Score Submission",
    "/review-submit": "Review & Submit",
  };

  const currentTitle = pageTitles[location.pathname] || "Dashboard";

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <h1>{currentTitle}</h1>

      {email && (
        <div className="user-menu" onClick={() => setIsOpen(!isOpen)}>
          <FaUserCircle className="user-icon" />
          <span>{email}</span>
          {isOpen && (
            <div className="dropdown-menu">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
