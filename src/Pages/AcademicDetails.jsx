import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import "../Styles/AcademicDetails.scss";
import Navbar from "../Components/Navbar";

const AcademicDetails = () => {
  const navigate = useNavigate();

  const [employmentStatus, setEmploymentStatus] = useState("");
  const [ctc, setCtc] = useState("");
  const [achievements, setAchievements] = useState("");

  const [payslipFile, setPayslipFile] = useState("");
  const [resumeFile, setResumeFile] = useState("");

  const handlePayslipUpload = (e) => {
    setPayslipFile(e.target.files[0]?.name);
  };

  const handleResumeUpload = (e) => {
    setResumeFile(e.target.files[0]?.name);
  };

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    if (difference <= 0)
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days: days < 10 ? "0" + days : days,
      hours: hours < 10 ? "0" + hours : hours,
      minutes: minutes < 10 ? "0" + minutes : minutes,
      seconds: seconds < 10 ? "0" + seconds : seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [academicFields, setAcademicFields] = useState([""]);
  const [achievementFields, setAchievementFields] = useState([""]);

  const handleAddField = (setFields, maxFields) => {
    setFields((prev) =>
      prev.length < maxFields ? [...prev, { fileName: "" }] : prev
    );
  };

  const handleFileChange = (e, setFields, index) => {
    const file = e.target.files[0];
    setFields((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, fileName: file ? file.name : "" } : item
      )
    );
  };

  const handleSubmit = () => {
    navigate("/extra-curricular");
  };

  return (
    <div className="width-details">
      <Sidebar />
      <div className="academic-details">
      <div className="">
          <Navbar />
        </div>

           <div className="progress-container">
          <div className="progress-info">
            <p>
              You have <b>7 days</b> to complete your application.{" "}
              <a href="#">Know More</a>
            </p>
            <span className="countdown">
              {" "}
              Ends in {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m
              : {timeLeft.seconds}s
            </span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "33%" }}></div>
            <span>
              Application Progress <b>33%</b>
            </span>
          </div>
          <p className="info-text">
            <i>
              Changes to the previous section can be made at 'review & submit'
              step.
            </i>
          </p>
        </div>

        <h2>Academic Details</h2>
        <div className="row">
          <label>
            <input type="text" placeholder="Degree Name" />
          </label>
          <label>
            <input type="text" placeholder="Major/Specialization" />
          </label>
        </div>
        <div className="row">
          <label>
            <input type="text" placeholder="Undergraduate College/University" />
          </label>
          <label>
            <input type="text" placeholder="Location of Institution" />
          </label>
        </div>
        <div className="row full-width">
          <label>
            <select>
              <option value="">Select University Type</option>
              <option value="Private">Private</option>
              <option value="Public">Public</option>
            </select>
          </label>
        </div>
        <div className="row full-width">
          <label style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <select>
              <option value="">Select Grading Type</option>
              <option value="Percentage">Percentage</option>
              <option value="CGPA">CGPA</option>
            </select>

            <input type="text" placeholder="0.00" />
          </label>
        </div>

        <h3>Class 12th Details</h3>
        <div className="row">
          <label>
            <select>
              <option value="">Select Board</option>
              <option value="CBSE">CBSE</option>
              <option value="ICSE">ICSE</option>
            </select>
          </label>
          <label>
            <input type="text" placeholder="School Name" />
          </label>
        </div>
        <div className="row">
        <label>
            <input type="text" placeholder="City" />
          </label>
          <label>
            <select>
              <option value="">Year of Passing</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </label>

          
        
        </div>

        <div className="row full-width">
          <label style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <select>
              <option value="">Select Grading Type</option>
              <option value="Percentage">Percentage</option>
              <option value="CGPA">CGPA</option>
            </select>

            <input type="text" placeholder="0.00" />
          </label>
        </div>

        <h3>Class 10th Details</h3>
        <div className="row">
          <label>
            <select>
              <option value="">Select Board</option>
              <option value="CBSE">CBSE</option>
              <option value="ICSE">ICSE</option>
            </select>
          </label>
          <label>
            <input type="text" placeholder="School Name" />
          </label>
        </div>
        <div className="row">
        <label>
            <input type="text" placeholder="City" />
          </label>
          <label>
            <select>
              <option value="">Year of Passing</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </label>
        
        </div>



        <div className="row full-width">
          <label style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <select>
              <option value="">Select Grading Type</option>
              <option value="Percentage">Percentage</option>
              <option value="CGPA">CGPA</option>
            </select>

            <input type="text" placeholder="0.00" />
          </label>
        </div>
        <h3>Other Academic Qualifications (Optional)</h3>
        {academicFields.map((field, index) => (
          <div className="row full-width" key={index}>
            <label>
              <select>
                <option value="">Select Qualification</option>
                <option value="Diploma">Diploma</option>
                <option value="Certification">Certification</option>
              </select>

              <input
                type="file"
                accept=".jpeg,.png,.pdf"
                id={`academic-file-${index}`}
                style={{ display: "none" }}
                onChange={(e) =>
                  handleFileChange(e, setAcademicFields, index, "academic")
                }
              />
              <div className="support">
                <h4>
                  Supporing Document{" "}
                  <span className="info-text">
                    Max: 1MB | Format: .jpeg/.png/.pdf
                  </span>
                </h4>

                <button
                  type="button"
                  onClick={() =>
                    document.getElementById(`academic-file-${index}`).click()
                  }
                  className="upload"
                >
                  {field.fileName ? `Upload (${field.fileName})` : "Upload"}
                </button>
              </div>
            </label>
          </div>
        ))}
        <a href="#" onClick={() => handleAddField(setAcademicFields, 4)}>
          + Add More
        </a>{" "}
        <span className="info-text">(Max 4 Allowed)</span>
        <h3>Academic Achievements (Optional)</h3>
        {achievementFields.map((field, index) => (
          <div className="row full-width" key={index}>
            <label>
              <select>
                <option value="">Select Achievement</option>
                <option value="Topper">Topper</option>
                <option value="Scholarship">Scholarship</option>
                <option value="Olympiad">Olympiad</option>
                <option value="Research Paper">Research Paper</option>
              </select>

              <input
                type="file"
                accept=".jpeg,.png,.pdf"
                id={`achievement-file-${index}`}
                style={{ display: "none" }}
                onChange={(e) =>
                  handleFileChange(
                    e,
                    setAchievementFields,
                    index,
                    "achievement"
                  )
                }
              />

              <div className="support">
                <h4>
                  Supporing Document{" "}
                  <span className="info-text">
                    Max: 1MB | Format: .jpeg/.png/.pdf
                  </span>
                </h4>

                <button
                  type="button"
                  onClick={() =>
                    document.getElementById(`achievement-file-${index}`).click()
                  }
                  className="upload"
                >
                  {field.fileName ? `Upload (${field.fileName})` : "Upload"}
                </button>
              </div>
            </label>
          </div>
        ))}
        <a href="#" onClick={() => handleAddField(setAchievementFields, 3)}>
          + Add More
        </a>{" "}
        <span className="info-text">(Max 3 Allowed)</span>
        <h3>Employment Details</h3>
        <label id="CW">
          Are you currently working as a full-time employee?
          <select
            value={employmentStatus}
            onChange={(e) => setEmploymentStatus(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label id="CTC">
          Last drawn yearly CTC (in Lakhs):
          <input
            type="text"
            placeholder="Type here"
            value={ctc}
            onChange={(e) => setCtc(e.target.value)}
          />
        </label>
        <label id="PA">
          Professional Achievements (Max-100 words) - if applicable:<br></br>
          <textarea
            placeholder="Type here"
            value={achievements}
            onChange={(e) => setAchievements(e.target.value)}
            id="text-input"
          />
        </label>
        <div className="file-upload">
          <div className="upload-section">
            <h4>
              Latest Payslip (File to be attached){" "}
              <span className="info-text">
                Max: 1MB | Format: .jpeg/.png/.pdf
              </span>
            </h4>

            <button
              type="button"
              onClick={() => document.getElementById("payslip-file").click()}
              className="upload"
            >
              {payslipFile ? `Upload (${payslipFile})` : "Upload"}
            </button>
            <input
              type="file"
              id="payslip-file"
              accept=".jpeg,.png,.pdf"
              onChange={handlePayslipUpload}
              hidden
            />
          </div>

          <div className="upload-section">
            <h4>
              Updated CV/Resume{" "}
              <span className="info-text">
                Max: 1MB | Format: .jpeg/.png/.pdf
              </span>
            </h4>
            <button
              type="button"
              onClick={() => document.getElementById("resume-file").click()}
              className="upload"
            >
              {resumeFile ? `Upload (${resumeFile})` : "Upload"}
            </button>
            <input
              type="file"
              id="resume-file"
              accept=".jpeg,.png,.pdf"
              onChange={handleResumeUpload}
              hidden
            />
          </div>
        </div>
        <div className="submitted">
          <button className="submit-btn" onClick={handleSubmit}>
            Submit →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcademicDetails;
