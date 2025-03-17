import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/ExtraCurricularActivities.scss";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

const ExtracurricularActivities = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  const Navigate = useNavigate();

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
  const [activities, setActivities] = useState([
    {
      activityType: "",
      clubName: "",
      position: "",
      responsibilities: "",
      recognition: "",
      documents: [],
      portfolioLink: "",
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedActivities = [...activities];
    updatedActivities[index][field] = value;
    setActivities(updatedActivities);
  };

  const handleFileChange = (index, files) => {
    const newFiles = Array.from(files);
    const updatedActivity = [...activities];
    updatedActivity[index].documents = newFiles;
    setActivities(updatedActivity);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", activities);
    Navigate("/written-essay");
  };

  return (
    <div className="width-details">
      <div>
        <Sidebar />
      </div>
      <div className="extracurricular">
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
              Ends in {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m
              : {timeLeft.seconds}s
            </span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "44%" }}></div>
            <span>
              Application Progress <b>44%</b>
            </span>
          </div>
          <p className="info-text">
            <i>
              Changes to the previous section can be made at 'review & submit'
              step.
            </i>
          </p>
        </div>
        <form className="extracurricular-form" onSubmit={handleSubmit}>
          <h2>Extracurricular Activities</h2>
          <p>
            Providing the information in this section is optional, but it can
            enhance the strength of your application to Scaler School of
            Business.
          </p>

          {activities.map((activity, index) => (
            <div key={index} className="activity-section">
              <h3>Activity {index + 1} (Optional)</h3>

              <label>Activity Type</label>
              <select
                value={activity.activityType}
                onChange={(e) =>
                  handleInputChange(index, "activityType", e.target.value)
                }
                required
              >
                <option value="">Select Activity Type</option>
                <option value="Sports">Sports</option>
                <option value="Cultural">Cultural</option>
                <option value="Volunteering">Volunteering</option>
                <option value="Academic">Academic</option>
                <option value="Other">Other</option>
              </select>

              <label>
                Name of the Club/Organisation/Academy where the activity was
                conducted
              </label>
              <input
                type="text"
                placeholder="Type here"
                value={activity.clubName}
                onChange={(e) =>
                  handleInputChange(index, "clubName", e.target.value)
                }
                required
              />

              <label>
                Position Held/Role: Specific role or position held within the
                organisation (e.g., Captain, President, Treasurer, Member,
                Volunteer)
              </label>
              <input
                type="text"
                placeholder="Type here"
                value={activity.position}
                onChange={(e) =>
                  handleInputChange(index, "position", e.target.value)
                }
                required
              />

              <label>
                Responsibilities: Brief description of the activity highlighting
                your duties, achievements, and personal growth aspects (250-500
                words)
              </label>
              <textarea
                placeholder="Type here"
                value={activity.responsibilities}
                id="text-input"
                onChange={(e) =>
                  handleInputChange(index, "responsibilities", e.target.value)
                }
                required
              />

              <label>
                Recognition: Any appreciation or awards received for
                participation/excellence in the activity
              </label>
              <input
                type="text"
                placeholder="Type here"
                value={activity.recognition}
                onChange={(e) =>
                  handleInputChange(index, "recognition", e.target.value)
                }
              />

              <div className="support">
                <h4>
                  Supporting Document{" "}
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
                  {activity.documents && activity.documents.length > 0
                    ? `Upload (${activity.documents.length} files)`
                    : "Upload"}
                </button>

                <input
                  type="file"
                  id={`achievement-file-${index}`}
                  accept=".jpeg,.png,.pdf"
                  multiple
                  style={{ display: "none" }}
                  onChange={(e) => handleFileChange(index, e.target.files)}
                />

             
              </div>
              {activity.documents && activity.documents.length > 0 && (
                  <ul className="file-list">
                    {Array.from(activity.documents).map((file, i) => (
                      <li key={i} id="file">{file.name}</li>
                    ))}
                  </ul>
                )}

              <label>
                Link to Portfolio (Optional): To help us evaluate your profile
                better, Provide any additional URLs/Links for your previous
                achievements
              </label>
              <input
                type="url"
                placeholder="URL"
                value={activity.portfolioLink}
                onChange={(e) =>
                  handleInputChange(index, "portfolioLink", e.target.value)
                }
              />
            </div>
          ))}

          <button type="submit" className="submit-button">
            Submit →
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExtracurricularActivities;
