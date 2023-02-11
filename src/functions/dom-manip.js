// click project button to show/hide projects
/* const eventProjectBtn = function() {
  const projectBtn = document.querySelector('.project-btn');
  const projectList = document.querySelector('#project-list');

  projectBtn.addEventListener('click', () => {
    if (projectList.classList.contains('hidden')) {
      projectList.classList.remove('hidden');
    } else if (!projectList.classList.contains('hidden')){
      projectList.classList.add('hidden');
    }
  });
}; */

// import
import { createProjectNameBtn, renderProject } from './dom-element';
import { projectList, createProject, addProjectToList } from './project';



const eventNameForm = () => {
  const nameForm = document.querySelector('#name-form');
  const addProjectBtn = document.querySelector('.add-btn');

  const showHideNameForm = () => {
    if (nameForm.classList.contains('hidden')) {
      nameForm.classList.remove('hidden');
    } else {
      nameForm.classList.add('hidden');
    }
    console.log('show or hide name form');
  };

  const openNameForm = () => {
    addProjectBtn.addEventListener('click', showHideNameForm)
  };

  const closeNameForm = () => {
    const closeForm = document.querySelector('.close-form');
    closeForm.addEventListener('click', showHideNameForm)
  };

  const submitName = () => {
    const submitBtn = document.querySelector('#name-form form');

    submitBtn.addEventListener('submit', (ele) => {
      const projectName = document.querySelector('#project-name').value;

      // get projectName to create project using Factory Function and add it to projectList
      const newProject = createProject(projectName);
      addProjectToList(newProject);
      
      // get index of new project to send to project's name button
      const indexOfProject = projectList.indexOf(newProject);
      createProjectNameBtn(projectName, indexOfProject); 

      console.log(indexOfProject);
      showHideNameForm();
      ele.preventDefault(); // won´t let submit btn close form div
    });
  };
  


  return {
    openNameForm,
    closeNameForm,
    submitName,
  };
};

const openProjectName = () => {
  const divContent = document.querySelector('#content');

  const selectProjectName = () => {

  };
};

export { eventNameForm };