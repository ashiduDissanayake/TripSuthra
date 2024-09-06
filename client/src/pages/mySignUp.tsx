import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Step1: Collect Personal Information
const Step1Form = ({ onNext }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation can be added here
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 1: Personal Information</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Next</button>
    </form>
  );
};

// Step 2: Collect Additional Information
const Step2Form = ({ onBack, onSubmit }) => {
  const [formData, setFormData] = useState({
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 2: Additional Information</h2>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>
      <button type="button" onClick={onBack}>
        Back
      </button>
      <button type="submit">Sign Up</button>
    </form>
  );
};

// Main Signup Component
const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [step1Data, setStep1Data] = useState({});
  const navigate = useNavigate();

  const handleStep1 = (data) => {
    setStep1Data(data);
    setCurrentStep(2);
  };

  const handleStep2 = async (step2Data) => {
    const combinedData = { ...step1Data, ...step2Data };

    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(combinedData),
        }
      );

      const result = await response.json();

      if (result.success) {
        navigate("/test"); // Redirect on successful signup
      } else {
        // Handle error (e.g., display error message)
        console.error("Signup failed", result.message);
      }
    } catch (error) {
      console.error("Error during signup", error);
    }
  };

  return (
    <div>
      {currentStep === 1 ? (
        <Step1Form onNext={handleStep1} />
      ) : (
        <Step2Form onBack={() => setCurrentStep(1)} onSubmit={handleStep2} />
      )}
    </div>
  );
};

export default Signup;
