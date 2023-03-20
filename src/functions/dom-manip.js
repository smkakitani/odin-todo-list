// import
import { createProjectNameBtn, renderProject, renderTask, createTaskForm, createProjectNewNameForm } from './dom-element';
import { projectList, createProject, createTask, addProjectToList, addTaskToProject, removeTask, removeProject, updateTask } from './project';



// sidebar
const eventNameForm = () => {
  const nameForm = document.querySelector('#name-form');
  const addProjectBtn = document.querySelector('.add-btn');

  const showHideNameForm = () => {
    if (nameForm.classList.contains('hidden')) {
      nameForm.classList.remove('hidden');
    } else {
      nameForm.classList.add('hidden');
    }
    // console.log('show or hide name form');
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

const openProjectEditName = () => {
  const divSidebar = document.querySelector('#sidebar');
  const btnProjectName = document.querySelector('#project-list');

  const renameProjectDom = (indexOfProject, newTitle) => { 
    const parentNode = document.querySelector('#project-list');
    const parentNodeLength = parentNode.childNodes.length;

    for (let i = 0; i < parentNodeLength; i++) {
      let nodeToRename = parentNode.childNodes[i];
      let nodeBtn = nodeToRename.childNodes[0];
      let nodeBtnIndex = nodeBtn.dataset.projectIndex;

      if (nodeToRename.classList.contains('project-name-container') && nodeBtnIndex === indexOfProject) {
        // parentNode.removeChild(nodeToRename)
        nodeBtn.textContent = `${newTitle}`;

        // console.log(nodeToRename);
      }
    }
  };

  const openEditProject = () => {
    btnProjectName.addEventListener('click', (event) => {
      if (event.target.parentNode.tagName === 'BUTTON' && event.target.parentNode.classList.contains('project-edit')) {
        const eventBtn = event.target.parentNode;
        const eventProjectIndex = eventBtn.previousSibling.dataset.projectIndex;
        const sidebarLastElement = divSidebar.lastElementChild;

        if (sidebarLastElement.id !== 'edit-project-name') {
          const newNameForm = createProjectNewNameForm(eventProjectIndex);
          divSidebar.appendChild(newNameForm);          
        } else {
          return;
        }
      }
    });
  };

  const closeEditProject = () => {
    divSidebar.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON' && event.target.classList.contains('close-name')) {
        const eventBtn = event.target;
        const eventEditProjectName = eventBtn.parentNode;

        // remove #edit-project-name from #sidebar
        divSidebar.removeChild(eventEditProjectName);

        // console.log(eventEditProjectName);
      }      
    });
  };

  const submitEditProject = () => {
    divSidebar.addEventListener('submit', (event) => {
      if (event.target.tagName === 'FORM' && event.target.parentNode.id === 'edit-project-name') {
        const eventBtn = event.target;
        const eventProjectIndex = eventBtn.parentNode.dataset.projectIndex;

        // form field value
        const inputEditName = eventBtn.querySelector('#edit-name').value;

        // update it with input new value
        projectList[eventProjectIndex].projectTitle = inputEditName;

        // update DOM removing div.project-name-container
        renameProjectDom(eventProjectIndex, inputEditName);

        // remove #edit-project-name from #sidebar
        divSidebar.removeChild(eventBtn.parentNode);

        // console.log(event.target.parentNode.id)
        console.log(projectList);
      } else {
        return;
      }      
      // console.log(event.target);
      event.preventDefault();
    });
  };

  return {
    openEditProject,
    closeEditProject,
    submitEditProject,
  }
};

const deleteProjectName = () => {
  const btnDeleteProject = document.querySelector('#project-list');

  const removeProjectDom = () => {
    const parentNode = document.querySelector('#project-list');
    const parentNodeLength = parentNode.childNodes.length;

    // can´t do firstChild because firstChild is +add project!!
    for (let i = 1; i < parentNodeLength; i++) {
      let nodeToRemove = parentNode.childNodes[1];

      parentNode.removeChild(nodeToRemove);
      // console.log(nodeToRemove);
    }
  };

  const deleteProject = () => {
    btnDeleteProject.addEventListener('click', (event) => {
      if (event.target.parentNode.tagName === 'BUTTON' && event.target.parentNode.classList.contains('project-delete')) {
        const eventBtn = event.target.parentNode;
        const eventProject = eventBtn.parentNode;
        const eventProjectIndex = eventProject.firstChild.dataset.projectIndex;

        // get project index to remove in projectList
        removeProject(eventProjectIndex);
        removeProjectDom();

        // render project's name btn
        for (let i = 0; i < projectList.length; i++) {
          let projectTitle = projectList[i].projectTitle;
          let projectIndex = i;

          createProjectNameBtn(projectTitle, projectIndex);
          // console.log(projectTitle, projectIndex);
        }
        // console.log(projectList.length);
      }      
    });
  };

  return {
    deleteProject,
  }
};

