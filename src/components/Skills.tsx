import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '⚡',
      gradient: 'from-yellow-400 to-orange-500',
      skills: [
        { name: 'Java', level: 90, color: 'from-red-500 to-orange-500' },
        { name: 'C++', level: 85, color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Python', level: 85, color: 'from-green-500 to-emerald-500' },
      ]
    },
    {
      title: 'Web Development',
      icon: '🌐',
      gradient: 'from-blue-400 to-indigo-500',
      skills: [
        { name: 'React', level: 90, color: 'from-cyan-400 to-blue-500' },
        { name: 'Node.js', level: 80, color: 'from-green-500 to-green-700' },
        { name: 'Tailwind CSS', level: 95, color: 'from-teal-400 to-cyan-500' },
        { name: 'FastAPI', level: 75, color: 'from-emerald-500 to-teal-600' },
      ]
    },
    {
      title: 'Specialized Skills',
      icon: '🚀',
      gradient: 'from-purple-400 to-pink-500',
      skills: [
        { name: 'Machine Learning', level: 80, color: 'from-purple-500 to-indigo-600' },
        { name: 'Cybersecurity', level: 85, color: 'from-red-500 to-pink-600' },
        { name: 'Data Structures & Algorithms', level: 90, color: 'from-indigo-500 to-purple-600' },
        { name: 'Firebase', level: 80, color: 'from-orange-500 to-red-500' },
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">What I Do Best</span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 mt-2">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Technologies</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            Mastering the tools and technologies that power modern innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-3 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-4xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mx-auto`}>
                  {category.icon}
                </div>
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-6 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 font-bold text-sm">{skill.name}</span>
                      <span className={`text-sm font-black text-transparent bg-clip-text bg-gradient-to-r ${skill.color}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden shine`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/30"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.gradient} opacity-10 rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        {/* Additional tech stack */}
        <div className="mt-16 text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git', 'Docker', 'AWS', 'Figma', 'Android Studio', 'PostgreSQL', 'MongoDB', 'Express'].map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-bold rounded-2xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transform hover:scale-110 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;