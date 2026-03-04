import React from 'react';

const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Get to know me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-2">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/ShubhangiPic.jpg" 
                  alt="Shubhangi Jha"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 20%' }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-xl flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold">8.26</div>
                  <div className="text-xs">CGPA</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-gray-900">
              Passionate Developer & Problem Solver
            </h3>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              I'm a highly motivated B-Tech IT student (2022-2026) at University College of Engineering & Technology, VBU, 
              with a CGPA of 8.26. I specialize in Java, C++, JavaScript, and have solved 300+ coding problems. 
              I'm passionate about AI, Cybersecurity, and full-stack web development.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Through multiple internships at Infosys Springboard, Suvidha Foundation, Csharptek, and CyberGyan C-DAC, 
              I've gained hands-on experience in machine learning, web development, and cybersecurity. I love building 
              innovative solutions and have worked on projects ranging from AI-based real estate valuation to cybersecurity tools.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                <div className="text-blue-600 mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-lg">Education</h4>
                <p className="text-gray-600 text-sm">B-Tech IT (2022-2026)</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
                <div className="text-purple-600 mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-lg">Projects</h4>
                <p className="text-gray-600 text-sm">8+ Major Projects</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl border border-pink-100">
                <div className="text-pink-600 mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-lg">Location</h4>
                <p className="text-gray-600 text-sm">Dhanbad, India</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl border border-green-100">
                <div className="text-green-600 mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-lg">Availability</h4>
                <p className="text-gray-600 text-sm">Open to Work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;