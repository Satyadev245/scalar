


import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Sidebar.scss";

const Sidebar = () => {
  const location = useLocation();

  const steps = [
    { id: 1, label: "Profile Details", path: "/profile-details" },
    { id: 2, label: "Application Fee", path: "/application-fee" },
    { id: 3, label: "Personal Details", path: "/personal-details" },
    { id: 4, label: "Academic Details", path: "/academic-details" },
    { id: 5, label: "Extracurricular Activities", path: "/extra-curricular" },
    { id: 6, label: "Written Essay Submission", path: "/written-essay" },
    { id: 7, label: "Video Essay Submission", path: "/video-submission" },
    // { id: 8, label: "Test Score Submission", path: "/test-score" },
    // { id: 9, label: "Review & Submit", path: "/review-submit" },
  ];

  const currentStep = steps.findIndex((s) => s.path === location.pathname);

  return (
    <div className="sidebar">
      <div className="logo">SCALER SCHOOL OF BUSINESS</div>

      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${((currentStep + 1) * 100) / steps.length}%`,
          }}
        ></div>
      </div>

      <div className="steps">
        {steps.map((step) => (
          <Link to={step.path} key={step.id} className="step-link">
            <div
              className={`step ${
                location.pathname === step.path ? "active" : ""
              }`}
            >
              <div
                className={`step-number ${
                  location.pathname === step.path ? "active" : ""
                }`}
              >
                {step.id}
              </div>
              <div className="step-label">{step.label}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
