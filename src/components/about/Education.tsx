import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology – Information Technology',
      institution: 'University College of Engineering & Technology, VBU',
      location: 'Hazaribag, Jharkhand',
      duration: '2022 – 2026',
      cgpa: '8.26 / 10',
      icon: '🎓',
      color: 'from-blue-500 to-cyan-500',
      highlights: [
        'Specialized in AI, Machine Learning, and Cybersecurity',
        'Active member of Training & Placement Cell',
        'Coordinator for IT Department activities',
        'Consistent academic excellence with 8.26 CGPA'
      ]
    },
    {
      degree: 'Intermediate – CBSE Board',
      institution: 'SSSSS Gurukulam',
      location: 'Dhanbad, Jharkhand',
      duration: '2020 – 2022',
      cgpa: '90%',
      icon: '📚',
      color: 'from-purple-500 to-pink-500',
      highlights: [
        'Scored 90% in CBSE Board Examinations',
        'Strong foundation in Mathematics and Science',
        'Active participation in extracurricular activities',
        'Multiple awards in elocution competitions'
      ]
    },
    {
      degree: 'Matriculation – ICSE Board',
      institution: 'Saint Thomas School',
      location: 'Godda, Jharkhand',
      duration: '2014 – 2020',
      cgpa: '93%',
      icon: '🏫',
      color: 'from-green-500 to-emerald-500',
      highlights: [
        'Achieved 93% in ICSE Board Examinations',
        'Consistent top performer throughout school years',
        'Leadership roles in various school activities',
        'Excellence in both academics and co-curricular'
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">Academic Journey</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 mt-2">
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Background</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A strong academic foundation built on consistent excellence and continuous learning
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-5xl shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {edu.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-semibold text-gray-700">{edu.institution}</p>
                      <p className="text-gray-500">{edu.location}</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-left md:text-right">
                      <span className={`inline-block px-4 py-2 bg-gradient-to-r ${edu.color} text-white font-bold rounded-xl shadow-md mb-2`}>
                        {edu.cgpa}
                      </span>
                      <p className="text-gray-500 font-medium">{edu.duration}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                    {edu.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} mt-2 flex-shrink-0`}></div>
                        <p className="text-gray-600 text-sm leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${edu.color} opacity-5 rounded-bl-full`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;