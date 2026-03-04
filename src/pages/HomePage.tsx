import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import SkillsPreview from '../components/home/SkillsPreview';
import Achievements from '../components/home/Achievements';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const HomePage = () => {
  return (
    <div>
      <SEO 
        title="Shubhangi Jha - Full Stack Developer & AI Enthusiast"
        description="Portfolio of Shubhangi Jha - B-Tech IT student skilled in Full Stack Development, AI/ML, and Cybersecurity. 8.26 CGPA, 300+ DSA problems solved."
        keywords="Shubhangi Jha, Full Stack Developer, AI, Machine Learning, Cybersecurity, React, Node.js, Python, Portfolio"
        url="https://your-domain.com"
      />
      <Hero />
      <SkillsPreview />
      <FeaturedProjects />
      <Achievements />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;