import React from 'react'
import ProjectInfo from './ProjectInfo'
import TaskList from './TaskList'

const ProjectDetail = () => {
  return (
    <>
        <ProjectInfo title="Title" date="09-04-2024" description="description" />
        <TaskList />
    </>
  )
}

export default ProjectDetail