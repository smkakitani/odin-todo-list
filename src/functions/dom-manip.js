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
      const eventBtn = event.target.parentNode;
      const eventTaskIndex = eventBtn.parentNode.dataset.taskIndex;
      const eventTaskWrapper = eventBtn.parentNode.parentNode;
      const eventTaskWrapperLast = eventTaskWrapper.lastElementChild;
      const eventProjectIndex = eventTaskWrapper.parentNode.parentNode.dataset.projectIndex;

      if (eventBtn.classList.contains('task-edit')) {
        // append .task-form with task index to .task-wrapper with same task index
        if (eventTaskWrapperLast.classList.contains('project-task')) {
          const taskForm = createTaskForm(eventProjectIndex, eventTaskIndex);
          eventTaskWrapper.appendChild(taskForm);
          // console.log(eventProjectIndex)
        } else {
          console.log('noo, form already opened ):');
          // console.log(eventTaskWrapperLast.classList.contains('project-task'));
          return;
        }
      }
      // console.log(eventTaskWrapperLast);
    });
  };

  const cancelEditTask = () => {
    btnTask.addEventListener('click', (event) => {
      const eventBtn = event.target;
      const eventTaskForm = eventBtn.parentNode.parentNode.parentNode;
      const eventTaskWrapper = eventBtn.parentNode.parentNode.parentNode.parentNode;

      if (eventBtn.tagName === 'BUTTON' && eventBtn.classList.contains('form-cancel')) {
        // remove .task-form from current .task-wrapper
        eventTaskWrapper.removeChild(eventTaskForm);
      }      
    });
  };

  const submitTaskForm = () => {
    btnTask.addEventListener('submit', (event) => {
      const eventBtn = event.target;
      const eventTask = eventBtn.parentNode;
      const eventTaskIndex = eventBtn.parentNode.dataset.taskIndex;
      const eventProjectIndex = eventBtn.parentNode.parentNode.parentNode.parentNode.dataset.projectIndex;

      let inputName = eventBtn.querySelector('#form-name').value;
      let inputDescription = eventBtn.querySelector('#form-description').value;
      let inputDueDate = eventBtn.querySelector('#form-due-date').value;

      // update each item inside the task
      projectList[eventProjectIndex].task[eventTaskIndex].taskTitle = inputName;
      projectList[eventProjectIndex].task[eventTaskIndex].description = inputDescription;
      projectList[eventProjectIndex].task[eventTaskIndex].date = inputDueDate;

      // remove and update all
      removeTaskDom();
      renderTask(eventProjectIndex);

      // console.log(projectList[eventProjectIndex].task[eventTaskIndex])
      event.preventDefault();
    });
  };

  const deleteTask = () => {
    btnTask.addEventListener('click', (event) => {
      const eventBtn = event.target.parentNode;
      const eventTaskIndex = eventBtn.parentNode.dataset.taskIndex;
      const eventProjectIndex = eventBtn.parentNode.parentNode.parentNode.parentNode.dataset.projectIndex;

      if (eventBtn.classList.contains('task-delete')) {
        removeTask(eventProjectIndex, eventTaskIndex);
        removeTaskDom();
        renderTask(eventProjectIndex);

        console.log('delete task');
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