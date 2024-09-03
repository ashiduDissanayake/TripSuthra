import React, { useState } from 'react';
import DefaultLayout from '../layouts/default';
import serviceImage from '../assets/service.jpg';
import { Slider } from "@nextui-org/react";
import Chatbot from '@/components/chatbot';

export default function Services() {
  const [location, setLocation] = useState('');
  const [days, setDays] = useState([3, 5]);
  const [travelers, setTravelers] = useState([15, 20]);
  const [budget, setBudget] = useState([200000, 250000]);

  // Handles slider input changes
  const handleSliderChange = (type, value) => {
    if (type === 'days') {
      setDays(value);
    } else if (type === 'travelers') {
      setTravelers(value);
    } else if (type === 'budget') {
      setBudget(value);
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
                fontSize: '4rem',
                fontWeight: 'bold',
              }}
            >
              Let's Plan Your
            </h1>
            <h1
              style={{
                fontFamily: "'Expletus Sans', sans-serif",
                fontSize: '3.5rem',
                fontWeight: 'bold',
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

          <div className="flex justify-between">
            {/* Map Section */}
            <div className="w-1/2 pr-4">
              <div className="bg-gray-200 rounded-lg shadow-lg h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.243384912775!2d80.70004727632187!3d7.873054177528929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae0f5859244d50d%3A0x400c07087c8bdea7!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1693712236483!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sri Lanka Map"
                ></iframe>
              </div>
            </div>

            {/* Form Section */}
            <div className="w-1/2 pl-4">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="mb-4">
                  <label
                    htmlFor="location"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Where to go?
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
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
                    label="Days"
                    min={1}
                    max={30}
                    step={1}
                    value={days}
                    onChange={(value) => handleSliderChange('days', value)}
                    range
                    classNames={{
                      base: 'mb-4',
                      label: 'font-medium text-default-700 text-medium',
                      value: 'font-medium text-default-500 text-small',
                      thumb: 'bg-blue-500',
                      track: 'bg-blue-500',
                      rail: 'bg-gray-300',
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
                    label="Travelers"
                    min={1}
                    max={50}
                    step={1}
                    value={travelers}
                    onChange={(value) => handleSliderChange('travelers', value)}
                    range
                    classNames={{
                      base: 'mb-4',
                      label: 'font-medium text-default-700 text-medium',
                      value: 'font-medium text-default-500 text-small',
                      thumb: 'bg-blue-500',
                      track: 'bg-blue-500',
                      rail: 'bg-gray-300',
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
                    label="Budget"
                    min={100000}
                    max={1000000}
                    step={50000}
                    value={budget}
                    onChange={(value) => handleSliderChange('budget', value)}
                    range
                    classNames={{
                      base: 'mb-4',
                      label: 'font-medium text-default-700 text-medium',
                      value: 'font-medium text-default-500 text-small',
                      thumb: 'bg-blue-500',
                      track: 'bg-blue-500',
                      rail: 'bg-gray-300',
                    }}
                    formatOptions={{ style: 'currency', currency: 'USD', maximumFractionDigits: 0 }}
                  />
                  <div className="text-center mt-4">
                    <p className="text-gray-600">
                      Selected Budget: Rs. {budget[0].toLocaleString()} - Rs. {budget[1].toLocaleString()}
                    </p>
                    <Chatbot />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
