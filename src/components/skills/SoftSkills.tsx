import React from 'react';

const SoftSkills = () => {
  const softSkills = [
    {
      title: 'Communication',
      icon: '💬',
      color: 'from-blue-500 to-cyan-500',
      description: 'Clear and effective communication with diverse audiences',
      skills: ['Verbal Communication', 'Written Communication', 'Presentation Skills', 'Active Listening']
    },
    {
      title: 'Problem Solving',
      icon: '🧩',
      color: 'from-purple-500 to-pink-500',
      description: 'Critical thinking and systematic approach to complex issues',
      skills: ['Analytical Thinking', 'Creative Solutions', 'Decision Making', 'Troubleshooting']
    },
    {
      title: 'Leadership',
      icon: '👑',
      color: 'from-orange-500 to-yellow-500',
      description: 'Leading teams and coordinating projects effectively',
      skills: ['Team Management', 'Project Coordination', 'Mentoring', 'Delegation']
    },
    {
      title: 'Teamwork',
      icon: '🤝',
      color: 'from-green-500 to-emerald-500',
      description: 'Effective collaboration with team members and stakeholders',
      skills: ['Collaboration', 'Conflict Resolution', 'Empathy', 'Flexibility']
    },
    {
      title: 'Time Management',
      icon: '⏰',
      color: 'from-red-500 to-pink-500',
      description: 'Excellent prioritization and deadline management',
      skills: ['Task Prioritization', 'Meeting Deadlines', 'Multitasking', 'Planning']
    },
    {
      title: 'Adaptability',
      icon: '🔄',
      color: 'from-indigo-500 to-purple-500',
      description: 'Quick learning and adapting to new technologies',
      skills: ['Learning Agility', 'Resilience', 'Open-mindedness', 'Innovation']
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-3"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-4xl mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {skill.description}
              </p>

              {/* Skills list */}
              <div className="space-y-2">
                {skill.skills.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}></div>
                    <span className="text-sm text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Decorative element */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${skill.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
              4+
            </div>
            <div className="text-sm text-gray-600 font-semibold">Internships</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
              8+
            </div>
            <div className="text-sm text-gray-600 font-semibold">Team Projects</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-2">
              100%
            </div>
            <div className="text-sm text-gray-600 font-semibold">Punctuality</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border border-orange-100">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600 mb-2">
              High
            </div>
            <div className="text-sm text-gray-600 font-semibold">Confidence</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
