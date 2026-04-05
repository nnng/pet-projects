import { createTask, deleteTask, getTasks, updateTask } from './api.js';

/*
  -----------------------------
  Global state
*/
const state = {
  tasks: [],
  filter: 'all',
};

const logoutBtn = document.getElementById('logout-btn');
const userInfo = document.getElementById('user-info');
const createTaskForm = document.getElementById('create-task-form');
const newTaskTitleInput = document.getElementById('new-task-title');
const taskFilterSelect = document.getElementById('task-filter');
const refreshBtn = document.getElementById('refresh-btn');
const tasksMessage = document.getElementById('tasks-message');
const tasksList = document.getElementById('tasks-list');
const emptyState = document.getElementById('empty-state');

/*
  -----------------------------
  Auth helpers
  -----------------------------
*/
function ensureAuthenticated() {
  const token = localStorage.getItem('token');

  if (!token) {
    window.location.href = './index.html';
    return false;
  }

  return true;
}

function renderUserInfo() {
  const email = localStorage.getItem('userEmail');
  userInfo.textContent = email ? `Signed in as ${email}` : 'Signed in user';
}

function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userId');
  window.location.href = './index.html';
}

/*
  -----------------------------
  Message helpers
  -----------------------------
*/
function clearMessage() {
  tasksMessage.textContent = '';
  tasksMessage.classList.remove('form-message--success', 'form-message--error');
}

function showMessage(text, type = 'success') {
  tasksMessage.textContent = text;
  tasksMessage.classList.remove('form-message--success', 'form-message--error');
  tasksMessage.classList.add(type === 'error' ? 'form-message--error' : 'form-message--success');
}

/*
  -----------------------------
  Utility helpers
  -----------------------------
*/
function escapeHtml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function buildFilterQueryValue(filter) {
  if (filter === 'completed') return true;
  if (filter === 'active') return false;
  return undefined;
}

/*
  Handles common API error scenarios.
*/
function handleApiError(error, fallback = 'Request failed') {
  const message = error?.message || fallback;

  if (message === 'Not authorized' || message === 'Invalid token') {
    logout();
    return;
  }

  showMessage(message, 'error');
}

/*
  Rendering tasks
*/
function renderTasks() {
  tasksList.innerHTML = '';

  if (state.tasks.length === 0) {
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;

  const html = state.tasks
    .map((task) => {
      const titleClass = task.completed
        ? 'task-item__title task-item__title--completed'
        : 'task-item__title';

      return `
        <li class="task-item" data-task-id="${task.id}">
          <label class="task-item__check">
            <input class="toggle-completed" type="checkbox" ${task.completed ? 'checked' : ''} />
            <span class="${titleClass}">${escapeHtml(task.title)}</span>
          </label>

          <div class="task-item__actions">
            <button class="secondary-button task-edit-btn" type="button">Edit</button>
            <button class="secondary-button task-delete-btn" type="button">Delete</button>
          </div>
        </li>
      `;
    })
    .join('');

  tasksList.innerHTML = html;
}

/*
  Data loading
*/
async function loadTasks() {
  clearMessage();

  try {
    const completed = buildFilterQueryValue(state.filter);
    const query = completed === undefined ? {} : { completed };
    const tasks = await getTasks(query);

    state.tasks = tasks;
    renderTasks();
  } catch (error) {
    handleApiError(error, 'Failed to load tasks');
  }
}

/*
  Create task flow
*/
async function handleCreateTask(event) {
  event.preventDefault();
  clearMessage();

  const title = newTaskTitleInput.value.trim();

  if (!title) {
    showMessage('Title is required', 'error');
    return;
  }

  try {
    await createTask(title);
    newTaskTitleInput.value = '';
    showMessage('Task created', 'success');
    await loadTasks();
  } catch (error) {
    handleApiError(error, 'Failed to create task');
  }
}

/*
  Toggle completed flow
*/
async function handleToggleCompleted(taskId, checked) {
  clearMessage();

  const task = state.tasks.find((t) => t.id === taskId);
  if (!task) return;

  try {
    await updateTask(taskId, { title: task.title, completed: checked });
    await loadTasks();
  } catch (error) {
    handleApiError(error, 'Failed to update task status');
  }
}

/*
  Edit title flow
*/
async function handleEditTask(taskId) {
  clearMessage();

  const task = state.tasks.find((t) => t.id === taskId);
  if (!task) return;

  const nextTitle = window.prompt('Edit task title', task.title);

  if (nextTitle === null) return;

  const normalizedTitle = nextTitle.trim();
  if (!normalizedTitle) {
    showMessage('Title cannot be empty', 'error');
    return;
  }

  try {
    await updateTask(taskId, { title: normalizedTitle, completed: task.completed });
    showMessage('Task updated', 'success');
    await loadTasks();
  } catch (error) {
    handleApiError(error, 'Failed to update task');
  }
}

/*
  -----------------------------
  Delete flow
  -----------------------------
*/
async function handleDeleteTask(taskId) {
  clearMessage();

  const confirmed = window.confirm('Delete this task?');
  if (!confirmed) return;

  try {
    await deleteTask(taskId);
    showMessage('Task deleted', 'success');
    await loadTasks();
  } catch (error) {
    handleApiError(error, 'Failed to delete task');
  }
}

/*
  -----------------------------
  Event wiring
  -----------------------------
*/
logoutBtn.addEventListener('click', logout);
createTaskForm.addEventListener('submit', handleCreateTask);

taskFilterSelect.addEventListener('change', async (event) => {
  state.filter = event.target.value;
  await loadTasks();
});

refreshBtn.addEventListener('click', async () => {
  await loadTasks();
});

/*
  Event delegation for dynamic list items:
  - one listener on UL
  - detect clicked/toggled control
*/
tasksList.addEventListener('click', async (event) => {
  const taskItem = event.target.closest('.task-item');
  if (!taskItem) return;

  const taskId = Number(taskItem.dataset.taskId);
  if (!taskId) return;

  if (event.target.classList.contains('task-edit-btn')) {
    await handleEditTask(taskId);
    return;
  }

  if (event.target.classList.contains('task-delete-btn')) {
    await handleDeleteTask(taskId);
  }
});

tasksList.addEventListener('change', async (event) => {
  if (!event.target.classList.contains('toggle-completed')) return;

  const taskItem = event.target.closest('.task-item');
  if (!taskItem) return;

  const taskId = Number(taskItem.dataset.taskId);
  if (!taskId) return;

  await handleToggleCompleted(taskId, event.target.checked);
});

/*
  -----------------------------
  Page bootstrap
  -----------------------------
*/
async function initTasksPage() {
  if (!ensureAuthenticated()) return;

  renderUserInfo();
  await loadTasks();
}

initTasksPage();
