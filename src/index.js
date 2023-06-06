import Projects, { projectArray, addProject } from "./modules/projects.js";

import inboxTask, { inbox, newTask, createInboxTasks, showInboxSelectors, closeInboxSelectors, inboxForm} from "./modules/tasks.js";

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
    const projectTitle = document.createElement('h2');

    const projectOption = document.createElement('option');

    // Classes for the project card
    projectTitle.classList.add('p-card');

    // The content of the Project cards
    for(let i = 0; i < projectArray.length; i++){
        projectTitle.textContent = projectArray[i].title;
        projectOption.textContent = projectArray[i].title;
        projectOption.value = projectArray[i].title;
        
        projectCard.append(projectTitle);

        taskSelector.appendChild(projectOption);
        projectCard.id = projectArray[i].id;
        
        projectDisplay.appendChild(projectCard);
    }

    
const projectElements = document.querySelectorAll('.p-card');
    
projectElements.forEach(projectElement => {
    projectElement.addEventListener('click', displayProjectTasks);
    });
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

console.log(inbox);

// Create a display that will show the appropriate tasks based on which 'project' is selected, either Inbox or any of the projects. The display needs to update based on when the projects array updates and when the task list updates.

export function displayProjectTasks(event) {
    let param = document.querySelector('.p-card').textContent;


    const selectedProject = projectArray.find((project) => project.title === param);
    if (selectedProject && selectedProject.tasks && selectedProject.tasks.length > 0) {
        const taskDisplay = document.getElementById('selected-task-display');
        taskDisplay.innerHTML = '';
    
        for (let i = 0; i < selectedProject.tasks.length; i++) {
            const taskCard = document.createElement('div');
            const taskCheckBox = document.createElement('input');
            const taskLabel = document.createElement('label');

            taskCheckBox.type = 'checkbox';
            taskLabel.textContent = selectedProject.tasks[i];

            taskCard.append(taskCheckBox, taskLabel);
            taskDisplay.appendChild(taskCard);
        }
    }
}

export function displayInboxTasks() {

}