// main
const eventTaskForm = () => {
  const btnTask = document.querySelector('.project-container');

  const removeTaskDom = () => {
    const parentNode = document.querySelector('.task-container');
      
      while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
      };
  };

  const removeCheck = (element) => {
    element.classList.remove('checked');
  };

  const insertCheck = (element) => {
    element.classList.add('checked');
  };

  const changeTaskChecked = (indexProject, indexTask) => {
    if (projectList[indexProject].task[indexTask].isChecked === false) {
      projectList[indexProject].task[indexTask].isChecked = true;
    } else if (projectList[indexProject].task[indexTask].isChecked === true) {
      projectList[indexProject].task[indexTask].isChecked = false;
    }
  };

  const checkTask = () => {
    btnTask.addEventListener('click', (event) => {
      if (event.target.parentNode.tagName === 'BUTTON' && event.target.parentNode.classList.contains('task-check')) {
        // event targets
        const eventBtn = event.target.parentNode;
        const eventTask = eventBtn.parentNode;
        const eventTaskIndex = eventTask.dataset.taskIndex;
        const paraCheck = eventTask.querySelectorAll('div.project-task > p');
        const eventProject = eventTask.parentNode.parentNode.parentNode;
        const eventProjectIndex = eventProject.dataset.projectIndex;

        // change task isChecked true/false
        changeTaskChecked(eventProjectIndex, eventTaskIndex);

        // will line-through only is isChecked is true
        if (projectList[eventProjectIndex].task[eventTaskIndex].isChecked === true) {
          paraCheck.forEach(insertCheck);
        } else {
          paraCheck.forEach(removeCheck);
        }        
        // console.log(projectList[eventProjectIndex].task[eventTaskIndex]);
      }
      
    });
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
      if (event.target.tagName === 'FORM' && event.target.parentNode.classList.contains('task-form')) {
        // event targets
        const eventBtn = event.target;
        const eventTask = eventBtn.parentNode;
        const eventTaskIndex = eventBtn.parentNode.dataset.taskIndex;
        const eventProjectIndex = eventBtn.parentNode.parentNode.parentNode.parentNode.dataset.projectIndex;

        // form field values
        let inputTitle = eventBtn.querySelector('#form-name').value;
        let inputDescription = eventBtn.querySelector('#form-description').value;
        let inputDueDate = eventBtn.querySelector('#form-due-date').value;

        // set current project and current task
        const currentProject = projectList[eventProjectIndex];
        const currentTask = currentProject.task[eventTaskIndex];        

        // update each item inside the task
        updateTask(currentProject, currentTask, inputTitle, inputDescription, inputDueDate);

        // remove tasks and update all tasks
        removeTaskDom();
        renderTask(eventProjectIndex);

        // console.log(currentProject);
        event.stopImmediatePropagation();
        event.preventDefault();
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
    checkTask,
    openEditTask,
    cancelEditTask,
    submitTaskForm,
    deleteTask,
  }
};

const eventAddTask = () => {
  const btnAddTask = document.querySelector('.project-container');
  let currentDay = new Date().toISOString().slice(0, 10);

  btnAddTask.addEventListener('click', (event) => {
    if (event.target.tagName === "BUTTON" && event.target.matches('#add-task')) {
      // create a new task
      const newTask = createTask('Task Title', 'Add a description here!', currentDay);

      // events target
      const eventBtn = event.target;
      const eventProjectIndex = eventBtn.parentNode.parentNode.dataset.projectIndex;
      // 
      const currentProject = projectList[eventProjectIndex];

      // add default task to current project
      addTaskToProject(currentProject, newTask);

      // DOM stuff
      removeTaskDom();
      renderTask(eventProjectIndex);     

      // console.log(currentProject);
    } else {
      return;
    }
    // console.log(createTask);
    event.stopImmediatePropagation();
  });

  const removeTaskDom = () => {
    const parentNode = document.querySelector('.task-container');
      
      while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
      };
  };
};



export { eventNameForm, openProjectName, eventTaskForm, eventAddTask, openProjectEditName, deleteProjectName };