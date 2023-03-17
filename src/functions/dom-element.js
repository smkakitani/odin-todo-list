// import
import { projectList } from './project';

const TaskFactory = (indexOfProject, indexOfTask) => {
  const taskTitle = projectList[indexOfProject].task[indexOfTask].taskTitle;
  const taskDescription = projectList[indexOfProject].task[indexOfTask].description;
  const taskDate = projectList[indexOfProject].task[indexOfTask].date;

  // div project-task
  const divProjectTask = document.createElement('div');
  divProjectTask.classList.add('project-task');
  divProjectTask.setAttribute('data-task-index', `${indexOfTask}`);

  // task name
  const paraTaskName = document.createElement('p');
  paraTaskName.classList.add('task-name');
  paraTaskName.textContent = `${taskTitle}`;
  divProjectTask.appendChild(paraTaskName);

  // task date
  const paraTaskDate = document.createElement('p');
  paraTaskDate.classList.add('task-date');
  paraTaskDate.textContent = `${taskDate}`;
  divProjectTask.appendChild(paraTaskDate);

  // task description
  const paraTaskDescription = document.createElement('p');
  paraTaskDescription.classList.add('task-description');
  paraTaskDescription.textContent = `${taskDescription}`;
  divProjectTask.appendChild(paraTaskDescription);

  // task button edit/delete
  const editButton = document.createElement('button');
  const iconEditButton = document.createElement('span');
  editButton.type = 'button';
  editButton.classList.add('task-edit');
  editButton.classList.add('grow');
  iconEditButton.classList.add('material-symbols-outlined');
  iconEditButton.textContent = 'edit_note';
  editButton.appendChild(iconEditButton);
  divProjectTask.appendChild(editButton);
  
  const deleteButton = document.createElement('button');
  const iconDeleteButton = document.createElement('span');
  deleteButton.type = 'button';
  deleteButton.classList.add('task-delete');
  deleteButton.classList.add('grow');
  iconDeleteButton.classList.add('material-symbols-outlined');
  iconDeleteButton.textContent = 'delete';
  deleteButton.appendChild(iconDeleteButton);
  divProjectTask.appendChild(deleteButton);


  // console.log(taskDate);
  return divProjectTask;
};

const createTaskForm = (indexOfProject, indexOfTask) => {
  const divTaskForm = document.createElement('div');
  divTaskForm.classList.add('task-form');
  divTaskForm.setAttribute('data-task-index', `${indexOfTask}`);

  // form element
  const taskForm = document.createElement('form');
  taskForm.action = '#';
  divTaskForm.appendChild(taskForm);


  // form content
  // name
  const paraName = document.createElement('p');  
  const labelName = document.createElement('label');
  const inputName = document.createElement('input');

  labelName.setAttribute('for', 'form-name');
  labelName.textContent = 'Name';
  inputName.type = 'text';
  inputName.id = 'form-name';
  inputName.maxLength = '24';
  inputName.value = `${projectList[indexOfProject].task[indexOfTask].taskTitle}`;

  taskForm.appendChild(paraName);
  paraName.appendChild(labelName);
  paraName.appendChild(inputName);

  // description
  const paraDescription = document.createElement('p');
  const labelDescription = document.createElement('label');
  const textAreaDescription = document.createElement('textarea');

  labelDescription.setAttribute('for', 'form-description');
  labelDescription.textContent = 'Description';
  textAreaDescription.name = 'description';
  textAreaDescription.id = 'form-description';
  textAreaDescription.cols = '10';
  textAreaDescription.rows = '5';
  textAreaDescription.value = `${projectList[indexOfProject].task[indexOfTask].description}`;

  taskForm.appendChild(paraDescription);
  paraDescription.appendChild(labelDescription);
  paraDescription.appendChild(textAreaDescription);

  // date
  const paraDueDate = document.createElement('p');
  const labelDueDate = document.createElement('label');
  const inputDueDate = document.createElement('input');

  labelDueDate.setAttribute('for', 'form-due-date');
  labelDueDate.textContent = 'Due date';
  inputDueDate.type = 'date';
  inputDueDate.name = 'due-date';
  inputDueDate.id = 'form-due-date';
  inputDueDate.value = `${projectList[indexOfProject].task[indexOfTask].date}`;

  taskForm.appendChild(paraDueDate);
  paraDueDate.appendChild(labelDueDate);
  paraDueDate.appendChild(inputDueDate);

  // buttons
  const paraButtons = document.createElement('p');
  const saveButton = document.createElement('button');
  const cancelButton = document.createElement('button');

  saveButton.type = 'submit';
  saveButton.classList.add('form-submit');
  saveButton.textContent = 'save';
  cancelButton.type = 'button';
  cancelButton.classList.add('form-cancel');
  cancelButton.textContent = 'cancel';

  taskForm.appendChild(paraButtons);
  paraButtons.appendChild(saveButton);
  paraButtons.appendChild(cancelButton);


  // console.log('task form');
  return divTaskForm;
};

