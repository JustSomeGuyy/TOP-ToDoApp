import { closeForm, displayProjects, taskSelector } from "../index.js";

export const projectArray = [];

export default class Projects {
    constructor(id ,title, priority, dueDate, notes) {
        this.id = id
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
        this.notes = notes;
        this.tasks = []
    }
};

// this is allows user to create projects
export function addProject() {
  let id = projectArray.length;
  let title = document.getElementById('projectname').value;
  let priority = '';
  let radioButtons = document.querySelectorAll('input[name="priority"]');
  for (let o = 0; o < radioButtons.length; o++) {
    if (radioButtons[o].checked) {
      priority = radioButtons[o].value;
      break;
    }
  }
  let dueDate = document.getElementById('project-Date').value;
  let notes = document.getElementById('notes').value;
  let newProject = new Projects(id, title, priority, dueDate, notes);
  projectArray.push(newProject);
  displayProjects()
  document.querySelector('form').reset();
  closeForm();
};

// This function allows for creating tasks in certain projects
export function addProjectTasks(title) {
  let taskInput = document.createElement('input');
  taskInput.type = 'text';
  taskInput.className = 'project-task-input';
  let task = taskInput.value;
  
  const targetProject = projectArray.find((project) => project.title === title);
  if (targetProject) {
    targetProject.tasks.push(task);
  }
}

