const pool = require('../config/database');

// получить все задачи
const getAllTasks = async (limit, offset, completed) => {
  let query = 'SELECT * FROM tasks';
  let values = [];

  if (completed !== undefined) {
    query += ' WHERE completed = $1';
    values.push(completed);
  }

  query += ' ORDER BY id LIMIT $' + (values.length + 1) + ' OFFSET $' + (values.length + 2);

  values.push(limit, offset);

  const result = await pool.query(query, values);

  return result.rows;
};

// получить одну задачу
const getTaskById = async (id) => {
  const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);

  return result.rows[0];
};

// создать задачу
const createTask = async (title) => {
  const result = await pool.query('INSERT INTO tasks (title) VALUES ($1) RETURNING *', [title]);

  return result.rows[0];
};

// обновить задачу
const updateTask = async (id, title, completed) => {
  const result = await pool.query(
    `UPDATE tasks
SET title = $1,
completed = $2,
updated_at = CURRENT_TIMESTAMP
WHERE id = $3
RETURNING *`,
    [title, completed, id]
  );

  return result.rows[0];
};

// удалить задачу
const deleteTask = async (id) => {
  const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);

  return result.rows[0];
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
