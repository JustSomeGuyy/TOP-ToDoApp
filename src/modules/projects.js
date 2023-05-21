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
  let dueDate = document.getElementById('myDate').value;
  let notes = document.getElementById('notes').value;
  let newProject = new Projects(id, title, priority, dueDate, notes);
  projectArray.push(newProject);
  displayProjects()
  document.querySelector('form').reset();
};

// This function allows for creating tasks in certain projects
export function addProjectTasks(projectId) {
  let task = document.getElementById('project-task').value;
  const targetProject = projectArray.find(project => project.id === projectId);
  if (targetProject) {
    targetProject.tasks.push(task);
  }
}

// Displaying project cards on DOM once they are created
function displayProjects() {
  const projectDisplay = document.getElementById('p-display');
  const projectCard = document.createElement('div');
  const projectTitle = document.createElement('h4');
  const projectPriority = document.createElement('h6');
  const projectDate = document.createElement('p');
  const projectNotes = document.createElement('p');
  
  const taskSection = document.createElement('div');

  // The content of the Project cards
for(let i = 0; i < projectArray.length; i++){
    projectTitle.innerText = projectArray[i].title;
    projectPriority.innerText = `Priority: ${projectArray[i].priority} `;
    projectDate.innerText =  `Due: ${projectArray[i].dueDate}`;
    projectNotes.innerText = `Notes: ${projectArray[i].notes}`;

    projectCard.append(projectTitle, projectPriority, projectDate, projectNotes, taskSection);

    projectDisplay.appendChild(projectCard);
  }
}