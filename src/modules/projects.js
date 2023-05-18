 export const projectArray = [];

export default class Projects {
    constructor(title, priority, dueDate, notes) {
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
        this.notes = notes;
    }
};

 export function addProject() {
    let title = document.getElementById('projectname').value;
    let priority = '';
    let radioButtons = document.querySelectorAll('input[name="priority"]');
    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        priority = radioButtons[i].value;
        break;
      }
    }
    let dueDate = document.getElementById('myDate').value;
    let notes = document.getElementById('notes').value;
    let newProject = new Projects(title, priority, dueDate, notes);
    projectArray.push(newProject);
    document.querySelector('form').reset();
};