// list of projects
const projectList = [
  /* {
    projectTitle: "first project",
    task: [
      {
        title: "feed cat",
        description: "meow meow",
        date: "01/01",
      },      
      {
        title: "task 2",
        description: "descrip 2",
        date: "02/02",
      },
    ]
  },
  {
    projectTitle: "second project",
    task: []
  } */
];

// create task
const createTask = (title, description, date) => {
  const isChecked = false;
  return {
    taskTitle: title,
    description,
    date,
    isChecked,
  }
};

// create project
const createProject = (title) => {

  return {
    projectTitle: title,
    task: [],
  };
};

const addProjectToList = (newProject) => {
  projectList.push(newProject);
};

const addTaskToProject = (currentProject, newTask) => {
  currentProject.task.push(newTask);
};

const removeProject = (projectIndex) => {
  projectList.splice(projectIndex, 1);
};

const removeTask = (projectIndex, taskIndex) => {
  projectList[projectIndex].task.splice(taskIndex, 1);
};

// update project and tasks
const updateTask = (currentProject, currentTask, newTitle, newDescription, newDate) => {
  projectList.forEach((project) => {
    if (projectList.indexOf(currentProject) === projectList.indexOf(project) && currentProject.projectTitle === project.projectTitle) {
      project.task.forEach((task) => {
        if (currentProject.task.indexOf(currentTask) === project.task.indexOf(task) && currentTask.taskTitle === task.taskTitle) {
          task.taskTitle = newTitle;
          task.description = newDescription;
          task.date = newDate;

          // console.log(currentProject)
        }
      });
    }
  });
};



export { projectList, createProject, createTask, addProjectToList, addTaskToProject, removeTask, removeProject, updateTask,  };