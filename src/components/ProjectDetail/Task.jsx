import React from 'react'
import { useProject } from '../../store/project-task'

const Task = ({ task }) => {
  const { deleteTask } = useProject();
  
  return (
    <li className="flex justify-between my-4">
        {task.title}
        <button className="text-stone-700 hover:text-red-500" onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  )
}

export default Task