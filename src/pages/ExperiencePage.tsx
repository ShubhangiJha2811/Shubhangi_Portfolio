import React from 'react';
import SEO from '../components/SEO';
import Experience from '../components/Experience';
import Certifications from '../components/experience/Certifications';
import Skills from '../components/experience/Skills';

const ExperiencePage = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Experience - Shubhangi Jha"
        description="Internships at Infosys Springboard, Suvidha Foundation, Csharptek, CyberGyan C-DAC. 15+ certifications in AI, Cybersecurity, and Development."
        url="https://your-domain.com/experience"
      />
      <Experience />
      <Certifications />
      <Skills />
    </div>
  );
};

export default ExperiencePage;