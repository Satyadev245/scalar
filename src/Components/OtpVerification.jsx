import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Styles/OtpVerification.scss";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const phone = location.state?.phone || "your phone number";

  const handleOtpSubmit = (e) => {
    e.preventDefault();

    if (otp === "1234") {  
      alert("✅ OTP Verified Successfully!");
      navigate("/user-registration");
    } else {
      alert("❌ Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="container">

   
    <div className="otp-container">
      <h2>OTP Verification</h2>
      <p>Enter the OTP sent to {phone}</p>
      <form onSubmit={handleOtpSubmit}>
        <input
          type="text"
          id="otp-input"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          maxLength="4"
          required
        />
        <button type="submit" id="otp-button">Verify OTP</button>
      </form>
      <div className="resend-otp">Resend OTP</div>
    </div>
    </div>
  );
};

export default OtpVerification;
