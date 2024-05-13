import React, { useRef } from 'react'
import { useProject } from '../../store/project-task'
import Task from './Task';

const TaskList = () => {
  const taskRef = useRef();  
  const { selectedProject, tasks, addTask } = useProject();
  
  const filteredTasks = tasks?.filter(task => task.projectId === selectedProject.id);

  function handleAdd() {
    if (taskRef.current.value && taskRef.current.value.trim() !== "") {
        addTask({
            title: taskRef.current.value
        });
        taskRef.current.value = "";
    }
  }

  return (
    <>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <div className="flex items-center gap-4">
            <input ref={taskRef} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
            <button className="text-stone-700 hover:text-stone-950" onClick={handleAdd}>Add Task</button>
        </div>
        {filteredTasks.length !== 0 && 
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {filteredTasks?.map(task => (
                    <Task key={task.id} task={task} />
                ))}
            </ul>
        }
    </>
  )
}

export default TaskList