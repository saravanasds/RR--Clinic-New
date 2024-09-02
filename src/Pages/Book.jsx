import React, { useState } from 'react';

const Book = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    mobile: '',
    treatment: '',
    appointmentDate: '',
    appointmentTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div >
      <h2 className="text-2xl font-bold mb-4">Book Appointment</h2>
      <p className="mb-4">Please fill out the form below to book an appointment.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Fullname</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Type of Treatment</label>
          <select
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="">Select Treatment</option>
            <option value="Hair Treatment">Hair Treatment</option>
            <option value="Skin Treatment">Skin Treatment</option>
            <option value="Transformation">Transformation</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Appointment Date</label>
          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Appointment Time</label>
          <input
            type="time"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white rounded p-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Book;
