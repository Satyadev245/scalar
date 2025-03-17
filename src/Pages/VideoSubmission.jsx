// import { useState, useEffect } from "react";
// import Sidebar from "../Components/Sidebar";
// import "../Styles/VideoSubmission.scss";
// import { FaEdit } from "react-icons/fa";
// import { AiFillEye } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Components/Navbar";

// const VideoSubmission = () => {
//   const targetDate = new Date();
//   targetDate.setDate(targetDate.getDate() + 7);

//   const Navigate = useNavigate();

//   const calculateTimeLeft = () => {
//     const difference = targetDate - new Date();
//     if (difference <= 0)
//       return { days: "00", hours: "00", minutes: "00", seconds: "00" };

//     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((difference / 1000 / 60) % 60);
//     const seconds = Math.floor((difference / 1000) % 60);

//     return {
//       days: days < 10 ? "0" + days : days,
//       hours: hours < 10 ? "0" + hours : hours,
//       minutes: minutes < 10 ? "0" + minutes : minutes,
//       seconds: seconds < 10 ? "0" + seconds : seconds,
//     };
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleDownloadPDF = () => {
//     const pdfUrl = "/Careerpedia Video-Submission.pdf";
//     const link = document.createElement("a");
//     link.href = pdfUrl;
//     link.download = "Careerpedia_Video_Submission.pdf";
//     link.click();
//   };

//   const handleSubmit = () => {
//     Navigate("/test-score");
//   };

//   return (
//     <div className="width-details">
//       <Sidebar />

//       <div className="essay-content">
//       <div className="">
//           <Navbar />
//         </div>
//         <div className="progress-container">
//           <div className="progress-info">
//             <p>
//               You have <b>7 days</b> to complete your application.{" "}
//               <a href="#">Know More</a>
//             </p>
//             <span className="countdown">
//               Ends in {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m
//               : {timeLeft.seconds}s
//             </span>
//           </div>
//           <div className="progress-bar">
//             <div className="progress-fill" style={{ width: "77%" }}></div>
//             <span>
//               Application Progress <b>77%</b>
//             </span>
//           </div>
//           <p className="info-text">
//             <i>
//               Changes to the previous section can be made at 'review & submit'
//               step.
//             </i>
//           </p>
//         </div>

//         <h1 id="head">Video Submission</h1>

//         {/* Drive Link Section */}
//         <div className="essay-section">
//           <h2>Drive Link</h2>
//           <p>
//             Share a personal passion or hobby that has significantly influenced
//             your perspective or approach to life and work. How has this passion
//             shaped your values, decision-making process, and leadership style?{" "}
//           </p>
//           <input
//             type="text"
//             placeholder="Enter Drive Link"
//           />
//           <p>Please ensure the video URL is publicly accessible and the video's duration is no longer than 5 minutes.  </p>
//         </div>

//         {/* PDF Section */}
//         <div className="pdf-section">
//           <div className="edit-image">
//             <FaEdit className="icon" />
//           </div>
//           <div className="help">
//             <h2>Need help with video submission?</h2>
//             <p>Explore Video Samples ideas to quickly master the format and standards</p>
//           </div>
//           <div className="view-sample">
//             <button onClick={handleDownloadPDF}>
//               <AiFillEye className="icon" /> View Sample
//             </button>
//           </div>
//         </div>

//         <button className="submit-btn" onClick={handleSubmit}>
//           Submit →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VideoSubmission;

// import { useState, useEffect, useRef } from "react";
// import Sidebar from "../Components/Sidebar";
// import "../Styles/VideoSubmission.scss";
// import { FaEdit } from "react-icons/fa";
// import { AiFillEye } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Components/Navbar";

// const VideoSubmission = () => {
//   const targetDate = new Date();
//   targetDate.setDate(targetDate.getDate() + 7);

//   const Navigate = useNavigate();

//   const [timeLeft, setTimeLeft] = useState({
//     days: "00",
//     hours: "00",
//     minutes: "00",
//     seconds: "00",
//   });
//   const [recording, setRecording] = useState(false);
//   const [videoURL, setVideoURL] = useState("");

//   const videoRef = useRef(null);
//   const mediaRecorderRef = useRef(null);
//   const chunks = useRef([]);

//   const calculateTimeLeft = () => {
//     const difference = targetDate - new Date();
//     if (difference <= 0)
//       return { days: "00", hours: "00", minutes: "00", seconds: "00" };

//     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((difference / 1000 / 60) % 60);
//     const seconds = Math.floor((difference / 1000) % 60);

//     return {
//       days: days < 10 ? "0" + days : days,
//       hours: hours < 10 ? "0" + hours : hours,
//       minutes: minutes < 10 ? "0" + minutes : minutes,
//       seconds: seconds < 10 ? "0" + seconds : seconds,
//     };
//   };

//   useEffect(() => {
//     setTimeLeft(calculateTimeLeft());

//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const startWebcam = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//         });
//         videoRef.current.srcObject = stream;
//         mediaRecorderRef.current = new MediaRecorder(stream);

//         mediaRecorderRef.current.ondataavailable = (e) => {
//           chunks.current.push(e.data);
//         };

//         mediaRecorderRef.current.onstop = () => {
//           const blob = new Blob(chunks.current, { type: "video/mp4" });
//           setVideoURL(URL.createObjectURL(blob));
//           chunks.current = [];
//         };
//       } catch (error) {
//         console.error("Error accessing webcam:", error);
//       }
//     };

//     startWebcam();
//   }, []);

//   const startRecording = () => {
//     mediaRecorderRef.current.start();
//     setRecording(true);
//   };

//   const stopRecording = () => {
//     mediaRecorderRef.current.stop();
//     setRecording(false);
//   };

//   const downloadVideo = () => {
//     const link = document.createElement("a");
//     link.href = videoURL;
//     link.download = "recorded_video.mp4";
//     link.click();
//   };

//     const handleDownloadPDF = () => {
//     const pdfUrl = "/Careerpedia Video-Submission.pdf";
//     const link = document.createElement("a");
//     link.href = pdfUrl;
//     link.download = "Careerpedia_Video_Submission.pdf";
//     link.click();
//   };

//   const handleSubmit = () => {
//     stopRecording();
//     Navigate("/test-score");
//   };

//   return (
//     <div className="width-details">
//       <Sidebar />
//       <div className="essay-content">
//         <Navbar />

//         <div className="progress-container">
//           <div className="progress-info">
//             <p>
//               You have <b>7 days</b> to complete your application.{" "}
//               <a href="#">Know More</a>
//             </p>
//             <span className="countdown">
//               Ends in {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m
//               : {timeLeft.seconds}s
//             </span>
//           </div>

//           <div className="progress-bar">
//             <div className="progress-fill" style={{ width: "77%" }}></div>
//             <span>
//               Application Progress <b>77%</b>
//             </span>
//           </div>
//         </div>

//         <h1 id="head">Video Submission</h1>

//         <div className="video-section">
//           <h2>Record Your Video</h2>
//           <video
//             ref={videoRef}
//             autoPlay
//             playsInline

//             style={{ width: "100%" }}
//           />
//           {recording ? (
//             <button onClick={stopRecording} className="stop-download">
//               Stop Recording
//             </button>
//           ) : (
//             <button onClick={startRecording} className="start-download">
//               Start Recording
//             </button>
//           )}
//           {videoURL && (
//             <button onClick={downloadVideo} className="download-buttons">
//               Download Video
//             </button>
//           )}
//         </div>

//         <div className="essay-section">
//           <h2>Drive Link</h2>
//           <p>
//             Share a personal passion or hobby that has significantly influenced
//             your perspective or approach to life and work. How has this passion
//             shaped your values, decision-making process, and leadership style?{" "}
//           </p>
//           <input type="text" placeholder="Enter Drive Link" />
//           <p>
//             Please ensure the video URL is publicly accessible and the video's
//             duration is no longer than 5 minutes.{" "}
//           </p>
//         </div>

//         {/* PDF Section */}
//         <div className="pdf-section">
//           <div className="edit-image">
//             <FaEdit className="icon" />
//           </div>
//           <div className="help">
//             <h2>Need help with video submission?</h2>
//             <p>
//               Explore Video Samples ideas to quickly master the format and
//               standards
//             </p>
//           </div>
//           <div className="view-sample">
//             <button onClick={handleDownloadPDF}>
//               <AiFillEye className="icon" /> View Sample
//             </button>
//           </div>
//         </div>

//         <button className="submit-btn" onClick={handleSubmit}>
//           Submit →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VideoSubmission;

import { useState, useEffect, useRef } from "react";
import Sidebar from "../Components/Sidebar";
import "../Styles/VideoSubmission.scss";
import { FaEdit } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const VideoSubmission = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  const Navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState("");
  const [micEnabled, setMicEnabled] = useState(true);

  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunks = useRef([]);

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

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: micEnabled,
        });
        videoRef.current.srcObject = stream;
        videoRef.current.muted = true; // Mute local audio playback

        mediaRecorderRef.current = new MediaRecorder(stream);

        mediaRecorderRef.current.ondataavailable = (e) => {
          chunks.current.push(e.data);
        };

        mediaRecorderRef.current.onstop = () => {
          const blob = new Blob(chunks.current, { type: "video/mp4" });
          setVideoURL(URL.createObjectURL(blob));
          chunks.current = [];

          // Stop webcam
          stream.getTracks().forEach((track) => track.stop());
        };
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    };

    startWebcam();
  }, [micEnabled]);

  const startRecording = () => {
    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  const toggleMic = () => {
    setMicEnabled((prev) => !prev);
  };

  const downloadVideo = () => {
    const link = document.createElement("a");
    link.href = videoURL;
    link.download = "recorded_video.mp4";
    link.click();
  };

  const handleDownloadPDF = () => {
    const pdfUrl = "/Careerpedia Video-Submission.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Careerpedia_Video_Submission.pdf";
    link.click();
  };

  const handleSubmit = () => {
    stopRecording();
    Navigate("/test-score");
  };

  return (
    <div className="width-details">
      <Sidebar />
      <div className="essay-content">
        <Navbar />

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
            <div className="progress-fill" style={{ width: "77%" }}></div>
            <span>
              Application Progress <b>77%</b>
            </span>
          </div>
        </div>

        <h1 id="head">Video Submission</h1>

        <div className="video-section">
          <h2>Record Your Video</h2>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{ width: "100%" }}
          />
          {recording ? (
            <button onClick={stopRecording} className="stop-download">
              Stop Recording
            </button>
          ) : (
            <button onClick={startRecording} className="start-download">
              Start Recording
            </button>
          )}
          <button onClick={toggleMic} className="mic-toggle">
            {micEnabled ? "Mute Mic" : "Unmute Mic"}
          </button>
          {videoURL && (
            <button onClick={downloadVideo} className="download-buttons">
              Download Video
            </button>
          )}
        </div>

        <div className="essay-section">
          <h2>Drive Link</h2>
          <p>
            Share a personal passion or hobby that has significantly influenced
            your perspective or approach to life and work. How has this passion
            shaped your values, decision-making process, and leadership style?{" "}
          </p>
          <input type="text" placeholder="Enter Drive Link" />
          <p>
            Please ensure the video URL is publicly accessible and the video's
            duration is no longer than 5 minutes.{" "}
          </p>
        </div>

        <div className="pdf-section">
          <div className="edit-image">
            <FaEdit className="icon" />
          </div>
          <div className="help">
            <h2>Need help with video submission?</h2>
            <p>
              Explore Video Samples ideas to quickly master the format and
              standards
            </p>
          </div>
          <div className="view-sample">
            <button onClick={handleDownloadPDF}>
              <AiFillEye className="icon" /> View Sample
            </button>
          </div>
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit →
        </button>
      </div>
    </div>
  );
};

export default VideoSubmission;
