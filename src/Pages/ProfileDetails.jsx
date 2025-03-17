import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { useNavigate } from "react-router-dom";
import "../styles/ProfileDetails.scss";
import Navbar from "../Components/Navbar";

const ProfileDetails = () => {
  const [tests, setTests] = useState([{ type: "", name: "", score: "" }]);

  const navigate = useNavigate();
  const handleAddTest = () => {
    if (tests.length < 2) {
      setTests([...tests, { type: "", name: "", score: "" }]);
    }
  };

  const handleTestChange = (index, field, value) => {
    const updatedTests = [...tests];
    updatedTests[index][field] = value;
    setTests(updatedTests);
  };

  const handleSubmit = () => {
    navigate("/application-fee");
  };

  return (
    <div className="profile-container">
      <Sidebar />
      <div className="main-content">
        <div className="">
          <Navbar />
        </div>

        <div className="progress-section">
          <p>Application Progress 0%</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "0%" }}></div>
          </div>
        </div>

        <div className="form-section">
          <h3>Eligibility Criteria</h3>

          <div className="form-grid">
            <h4 className="full-width">Employment Details</h4>
            <div className="form-field">
              <label>Most recent employer*</label>
              <input type="text" placeholder="Enter employer name" />
            </div>

            <div className="form-field">
              <label>Designation*</label>
              <input type="text" placeholder="Enter designation" />
            </div>

            <h4 className="full-width">Highest Qualification</h4>
            <div className="form-field">
              <label>Degree name (e.g., B.Tech, BA)*</label>
              <input type="text" placeholder="Enter degree name" />
            </div>

            <div className="form-field">
              <label>Major/Specialisation</label>
              <input type="text" placeholder="Enter specialisation" />
            </div>

            <div className="form-field full-width">
              <label>Undergraduate College/University Name*</label>
              <input type="text" placeholder="Enter college/university name" />
            </div>

            <div className="form-field full-width">
              <label>Undergraduate Score*</label>
              <div className="score-input">
                <div className="score-field">
                  <input
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    max="10"
                  />
                </div>
                <div className="score-type">
                  <select>
                    <option value="GPA">GPA</option>
                    <option value="Percentage">Percentage</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="test-section full-width">
              <h4>Test 1</h4>
              {tests.map((test, index) => (
                <div key={index} className="test-row">
                  <div className="form-field">
                    <select
                      value={test.type}
                      onChange={(e) =>
                        handleTestChange(index, "type", e.target.value)
                      }
                    >
                      <option value="">Select Test*</option>
                      <option value="GMAT">GMAT</option>
                      <option value="GRE">GRE</option>
                      <option value="CAT">CAT</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <input
                      type="text"
                      placeholder="Specify Test Name, if 'Others'"
                      value={test.name}
                      onChange={(e) =>
                        handleTestChange(index, "name", e.target.value)
                      }
                      disabled={test.type !== "Other"}
                    />
                  </div>
                  <div className="form-field">
                    <input
                      type="text"
                      placeholder="Score"
                      value={test.score}
                      onChange={(e) =>
                        handleTestChange(index, "score", e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
              {tests.length < 2 && (
                <button className="add-more" onClick={handleAddTest}>
                  <span className="plus-icon">+</span> Add more
                  <span className="text-sm text-gray-500">(max 2 allowed)</span>
                </button>
              )}
            </div>

            <div className="form-field full-width">
              <label>
                Please indicate if you wish to appear for Scaler Management Test
              </label>
              <select>
                <option value="">Yes/No*</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <p className="note">
            If you haven't taken GMAT, GMAT Focus Edition, GRE or CAT exam, you
            will have to appear for the Scaler Management Test to be eligible
            for the program.
          </p>
          <p className="note">
            The Scaler Management Test will be sent to your registered email.
            For shortlisting, complete the test after submitting your
            application.
          </p>
          <p className="note">
            Note: The application fee is non-refundable. Please ensure all
            information provided is true and complete.
          </p>

          <div className="submit-section">
            <button className="submit-btn" onClick={handleSubmit}>
              Submit <span className="arrow-icon">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
