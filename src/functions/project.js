// list of projects
const projectList = [
  {
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
  }
];

// create task
const createTask = (title, description, date) => {
  return {
    taskTitle: title,
    description,
    date,
  }
};

// create project
const createProject = (title) => {

  return {
    projectTitle: title,
    task: [],
  };
};

const addProject = (newProject) => {
  projectList.push(newProject);
};

const addTask = (projectIndex, newTask) => {
  projectList[projectIndex].task.push(newTask);
};

const removeProject = (projectIndex) => {
  projectList.splice(projectIndex, 1);
};

const removeTask = (projectIndex, taskIndex) => {
  projectList[projectIndex].task[taskIndex];
};






export { projectList, createProject, createTask, addProject, addTask };