import Projects, { projectArray } from "./projects.js";
import { closeTaskForm, displayProjectTasks, taskSelector } from "../index.js";

export const inbox = [];

let selectedProjectTitle = '';

export default class inboxTask {
    constructor(title, priority, dueDate) {
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
    }
}

export function newTask() {
    let title = document.getElementById('task-selector').value;
    
    // Store the selected project title
    selectedProjectTitle = title;
    
    removeTaskButtonListener();
    
    if (title === 'inbox') {
      closeProjectInput();
      showInboxSelectors();
      taskButton();
    } else {
      closeInboxSelectors();
      showProjectInput();
      addProjectButtonListener(title);
    }
  }
  
  document.getElementById('task-selector').addEventListener('change', newTask);
  
  export const inboxForm = document.getElementById('task-form');
  
  export function showInboxSelectors() {
    inboxForm.style.display = 'block';
  }
  
  export function closeInboxSelectors() {
    inboxForm.style.display = 'none';
  }
  
  export function createInboxTasks() {
    const tasksInput = document.getElementById('add-task');
    let title = tasksInput.value;
    let priority = '';
    let radioButtons = document.querySelectorAll('input[name="task-priority"]');
    for (let o = 0; o < radioButtons.length; o++) {
      if (radioButtons[o].checked) {
        priority = radioButtons[o].value;
        break;
      }
    }
    let dueDate = document.getElementById('task-date').value;
    let newInboxTask = new inboxTask(title, priority, dueDate);
    inbox.push(newInboxTask);
    displayProjectTasks(title);
    closeTaskForm();
  }
  
  export function taskButton() {
    let inboxTaskButton = document.getElementById('new-task-button');
    inboxTaskButton.addEventListener('click', createInboxTasks);
  }
  
  function removeTaskButtonListener() {
    let inboxTaskButton = document.getElementById('new-task-button');
    inboxTaskButton.removeEventListener('click', createInboxTasks);
  }

  function removeProjectButtonListener() {
    projectTaskButton.removeEventListener('click', addProjectTasks);
}
  
  function addProjectButtonListener() {
    let projectTaskButton = document.getElementById('new-task-button');
    projectTaskButton.addEventListener('click', function() {
      addProjectTasks(selectedProjectTitle);
    });
  }
  
  export function addProjectTasks(title) {
    let task = document.getElementById('project-task-input').value;
    
    const targetProject = projectArray.find((project) => project.title === title);
    if (targetProject) {
      targetProject.tasks.push(task);
      displayProjectTasks(targetProject)
    }

    selectedProjectTitle = targetProject;

    closeTaskForm();
  }

  function showProjectInput() {
    let container = document.getElementById('project-task-container');

    container.style.display = 'block';
  }

  function closeProjectInput() {
    let container = document.getElementById('project-task-container');

    container.style.display = 'none';
  }