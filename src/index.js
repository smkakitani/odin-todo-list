// css
import './styles/style.css';
import './styles/sidebar.css';
import './styles/main-content.css';

// js
import { addProjectName, renderTask, renderProject, createProjectNameBtn, TaskFactory, createProjectNewNameForm } from './functions/dom-element';
import { eventNameForm, openProjectName, eventTaskForm, eventAddTask, openProjectEditName, deleteProjectName } from './functions/dom-manip';
import { projectList, createProject, createTask, addProjectToList, addTaskToProject } from './functions/project';

console.log("index.js");



// create a default project
const initialProject = () => {
  let currentDay = new Date().toISOString().slice(0, 10);

  // create default project and task
  const defaultProjectTitle = "My Project Name";
  
  const firstProject = createProject(defaultProjectTitle);
  const secondProject = createProject("Another Project");
  const firstTask = createTask('Cat', '12 pm - feed Meow', currentDay);
  const secondTask = createTask('Plants', 'Remember to water plants!', currentDay);

  // add default project to projectList
  addProjectToList(firstProject);
  addProjectToList(secondProject);

  const indexOfProject = projectList.indexOf(firstProject);
  const indexOfProject2 = projectList.indexOf(secondProject);

  // add project's button
  createProjectNameBtn(defaultProjectTitle, indexOfProject);
  createProjectNameBtn(secondProject.projectTitle, indexOfProject2);

  // add task to project
  addTaskToProject(indexOfProject, firstTask);
  // addTaskToProject(indexOfProject, secondTask);

  // render project
  renderProject(indexOfProject);

  // render tasks
  renderTask(indexOfProject);

  
};
initialProject();

// ./dom-manip
eventNameForm().openNameForm();
eventNameForm().closeNameForm();
eventNameForm().submitName();

openProjectName().openProject();

openProjectEditName().openEditProject();
openProjectEditName().closeEditProject();
openProjectEditName().submitEditProject();

eventTaskForm().checkTask();
eventTaskForm().openEditTask();
eventTaskForm().cancelEditTask();
eventTaskForm().submitTaskForm();
eventTaskForm().deleteTask();

eventAddTask();

deleteProjectName().deleteProject();

// console.log(eventTaskForm());

// /dom-element.js


// renderTask();





/* for (const ele of projectList[0].task) {
  console.log(ele);
}; */

/* const currentProject = projectList[indexOfProject];
const storedTask = currentProject.task;

for (const element of storedTask) {
  console.log(element)
} */



// projectList.push(cocoPro);
// projectList[2].task.push(myTask);

// addProject(cocoPro)
// addTask("2", myTask)
// console.log(projectList)

// const indexOfProject = projectList.indexOf(cocoPro);
// console.log(indexOfProject);


// console.log(projectList[1].task);
// console.log(projectList[2]);