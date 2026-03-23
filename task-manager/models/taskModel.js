const pool = require('../config/database');

// получить все задачи
const getAllTasks = async (limit, offset, completed, userId) => {
  let query = 'SELECT * FROM tasks';
  let values = [];
  let conditions = [];

  if (completed !== undefined) {
    values.push(completed);
    conditions.push(`completed = $${values.length}`);
  }

  if (userId !== undefined) {
    values.push(userId);
    conditions.push(`user_id = $${values.length}`);
  }

  if (conditions.length > 0) {
    query += ' WHERE ' + conditions.join(' AND ');
  }

  query += ` ORDER BY id LIMIT $${values.length + 1} OFFSET $${values.length + 2}`;

  values.push(limit, offset);

  const result = await pool.query(query, values);

  return result.rows;
};

// получить одну задачу
const getTaskById = async (id, userId) => {
  const result = await pool.query('SELECT * FROM tasks WHERE id = $1 AND user_id = $2', [
    id,
    userId,
  ]);

  return result.rows[0];
};

// создать задачу
const createTask = async (title, userId) => {
  const result = await pool.query(
    'INSERT INTO tasks (title, user_id) VALUES ($1, $2) RETURNING *',
    [title, userId]
  );
  return result.rows[0];
};

// обновить задачу
const updateTask = async (id, title, completed, UserId) => {
  const result = await pool.query(
    `UPDATE tasks
SET title = $1,
completed = $2,
updated_at = CURRENT_TIMESTAMP
WHERE id = $3 AND user_id = $4
RETURNING *`,
    [title, completed, id, UserId]
  );

  return result.rows[0];
};

// удалить задачу
const deleteTask = async (id, UserId) => {
  const result = await pool.query('DELETE FROM tasks WHERE id = $1 AND user_id = $2 RETURNING *', [
    id,
    UserId,
  ]);

  return result.rows[0];
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
