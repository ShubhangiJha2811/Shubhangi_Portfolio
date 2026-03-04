import React from 'react';

const Skills = () => {
  const softSkills = [
    {
      skill: 'Communication',
      description: 'Clear and effective communication with diverse audiences',
      icon: '💬',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      skill: 'Problem Solving',
      description: 'Critical thinking and systematic approach to complex issues',
      icon: '🧩',
      color: 'from-purple-500 to-pink-500'
    },
    {
      skill: 'Leadership',
      description: 'Leading teams and coordinating departmental activities',
      icon: '👑',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      skill: 'Team Collaboration',
      description: 'Effective collaboration with cross-functional teams',
      icon: '🤝',
      color: 'from-green-500 to-emerald-500'
    },
    {
      skill: 'Time Management',
      description: 'Excellent prioritization and deadline management',
      icon: '⏰',
      color: 'from-red-500 to-pink-500'
    },
    {
      skill: 'Adaptability',
      description: 'Quick learner adapting to new technologies and environments',
      icon: '🔄',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">Beyond Technical</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 mt-2">
            Soft <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Essential interpersonal skills that complement technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softSkills.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                {item.skill}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;