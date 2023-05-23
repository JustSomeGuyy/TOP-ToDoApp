import Projects, { projectArray, addProject, addProjectTasks } from "./modules/projects.js";

let button = document.getElementById('addProject');

button.addEventListener('click', addProject);

// let buttonTwo = document.getElementById('addTasks');
// buttonTwo.addEventListener('click', () => addProjectTasks(projectId));

console.log(projectArray)


// Displaying project cards on DOM once they are created
export function displayProjects() {
    const projectDisplay = document.getElementById('p-display');
    const projectCard = document.createElement('div');
    const projectTitle = document.createElement('h4');
    const projectPriority = document.createElement('h6');
    const projectDate = document.createElement('p');
    const projectNotes = document.createElement('p');
    let taskButton = document.createElement('button');
    
    // For the task drop down.
    const taskSection = document.createElement('div');
    // const tasks = document.createElement('div');
    // const doneTask = document.createElement('input[type="checkbox"]');
    // const nameOfTask = document.createElement('p');
    

    // Classes for the project card
    projectCard.classList.add('p-card');

    // The content of the Project cards
    for(let i = 0; i < projectArray.length; i++){
        projectTitle.textContent = projectArray[i].title;
        projectPriority.textContent = `Priority: ${projectArray[i].priority} `;
        projectDate.textContent =  `Due: ${projectArray[i].dueDate}`;
        projectNotes.textContent = `Notes: ${projectArray[i].notes}`;
        
        projectCard.append(projectTitle, projectPriority, projectDate, projectNotes, taskButton, taskSection);

        // Figure out how to create new button that allows users to add tasks specifically to the correct object based on which button it used
        taskButton.addEventListener('click', () => addProjectTasks());
        
        projectDisplay.appendChild(projectCard);
    }
  
    // TO DO:
    // Add a way that the tasks don't show unless they active a drop down.
    // Add a checkbox that will strike out the task
    // Add a way to delete projects

    // for adding tasks to the current project
  
  }