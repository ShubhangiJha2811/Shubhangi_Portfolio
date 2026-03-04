import React from 'react';

const Timeline = () => {
  const milestones = [
    {
      year: '2025',
      title: 'Multiple Internships & Certifications',
      description: 'Completed 4 internships at leading organizations and earned 15+ industry certifications',
      icon: '🚀',
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2024',
      title: 'Accenture GEMS Program',
      description: 'Selected for prestigious Girls in Engineering Mentorship program with structured learning',
      icon: '🏆',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2023',
      title: 'Student Leadership Roles',
      description: 'Appointed as Student Coordinator for Training & Placement Cell and IT Department',
      icon: '👥',
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2022',
      title: 'Started B-Tech Journey',
      description: 'Began Bachelor of Technology in Information Technology at VBU with 90% in Intermediate',
      icon: '🎓',
      color: 'from-orange-500 to-red-500'
    },
    {
      year: '2020',
      title: 'Academic Excellence',
      description: 'Completed ICSE with 93%, laying strong foundation for engineering career',
      icon: '📚',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 mt-2">
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Timeline</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key milestones that shaped my professional and academic journey
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-200 via-pink-200 to-indigo-200"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${milestone.color} border-4 border-white shadow-lg`}></div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2">
                    <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${milestone.color} flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        {milestone.icon}
                      </div>
                      <span className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${milestone.color}`}>
                        {milestone.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
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

export default Timeline;