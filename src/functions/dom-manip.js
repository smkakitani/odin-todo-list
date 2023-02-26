// import
import { createProjectNameBtn, renderProject, renderTask, createTaskForm } from './dom-element';
import { projectList, createProject, createTask, addProjectToList, addTaskToProject, removeTask } from './project';



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

      // console.log(indexOfProject);
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
  // const divContent = document.querySelector('#content');
  const divProjectList = document.querySelector('#project-list');  

  const openProject = () => {
    divProjectList.addEventListener('click', (event) => {
      const classBtn = event.target.getAttribute('class');
      const parentNode = document.querySelector('.project-container')
      const indexProject = event.target.dataset.projectIndex;

      if (classBtn === "project-btn") {
        // delete content of .project-container
        while (parentNode.firstChild) {
          parentNode.removeChild(parentNode.firstChild);
        };
        // update with selected project
        renderProject(indexProject);
        renderTask(indexProject);
        // console.log('project index = ', indexProject);
      }      
    });
  };

  return {
    openProject,
  }
};

const eventTaskForm = () => {
  const btnTask = document.querySelector('.task-container');

  const removeTaskDom = () => {
    const parentNode = document.querySelector('.task-container');
      
      while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
      };
  };

  const openEditTask = () => {
    btnTask.addEventListener('click', (event) => {
      if (event.target.parentNode.classList.contains('task-edit') && event.target.parentNode.tagName === 'BUTTON') {
        const eventBtn = event.target.parentNode;
        const eventTaskIndex = eventBtn.parentNode.dataset.taskIndex;
        const eventTaskWrapper = eventBtn.parentNode.parentNode;
        const eventTaskWrapperLast = eventTaskWrapper.lastElementChild; // to check last element child and use it to stop from opening another edit task
        const eventProjectIndex = eventTaskWrapper.parentNode.parentNode.dataset.projectIndex;

        if (eventTaskWrapperLast.classList.contains('project-task')) {
          // append .task-form with task index to .task-wrapper with same task index
          const taskForm = createTaskForm(eventProjectIndex, eventTaskIndex);
          eventTaskWrapper.appendChild(taskForm);
          
          // console.log('open edit task');
          } else  {
            return;
          }
      };
    });
  };

  const submitTaskForm = () => {
    btnTask.addEventListener('submit', (event) => {
      if (event.target.tagName === 'FORM') {
        const eventBtn = event.target;
        const eventTask = eventBtn.parentNode;
        const eventTaskIndex = eventBtn.parentNode.dataset.taskIndex;
        const eventProjectIndex = eventBtn.parentNode.parentNode.parentNode.parentNode.dataset.projectIndex;

        // form field values
        let inputName = eventBtn.querySelector('#form-name').value;
        let inputDescription = eventBtn.querySelector('#form-description').value;
        let inputDueDate = eventBtn.querySelector('#form-due-date').value;

        // update each item inside the task
        projectList[eventProjectIndex].task[eventTaskIndex].taskTitle = inputName;
        projectList[eventProjectIndex].task[eventTaskIndex].description = inputDescription;
        projectList[eventProjectIndex].task[eventTaskIndex].date = inputDueDate;

        // remove tasks and update all tasks
        removeTaskDom();
        renderTask(eventProjectIndex);
      } else {
        return;
      }
      event.preventDefault();
    });
  };

  const cancelEditTask = () => {
    btnTask.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON' && event.target.classList.contains('form-cancel')) {
        const eventBtn = event.target;
        const eventTaskForm = eventBtn.parentNode.parentNode.parentNode;
        const eventTaskWrapper = eventBtn.parentNode.parentNode.parentNode.parentNode;

        // remove .task-form from current .task-wrapper
        eventTaskWrapper.removeChild(eventTaskForm);
        
        // console.log('cancel edit task');
      } else {
        return;
      }   
    });
  };

  const deleteTask = () => {
    btnTask.addEventListener('click', (event) => {
      if (event.target.parentNode.tagName === 'BUTTON' && event.target.parentNode.classList.contains('task-delete')) {
        const eventBtn = event.target.parentNode;
        const eventTaskIndex = eventBtn.parentNode.dataset.taskIndex;
        const eventProjectIndex = eventBtn.parentNode.parentNode.parentNode.parentNode.dataset.projectIndex;

        removeTask(eventProjectIndex, eventTaskIndex);
        removeTaskDom();
        renderTask(eventProjectIndex);

        // console.log('delete task');
      } else {
        return;
      }
    });
  };

  // console.log(btnTask);
  return {
    openEditTask,
    cancelEditTask,
    submitTaskForm,
    deleteTask,
  }
};

const eventAddTask = () => {
  const btnAddTask = document.querySelector('.project-container');
  let currentDay = new Date().toISOString().slice(0, 10);
  const newTask = createTask('Task Title', 'Add a description here!', currentDay);

  btnAddTask.addEventListener('click', (event) => {
    const eventBtn = event.target;
    const eventProjectIndex = eventBtn.parentNode.parentNode.dataset.projectIndex;

    if (eventBtn.tagName === "BUTTON" && eventBtn.id === "add-task") {
      // add default task to current project
      addTaskToProject(eventProjectIndex, newTask);

      // DOM stuff
      removeTaskDom();
      renderTask(eventProjectIndex);

      console.log(eventBtn);
    } else {
      return;
    }
    // console.log(eventBtn.tagName);
  });

  const removeTaskDom = () => {
    const parentNode = document.querySelector('.task-container');
      
      while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
      };
  };

  // console.log(btnAddTask);
};

export { eventNameForm, openProjectName, eventTaskForm, eventAddTask };