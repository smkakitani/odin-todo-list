// css
import './styles/style.css';
import './styles/sidebar.css';
import './styles/main-content.css';

// js
import { addProjectName } from './functions/dom-element';
import { eventNameForm } from './functions/dom-manip';
import { projectList, createProject, createTask, addProject, addTask } from './functions/project';

console.log("index.js");


eventNameForm().openNameForm();
eventNameForm().closeNameForm();
eventNameForm().submitName();



const myTask = createTask('some title', 'something something', 'some date');
const cocoPro = createProject("coco");
// projectList.push(cocoPro);
// projectList[2].task.push(myTask);
// addProject(cocoPro)
// addTask("2", myTask)


// console.log(projectList[1].task);
// console.log(projectList[2]);





// console.log(myTask.title);