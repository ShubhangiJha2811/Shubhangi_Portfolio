import React from 'react';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'shubhangijha2811@gmail.com',
      link: 'mailto:shubhangijha2811@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      description: 'Send me an email anytime'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 9142438639',
      link: 'tel:+919142438639',
      color: 'from-green-500 to-emerald-500',
      description: 'Call or WhatsApp me'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Dhanbad, Jharkhand, India',
      link: '#',
      color: 'from-purple-500 to-pink-500',
      description: 'Open to relocation'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/shubhangi-jha-19011a287',
      link: 'https://www.linkedin.com/in/shubhangi-jha-19011a287',
      color: 'from-indigo-500 to-blue-500',
      description: 'Connect professionally'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 mt-2">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Information</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Multiple ways to reach out - choose what works best for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0`}>
                  {method.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                    {method.title}
                  </h3>
                  <p className={`text-transparent bg-clip-text bg-gradient-to-r ${method.color} font-semibold mb-2`}>
                    {method.value}
                  </p>
                  <p className="text-sm text-gray-500">{method.description}</p>
                </div>

                <svg className="w-6 h-6 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Availability Status */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
          <div className="flex items-center justify-center space-x-4">
            <div className="relative">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <p className="text-lg font-bold text-gray-900">
              Currently available for internships and freelance opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;