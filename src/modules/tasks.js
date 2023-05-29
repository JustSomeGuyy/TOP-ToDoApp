import Projects, { addProjectTasks, projectArray } from "./projects.js";
import { taskSelector } from "../index.js";

export const inbox = [];

export default class inboxTask {
    constructor(title, priority, dueDate) {
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
    }
}

export function newTask() {
    let title = document.getElementById('task-selector').value;

    removeTaskButtonListener();
  
    if (title === 'inbox') {
      showInboxSelectors();
      taskButton();
    } else {
      for (let i = 0; i < projectArray.length; i++) {
        if (title === projectArray[i].title) {
          closeInboxSelectors();
          addTaskButtonListener(title);
          break;
        }
      }
    }
  }

document.getElementById('task-selector').addEventListener('change', newTask)

export let tasksInput = document.getElementById('task-input');

export const inboxForm = document.getElementById('task-form');

export function showInboxSelectors() {
  inboxForm.style.display = 'block';

  let taskInput = document.createElement('input');
  taskInput.type = 'text';
  taskInput.id = 'inbox-task-input';
  // You can customize other attributes and styles for the new input element here
  // ...

  // Append the new input element to the inboxForm
  inboxForm.appendChild(taskInput);
}

export function closeInboxSelectors() {
    inboxForm.style.display = 'none';
}

export function createInboxTasks() {
    let title = tasksInput.value;
    let priority = '';
    let radioButtons = document.querySelectorAll('input[name="task-priority"]');
  for (let o = 0; o < radioButtons.length; o++) {
    if (radioButtons[o].checked) {
      priority = radioButtons[o].value;
      break;
    }
  }
  let dueDate = document.getElementById('task-date');
  let newInboxTask = new inboxTask(title, priority, dueDate);
  inbox.push(newInboxTask);
  console.log(inbox);
}

export function taskButton() {
    let inboxTaskButton = document.getElementById('new-task-button');

    inboxTaskButton.addEventListener('click', createInboxTasks);
}

function removeTaskButtonListener() {
    let projectTaskButton = document.getElementById('new-task-button');
    projectTaskButton.removeEventListener('click', createInboxTasks);
  }

  function addTaskButtonListener(title) {
    let projectTaskButton = document.getElementById('new-task-button');
    projectTaskButton.addEventListener('click', function() {
      addProjectTasks(title);
    });
  }