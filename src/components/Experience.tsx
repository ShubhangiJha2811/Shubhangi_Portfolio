import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI Intern',
      company: 'Infosys Springboard',
      duration: 'Oct 2025 - Dec 2025',
      type: 'Virtual Internship',
      logo: '🤖',
      color: 'from-blue-500 to-cyan-500',
      description: [
        'Developed ML-based real estate valuation system with automated price prediction capabilities',
        'Built full-stack application using Streamlit, Python, Firebase, and custom APIs',
        'Strengthened technical and soft skills through structured 8-week internship project'
      ]
    },
    {
      title: 'Web Development Intern',
      company: 'Suvidha Foundation',
      duration: 'Sep 2025',
      type: 'Virtual Internship',
      logo: '🌐',
      color: 'from-purple-500 to-pink-500',
      description: [
        'Designed Figma mockups and developed frontend of DronAI educational platform',
        'Used React and Tailwind CSS for responsive design implementation',
        'Collaborated with cross-functional teams and attended mentor-led meetings'
      ]
    },
    {
      title: 'Software Development Intern',
      company: 'Csharptek, Ranchi',
      duration: 'Jun 2025 - Jul 2025',
      type: 'On-site Internship',
      logo: '💻',
      color: 'from-green-500 to-teal-500',
      description: [
        'Developed and enhanced web applications using React and Tailwind CSS',
        'Assisted in API integration and collaborated with senior developers',
        'Gained practical experience in professional software development practices'
      ]
    },
    {
      title: 'Cybersecurity Project Trainee',
      company: 'CyberGyan C-DAC, Noida',
      duration: 'Jun 2025 - Jul 2025',
      type: 'Virtual Internship',
      logo: '🔒',
      color: 'from-red-500 to-orange-500',
      description: [
        'Learned networking, operating systems, cybersecurity, and ethical hacking fundamentals',
        'Performed hands-on labs on Google Dorks, Nmap, Keyloggers, and Wireshark',
        'Created comprehensive technical report on Deep Forensics'
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-2">Experience & Internships</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex md:items-center`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-500 shadow-lg z-10"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-3xl shadow-lg`}>
                        {exp.logo}
                      </div>
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold mb-2">{exp.company}</p>
                    <p className="text-gray-500 font-medium mb-4">{exp.duration}</p>
                    
                    <ul className="space-y-3">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;