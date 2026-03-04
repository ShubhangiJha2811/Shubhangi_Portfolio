import React from 'react';
import SEO from '../components/SEO';
import Skills from '../components/Skills';
import TechStack from '../components/skills/TechStack';
import LearningPath from '../components/skills/LearningPath';
import SoftSkills from '../components/skills/SoftSkills';

const SkillsPage = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Skills - Shubhangi Jha"
        description="Technical skills: Java, C++, JavaScript, Python, React, Node.js, Machine Learning, Cybersecurity. 300+ DSA problems solved."
        url="https://your-domain.com/skills"
      />
      <Skills />
      <SoftSkills />
      <TechStack />
      <LearningPath />
    </div>
  );
};

export default SkillsPage;