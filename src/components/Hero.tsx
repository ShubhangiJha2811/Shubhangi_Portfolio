import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { trackButtonClick } from '../utils/analytics';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const roles = ['Full Stack Developer', 'AI Enthusiast', 'Cybersecurity Expert', 'Problem Solver'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{ transform: `translate(${-mousePosition.x}px, ${mousePosition.y}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
          style={{ transform: `translate(${mousePosition.x}px, ${-mousePosition.y}px)` }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image with 3D effect */}
          <div className={`mb-12 inline-block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              {/* Outer glow rings */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 blur-2xl opacity-60 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 blur-3xl opacity-40 animate-ping" style={{ animationDuration: '3s' }}></div>
              </div>
              
              {/* Main profile circle with actual photo */}
              <div 
                className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg) scale(1)`,
                }}
              >
                <img 
                  src="/ShubhangiPic.jpg" 
                  alt="Shubhangi Jha"
                  className="w-full h-full object-cover object-top scale-110"
                  style={{ objectPosition: '50% 20%' }}
                />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute bottom-2 right-2 flex items-center justify-center">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-12 h-12 bg-green-400 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Badge */}
          <div className={`mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl text-white rounded-full text-sm font-bold border border-white/20 shadow-2xl hover:scale-105 transition-transform">
              <span className="relative flex h-3 w-3 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Available for Opportunities
            </span>
          </div>
          
          {/* Main heading with typing effect */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 animate-gradient">
                  Shubhangi Jha
                </span>
                <span className="absolute inset-0 blur-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 opacity-50 animate-pulse"></span>
              </span>
            </h1>
          </div>
          
          {/* Animated role subtitle */}
          <div className={`mb-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="h-16 flex items-center justify-center">
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 transition-all duration-500">
                {roles[currentRole]}
              </p>
            </div>
          </div>
          
          {/* Description */}
          <p className={`text-lg md:text-xl text-purple-200 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            B-Tech IT Student crafting innovative AI solutions, securing digital landscapes, 
            and building the future one line of code at a time ✨
          </p>
          
          {/* CTA Buttons with hover effects */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              to="/projects"
              onClick={() => trackButtonClick('Hero - View My Work')}
              className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-black text-white bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-700 via-pink-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 w-full h-full">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              </span>
              <span className="relative flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                View My Work
                <svg className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            
            <Link
              to="/contact"
              onClick={() => trackButtonClick('Hero - Get In Touch')}
              className="group inline-flex items-center justify-center px-12 py-5 text-lg font-black text-white bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-xl transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
                <svg className="ml-2 w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Stats with glassmorphism and animations */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { number: '300+', label: 'Problems Solved', icon: '💻', color: 'from-blue-500 to-cyan-500' },
              { number: '8+', label: 'Projects Built', icon: '🚀', color: 'from-purple-500 to-pink-500' },
              { number: '4+', label: 'Internships', icon: '🎯', color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 cursor-default overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {stat.icon}
                </div>
                
                {/* Number */}
                <div className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-sm md:text-base text-white/80 font-bold group-hover:text-white transition-colors">
                  {stat.label}
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-white/50 text-sm font-semibold">Scroll to explore</span>
              <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-4 border-purple-500/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '10s' }}></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border-4 border-pink-500/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 border-4 border-indigo-500/30 rounded-lg animate-bounce" style={{ animationDuration: '3s' }}></div>
    </section>
  );
};

export default Hero;
