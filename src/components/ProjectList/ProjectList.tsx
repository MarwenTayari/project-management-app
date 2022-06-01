import React from 'react';
import './ProjectList.css';
import Project from './Project';
import AddProject from './AddProject';

const ProjectList = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="project_list_container">
      <button onClick={() => setOpen(true)}>Add project</button>
      <AddProject open={open} setOpen={setOpen} />
      <div className="project_heading">Project List</div>
      <div className="Project_list">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default ProjectList;
