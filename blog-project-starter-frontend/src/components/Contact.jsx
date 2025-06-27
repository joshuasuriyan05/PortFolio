import React from 'react';
import js from '../assets/js.jpg';

function Contact() {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-20 lg:px-32 text-gray-800" id="contact">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Contact Me</h2>
        <img src={js} alt="Joshua Suriyan" className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg mb-6"/>
        <p className="text-lg mb-6 text-center">
          I'd love to connect with you! Whether you're interested in collaborating, have a project idea, or just want to chat tech—feel free to reach out.
        </p>

        <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="font-semibold w-24">Phone:</span>
            <a href="tel:9342668403" className="text-blue-600 hover:underline">9342668403</a>
          </div>

          <div className="flex items-center space-x-3">
            <span className="font-semibold w-24">Email:</span>
            <a href="mailto:joshuasuriyan05@gmail.com" className="text-blue-600 hover:underline">joshuasuriyan05@gmail.com</a>
          </div>

          <div className="flex items-center space-x-3">
            <span className="font-semibold w-24">Location:</span>
            <p>Coimbatore, Tamil Nadu</p>
          </div>

          <div className="flex items-center space-x-3">
            <span className="font-semibold w-24">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/joshua-suriyan-n-b6b988249/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              /joshua-suriyan-n
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <span className="font-semibold w-24">GitHub:</span>
            <a
              href="https://github.com/joshuasuriyan05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              @joshuasuriyan05
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
