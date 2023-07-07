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
        const projectTitle = document.createElement('p');
        
        projectTitle.classList.add('project-title', 'hover');

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
const closeButton = document.getElementById('close-form');

function showForm() {
    projectForm.style.display = 'block';
}

export function closeForm(){
    projectForm.style.display = 'none';
}

const showProjectForm = document.getElementById('new-project');

closeButton.addEventListener('click', closeForm);

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

let projectDisplay = document.getElementById('project-display');

function closeProjectDisplay() {
  projectDisplay.style.display = 'none';
}

function openProjectDisplay() {
  projectDisplay.style.display = 'flex';
}

let inboxDisplay = document.getElementById('inbox-display');

function closeInboxDisplay() {
  inboxDisplay.style.display = 'none';
}

function openInboxDisplay() {
  inboxDisplay.style.display = 'flex';
}

// Create a display that will show the appropriate tasks based on which 'project' is selected, either Inbox or any of the projects. The display needs to update based on when the projects array updates and when the task list updates.

export function displayProjectTasks(project) {
    const selectedProject = projectArray.find((p) => p.title === project.title);
  
    if (selectedProject && selectedProject.tasks && selectedProject.tasks.length > 0) {
        openProjectDisplay();
        const taskInfoDisplay = document.getElementById('project-display');
        taskInfoDisplay.innerHTML = '';

        const taskDisplay = document.createElement('div');
        const projectModalTitle = document.createElement('p')
        const projectDate = document.createElement('p');
        const projectPriority = document.createElement('p');
        const projectNotes = document.createElement('p');
        const displayProjectInfo = document.createElement('div');

        projectModalTitle.textContent = selectedProject.title;
        projectDate.textContent = `Due: ${selectedProject.dueDate}`;
        projectPriority.textContent = `Priority: ${selectedProject.priority}`;
        projectNotes.textContent = selectedProject.notes;

        displayProjectInfo.append(projectPriority, projectDate);

        projectModalTitle.classList.add('project-display-title');
        taskDisplay.classList.add('task-display');
        displayProjectInfo.classList.add('prio-date');
        projectNotes.classList.add('p-notes');


        taskInfoDisplay.append(projectModalTitle, displayProjectInfo, projectNotes, taskDisplay);

        taskDisplay.innerHTML = '';

        for (let i = 0; i < selectedProject.tasks.length; i++) {
          const taskCard = document.createElement('div');
          const taskCheckBox = document.createElement('input');
          const taskLabel = document.createElement('label');


          taskCheckBox.type = 'checkbox';
          taskLabel.textContent = selectedProject.tasks[i];
          taskCard.classList.add('task-card');

          taskCard.append(taskCheckBox, taskLabel);
          taskDisplay.appendChild(taskCard);

          taskCheckBox.addEventListener('change', () => {
            if(taskCheckBox.checked){
              taskLabel.classList.add('completed');
            } else {
              taskLabel.classList.remove('completed');
            };
          });
        }
    }
  closeInboxDisplay();
}

displayProjectTasks();

function completed() {
  const checkBox = document.querySelector(`div.inbox-title input[for=${inbox.id}]`);
  const title = document.querySelector(`div.inbox-title p#${inbox.id}`);

  if (checkBox.getAttribute('for', inbox.id).checked === title.getAttribute('id', inbox.id)){
    title.classList.add('completed');
  }
}

const inboxTaskDisplayButton = document.getElementById('inbox-button');

inboxTaskDisplayButton.addEventListener('click', displayInboxTasks);

function displayInboxTasks() {
  openInboxDisplay();

    const inboxTaskDisplay = document.getElementById('inbox-display');
    inboxTaskDisplay.innerHTML = '';

    const title = document.createElement('h2');
    title.textContent = 'Inbox';

    inboxTaskDisplay.appendChild(title);

    for(let i = 0; i < inbox.length; i++){
      const inboxCard = document.createElement('div');
      const inboxTitle = document.createElement('p');
      const inboxCheckBox = document.createElement('input');
      const inboxDate = document.createElement('p');
      const inboxPriority = document.createElement('p');
      const inboxDiv = document.createElement('div');
      const prioDiv = document.createElement('div');

      inboxCheckBox.type = 'checkbox';

      inboxCheckBox.setAttribute('for', inbox[i].id);

      inboxTitle.setAttribute('id', inbox[i].id);

      inboxTitle.textContent = inbox[i].title;
      inboxPriority.textContent = `Priority: ${inbox[i].priority}`;
      inboxDate.textContent = `Due: ${inbox[i].dueDate}`;

      inboxCard.classList.add('inbox-card');
      inboxDiv.classList.add('inbox-title');
      prioDiv.classList.add('inbox-prio');

      inboxDiv.append(inboxCheckBox, inboxTitle);
      prioDiv.append(inboxPriority, inboxDate);

      inboxCard.append(inboxDiv, prioDiv);  
      inboxTaskDisplay.appendChild(inboxCard);

      inboxCheckBox.addEventListener('change', () => {
        if(inboxCheckBox.checked){
          inboxTitle.classList.add('completed');
          inboxPriority.classList.add('completed');
          inboxDate.classList.add('completed');
        } else {
          inboxTitle.classList.remove('completed');
          inboxPriority.classList.remove('completed');
          inboxDate.classList.remove('completed');
        };
      });
    }
  
  closeProjectDisplay();
}

function getGreeting() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
  
    let greeting;
  
    if (currentHour >= 5 && currentHour < 12) {
      greeting = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = 'Good afternoon';
    } else if (currentHour >= 18 && currentHour < 20){
      greeting = 'Good evening';
    } else {
      greeting = 'Good night';
    }
  
    return greeting;
}
  

const userGreeting = getGreeting();
const message = document.getElementById('message');

message.textContent = `${userGreeting}! Let's get sh*t done today!`;