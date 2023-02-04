
const createProjectName = function() {
  const addProjectName = document.createElement('button');
  addProjectName.classList.add('add-btn');
  addProjectName.textContent = "+ add project name";

  return addProjectName;
};

const createProject = function() {
  const projectButton = document.createElement('button');
  projectButton.classList.add('project-btn');
  projectButton.textContent = "Project";

  

  return projectButton;
};

const sidebar = function() {
  const divSidebar = document.getElementById('sidebar');
  const divProject = document.createElement('div');
  divProject.id = "project";
  
  // append to #sidebar
  divSidebar.appendChild(divProject);

  // append to #project
  divProject.appendChild(createProject());
  divProject.appendChild(createProjectName());


  // console.log(divSidebar);
  return divSidebar;
};

export { sidebar };