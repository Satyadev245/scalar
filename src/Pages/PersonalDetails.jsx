import { useState, useEffect } from "react";
import "../Styles/PersonalDetails.scss";
import Sidebar from "../Components/Sidebar";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const PersonalDetails = () => {
  const navigate = useNavigate();
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

  const handleSubmit = () => {
    navigate("/academic-details"); 
   }


  return (
    <div className="width-details">
      <div>
        <Sidebar />
      </div>

      <div className="personal-details">
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
            <div className="progress-fill" style={{ width: "22%" }}></div>
            <span>
              Application Progress <b>22%</b>
            </span>
          </div>
          <p className="info-text">
            <i>
              Changes to the previous section can be made at 'review & submit'
              step.
            </i>
          </p>
        </div>

        <h2>Personal Details</h2>

        <div className="important-box">
          <strong>🔔 Important:</strong> To ensure a smooth application process,
          please provide accurate and truthful information in all required
          fields. If any false information is discovered, your candidature may
          be canceled.
        </div>

        <div className="row">
          <label>
            <input type="text" placeholder="First name" />
          </label>

          <label>
            <input type="text" placeholder="Middle name" />
          </label>

          <label>
            <input type="text" placeholder="Last name" />
          </label>
        </div>

        <div className="row">
          <label>
            <input type="date" />
          </label>

          <label>
            <select>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>

        <div className="row">
          <label>
            <input type="text" placeholder="Nationality" />
          </label>

          <label>
            <input type="text" placeholder="Languages Spoken" />
          </label>
        </div>

        <div className="row">
          <label>
            <input type="text" placeholder="Phone number" />
          </label>

          <label>
            <input type="email" placeholder="Email address" />
          </label>
        </div>

        <div className="form-row">
          <label>
            <input type="url" placeholder="Linkedin Profile URL" />
          </label>

          <label>
            <select required>
              <option value="">Physical Disabilities (if any)*</option>
              <option value="none">None</option>
              <option value="visual">Visual</option>
              <option value="hearing">Hearing</option>
              <option value="mobility">Mobility</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        <div className="section">
          <h3>Mailing Address Details</h3>

          <label>
            <input
              type="text"
              placeholder="Address Line 1: Flat No, Floor Building Name"
            />
          </label>

          <label>
            <input type="text" placeholder="Address Line 2: Street, Area" />
          </label>

          <div className="row">
            <label>
              <input type="text" placeholder="City" />
            </label>

            <label>
              <select>
                <option value="">State</option>
                {[
                  "Andhra Pradesh",
                  "Arunachal Pradesh",
                  "Assam",
                  "Bihar",
                  "Chhattisgarh",
                  "Goa",
                  "Gujarat",
                  "Haryana",
                  "Himachal Pradesh",
                  "Jharkhand",
                  "Karnataka",
                  "Kerala",
                  "Madhya Pradesh",
                  "Maharashtra",
                  "Manipur",
                  "Meghalaya",
                  "Mizoram",
                  "Nagaland",
                  "Odisha",
                  "Punjab",
                  "Rajasthan",
                  "Sikkim",
                  "Tamil Nadu",
                  "Telangana",
                  "Tripura",
                  "Uttar Pradesh",
                  "Uttarakhand",
                  "West Bengal",
                ].map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <input type="text" placeholder="Pincode" />
            </label>
          </div>
        </div>

        <div className="section">
          <h3>Emergency Contact Details</h3>

          <div className="row">
            <label>
              <input type="text" placeholder="Name" />
            </label>

            <label>
              <input type="text" placeholder="Relation (e.g., Mother)" />
            </label>
          </div>

          <div className="row">
            <label>
              <input type="text" placeholder="Phone Number" />
            </label>

            <label>
              <input type="email" placeholder="Email Address (optional)" />
            </label>
          </div>
        </div>
      
      <div className="button-submit">
      <button className="submit-btn" onClick={handleSubmit}>Submit →</button>
      </div>
       
      </div>
    </div>
  );
};

export default PersonalDetails;
