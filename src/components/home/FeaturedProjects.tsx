import React from 'react';
import { Link } from 'react-router-dom';
import { trackExternalLink } from '../../utils/analytics';

const FeaturedProjects = () => {
  const projects = [
    {
      title: 'StreetBase - AI Real Estate',
      description: 'ML-based real estate valuation system with automated price prediction using Streamlit, Python, and Firebase.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'ML', 'Streamlit', 'Firebase'],
      gradient: 'from-blue-500 to-cyan-500',
      liveUrl: 'https://streetbase-app.streamlit.app/'
    },
    {
      title: 'Password Fortress',
      description: 'Security assessment platform with OWASP standards, entropy analysis, and crack-time modeling.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Security', 'OWASP', 'Encryption'],
      gradient: 'from-purple-500 to-pink-500',
      liveUrl: 'https://password-fortress-flax.vercel.app/'
    },
    {
      title: 'DronAI Platform',
      description: 'Educational platform for AI and Robotics with professional UI/UX design and responsive frontend.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Tailwind', 'Figma'],
      gradient: 'from-green-500 to-emerald-500',
      liveUrl: 'https://dron-ai-lyart.vercel.app/'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">My Work</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 mt-2">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing innovative solutions that blend creativity with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackExternalLink(project.liveUrl)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-3"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    View Details
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 text-xs font-semibold rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Projects
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;