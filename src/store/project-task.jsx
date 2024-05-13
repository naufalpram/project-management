import { createContext, useContext, useState } from "react";
import { getProjects, getTasks, persistProjects, persistTasks } from "../helper/localStorage";

const ProjectContext = createContext({
    projects: [],
    tasks: [],
    selectedProject: undefined,
    createProject: () => {},
    deleteProject: () => {},
    addTask: () => {},
    deleteTask: () => {},
    selectProject: () => {},
    unselectProject: () => {},
    startCreate: () => {}
})

function deepCopy(obj) {
    return obj.map(item => ({...item}));
}

const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState(getProjects());
    const [tasks, setTasks] = useState(getTasks());
    const [selectedProject, setSelectedProject] = useState(undefined);

    function createProject(payload) {
        const updatedProjects = deepCopy(projects);
        const incrementId = Math.random() * 1000;
        updatedProjects.push({...payload, id: payload.id + incrementId.toFixed(3)});
        persistProjects(updatedProjects);
        setProjects(updatedProjects);
    }

    function deleteProject(id) {
        setProjects(prevProjects => {
            const filteredProjects = prevProjects.filter(project => project.id !== id);
            persistProjects(filteredProjects);
            return filteredProjects;
        });
        setTasks(prevTasks => {
            const filteredTasks = prevTasks.filter(task => task.projectId !== selectedProject.id);
            persistTasks(filteredTasks);
            return filteredTasks;
        });
    }

    function addTask(payload) {
        const updatedTasks = deepCopy(tasks);
        const incrementId = Math.random() * 1000;
        updatedTasks.push({...payload, projectId: selectedProject.id, id: selectedProject.id + incrementId.toFixed(3)});
        persistTasks(updatedTasks);
        setTasks(updatedTasks);
    }

    function deleteTask(id) {
        setTasks(prevTasks => {
            const filteredTasks = prevTasks.filter(task => task.projectId !== selectedProject.id || task.id !== id);
            persistTasks(filteredTasks);
            return filteredTasks;
        });
    }

    function startCreate() {
        setSelectedProject(null);
    }

    function selectProject(id) {
        setSelectedProject(projects.find(project => project.id === id));
    }

    function unselectProject() {
        setSelectedProject(undefined);
    }

    return (
        <ProjectContext.Provider value={{
            projects, tasks, selectedProject, createProject, deleteProject, addTask, deleteTask, 
            selectProject, unselectProject, startCreate
        }}>
            {children}
        </ProjectContext.Provider>
    )
}

const useProject = () => useContext(ProjectContext);

export { ProjectProvider, useProject };