import React from 'react';

const TechStack = () => {
  const tools = [
    { name: 'Git', icon: '📦', category: 'Version Control' },
    { name: 'GitHub', icon: '🐙', category: 'Version Control' },
    { name: 'VS Code', icon: '💻', category: 'IDE' },
    { name: 'Android Studio', icon: '📱', category: 'IDE' },
    { name: 'Figma', icon: '🎨', category: 'Design' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'Postman', icon: '📮', category: 'API Testing' },
    { name: 'Firebase', icon: '🔥', category: 'Backend' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
    { name: 'Streamlit', icon: '⚡', category: 'Framework' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">Tools & Technologies</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 mt-2">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Stack</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tools and platforms I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-3 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
              
              <div className="text-center">
                <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {tool.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                  {tool.name}
                </h3>
                <p className="text-xs text-gray-500">{tool.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;