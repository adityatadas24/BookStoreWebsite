import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Thank You! ${formData.firstName}`)
    toast.success("Your Message is Send")

   
  };

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="flex flex-col md:flex-row justify-center items-start bg-white shadow-lg rounded-lg overflow-hidden mt-20 max-w-6xl w-full p-6 md:p-10 dark:bg-slate-800 dark:text-white">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 dark:bg-slate-800 dark:text-white"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900 tracking-wide dark:bg-slate-800 dark:text-white">
            Contact Us
          </h2>

          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label
                className="block text-sm font-semibold text-gray-700 dark:bg-slate-800 dark:text-white"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3 bg-white dark:bg-slate-800 dark:text-white dark:border-2 dark:border-white"
                required
              />
            </div>

            <div className="w-1/2">
              <label
                className="block text-sm font-semibold text-gray-700 dark:text-white"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3 bg-white dark:bg-slate-800 dark:text-white dark:border-2 dark:border-white"
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label
              className="block text-sm font-semibold text-gray-700 dark:text-white"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3 bg-white dark:bg-slate-800 dark:text-white dark:border-2 dark:border-white"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label
              className="block text-sm font-semibold text-gray-700 dark:text-white"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3 bg-white dark:bg-slate-800 dark:text-white dark:border-2 dark:border-white"
              rows="4"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>

          <div className="flex items-start mb-6">
            <input
              id="agree"
              name="agree"
              type="checkbox"
              checked={formData.agree}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              required
            />
            <label htmlFor="agree" className="ml-2 block text-sm text-gray-900 dark:text-white">
              You agree to our{" "}
              <span className="text-indigo-600 hover:underline">
                Privacy Policy
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 transition-transform duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-10  dark:text-white">
          <h2 className="text-3xl font-bold text-gray-900 tracking-wide mb-6  dark:text-white">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 mb-6  dark:text-white">
            You need more information? We are happy to assist you. Feel free to
            contact us.
          </p>

          <div className="space-y-6  ">
            <div className="flex items-center text-gray-900 dark:text-white">
              <IoIosMail className="w-6 h-6 mr-4" />
              <span className="font-medium">adityatadas2000@mail.com</span>
            </div>

            <div className="flex items-center text-gray-900 dark:text-white">
              <FaPhoneAlt className="w-6 h-6 mr-4" />
              <span className="font-medium">+91 7030****39</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
