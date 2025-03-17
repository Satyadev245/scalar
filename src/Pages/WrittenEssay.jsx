import { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import "../Styles/WrittenEssay.scss";
import { FaEdit } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";


const WrittenEssay = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  const Navigate = useNavigate();

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    if (difference <= 0) return { days: "00", hours: "00", minutes: "00", seconds: "00" };

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

  const handleDownloadPDF = () => {
    const pdfUrl = "/Careerpedia Essay-Submission.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Careerpedia_Essay_Submission.pdf";
    link.click();
  };
  

  const handleSubmit = () => {
    Navigate("/video-submission");
  };


  return (
    <div className="width-details">
      <Sidebar />

      <div className="essay-content">
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
              Ends in {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
            </span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "66%" }}></div>
            <span>
              Application Progress <b>66%</b>
            </span>
          </div>
          <p className="info-text">
            <i>Changes to the previous section can be made at 'review & submit' step.</i>
          </p>
        </div>

        <h1 id="head">Written Essay Submission</h1>

        {/* Essay 1 */}
        <div className="essay-section">
          <h2>Essay 1 (500 words)</h2>
          <p>
            How do you envision your career unfolding after the PGP-MT program and over the next five years? Share how this program will support your career trajectory and goals.
          </p>
          <textarea
            placeholder="Type here"
            maxLength="2500"

          />
          <p className="word-limit">Word Limit: 500 words</p>
        </div>

        {/* Essay 2 */}
        <div className="essay-section">
          <h2>Essay 2 (300 words)</h2>
          <p>
            Reflect on a time when you stepped out of your comfort zone. What was the outcome, and what did you learn about yourself?
          </p>
          <textarea
            placeholder="Type here"
            maxLength="1500"

          />
          <p className="word-limit">Word Limit: 300 words</p>
        </div>

        {/* PDF Section */}
        <div className="pdf-section">
          <div className="edit-image">
            <FaEdit className="icon" />
          </div>
          <div className="help">
            <h2>Need help with essay?</h2>
            <p>Explore Video Samples ideas to quickly master the format and standards</p>
          </div>
          <div className="view-sample">
            <button onClick={handleDownloadPDF}>
              <AiFillEye className="icon" /> View Sample
            </button>
          </div>
        </div>

        <button className="submit-btn" onClick={handleSubmit}>Submit →</button>
      </div>
    </div>
  );
};

export default WrittenEssay;
