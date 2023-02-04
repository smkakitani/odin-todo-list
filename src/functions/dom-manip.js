
const createProjectName = function() {
  const addProjectName = document.createElement('button');
  addProjectName.classList.add('add-btn');
  addProjectName.textContent = "+ add project name";

  return addProjectName;
};


// render sidebar items
const sidebar = function() {
  const divSidebar = document.getElementById('sidebar');
  const divProject = document.getElementById('project');
  const divProjectList = document.getElementById('project-list');
  
  // append to #sidebar
  

  // append to #project
  divProjectList.appendChild(createProjectName());
  divProjectList.appendChild(createProjectName());

  // console.log(divSidebar);
  return divSidebar;
};

// click project button to show/hide projects
const eventProjectBtn = function() {
  const projectBtn = document.querySelector('.project-btn');
  const projectList = document.querySelector('#project-list');

  projectBtn.addEventListener('click', () => {
    if (projectList.classList.contains('hidden')) {
      projectList.classList.remove('hidden');
    } else if (!projectList.classList.contains('hidden')){
      projectList.classList.add('hidden');
    }
  });
};


export { sidebar, eventProjectBtn };