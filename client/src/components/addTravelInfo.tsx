import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
    visaType: string;
    visaEntryType: string;
    intendedDuration: string;
    visaDuration: string;
    airline: string;
    flightNumber: string;
    intendedAddress: string;
    dateOfArrival: string;
    visitedBefore: string;
    lastVisitDate: string;
    confirmedInfo: boolean;
}

const TravelInfoForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        visaType: '',
        visaEntryType: '',
        intendedDuration: '',
        visaDuration: '',
        airline: '',
        flightNumber: '',
        intendedAddress: '',
        dateOfArrival: '',
        visitedBefore: 'Yes',
        lastVisitDate: '',
        confirmedInfo: false
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        // Validating required fields
        if (!formData.visaType) newErrors.visaType = 'Visa Type is required';
        if (!formData.visaEntryType) newErrors.visaEntryType = 'Visa Entry Type is required';
        if (!formData.intendedDuration) newErrors.intendedDuration = 'Intended Duration is required';
        if (!formData.visaDuration) newErrors.visaDuration = 'Visa Duration is required';
        if (!formData.airline) newErrors.airline = 'Airline is required';
        if (!formData.flightNumber) newErrors.flightNumber = 'Flight Number is required';
        if (!formData.intendedAddress) newErrors.intendedAddress = 'Intended Address is required';
        if (!formData.dateOfArrival) newErrors.dateOfArrival = 'Date of Arrival is required';
        if (formData.visitedBefore === 'Yes' && !formData.lastVisitDate) {
            newErrors.lastVisitDate = 'Last Visit Date is required if you visited Sri Lanka before';
        }
        if (!formData.confirmedInfo) newErrors.confirmedInfo = 'You must confirm the information is accurate';

        return newErrors;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setSubmitted(true); // Flag as submitted

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('Form submitted:', formData);
            setErrors({});
        }
    };

    return (
        <div className="container">
            <h2 className="title">Add Travel Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-section">
                    <h3>Travel/Visa Information</h3>
                    <div className="form-group">
                        <label>Visa Type (Tourism, Business)</label>
                        <select name="visaType" value={formData.visaType} onChange={handleInputChange}>
                            <option value="">Select visa type</option>
                            <option value="tourism">Tourism</option>
                            <option value="business">Business</option>
                        </select>
                        {submitted && errors.visaType && <p className="error">{errors.visaType}</p>}
                    </div>
                    <div className="form-group">
                        <label>Type of Visa (Single Entry, Multiple Entry)</label>
                        <select name="visaEntryType" value={formData.visaEntryType} onChange={handleInputChange}>
                            <option value="">Select visa entry type</option>
                            <option value="single">Single Entry</option>
                            <option value="multiple">Multiple Entry</option>
                        </select>
                        {submitted && errors.visaEntryType && <p className="error">{errors.visaEntryType}</p>}
                    </div>
                    <div className="form-group">
                        <label>Intended Duration of Stay</label>
                        <input
                            type="text"
                            name="intendedDuration"
                            value={formData.intendedDuration}
                            onChange={handleInputChange}
                        />
                        {submitted && errors.intendedDuration && <p className="error">{errors.intendedDuration}</p>}
                    </div>
                    <div className="form-group">
                        <label>Visa Duration Requested</label>
                        <input
                            type="text"
                            name="visaDuration"
                            value={formData.visaDuration}
                            onChange={handleInputChange}
                        />
                        {submitted && errors.visaDuration && <p className="error">{errors.visaDuration}</p>}
                    </div>
                    <div className="form-group">
                        <label>Airline</label>
                        <input
                            type="text"
                            name="airline"
                            value={formData.airline}
                            onChange={handleInputChange}
                        />
                        {submitted && errors.airline && <p className="error">{errors.airline}</p>}
                    </div>
                    <div className="form-group">
                        <label>Flight Number</label>
                        <input
                            type="text"
                            name="flightNumber"
                            value={formData.flightNumber}
                            onChange={handleInputChange}
                        />
                        {submitted && errors.flightNumber && <p className="error">{errors.flightNumber}</p>}
                    </div>
                    <div className="form-group">
                        <label>Intended Address in Sri Lanka (Hotel, Relative's House, etc.)</label>
                        <input
                            type="text"
                            name="intendedAddress"
                            value={formData.intendedAddress}
                            onChange={handleInputChange}
                        />
                        {submitted && errors.intendedAddress && <p className="error">{errors.intendedAddress}</p>}
                    </div>
                    <div className="form-group">
                        <label>Date of Arrival</label>
                        <input
                            type="date"
                            name="dateOfArrival"
                            value={formData.dateOfArrival}
                            onChange={handleInputChange}
                        />
                        {submitted && errors.dateOfArrival && <p className="error">{errors.dateOfArrival}</p>}
                    </div>
                    <div className="form-group">
                        <label>Have you visited Sri Lanka before? (Yes/No)</label>
                        <select name="visitedBefore" value={formData.visitedBefore} onChange={handleInputChange}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    {formData.visitedBefore === 'Yes' && (
                        <div className="form-group">
                            <label>If Yes, when? (Date of last visit)</label>
                            <input
                                type="date"
                                name="lastVisitDate"
                                value={formData.lastVisitDate}
                                onChange={handleInputChange}
                            />
                            {submitted && errors.lastVisitDate && <p className="error">{errors.lastVisitDate}</p>}
                        </div>
                    )}
                </div>

                <div className="form-section">
                    <h3>Upload the Files</h3>
                    <div className="file-upload-group">
                        <div className="file-upload">
                            <label>Passport Copy</label>
                            <input type="file" />
                        </div>
                        <div className="file-upload">
                            <label>Proof of Accommodation</label>
                            <input type="file" />
                        </div>
                        <div className="file-upload">
                            <label>Passport-sized Photograph</label>
                            <input type="file" />
                        </div>
                        <div className="file-upload">
                            <label>Flight Itinerary</label>
                            <input type="file" />
                        </div>
                        <div className="file-upload">
                            <label>Vaccination Proof</label>
                            <input type="file" />
                        </div>
                        <div className="file-upload">
                            <label>Health Insurance Details</label>
                            <input type="file" />
                        </div>
                        <div className="file-upload">
                            <label>Additional Documents (if any)</label>
                            <input type="file" />
                        </div>
                    </div>
                </div>

                <div className="form-group checkbox">
                    <input
                        type="checkbox"
                        name="confirmedInfo"
                        checked={formData.confirmedInfo}
                        onChange={handleInputChange}
                    />
                    <label>I confirm that the information provided is accurate and complete.</label>
                    {submitted && errors.confirmedInfo && <p className="error">{errors.confirmedInfo}</p>}
                </div>

                <div className="button-group">
                    <button type="button" className="btn previous">PREVIOUS</button>
                    <button type="submit" className="btn">SUBMIT</button>
                </div>
            </form>

            <style jsx>{`
        .container {
          padding: 20px;
          background-color: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          max-width: 900px;
          margin: 0 auto;
        }
        h3{
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .form-section {
          margin-bottom: 30px;
        }
        .form-group {
          margin-bottom: 1.5rem;
      }
        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .form-group input,
        .form-group select {
           width: 100%;
          padding: 12px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 16px;
          outline: none;
          transition: border-color 0.2s ease-in-out;
        }
        .file-upload-group {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 15px;
        }
        .file-upload {
          flex-basis: calc(50% - 1rem);
        }
           .file-upload input[type="file"] {
          width: 100%;
        }
        .checkbox {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        .checkbox input {
          margin-right: 10px;
          width: 20px;
          height: 20px;
          border-radius: 3px;
          border: 2px solid #007bff;
          accent-color: #007bff;
          cursor: pointer;
        }
        .error {
          color: red;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }
        .checkbox label {
            font-size: 1rem;
            color: #333;
            cursor: pointer;
            line-height: 1.5;
        }
        .button-group {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }
        .btn {
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

        .btn.previous {
          background-color: #f0f0f0;
          color: #333;
      }
           .next {
          background-color: #0f766e;
          color: white;
        }
          form-group checkbox{
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          }
      `}</style>
        </div>
    );
};

export default TravelInfoForm;
