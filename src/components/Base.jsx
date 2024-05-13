import React from 'react';
import { useProject } from '../store/project-task';
import NoProject from './NoProject';
import CreateProject from './CreateProject';
import ProjectDetail from './ProjectDetail';

const Base = () => {
  const { selectedProject } = useProject();
  
  let content;
  if (selectedProject) {
    content = (
      <div className="w-[48rem] mt-16">    
        <ProjectDetail />
      </div>
    );
  } else if (selectedProject === undefined) {
    content = <NoProject />;
  } else {
    content = (
      <div className="w-[48rem] mt-16">    
        <CreateProject />
      </div>
    );
  }

  return (
    <>
      {content}
    </>
  )
}

export default Base