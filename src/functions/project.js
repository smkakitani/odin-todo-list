
const createTodo = (title, description, date) => {

  const getTitle = () => title;
  const getDescription = () => description;
  const getDate = () => date;

  return {
    getTitle,
    getDescription,
    getDate,
  }
};

export { createTodo };