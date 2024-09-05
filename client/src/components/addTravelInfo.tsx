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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <h2 className="title">Add Travel Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Travel/Visa Information</h3>
          <div className="form-group">
            <label>Visa Type(Tourism, Business)</label>
            <select name="visaType" value={formData.visaType} onChange={handleInputChange}>
              <option value="">Select visa type</option>
              <option value="tourism">Tourism</option>
              <option value="business">Business</option>
            </select>
          </div>
          <div className="form-group">
            <label>Type of Visa (Single Entry, Multiple Entry)</label>
            <select name="visaEntryType" value={formData.visaEntryType} onChange={handleInputChange}>
              <option value="">Select visa type</option>
              <option value="single">Single Entry</option>
              <option value="multiple">Multiple Entry</option>
            </select>
          </div>
          <div className="form-group">
            <label>Intended Duration of Stay</label>
            <input type="text" name="intendedDuration" value={formData.intendedDuration} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Visa Duration Requested</label>
            <input type="text" name="visaDuration" value={formData.visaDuration} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Airline</label>
            <input type="text" name="airline" value={formData.airline} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Flight Number</label>
            <input type="text" name="flightNumber" value={formData.flightNumber} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Intended Address in Sri Lanka (Hotel, Relative's House, etc.)</label>
            <input type="text" name="intendedAddress" value={formData.intendedAddress} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Date of Arrival</label>
            <input type="date" name="dateOfArrival" value={formData.dateOfArrival} onChange={handleInputChange} />
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
              <input type="date" name="lastVisitDate" value={formData.lastVisitDate} onChange={handleInputChange} />
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
        </div>
        
        <div className="button-group">
          <button type="button" className="btn previous">PREVIOUS</button>
          <button type="submit" className="btn next">NEXT</button>
        </div>
      </form>
      <style>{`
        .container {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .title {
          text-align: center;
          color: #333;
        }
        .form-section {
          margin-bottom: 30px;
        }
        .form-group {
          margin-bottom: 15px;
        }
        label {
          display: block;
          margin-bottom: 5px;
        }
        input[type="text"],
        input[type="date"],
        select {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .file-upload-group {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 15px;
        }
        .file-upload input[type="file"] {
          width: 100%;
        }
        .checkbox {
          display: flex;
          align-items: center;
        }
        .checkbox input {
          margin-right: 10px;
        }
        .button-group {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }
        .btn {
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
        }
        .previous {
          background-color: #f0f0f0;
          color: #333;
        }
        .next {
          background-color: #008080;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default TravelInfoForm;