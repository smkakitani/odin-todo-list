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
  // const isChecked = false;
  return {
    taskTitle: title,
    description,
    date,
    // isChecked,
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
  // projectList[projectIndex].task.push(newTask);
};

const removeProject = (projectIndex) => {
  projectList.splice(projectIndex, 1);
};

const removeTask = (projectIndex, taskIndex) => {
  projectList[projectIndex].task.splice(taskIndex, 1);
};

// update project and tasks
const updateTask = (currentTask, newTitle, newDescription, newDate) => {
  // currentTask.forEach(x => console.log(x));

  /* projectList[projectIndex].task[taskIndex].taskTitle = newTitle;
  projectList[projectIndex].task[taskIndex].description = newDescription;
  projectList[projectIndex].task[taskIndex].date = newDate; */
};



export { projectList, createProject, createTask, addProjectToList, addTaskToProject, removeTask, removeProject, updateTask,  };