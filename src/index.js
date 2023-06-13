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
    const projectDisplay = document.getElementById('array-titles');
    const projectOption = document.createElement('option');

  
    // Clear the project display before appending new project titles
    projectDisplay.innerHTML = '';
  
    for (let i = 0; i < projectArray.length; i++) {
        const projectTitle = document.createElement('h3');
        
        projectTitle.classList.add('text-2xl', 'py-3', 'font-extralight', 'hover:shadow-lg', 'rounded', 'cursor-pointer', 'text-center', 'w-1/2');

        projectTitle.textContent = projectArray[i].title;
        projectOption.textContent = projectArray[i].title;
        projectOption.value = projectArray[i].title;


        taskSelector.appendChild(projectOption);
        projectTitle.id = projectArray[i].title;

        projectDisplay.appendChild(projectTitle);
        
        // Attach event listener to each project title element
        projectTitle.addEventListener('click', () => displayProjectTasks(projectArray[i]));
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

console.log(inbox);

// Create a display that will show the appropriate tasks based on which 'project' is selected, either Inbox or any of the projects. The display needs to update based on when the projects array updates and when the task list updates.

export function displayProjectTasks(project) {
    const selectedProject = projectArray.find((p) => p.title === project.title);
  
    if (selectedProject && selectedProject.tasks && selectedProject.tasks.length > 0) {
        const taskInfoDisplay = document.getElementById('project-display');
        taskInfoDisplay.innerHTML = '';

        const taskDisplay = document.createElement('div');
        const projectModalTitle = document.createElement('h3')
        const projectDate = document.createElement('p');
        const projectPriority = document.createElement('p');
        const projectNotes = document.createElement('p');

        projectModalTitle.textContent = selectedProject.title;
        projectDate.textContent = `Due: ${selectedProject.dueDate}`;
        projectPriority.textContent = `Priority: ${selectedProject.priority}`;
        projectNotes.textContent = selectedProject.notes;

        taskInfoDisplay.append(projectModalTitle, projectDate, projectPriority, projectNotes, taskDisplay)

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

displayProjectTasks();

const inboxTaskDisplayButton = document.getElementById('inbox-button');

inboxTaskDisplayButton.addEventListener('click', displayInboxTasks);

function displayInboxTasks() {
    const inboxTaskDisplay = document.getElementById('inbox-display');
    inboxTaskDisplay.innerHTML = '';

    for(let i = 0; i < inbox.length; i++){
        const inboxCard = document.createElement('div');
        const inboxTitle = document.createElement('h4');
        const inboxCheckBox = document.createElement('input');
        const inboxDate = document.createElement('p');
        const inboxPriority = document.createElement('p');

        inboxCheckBox.type = 'checkbox';
        
        inboxTitle.textContent = inbox[i].title;
        inboxPriority.textContent = `Priority: ${inbox[i].priority}`;
        inboxDate.textContent = `Due: ${inbox[i].dueDate}`;

        inboxCard.append(inboxCheckBox, inboxTitle, inboxPriority, inboxDate);

        inboxTaskDisplay.appendChild(inboxCard);
    }
}

function getGreeting() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
  
    let greeting;
  
    if (currentHour >= 5 && currentHour < 12) {
      greeting = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good evening';
    }
  
    return greeting;
  }
  
  
  const userGreeting = getGreeting();
  const message = document.getElementById('message');

  message.textContent = `${userGreeting}, User!`;