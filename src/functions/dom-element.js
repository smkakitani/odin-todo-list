const renderTask = function() {
  const divProjectContainer = document.getElementsByClassName('project-container')[1]; // NEED TO CHANGE HERE LATER!!!!!!!!!!!!!!!!!!

  // div .project-task
  const divTask = document.createElement('div');
  divTask.classList.add('project-task');

  // div for btn-check and task title
  const divCheck = document.createElement('div');  
  divTask.appendChild(divCheck);

  const btnCheckbox = document.createElement('button');
  btnCheckbox.type = 'button';
  btnCheckbox.classList.add('check-btn')
  btnCheckbox.innerHTML = '&check;';
  divCheck.appendChild(btnCheckbox);

  const taskTitle = document.createElement('p');
  taskTitle.classList.add('task-name');
  taskTitle.setAttribute('contenteditable', 'true');
  taskTitle.textContent = "Todo Title";
  divCheck.appendChild(taskTitle);

  // task-description p
  const taskDescription = document.createElement('p');
  taskDescription.classList.add('task-description');
  taskDescription.setAttribute('contenteditable', 'true');
  taskDescription.textContent = "Todo description";
  divTask.appendChild(taskDescription);

  // date input type
  const inputDate = document.createElement('input');
  inputDate.type = "date";
  inputDate.name = "due-date";
  inputDate.id = "due-date";
  divTask.appendChild(inputDate);

  divProjectContainer.appendChild(divTask);
  // console.log();
  return divTask;
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
  projectName.textContent = "Project Name";

  divProjectContainer.appendChild(projectName);

  // console.log(divContent);
  return divProjectContainer;
};

const createProjectNameBtn = function(projName) {
  const projectList = document.querySelector('#project-list');
  const addProjectName = document.createElement('button');
  addProjectName.classList.add('project-btn');
  addProjectName.textContent = `${projName}`;

  projectList.appendChild(addProjectName);

  return addProjectName;
};




export { createProjectNameBtn };