import React from 'react'
import { useProject } from '../../store/project-task'

const ProjectInfo = () => {
  const { selectedProject, unselectProject, deleteProject } = useProject();

  function handleDelete() {
    deleteProject(selectedProject.id);
    unselectProject();
  }

  return (
    <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">{selectedProject?.title}</h1>
            <button className="text-stone-600 hover:text-stone-950" onClick={handleDelete}>Delete</button>
        </div>
        <p className="mb-4 text-stone-400">{selectedProject?.dueDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{selectedProject?.description}</p>
    </header>
  )
}

export default ProjectInfo