
// import React, { FC } from "react";

// interface AboutProps {} // No props needed now, but ready for future use

// const About: FC<AboutProps> = () => {
//   return (
//     <section id="about" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6 md:px-12 lg:px-24">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center md:text-left">
//           About Me
//         </h2>

//         {/* Content */}
//         <div className="flex flex-col md:flex-row md:items-center gap-8">
//           {/* Text */}
//           <div className="md:w-2/3">
//             <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
//               I am actively learning <span className="font-semibold text-indigo-600">web development</span> — focusing on:
//             </p>
//             <ul className="list-disc list-inside text-gray-700 text-lg md:text-xl space-y-2">
//               <li><span className="font-medium">HTML5 & CSS3</span> (Flexbox, Grid, responsive design)</li>
//               <li><span className="font-medium">JavaScript</span> (DOM manipulation, localStorage)</li>
//               <li><span className="font-medium">React & TypeScript</span> for building scalable apps</li>
//               <li><span className="font-medium">Tailwind CSS</span> for modern, responsive UI</li>
//             </ul>
//             <p className="mt-4 text-gray-700 text-lg md:text-xl">
//               I dedicate around <span className="font-semibold text-indigo-600">25 hours per week</span> to mastering these skills and creating practical projects.
//             </p>
//           </div>

//           {/* Optional image or illustration */}
//           <div className="md:w-1/3 flex justify-center md:justify-end">
//             <img 
//               src="/about-me-illustration.svg" 
//               alt="About Me Illustration" 
//               className="w-64 md:w-48 lg:w-64"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-50 px-6 md:px-12">
      {/* Navigation */}
      <nav className="w-full flex justify-between items-center py-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-teal-600">Manizabayo Elie</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-teal-600 cursor-pointer">Home</li>
          <li className="hover:text-teal-600 cursor-pointer">About</li>
          <li className="hover:text-teal-600 cursor-pointer">Projects</li>
          <li className="hover:text-teal-600 cursor-pointer">Experience</li>
          <li className="hover:text-teal-600 cursor-pointer">Contact</li>
          <li className="cursor-pointer">🌙</li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col items-center gap-6 mt-16">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900">
          Hi, I’m <span className="text-teal-600">Manizabayo Elie</span>
        </h2>
        <p className="text-lg md:text-2xl text-gray-700 max-w-xl">
          Frontend Developer crafting scalable, user-friendly digital experiences using modern technologies
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-6">
          <a
            href="#projects"
            className="bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-8 text-gray-700 text-2xl">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 animate-bounce">
        <span className="text-gray-500 text-2xl">⬇</span>
      </div>
    </section>
  );
};

export default Hero;

