/*import React from 'react';
import "../styles/personalDetails.css";

const PersonalDetailsForm = () => {
  return (
    <>
      <h2>Personal Details</h2>
      <form>
        <div className="form-container">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" placeholder='First Name'/>
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" placeholder='Last Name'/>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder='Email Address'/>
            </div>

            <div className="form-group">
              <label htmlFor="passportNumber">Passport Number</label>
              <input type="text" id="passportNumber" name="passportNumber" placeholder='Passport Number'/>
            </div>

            <div className="form-group">
              <label htmlFor="countryOfResidence">Country of Residence</label>
              <select id="countryOfResidence" name="countryOfResidence">
                <option value="canada">Canada</option>
                <option value="usa">United States</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="address">
                Address (Street Address, City, State/Province, Postal Code)
              </label>
              <input type="text" id="address" name="address" placeholder='Street Address, City, State/Province, Postal Code'/>
            </div>
          </div>

          <div className="form-column">
            <div className="form-group">
              <label htmlFor="placeOfBirth">Place of Birth</label>
              <input type="text" id="placeOfBirth" name="placeOfBirth" />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender">
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="nationality">Nationality</label>
              <input type="text" id="nationality" name="nationality" />
            </div>

            <div className="form-group">
              <label htmlFor="passportIssueDate">Passport Issue Date</label>
              <input type="date" id="passportIssueDate" name="passportIssueDate" />
            </div>

            <div className="form-group">
              <label htmlFor="passportExpiryDate">Passport Expiry Date</label>
              <input type="date" id="passportExpiryDate" name="passportExpiryDate" />
            </div>
            <button type="submit" className="btn-submit">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PersonalDetailsForm;
*/

import React from 'react';

const PersonalDetailsForm = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-6">Personal Details</h2>
      
      <form>
        <div className="flex justify-between">
          {/* Left Column */}
          <div className="w-1/2 pr-2">
            <div className="mb-4">
              <label htmlFor="firstName" className="block font-semibold mb-2">First Name</label>
              <input type="text" id="firstName" name="firstName" className="w-full p-2 border border-gray-300 rounded-md" placeholder='First Name'/>
            </div>

            <div className="mb-4">
              <label htmlFor="lastName" className="block font-semibold mb-2">Last Name</label>
              <input type="text" id="lastName" name="lastName" className="w-full p-2 border border-gray-300 rounded-md" placeholder='Last Name'/>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-md" placeholder='Email Address'/>
            </div>

            <div className="mb-4">
              <label htmlFor="passportNumber" className="block font-semibold mb-2">Passport Number</label>
              <input type="text" id="passportNumber" name="passportNumber" className="w-full p-2 border border-gray-300 rounded-md" placeholder='Passport Number'/>
            </div>

            <div className="mb-4">
              <label htmlFor="countryOfResidence" className="block font-semibold mb-2">Country of Residence</label>
              <select id="countryOfResidence" name="countryOfResidence" className="w-full p-2 border border-gray-300 rounded-md">
                <option value="canada">Canada</option>
                <option value="usa">United States</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block font-semibold mb-2">Address (Street Address, City, State/Province, Postal Code)</label>
              <input type="text" id="address" name="address" className="w-full p-2 border border-gray-300 rounded-md" placeholder='Street Address, City, State/Province, Postal Code'/>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-1/2 pl-2">
            <div className="mb-4">
              <label htmlFor="placeOfBirth" className="block font-semibold mb-2">Place of Birth</label>
              <input type="text" id="placeOfBirth" name="placeOfBirth" className="w-full p-2 border border-gray-300 rounded-md" placeholder='Birth Place'/>
            </div>

            <div className="mb-4">
              <label htmlFor="gender" className="block font-semibold mb-2">Gender</label>
              <select id="gender" name="gender" className="w-full p-2 border border-gray-300 rounded-md">
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="nationality" className="block font-semibold mb-2">Nationality</label>
              <input type="text" id="nationality" name="nationality" className="w-full p-2 border border-gray-300 rounded-md" placeholder='Nationality'/>
            </div>

            <div className="mb-4">
              <label htmlFor="passportIssueDate" className="block font-semibold mb-2">Passport Issue Date</label>
              <input type="date" id="passportIssueDate" name="passportIssueDate" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>

            <div className="mb-4">
              <label htmlFor="passportExpiryDate" className="block font-semibold mb-2">Passport Expiry Date</label>
              <input type="date" id="passportExpiryDate" name="passportExpiryDate" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 mx-auto block mt-5">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
