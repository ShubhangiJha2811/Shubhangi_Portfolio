import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Certified in Cybersecurity (CC)',
      issuer: 'ISC2',
      date: 'Dec 22, 2025',
      icon: '🔒',
      color: 'from-red-500 to-pink-500',
      category: 'Cybersecurity'
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: 'Dec 27, 2025',
      icon: '🛡️',
      color: 'from-blue-500 to-cyan-500',
      category: 'Cybersecurity'
    },
    {
      title: 'Generative AI Mastermind',
      issuer: 'Outskill',
      date: 'Dec 21, 2025',
      icon: '🤖',
      color: 'from-purple-500 to-pink-500',
      category: 'AI/ML'
    },
    {
      title: 'Cybersecurity Job Simulation',
      issuer: 'Mastercard',
      date: 'Sept 8, 2025',
      icon: '💳',
      color: 'from-yellow-500 to-orange-500',
      category: 'Cybersecurity'
    },
    {
      title: 'Cybersecurity Job Simulation',
      issuer: 'Telstra',
      date: 'Sept 8, 2025',
      icon: '📡',
      color: 'from-blue-500 to-indigo-500',
      category: 'Cybersecurity'
    },
    {
      title: 'Solutions Architecture Job Simulation',
      issuer: 'AWS',
      date: 'Sept 8, 2025',
      icon: '☁️',
      color: 'from-orange-500 to-yellow-500',
      category: 'Cloud'
    },
    {
      title: 'Software Engineering Job Simulation',
      issuer: 'JPMorgan Chase & Co.',
      date: 'Sept 8, 2025',
      icon: '💼',
      color: 'from-green-500 to-emerald-500',
      category: 'Software Engineering'
    },
    {
      title: 'Cybersecurity Analyst Job Simulation',
      issuer: 'Tata Consultancy Services',
      date: 'Aug 12, 2025',
      icon: '🔐',
      color: 'from-indigo-500 to-purple-500',
      category: 'Cybersecurity'
    },
    {
      title: 'GenAI Powered Data Analytics Job Simulation',
      issuer: 'Tata Consultancy Services',
      date: 'Aug 13, 2025',
      icon: '📊',
      color: 'from-cyan-500 to-blue-500',
      category: 'AI/ML'
    },
    {
      title: 'Labmentix Common Aptitude Test (LCAT)',
      issuer: 'Labmentix',
      date: 'Aug 28, 2025',
      icon: '📝',
      color: 'from-teal-500 to-cyan-500',
      category: 'Assessment'
    },
    {
      title: 'IP Awareness/Training Program',
      issuer: 'NIPAM',
      date: 'Aug 2, 2025',
      icon: '⚖️',
      color: 'from-gray-600 to-gray-800',
      category: 'Legal'
    },
    {
      title: 'Principles of Generative AI',
      issuer: 'Infosys Springboard',
      date: 'June 11, 2025',
      icon: '🧠',
      color: 'from-pink-500 to-red-500',
      category: 'AI/ML'
    },
    {
      title: 'Artificial Intelligence Primer',
      issuer: 'Infosys Springboard',
      date: 'June 11, 2025',
      icon: '🎯',
      color: 'from-teal-500 to-green-500',
      category: 'AI/ML'
    },
    {
      title: 'Cyber Job Simulation',
      issuer: 'Deloitte',
      date: 'June 9, 2025',
      icon: '🔍',
      color: 'from-green-600 to-teal-600',
      category: 'Cybersecurity'
    }
  ];

  const categories = ['All', 'Cybersecurity', 'AI/ML', 'Cloud', 'Software Engineering', 'Assessment', 'Legal'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredCertifications = selectedCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">Professional Credentials</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 mt-2">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Training</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Industry-recognized certifications demonstrating expertise across multiple domains
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-3xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                {cert.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                {cert.title}
              </h3>
              <p className="text-purple-600 font-semibold mb-1">{cert.issuer}</p>
              <p className="text-sm text-gray-500 mb-3">{cert.date}</p>
              
              {/* Category Badge */}
              <span className={`inline-block px-3 py-1 bg-gradient-to-r ${cert.color} bg-opacity-10 text-xs font-semibold rounded-full`}>
                {cert.category}
              </span>

              {/* Verification Icon */}
              <div className="absolute top-4 right-4">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl">
            <div className="text-5xl font-black text-white mb-2">14</div>
            <div className="text-white font-semibold">Professional Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;