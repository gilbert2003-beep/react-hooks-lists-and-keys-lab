import React from 'react';
import ProjectItem from './ProjectItem'; // Import ProjectItem correctly

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <ProjectItem
          key={project.id} // Make sure to include a unique key prop
          name={project.name}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};

export default ProjectList;
