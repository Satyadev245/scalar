import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { useNavigate } from "react-router-dom";
import "../styles/ApplicationFee.scss";
import Navbar from "../Components/Navbar";

const ApplicationFee = () => {
  const [referralCode, setReferralCode] = useState("");

  const navigate = useNavigate();
  const [userDetails] = useState({
    name: "Satya Gireesh Baina",
    contactNumber: "+91-7658961300",
    email: "bainasatya245@gmail.com",
  });

  const [paymentDetails] = useState({
    applicationFee: 3000.0,
    discount: -500.0,
    total: 2500.0,
  });

  const [paymentStatus, setPaymentStatus] = useState("initial");
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  const handleApplyReferral = () => {
    console.log("Applying referral code:", referralCode);
  };

  const handleRemoveReferral = () => {
    setReferralCode("");
  };

  const handlePayment = () => {
    const paymentSuccess = true; // Change this based on actual payment result

    if (paymentSuccess) {
      
      setPaymentStatus("success");

    } else {
      setPaymentStatus("failed");
    }
  };

  const handleTryAgain = () => {
    if (paymentStatus === "success") {
   
      setShowWelcomeModal(false);
    } else {
      setPaymentStatus("initial");
      setShowWelcomeModal(true);
    }
  };

  const handleContinue = () => {
   navigate("/personal-details"); 
  }

  return (
    <div className="application-fee-container">
      <Sidebar />
      <div className="main-content">
      <div className="">
          <Navbar />
        </div>
        <div className="progress-section">
          <p>Application Progress 11%</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "11%" }}></div>
          </div>
        </div>

        <div className="payment-section">
          <h2>Payment</h2>

          {paymentStatus === "initial" && (
            <>
              <div className="success-message">
                <div className="check-icon">✅</div>
                <h3>
                  Congratulations!! You are eligible to apply for the program
                </h3>
              </div>

              <div className="application-details">
                <h3>Application Fee</h3>
                <div className="user-info">
                  <div className="info-row">
                    <span className="label">Name :</span>
                    <span className="value">{userDetails.name}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Contact Number :</span>
                    <span className="value">{userDetails.contactNumber}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Email :</span>
                    <span className="value">{userDetails.email}</span>
                  </div>
                  <p className="note">
                    You will receive an invoice on the above-mentioned details
                  </p>
                </div>

                <div className="payment-summary">
                  <h3>Summary</h3>
                  <div className="summary-row">
                    <span>Application Fee</span>
                    <span>₹{paymentDetails.applicationFee.toFixed(2)}</span>
                  </div>
                  {paymentDetails.discount !== 0 && (
                    <div className="summary-row discount">
                      <span>Discount</span>
                      <span>{paymentDetails.discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="referral-section">
                    <input
                      type="text"
                      value={referralCode}
                      onChange={(e) => setReferralCode(e.target.value)}
                      placeholder="Referral code"
                    />
                    {referralCode ? (
                      <button
                        onClick={handleRemoveReferral}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        onClick={handleApplyReferral}
                        className="apply-btn"
                      >
                        Apply
                      </button>
                    )}
                  </div>
                  <div className="total-row">
                    <span>Total</span>
                    <span>₹{paymentDetails.total.toFixed(2)}</span>
                  </div>
                </div>

                <button className="continue-btn" onClick={handlePayment}>
                  Continue to pay →
                </button>

                <div className="support-info">
                  <p>
                    <span className="whatsapp-icon">📱</span>
                    Please WhatsApp on SSB support number in case you face any
                    issues with your application or payment:  <b>7658961300</b>
                   
                  </p>
                </div>
              </div>
            </>
          )}

          {paymentStatus === "success" && (
            <div className="success-message">
              <span className="tick-icon">✅</span>
              <h3>Payment Successful!</h3>
              <div className="application-details">
                <div className="user-info">
                  <div className="info-row">
                    <span className="label">Name :</span>
                    <span className="value">{userDetails.name}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Contact Number :</span>
                    <span className="value">{userDetails.contactNumber}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Email :</span>
                    <span className="value">{userDetails.email}</span>
                  </div>
                </div>
              </div>

              <div className="submit-section">
              <button className="submit-btn" onClick={handleContinue}>
              Continue <span className="arrow-icon">→</span>
            </button>
            </div>
            </div>
          )}

          {paymentStatus === "failed" && (
            <div className="payment-failed">
              <div className="error-icon">⚠</div>
              <h3>Payment Failed!</h3>
              <div className="application-details">
                <div className="user-info">
                  <div className="info-row">
                    <span className="label">Name :</span>
                    <span className="value">{userDetails.name}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Contact Number :</span>
                    <span className="value">{userDetails.contactNumber}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Email :</span>
                    <span className="value">{userDetails.email}</span>
                  </div>
                </div>
              </div>
              <button className="try-again-btn" onClick={handleTryAgain}>
                Try again ↺
              </button>
            </div>
          )}
        </div>

        {showWelcomeModal && (
          <div className="welcome-modal">
            <div className="modal-content">
              <h2>Let's Begin Your Application</h2>
              <p>
                You have 7 days to complete your application from the date of
                payment.
              </p>
              <p>Keep track of the countdown timer above your form.</p>

              <div className="info-box">
                <div className="info-icon">📋</div>
                <p>
                  We process applications weekly and applicants who apply early
                  get a better chance at a seat and a scholarship.
                </p>
              </div>

              <button
                className="got-it-btn"
                onClick={() => setShowWelcomeModal(false)}
              >
                Got it!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationFee;
