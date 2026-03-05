import React from 'react';

const ProjectCategories = () => {
  const projectLinks: { [key: string]: string } = {
    'ReconCraft': 'https://reconcraft-six.vercel.app/',
    'DronAI': 'https://dron-ai-lyart.vercel.app/',
    'Myntra Clone': 'https://myntra-clone-psi-seven.vercel.app/',
    'Portfolio Website': 'https://github.com/ShubhangiJha2811/Shubhangi_Portfolio',
    'StreetBase': 'https://streetbase-app.streamlit.app/',
    'Password Fortress': 'https://password-fortress-flax.vercel.app/'
  };

  const categories = [
    {
      name: 'Web Development',
      count: 4,
      icon: '🌐',
      color: 'from-blue-500 to-cyan-500',
      projects: ['ReconCraft', 'DronAI', 'Myntra Clone', 'Portfolio Website']
    },
    {
      name: 'AI & Machine Learning',
      count: 1,
      icon: '🤖',
      color: 'from-purple-500 to-pink-500',
      projects: ['StreetBase']
    },
    {
      name: 'Cybersecurity',
      count: 1,
      icon: '🔒',
      color: 'from-red-500 to-orange-500',
      projects: ['Password Fortress']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">Project Categories</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 mt-2">
            Diverse <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Projects spanning multiple domains and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-3"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon and Count */}
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {category.icon}
                </div>
                <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                  {category.count}
                </div>
              </div>

              {/* Category Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                {category.name}
              </h3>

              {/* Project List */}
              <ul className="space-y-2">
                {category.projects.map((project, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <button
                      onClick={() => window.open(projectLinks[project], '_blank', 'noopener,noreferrer')}
                      className="text-gray-600 hover:text-purple-600 hover:underline transition-colors cursor-pointer text-left"
                    >
                      {project}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCategories;