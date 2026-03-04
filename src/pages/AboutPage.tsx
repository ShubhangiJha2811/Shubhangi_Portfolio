import React from 'react';
import SEO from '../components/SEO';
import About from '../components/About';
import Education from '../components/about/Education';
import Timeline from '../components/about/Timeline';
import Interests from '../components/about/Interests';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="About Me - Shubhangi Jha"
        description="Learn about Shubhangi Jha - B-Tech IT student at VBU with 8.26 CGPA. Passionate about AI, Cybersecurity, and Full Stack Development."
        url="https://your-domain.com/about"
      />
      <About />
      <Education />
      <Timeline />
      <Interests />
    </div>
  );
};

export default AboutPage;