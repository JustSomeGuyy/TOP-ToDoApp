import Projects, { projectArray, addProject, addProjectTasks } from "./modules/projects.js";

let button = document.getElementById('addProject');

button.addEventListener('click', addProject);

let buttonTwo = document.getElementById('addTasks');

buttonTwo.addEventListener('click', () => addProjectTasks(1));

console.log(projectArray)

