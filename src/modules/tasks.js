import Projects, { projectArray } from "./projects.js";
import { taskSelector } from "..";

const inbox = [];

export default class inboxTask {
    constructor(title, priority, dueDate) {
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
    }
}

export let tasksInput = document.getElementById('task-input');


export function newTask() {
    let title = document.getElementById('task-selector').value;
    for(let i = 0; i < taskSelector.length; i++){
        if(title === inbox){
            showInboxSelectors()

        }
    }
}


export function createInboxTasks() {
    let title = document.getElementById('task-input').value;
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
  document.getElementById('new-task-form').reset();
  console.log(inbox);
}

const inboxForm = document.getElementById('task-form');

export function showInboxSelectors() {
    inboxForm.style.display = 'block';
}

export function closeInboxForm() {
    inboxForm.style.display = 'none';
}