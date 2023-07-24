import React from 'react';
import NavBar from './NavBar';
import ProjectList from './ProjectList';
import ProjectItem from './ProjectItem'; // Make sure to import ProjectItem

const App = () => {
  const projects = [
    {
      id: 1,
      technologies: ['React', 'JavaScript', 'CSS'],
    },
    {
      id: 2,
      technologies: ['Vue', 'JavaScript', 'HTML'],
    },
    {
      id: 3,
      technologies: ['Angular', 'TypeScript', 'SCSS'],
    },
  ];

  return (
    <div>
      <NavBar />
      {/* Other components like Home and About go here */}
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
