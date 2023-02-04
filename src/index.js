// css
import './styles/style.css';
import './styles/sidebar.css';

// js
import { sidebar, eventProjectBtn } from './functions/dom-manip';
import { projectList, createProject, createTask, addProject, addTask } from './functions/project';

console.log("index.js");

sidebar();
eventProjectBtn();

const myTask = createTask('some title', 'something something', 'some date');
const cocoPro = createProject("coco");
// projectList.push(cocoPro);
// projectList[2].task.push(myTask);
// addProject(cocoPro)
// addTask("2", myTask)


// console.log(projectList[1].task);
// console.log(projectList[2]);





// console.log(myTask.title);