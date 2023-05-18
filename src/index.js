import Projects, { projectArray, addProject } from "./modules/projects.js";

let button = document.getElementById('addProject');

button.addEventListener('click', addProject);

console.log(projectArray)