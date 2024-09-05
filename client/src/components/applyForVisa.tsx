import React, { useState } from 'react';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    placeOfBirth: string;
    gender: string;
    nationality: string;
    passportNumber: string;
    passportIssueDate: string;
    passportExpiryDate: string;
    countryOfResidence: string;
    address: string;
    covidStatus: string;
    vaccinationType: string;
    lastDoseDate: string;
}

const VisaApplicationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        placeOfBirth: '',
        gender: '',
        nationality: '',
        passportNumber: '',
        passportIssueDate: '',
        passportExpiryDate: '',
        countryOfResidence: '',
        address: '',
        covidStatus: '',
        vaccinationType: '',
        lastDoseDate: '',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className="form-container">
            <h1 className="title">Visa Application Form</h1>
            <h2 className="subTitle">Personal Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-grid">
                    {/* Left Column */}
                    <div>
                        <div className="form-group">
                            <label htmlFor="firstName" className="label">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="input"
                                placeholder="First Name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName" className="label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="input"
                                placeholder="Last Name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="label">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="input"
                                placeholder="Email Address"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="passportNumber" className="label">
                                Passport Number
                            </label>
                            <input
                                type="text"
                                id="passportNumber"
                                name="passportNumber"
                                value={formData.passportNumber}
                                onChange={handleInputChange}
                                className="input"
                                placeholder="Passport Number"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="countryOfResidence" className="label">
                                Country of Residence
                            </label>
                            <select
                                id="countryOfResidence"
                                name="countryOfResidence"
                                value={formData.countryOfResidence}
                                onChange={handleInputChange}
                                className="input"
                            >
                                <option value="">Select Country</option>
                                <option value="Canada">Canada</option>
                                <option value="USA">United States</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="address" className="label">
                                Address (Street Address, City, State/Province, Postal Code)
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="input"
                                placeholder="Street Address, City, State/Province, Postal Code"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        <div className="form-group">
                            <label htmlFor="placeOfBirth" className="label">
                                Place of Birth
                            </label>
                            <input
                                type="text"
                                id="placeOfBirth"
                                name="placeOfBirth"
                                value={formData.placeOfBirth}
                                onChange={handleInputChange}
                                className="input"
                                placeholder="Place of Birth"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="gender" className="label">
                                Gender
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                className="input"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="nationality" className="label">
                                Nationality
                            </label>
                            <input
                                type="text"
                                id="nationality"
                                name="nationality"
                                value={formData.nationality}
                                onChange={handleInputChange}
                                className="input"
                                placeholder="Nationality"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="passportIssueDate" className="label">
                                Passport Issue Date
                            </label>
                            <input
                                type="date"
                                id="passportIssueDate"
                                name="passportIssueDate"
                                value={formData.passportIssueDate}
                                onChange={handleInputChange}
                                className="input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="passportExpiryDate" className="label">
                                Passport Expiry Date
                            </label>
                            <input
                                type="date"
                                id="passportExpiryDate"
                                name="passportExpiryDate"
                                value={formData.passportExpiryDate}
                                onChange={handleInputChange}
                                className="input"
                            />
                        </div>



                    </div>

                    
                </div>

                <h2 className="subTitle">Health Information(IMPORTANT)</h2>
                <div className="form-grid">
                <div>
                        

                        <div className="form-group">
                            <label htmlFor="vaccineStatus" className="label">
                                COVID-19 Vaccination Status
                            </label>
                            <select
                                id="vaccineStatus"
                                name="vaccineStatus"
                                value={formData.vaccineStatus}
                                onChange={handleInputChange}
                                className="input"
                            >
                                <option value="">Choose</option>
                                <option value="zero">None</option>
                                <option value="one">1st dose completed</option>
                                <option value="two">2nd dose completed</option>
                                <option value="three">3rd dose completed</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="vaccinationType" className="label">
                                Vaccination Type
                            </label>
                            <input
                                type="vaccinationType"
                                id="vaccinationType"
                                name="vaccinationType"
                                value={formData.vaccinationType}
                                onChange={handleInputChange}
                                className="input"
                                placeholder="Vaccination Type"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastDoseDate" className="label">
                                Date of Last Dose
                            </label>
                            <input
                                type="date"
                                id="lastDoseDate"
                                name="lastDoseDate"
                                value={formData.lastDoseDate}
                                onChange={handleInputChange}
                                className="input"
                            />
                        </div>

                    </div>
                </div>

                <div className='form-grid-2'>
                <button type="submit" className="submit-button">
                            Submit Application
                        </button>
                </div>
            </form>

            {/* Internal CSS styling */}
            <style jsx>{`
        .form-container {
          padding: 20px;
          background-color: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          max-width: 900px;
          margin: 0 auto;
        }

        .title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .subTitle {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .label {
          display: block;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .input {
          width: 100%;
          padding: 12px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 16px;
          outline: none;
          transition: border-color 0.2s ease-in-out;
        }

        .input:focus {
          border-color: #14b8a6;
        }

        .submit-button {
          background-color: #14b8a6;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          display: block;
          margin: 20px auto 0;
          font-size: 1rem;
          font-weight: bold;
          text-align: center;
          transition: background-color 0.3s ease;
        }

        .submit-button:hover {
          background-color: #0f766e;
        }
      `}</style>
        </div>
    );
};

export default VisaApplicationForm;
