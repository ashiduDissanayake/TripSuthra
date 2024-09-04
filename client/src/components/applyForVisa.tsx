import React from 'react';

function VisaApplicationForm() {
  return (
    <div className="container mx-auto p-10">
      <h2 className="text-2xl font-bold mb-8">Apply for Visa</h2>

      <div className="flex justify-between">
        {/* Personal Details Section */}
        <div className="w-full md:w-1/2 pr-4">
          <h3 className="text-xl font-semibold mb-6">Personal Details</h3>
          <form>
            <div className="flex flex-wrap -mx-3">
              {/* Left Column */}
              <div className="w-full lg:w-1/2 px-3">
                <div className="mb-4">
                  <label htmlFor="firstName" className="block text-sm font-bold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="lastName" className="block text-sm font-bold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="passportNumber" className="block text-sm font-bold mb-2">
                    Passport Number
                  </label>
                  <input
                    type="text"
                    id="passportNumber"
                    name="passportNumber"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="countryOfResidence" className="block text-sm font-bold mb-2">
                    Country of Residence
                  </label>
                  <select
                    id="countryOfResidence"
                    name="countryOfResidence"
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="" disabled selected>
                      Select Country
                    </option>
                    <option value="canada">Canada</option>
                    <option value="usa">United States</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-bold mb-2">
                    Address (Street Address, City, State/Province, Postal Code)
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full lg:w-1/2 px-3">
                <div className="mb-4">
                  <label htmlFor="placeOfBirth" className="block text-sm font-bold mb-2">
                    Place of Birth
                  </label>
                  <input
                    type="text"
                    id="placeOfBirth"
                    name="placeOfBirth"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="gender" className="block text-sm font-bold mb-2">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="" disabled selected>
                      Gender
                    </option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="nationality" className="block text-sm font-bold mb-2">
                    Nationality
                  </label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="passportIssueDate" className="block text-sm font-bold mb-2">
                    Passport Issue Date
                  </label>
                  <input
                    type="date"
                    id="passportIssueDate"
                    name="passportIssueDate"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="passportExpiryDate" className="block text-sm font-bold mb-2">
                    Passport Expiry Date
                  </label>
                  <input
                    type="date"
                    id="passportExpiryDate"
                    name="passportExpiryDate"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Health Information Section */}
        <div className="w-full md:w-1/2 pl-4">
          <h3 className="text-xl font-semibold mb-6">Health Information (IMPORTANT)</h3>
          <div className="mb-4">
            <label htmlFor="vaccinationStatus" className="block text-sm font-bold mb-2">
              COVID-19 Vaccination Status
            </label>
            <select
              id="vaccinationStatus"
              name="vaccinationStatus"
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="fully_vaccinated">Fully Vaccinated</option>
              <option value="partially_vaccinated">Partially Vaccinated</option>
              <option value="not_vaccinated">Not Vaccinated</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="vaccinationType" className="block text-sm font-bold mb-2">
              Vaccination Type
            </label>
            <input
              type="text"
              id="vaccinationType"
              name="vaccinationType"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastDoseDate" className="block text-sm font-bold mb-2">
              Date of Last Dose
            </label>
            <input
              type="date"
              id="lastDoseDate"
              name="lastDoseDate"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex justify-between mt-20">
            <button
              type="submit"
              className="px-5 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              NEXT
            </button>
            <button
              type="button"
              className="px-5 py-2 text-white bg-gray-800 rounded hover:bg-gray-900"
            >
              Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisaApplicationForm;
