import React, { useId, useRef } from 'react'
import { useProject } from '../store/project-task'

function validate(input) {
    return input && input.trim() !== "";
}

const CreateProject = () => {
  const { createProject, unselectProject } = useProject();
  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();
  const id = useId();

  function handleSave() {
    if (
        validate(titleRef.current.value) &&
        validate(descRef.current.value) &&
        validate(dueDateRef.current.value)
    ) {
        createProject({
            id,
            title: titleRef.current.value,
            description: descRef.current.value,
            dueDate: dueDateRef.current.value
        });
        unselectProject()
    } else {
        alert("Input is not complete");
    }
  }

  return (
    <>
        <div>
            <p className="flex flex-col gap-1 my-4">
                <label className="text-sm font-bold uppercase text-stone-500">TITLE</label>
                <input ref={titleRef} required className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
            </p>
            <p className="flex flex-col gap-1 my-4">
                <label className="text-sm font-bold uppercase text-stone-500">DESCRIPTION</label>
                <textarea ref={descRef} required className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
            </p>
            <p className="flex flex-col gap-1 my-4">
                <label className="text-sm font-bold uppercase text-stone-500">DUE DATE</label>
                <input ref={dueDateRef} required type='date' className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
            </p>
        </div>
        <menu className="flex items-center justify-end gap-4 my-4">
            <button className="text-stone-700 hover:text-stone-950" onClick={unselectProject}>Cancel</button>
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button>
        </menu>
    </>
  )
}

export default CreateProject