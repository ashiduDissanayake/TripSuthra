// Import necessary hooks and components
import React, { useState } from "react";
import DefaultLayout from "../layouts/default";
import serviceImage from "../assets/service.jpg";
import { Slider } from "@nextui-org/react";

// Add a loading spinner component (you can customize or replace this)
const LoadingSpinner = () => (
  <div className="flex justify-center items-center mt-4">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

export default function Services() {
  // Existing state variables
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState([3, 5]);
  const [travelers, setTravelers] = useState([15, 20]);
  const [budget, setBudget] = useState([1, 100]);
  const [description, setDescription] = useState("");

  // New state variables for handling response, loading, and errors
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handles slider input changes
  const handleSliderChange = (type, value) => {
    if (type === "days") {
      setDays(value);
    } else if (type === "travelers") {
      setTravelers(value);
    } else if (type === "budget") {
      setBudget(value);
    }
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setItinerary(null);

    try {
      const response = await fetch("http://localhost:3000/generate-itinerary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startLocation: location,
          endLocation: destination,
          days: days,
          travelers: travelers,
          budget: budget,
          description: description,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate itinerary");
      }

      const data = await response.json();
      setItinerary(data.itinerary);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <div className="relative w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh]">
          <img
            src={serviceImage}
            alt="Vacation Train"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
            <h1
              style={{
                fontFamily: "'Expletus Sans', sans-serif",
                fontSize: "4rem",
                fontWeight: "bold",
              }}
            >
              Let's Plan Your
            </h1>
            <h1
              style={{
                fontFamily: "'Expletus Sans', sans-serif",
                fontSize: "3.5rem",
                fontWeight: "bold",
              }}
            >
              Vacation...
            </h1>
          </div>
        </div>

        {/* Services Section */}
        <section className="container mx-auto max-w-7xl px-6 pt-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Where do you want to go?
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Select what you're into. We'll help you find great things to spend.
          </p>

          <div className="flex flex-wrap justify-between">
            {/* Map Section */}
            <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-6 md:mb-0">
              <div className="bg-gray-200 rounded-lg shadow-lg h-full">
                <iframe
                  allowFullScreen=""
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.243384912775!2d80.70004727632187!3d7.873054177528929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae0f5859244d50d%3A0x400c07087c8bdea7!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1693712236483!5m2!1sen!2slk"
                  style={{ border: 0, borderRadius: "8px" }}
                  title="Sri Lanka Map"
                  width="100%"
                />
              </div>
            </div>

            {/* Form Section */}
            <div className="w-full md:w-1/2 pl-0 md:pl-4">
              <div className="flex justify-space-between gap-4">
                {/* Start */}
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="start"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Trip start from?
                  </label>
                  <input
                    type="text"
                    id="start"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter start location"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                  />
                </div>
                {/* End */}
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="destination"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Where to go?
                  </label>
                  <input
                    type="text"
                    id="destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Enter destination"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                {/* Days Slider */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-semibold mb-2">
                    No. of Days
                  </label>
                  <Slider
                    aria-label="Days Slider"
                    label="Days"
                    min={1}
                    max={30}
                    step={1}
                    value={days}
                    onChange={(value) => handleSliderChange("days", value)}
                    range
                    classNames={{
                      base: "mb-4",
                      label: "font-medium text-default-700 text-medium",
                      value: "font-medium text-default-500 text-small",
                      thumb: "bg-blue-500",
                      track: "bg-gray-500",
                    }}
                    formatOptions={{ maximumFractionDigits: 0 }}
                  />
                  <div className="text-center mt-4">
                    <p className="text-gray-600">
                      Selected Days: {days[0]} - {days[1]}
                    </p>
                  </div>
                </div>

                {/* Travelers Slider */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-semibold mb-2">
                    No. of Travelers
                  </label>
                  <Slider
                    aria-label="Travelers Slider"
                    label="Travelers"
                    min={1}
                    max={50}
                    step={1}
                    value={travelers}
                    onChange={(value) => handleSliderChange("travelers", value)}
                    range
                    classNames={{
                      base: "mb-4",
                      label: "font-medium text-default-700 text-medium",
                      value: "font-medium text-default-500 text-small",
                      thumb: "bg-blue-500",
                      track: "bg-gray-500",
                    }}
                    formatOptions={{ maximumFractionDigits: 0 }}
                  />
                  <div className="text-center mt-4">
                    <p className="text-gray-600">
                      Selected Travelers: {travelers[0]} - {travelers[1]}
                    </p>
                  </div>
                </div>

                {/* Budget Slider */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Budget (Rs.)
                  </label>
                  <Slider
                    aria-label="Budget Slider"
                    label="Budget"
                    min={1}
                    max={100}
                    step={1}
                    value={budget}
                    onChange={(value) => handleSliderChange("budget", value)}
                    range
                    classNames={{
                      base: "mb-4",
                      label: "font-medium text-default-700 text-medium",
                      value: "font-medium text-default-500 text-small",
                      thumb: "bg-blue-500",
                      track: "bg-gray-500",
                    }}
                    formatOptions={{ maximumFractionDigits: 0 }}
                  />
                  <div className="text-center mt-4">
                    <p className="text-gray-600">
                      Selected Budget: Rs. {budget[0].toLocaleString()} K - Rs.{" "}
                      {budget[1].toLocaleString()} K
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="w-full">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Short description about your trip?
                  </label>
                  <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Breifly describe your trip"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-full bg-green-700 text-white font-semibold py-2 rounded hover:bg-green-800 transition duration-300"
                    disabled={loading}
                  >
                    {loading ? "Generating..." : "Generate Itinerary"}
                  </button>
                </div>

                {/* Loading Spinner */}
                {loading && <LoadingSpinner />}

                {/* Error Message */}
                {error && (
                  <div className="mt-4 text-red-500 text-center">{error}</div>
                )}

                {/* Display Itinerary */}
                {itinerary && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Your Itinerary:
                    </h3>
                    <div className="whitespace-pre-wrap text-gray-800">
                      {itinerary}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
