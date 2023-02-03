
const CreateTodo = (title, description, date, priority) => {

  const getTitle = () => title;
  const getDescription = () => description;
  const getDate = () => date;

  return {
    getTitle,
    getDescription,
  }
};