import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      icon: '🏆',
      title: 'Accenture GEMS Program',
      description: 'Selected for prestigious Girls in Engineering Mentorship & Self-Development program',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🎓',
      title: 'HDFC Scholarship',
      description: 'Recipient of HDFC Badhte Kadam Scholarship for academic excellence',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: '💼',
      title: '4+ Internships',
      description: 'Completed internships at Infosys, Suvidha Foundation, Csharptek, and C-DAC',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '📜',
      title: '15+ Certifications',
      description: 'Industry certifications from Cisco, ISC2, AWS, TCS, and more',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '👥',
      title: 'Student Coordinator',
      description: 'Training & Placement Cell and IT Department activities coordinator',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: '🎤',
      title: 'Elocution Awards',
      description: 'Multiple awards in elocution competitions at school and college level',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">Recognition</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 mt-2">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Awards</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Milestones that mark my journey of continuous learning and growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-4xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                {achievement.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                {achievement.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {achievement.description}
              </p>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${achievement.color} opacity-10 rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">8.26</div>
              <div className="text-sm md:text-base font-semibold opacity-90">CGPA</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">300+</div>
              <div className="text-sm md:text-base font-semibold opacity-90">Problems Solved</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">15+</div>
              <div className="text-sm md:text-base font-semibold opacity-90">Certifications</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">4+</div>
              <div className="text-sm md:text-base font-semibold opacity-90">Internships</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;