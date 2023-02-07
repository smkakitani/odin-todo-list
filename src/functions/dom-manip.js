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
import { createProjectNameBtn } from './dom-element';



const eventNameForm = () => {
  const nameForm = document.querySelector('#name-form');
  const addProjectBtn = document.querySelector('.add-btn');

  const openNameForm = () => {
    addProjectBtn.addEventListener('click', () => {
      if (nameForm.classList.contains('hidden')) {
        nameForm.classList.remove('hidden');
      } else {
        nameForm.classList.add('hidden');
      }
      // console.log('aaaa');
    });
  };

  const closeNameForm = () => {
    const closeForm = document.querySelector('.close-form');
    closeForm.addEventListener('click', (event) => {
      nameForm.classList.add('hidden');
      console.log(event.target);
    });
  };

  const submitName = () => {
    const submitBtn = document.querySelector('#name-form form');

    submitBtn.addEventListener('submit', (ele) => {
      const projectName = document.querySelector('#project-name').value;

      // get projectName and send to div project and button project
      createProjectNameBtn(projectName);
      
      console.log(projectName);
      ele.preventDefault();
    });
  };
  


  return {
    openNameForm,
    closeNameForm,
    submitName,
  };
};

export { eventNameForm };