// это временное хранилище задач
// позже его заменит база данных
let tasks = [
  { id: 1, title: 'Learn Node.js', completed: false },
  { id: 2, title: 'Build task manager', completed: false },
];

//получить все задачи
const getAllTasks = () => {
  return tasks;
};

// получить задачу по id
const getTaskById = (id) => {
  return tasks.find((t) => t.id === id);
};

// создать задачу
const createTask = (title) => {
  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false,
  };

  tasks.push(newTask);

  return newTask;
};

// удалить задачу
const deleteTask = (id) => {
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return null;
  }

  tasks = tasks.filter((t) => t.id !== id);

  return task;
};

// экспорт
module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  deleteTask,
};
