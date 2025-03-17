import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/SignupForm.scss";
import { FaWhatsapp } from "react-icons/fa";
import { EmailContext } from "../Context/EmailContext";

const SignupForm = () => {
  const { setEmail } = useContext(EmailContext);
  const [email, setLocalEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsappOptIn, setWhatsappOptIn] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate(); // Initialize navigation

  const handleChange = (e, setter) => {
    setter(e.target.value);
    setIsButtonDisabled(!(email && phone));
  };

  const handleOtpRequest = () => {
    if (!email || !phone) {
      alert("Please enter valid details.");
      return;
    }
    setEmail(email);
    // Navigate to OTP verification page with phone number as state
    navigate("/otp-verification", { state: { phone } });
  };

  return (
    <div className="container">
   
    <div className="signup-container">
      <div className="left-section">
        <h2>Begin your journey with us</h2>
      </div>
      <div className="right-section">
        <h3>Enter your email and phone number</h3>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => handleChange(e, setLocalEmail)}
        />
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => handleChange(e, setPhone)}
        />
        <label className="whatsapp-toggle">
          <FaWhatsapp className="icon" /> Connect on WhatsApp
          <input
            type="checkbox"
            checked={whatsappOptIn}
            onChange={() => setWhatsappOptIn(!whatsappOptIn)}
          />
          <span className="slider"></span>
        </label>
        <p className="info-text">
          By confirming, you agree to receive updates and confirmation from us
          on WhatsApp.
        </p>
        <button
          className="otp-button"
          disabled={isButtonDisabled}
          onClick={handleOtpRequest}
        >
          Get OTP
        </button>
        <p className="terms">
          By creating an account, you agree to our{" "}
          <a href="#">terms of service</a> and <a href="#">policy</a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default SignupForm;
