// css
import './styles/style.css';
import './styles/sidebar.css';
import './styles/main-content.css';

// js
import { addProjectName, renderTask, createProjectNameBtn } from './functions/dom-element';
import { eventNameForm } from './functions/dom-manip';
import { projectList, createProject, createTask, addProjectToList, addTaskToProject } from './functions/project';

console.log("index.js");

// /dom-manip
eventNameForm().openNameForm();
eventNameForm().closeNameForm();
eventNameForm().submitName();

// /dom-element.js
renderTask();




const initialProject = () => {
  // create default project and task
  const defaultProjectTitle = "My Project Name";
  const firstProject = createProject(defaultProjectTitle);
  const firstTask = createTask('Cat', '12 pm - feed Meow', 'some date');
  const secondTask = createTask('Plants', 'Remember to water plants!', 'some date');

  // add default project to projectList
  addProjectToList(firstProject);

  const indexOfProject = projectList.indexOf(firstProject);

  // add project's button
  createProjectNameBtn(defaultProjectTitle, indexOfProject);

  // add task to project
  addTaskToProject(indexOfProject, firstTask);
  addTaskToProject(indexOfProject, secondTask);

  
  console.log(projectList)
};

initialProject();
// console.log(projectList)



// projectList.push(cocoPro);
// projectList[2].task.push(myTask);

// addProject(cocoPro)
// addTask("2", myTask)
// console.log(projectList)

// const indexOfProject = projectList.indexOf(cocoPro);
// console.log(indexOfProject);


// console.log(projectList[1].task);
// console.log(projectList[2]);





// console.log(myTask.title);