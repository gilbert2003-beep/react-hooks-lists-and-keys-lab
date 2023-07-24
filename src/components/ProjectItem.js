import React from 'react';

const ProjectItem = ({ name, technologies }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Technologies used:</p>
      <ul>
        {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </ul>
    </div>
  );
};

export default ProjectItem;
