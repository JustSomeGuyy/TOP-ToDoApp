import Projects, { projectArray, addProject } from "./modules/projects.js";

import inboxTask, {tasksInput, newTask, createInboxTasks, showInboxSelectors, closeInboxSelectors, inboxForm} from "./modules/tasks.js";

// TO DO:
    // Add a function for adding tasks based on selection from a <select> html elm. That includes the general list as well.
    // Add a checkbox that will strike out the task
    // Add a way to delete projects
    // See if there is a way to add a value to a select elem through JS, use that for adding task function param

const newTaskButton = document.getElementById('new-task');

let button = document.getElementById('addProject');

button.addEventListener('click', addProject);

export let taskSelector = document.getElementById('task-selector');

// Displaying project cards on DOM once they are created
export function displayProjects() {
    const projectDisplay = document.getElementById('p-display');
    const projectCard = document.createElement('div');
    const projectTitle = document.createElement('h4');
    const projectPriority = document.createElement('h6');
    const projectDate = document.createElement('p');
    const projectNotes = document.createElement('p');
    let taskButton = document.createElement('button');

    const projectOption = document.createElement('option');

    // Classes for the project card
    projectCard.classList.add('p-card');

    // The content of the Project cards
    for(let i = 0; i < projectArray.length; i++){
        projectTitle.textContent = projectArray[i].title;
        projectPriority.textContent = `Priority: ${projectArray[i].priority} `;
        projectDate.textContent =  `Due: ${projectArray[i].dueDate}`;
        projectNotes.textContent = `Notes: ${projectArray[i].notes}`;
        projectOption.textContent = projectArray[i].title;
        projectOption.value = projectArray[i].title;
        
        projectCard.append(projectTitle, projectPriority, projectDate, projectNotes);

        taskSelector.appendChild(projectOption);

        // Figure out how to create new button that allows users to add tasks specifically to the correct object based on which button it used

        
        projectDisplay.appendChild(projectCard);
    }
  }


//   This is for opening and closing the form that user will use to create new projects.
const projectForm = document.getElementById('project-form');

function showForm() {
    projectForm.style.display = 'block';
}

export function closeForm(){
    projectForm.style.display = 'none';
}

const showProjectForm = document.getElementById('new-project');

showProjectForm.addEventListener('click', showForm);
// End of form code


// This function set is for showing the task popup
const taskFormButton = document.getElementById('new-task');
const taskForm = document.getElementById('new-task-form')

export function showTaskForm() {
    taskForm.style.display = 'block';
}

export function closeTaskForm() {
    taskForm.style.display = 'none';
}

taskFormButton.addEventListener('click', showTaskForm);

console.log(projectArray);