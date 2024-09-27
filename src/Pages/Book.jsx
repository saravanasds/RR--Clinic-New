import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Book = () => {
  const [formData, setFormData] = useState({
    mobile: '',
    fullname: '',
    treatment: '',
    appointmentDate: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_hs33knz',   // Replace with your EmailJS service ID
        'template_8zu2vgn',  // Replace with your EmailJS template ID
        formData,
        'Gwv8DQSyRwLKIUilq'  // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Appointment successfully submitted!');
          // Reset form after submission
          setFormData({
            mobile: '',
            fullname: '',
            treatment: '',
            appointmentDate: '',
          });
        },
        (error) => {
          console.log(error.text);
          alert('Failed to submit the appointment, please try again.');
        }
      );
  };

  return (
    <div 
      className="max-h-screen h-auto flex items-center justify-center bg-cover bg-center bg-no-repeat w-auto overflow-scroll border-b-4 border-yellow-300"
    >
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 bg-opacity-80 backdrop-blur-md p-0 md:p-6 rounded-lg shadow-lg max-w-4xl w-full px-6">
        <h2 className="text-3xl font-semibold text-gray-800 my-4 text-center">Book Your Appointment</h2>
        <p className="text-gray-600 mb-4 text-center">Fill out the form below to schedule your appointment.</p>

        <form className="text-black grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-3" onSubmit={sendEmail}>
          {/* Mobile Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              required
              className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 hover:border-blue-400 hover:ring-1 hover:ring-blue-400"
              placeholder="Enter mobile number"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          {/* Fullname */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Fullname</label>
            <input
              type="text"
              name="fullname"
              required
              className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 hover:border-blue-400 hover:ring-1 hover:ring-blue-400"
              placeholder="Enter name"
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>

          {/* Type of Treatment */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Type of Treatment</label>
            <select
              name="treatment"
              required
              className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 hover:border-blue-400 hover:ring-1 hover:ring-blue-400"
              value={formData.treatment}
              onChange={handleChange}
            >
              <option value="" hidden>Select Treatment</option>
              <option value="Hair Treatment">Hair Treatment</option>
              <option value="Skin Treatment">Skin Treatment</option>
              <option value="Transformation">Transformation</option>
            </select>
          </div>

          {/* Appointment Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Appointment Date</label>
            <input
              type="date"
              name="appointmentDate"
              required
              className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 hover:border-blue-400 hover:ring-1 hover:ring-blue-400"
              value={formData.appointmentDate}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="w-full md:w-1/2 bg-yellow-500 hover:bg-yellow-400 text-black font-opensans font-semibold rounded-full px-6 py-3 shadow-md hover:shadow-lg focus:outline-none transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Book;
