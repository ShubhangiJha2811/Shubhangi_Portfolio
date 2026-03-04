import React from 'react';

const Interests = () => {
  const interests = [
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Passionate about building intelligent systems and exploring the frontiers of artificial intelligence',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Dedicated to understanding security vulnerabilities and protecting digital infrastructure',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Creating beautiful, responsive, and user-friendly web applications with modern technologies',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: '☁️',
      title: 'Cloud Computing',
      description: 'Exploring cloud platforms and building scalable, distributed applications',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: '📊',
      title: 'Data Structures & Algorithms',
      description: 'Solving complex problems and optimizing code through efficient algorithms',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🎤',
      title: 'Public Speaking',
      description: 'Sharing knowledge and ideas through elocution and technical presentations',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const languages = [
    { name: 'English', level: 'Fluent', flag: '🇬🇧' },
    { name: 'Hindi', level: 'Native', flag: '🇮🇳' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">Beyond Code</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 mt-2">
            Interests & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Passions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What drives me and keeps me motivated in the world of technology
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${interest.color} flex items-center justify-center text-4xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                {interest.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                {interest.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black text-white mb-2">Languages</h3>
            <p className="text-purple-100">Communication is key to collaboration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {languages.map((language, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{language.flag}</span>
                    <div>
                      <h4 className="text-xl font-bold text-white">{language.name}</h4>
                      <p className="text-purple-200">{language.level}</p>
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;