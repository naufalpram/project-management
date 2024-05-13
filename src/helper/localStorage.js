function getProjects() {
    const projects = localStorage.getItem("projects");
    return projects ? JSON.parse(projects) : [];
}

function getTasks() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

function persistProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
}

function persistTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export { getProjects, getTasks, persistProjects, persistTasks }