const renderTask = (indexProject) => {
  const divTaskContainer = document.querySelector('.task-container');

  const currentProject = projectList[indexProject];
  const storedTask = currentProject.task;

  for (let i = 0; i < storedTask.length; i++) {
    // create div .task-wrapper and append it to .task-container
    const divTaskWrapper = document.createElement('div');
    divTaskWrapper.classList.add('task-wrapper');
    divTaskContainer.appendChild(divTaskWrapper);

    // create new task and append it to .task-wrapper
    let newTask = TaskFactory(indexProject, i);

    divTaskWrapper.appendChild(newTask);
    // console.log(newTask);
  }
};

const renderProject = (projectIndex)  => {
  // define .project-container's data-project-index
  const divProjectContainer = document.querySelector('.project-container');
  divProjectContainer.setAttribute('data-project-index', `${projectIndex}`);


  // create paragraph of name-project
  const nameOfProject = projectList[projectIndex].projectTitle;
  const paraProjectName = document.createElement('p');
  paraProjectName.classList.add('name-project');
  paraProjectName.textContent = `${nameOfProject}`;

  divProjectContainer.appendChild(paraProjectName);


  // create div .task-container
  const divTaskContainer = document.createElement('div');
  divTaskContainer.classList.add('task-container');

  divProjectContainer.appendChild(divTaskContainer);


  // create div for add task button
  const divAddTask = document.createElement('div');
  const btnAddTask = document.createElement('button');
  btnAddTask.type = 'button';
  btnAddTask.id = 'add-task';
  btnAddTask.textContent = '+ add task';

  divProjectContainer.appendChild(divAddTask);
  divAddTask.appendChild(btnAddTask);
  

  return divProjectContainer;
};

const createProjectNameBtn = function(projName, projIndex) {
  const projectList = document.querySelector('#project-list');

  // div for each button
  const divProjectName = document.createElement('div');
  divProjectName.classList.add('project-name-container');

  // button with project index
  const addProjectName = document.createElement('button');
  addProjectName.type = 'button';
  addProjectName.classList.add('project-btn');
  addProjectName.setAttribute('data-project-index', `${projIndex}`);
  addProjectName.textContent = `${projName}`;

  // edit icon
  const iconEditNameProject = document.createElement('span');
  const btnIconEditName = document.createElement('button');
  iconEditNameProject.classList.add('material-symbols-outlined');
  iconEditNameProject.textContent = 'edit ';
  btnIconEditName.type = 'button';
  btnIconEditName.classList.add('project-edit', 'grow');

  btnIconEditName.appendChild(iconEditNameProject);
  
  // trash icon
  const iconDeleteNameProject = document.createElement('span');
  const btnIconDeleteName = document.createElement('button');
  iconDeleteNameProject.classList.add('material-symbols-outlined');
  iconDeleteNameProject.textContent = 'delete';
  btnIconDeleteName.type = 'button';
  btnIconDeleteName.classList.add('project-delete', 'grow');

  btnIconDeleteName.appendChild(iconDeleteNameProject);


  // append itens to div
  divProjectName.appendChild(addProjectName);
  divProjectName.appendChild(btnIconEditName);
  divProjectName.appendChild(btnIconDeleteName);
  projectList.appendChild(divProjectName);

  return addProjectName;
};

const createProjectNewNameForm = (indexProject) => {
  // const deletethis = document.querySelector('#sidebar');

  // div #edit-project-name
  const divEditProjectName = document.createElement('div');
  divEditProjectName.id = 'edit-project-name';
  divEditProjectName.setAttribute('data-project-index', `${indexProject}`);

  // close btn
  const btnClose = document.createElement('button');
  btnClose.type = 'button';
  btnClose.classList.add('close-name', 'grow');
  btnClose.textContent = '❌';
  divEditProjectName.appendChild(btnClose);

  // form
  const formNewName = document.createElement('form');
  formNewName.action = '#';
  divEditProjectName.appendChild(formNewName);

  // label, input, button submit edit-name
  const labelEditName = document.createElement('label');
  const inputEditName = document.createElement('input');
  const btnSubmitEditName = document.createElement('button');

  labelEditName.setAttribute('for', 'edit-name');
  labelEditName.textContent = 'New name:';

  inputEditName.type = 'text';
  inputEditName.name = 'edit-name';
  inputEditName.id = 'edit-name';
  inputEditName.maxLength = '32';
  inputEditName.value = `${projectList[indexProject].projectTitle}`;
  
  btnSubmitEditName.type = 'submit';
  btnSubmitEditName.classList.add('submit-edit-name');
  btnSubmitEditName.textContent = 'save';

  formNewName.appendChild(labelEditName);
  formNewName.appendChild(inputEditName);
  formNewName.appendChild(btnSubmitEditName);

  // deletethis.appendChild(divEditProjectName);
  return divEditProjectName;
};




export { createProjectNameBtn, renderProject, renderTask, TaskFactory, createTaskForm, createProjectNewNameForm };