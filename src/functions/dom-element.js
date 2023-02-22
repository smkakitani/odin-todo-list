// import
// import { projectList } from './project';

const TaskFactory = (taskName, taskDate, taskDescription) => {
  const divTaskContainer = document.createElement('div');
  divTaskContainer.classList.add('task-container');

  const divProjectTask = document.createElement('div')
  divProjectTask.classList.add('project-task');
  divTaskContainer.appendChild(divProjectTask);

  // task name
  const paraTaskName = document.createElement('p');
  paraTaskName.classList.add('task-name');
  paraTaskName.textContent = `${taskName}`;
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

  // divProjectContainer.appendChild(divTaskContainer);
  return divTaskContainer;
};

const createTaskForm = () => {
  const divTaskForm = document.createElement('div');
  divTaskForm.classList.add('task-form');

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
  inputName.id = 'form-name';
  inputName.maxLength = '24';

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
  textAreaDescription.placeholder = 'Remember to feed cat';

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
  inputDueDate.value = ' ';

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

const renderTask = function() {
  const mainContent = document.querySelector('#content');
  const divProjectContainer = document.querySelector('.project-container');

  // example
  const defaultTask = TaskFactory("Gatinho", "18/08/1991", "Apsoidjoqwjdopq ijdioasjdqp asidjdakldjqwj akjsdaoijq malsjkd");
  divProjectContainer.appendChild(defaultTask);

  // form task
  const taskContainer = document.querySelector('.task-container');
  taskContainer.appendChild(createTaskForm());
  // console.log(taskContainer);
  //  createTaskForm();
  
  return {
    defaultTask
  }
};

const renderProject = function(indexProject) {
  const divContent = document.querySelector('#content');

  // create project-container and append to #content
  const divProjectContainer = document.createElement('div');
  divProjectContainer.classList.add('project-container');
  divProjectContainer.setAttribute('data-index', `${indexProject}`);

  divContent.appendChild(divProjectContainer)

  // create project-name
  const projectName = document.createElement('p');
  projectName.classList.add('project-name');
  projectName.setAttribute('contenteditable', 'true');
  projectName.textContent = `${indexProject.projectTitle}`;

  divProjectContainer.appendChild(projectName);

  // console.log(divContent);
  return divProjectContainer;
};

const createProjectNameBtn = function(projName, projIndex) {
  const projectList = document.querySelector('#project-list');
  const addProjectName = document.createElement('button');
  addProjectName.classList.add('project-btn');
  addProjectName.setAttribute('data-index', `${projIndex}`);
  addProjectName.textContent = `${projName}`;

  projectList.appendChild(addProjectName);

  return addProjectName;
};




export { createProjectNameBtn, renderProject, renderTask };