import React from 'react';
import { trackExternalLink } from '../utils/analytics';

const Projects = () => {
  const projects = [
    {
      title: 'StreetBase - AI Real Estate Valuation',
      description: 'ML-based real estate valuation system with automated price prediction capabilities. Built full-stack application using Streamlit, Python, Firebase, and custom APIs with end-to-end deployment.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Python', 'Streamlit', 'Machine Learning', 'Firebase'],
      liveUrl: 'https://streetbase-app.streamlit.app/',
      githubUrl: 'https://github.com/ShubhangiJha2811/StreetBase'
    },
    {
      title: 'Password Fortress - Security Analysis',
      description: 'Password security assessment platform aligned with OWASP standards. Features entropy analysis, salted hashing, and crack-time modeling for attack resistance measurement.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Cybersecurity', 'OWASP', 'Encryption', 'Security Analysis'],
      liveUrl: 'https://password-fortress-flax.vercel.app/',
      githubUrl: 'https://github.com/ShubhangiJha2811/Password_Fortress'
    },
    {
      title: 'ReconCraft - E-commerce Website',
      description: 'Responsive frontend for home-construction brand using React and Tailwind CSS. Professional website showcasing construction services and design expertise.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Tailwind CSS', 'Responsive Design', 'Frontend'],
      liveUrl: 'https://reconcraft-six.vercel.app/',
      githubUrl: 'https://github.com/ShubhangiJha2811/Recon.Craft'
    },
    {
      title: 'DronAI - Educational Platform',
      description: 'Educational platform website for AI and Robotics course enrollment. Designed Figma mockups and developed professional frontend with optimal user experience.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Tailwind CSS', 'Figma', 'UI/UX Design'],
      liveUrl: 'https://dron-ai-lyart.vercel.app/',
      githubUrl: 'https://github.com/ShubhangiJha2811/DronAI'
    },
    {
      title: 'Myntra Clone - E-commerce Platform',
      description: 'Fully functional Myntra clone using React, Tailwind CSS, and Axios. Implemented working sign-up/login functionality with database integration and API integration.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Tailwind CSS', 'Axios', 'API Integration'],
      liveUrl: 'https://myntra-clone-psi-seven.vercel.app/',
      githubUrl: 'https://github.com/ShubhangiJha2811/Myntra_Clone'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2">
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackExternalLink(project.liveUrl)}
                    className="flex-1 text-center px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-lg"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackExternalLink(project.githubUrl)}
                    className="flex-1 text-center px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-semibold text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;