import React from 'react';

const GitHub = () => {
  const stats = [
    { label: 'Public Repositories', value: '8+', icon: '📦' },
    { label: 'Total Commits', value: '500+', icon: '💻' },
    { label: 'Pull Requests', value: '50+', icon: '🔀' },
    { label: 'Code Reviews', value: '30+', icon: '👀' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-bold text-sm uppercase tracking-wider">Open Source</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 mt-2">
            GitHub <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Activity</span>
          </h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Contributing to open source and building in public
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-sm text-purple-200">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <a
            href="https://github.com/ShubhangiJha2811"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-12 py-5 bg-white text-gray-900 font-black text-lg rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-2xl transform hover:scale-105"
          >
            <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Visit My GitHub
            <svg className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Contribution Message */}
        <div className="mt-12 text-center">
          <p className="text-purple-200 text-lg">
            💡 Check out my repositories and feel free to contribute or provide feedback!
          </p>
        </div>
      </div>
    </section>
  );
};

export default GitHub;