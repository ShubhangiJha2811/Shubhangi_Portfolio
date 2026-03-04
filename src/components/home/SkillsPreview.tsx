import React from 'react';
import { Link } from 'react-router-dom';

const SkillsPreview = () => {
  const skillCategories = [
    {
      icon: '⚡',
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🚀',
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'FastAPI', 'Firebase'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      skills: ['TensorFlow', 'Scikit-learn', 'Data Analysis', 'ML Models'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      skills: ['Ethical Hacking', 'Network Security', 'Penetration Testing', 'OWASP'],
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">What I Bring to the Table</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 mt-2">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A diverse skill set spanning multiple domains of modern software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <span className="text-gray-600 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/skills"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Skills
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;