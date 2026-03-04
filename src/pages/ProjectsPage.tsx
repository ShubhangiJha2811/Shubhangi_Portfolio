import React from 'react';
import SEO from '../components/SEO';
import Projects from '../components/Projects';
import ProjectCategories from '../components/projects/ProjectCategories';
import GitHub from '../components/projects/GitHub';

const ProjectsPage = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Projects - Shubhangi Jha"
        description="Explore my portfolio of projects including StreetBase, Password Fortress, ReconCraft, DronAI, and more. Full Stack, AI/ML, and Cybersecurity projects."
        url="https://your-domain.com/projects"
      />
      <Projects />
      <ProjectCategories />
      <GitHub />
    </div>
  );
};

export default ProjectsPage;