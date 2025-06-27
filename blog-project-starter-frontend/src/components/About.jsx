import React from 'react';
import js from '../assets/js.jpg';

function About() {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-20 lg:px-32 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">About Me</h2>
        <img src={js} alt="Joshua Suriyan" className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg mb-6"/>
        <p className="text-lg mb-4 leading-relaxed">
          I'm <span className="font-semibold">Joshua Suriyan</span>, a passionate <span className="font-semibold">MERN Stack Developer</span> with a strong foundation in JavaScript, Node.js, Express, and MongoDB. I specialize in building dynamic and responsive web applications using HTML, CSS, Tailwind CSS, and modern JavaScript frameworks.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          I'm enthusiastic about developing full-stack solutions and enjoy crafting component-based frontend interfaces. My recent self-initiated projects include a <span className="font-medium">TripAdvisor Clone</span> and <span className="font-medium">Greenden</span> – an online flower shopping platform, both showcasing my skills in frontend development and UI design using Tailwind CSS.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          I'm currently pursuing my <span className="font-semibold">B.Tech in Computer Science Engineering</span> at Karunya University and have earned multiple certifications in JavaScript and MongoDB. I’ve also authored IEEE-recognized research papers on assistive technologies and monitoring systems.
        </p>
        <p className="text-lg leading-relaxed">
          I’m always looking for opportunities to grow, learn, and contribute to impactful web solutions.
        </p>
      </div>
    </div>
  );
}

export default About;
