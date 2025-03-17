import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/UserRegistration.scss";

const UserRegistration = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: "",
    graduationYear: "",
    examTaken: "",
    employer: "",
    startMBA: "",
  });

  const isFormValid = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert("Form Submitted Successfully!");
      console.log(formData);
      navigate("/profile-details"); 
    }
  };

  return (
    <div className="container">
    <div className="registration-container">
      <div className="left-section">
        <h2>Begin your journey with us</h2>
      </div>

      <div className="right-section">
        <h3>Enter your Details</h3>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <select
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleChange}
            required
          >
            <option value="">Select your graduation year</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>

          <select
            name="examTaken"
            value={formData.examTaken}
            onChange={handleChange}
            required
          >
            <option value="">Have you taken GMAT/GRE/CAT?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <input
            type="text"
            name="employer"
            placeholder="Enter your most recent employer"
            value={formData.employer}
            onChange={handleChange}
            required
          />

          <select
            name="startMBA"
            value={formData.startMBA}
            onChange={handleChange}
            required
          >
            <option value="">When do you plan to start your MBA?</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>

          <button type="submit" disabled={!isFormValid}>
            Proceed
          </button>
        </form>
      </div>
    </div>
    </div> 
  );
};

export default UserRegistration;
