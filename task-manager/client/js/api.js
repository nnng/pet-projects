const BASE_URL = 'http://localhost:3000';

// Возвращает заголовки для запроса.
function getHeaders(requiresAuth = true) {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (requiresAuth) {
    const token = localStorage.getItem('token');
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
}

// Универсальная функция для всех запросов.
async function request(method, path, body = null, requiresAuth = true) {
  const options = {
    method,
    headers: getHeaders(requiresAuth),
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${BASE_URL}${path}`, options);
  const data = await response.json();

  if (!response.ok) {
    // data.message — возвращает errorHandler и validateTask/validateUser
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
}

// ─── AUTH ─────────────────────────────────────────────────────────────────────
// requiresAuth: false

export function register(email, password) {
  return request('POST', '/users/register', { email, password }, false);
}

export function login(email, password) {
  return request('POST', '/users/login', { email, password }, false);
}

// ─── TASKS ────────────────────────────────────────────────────────────────────

// params — { page, limit, completed }
export function getTasks(params = {}) {
  const query = new URLSearchParams(params).toString();
  const path = query ? `/tasks?${query}` : '/tasks';
  return request('GET', path);
}

export function getTaskById(id) {
  return request('GET', `/tasks/${id}`);
}

export function createTask(title) {
  return request('POST', '/tasks', { title });
}

// data - { title, completed }
export function updateTask(id, data) {
  return request('PUT', `/tasks/${id}`, data);
}

export function deleteTask(id) {
  return request('DELETE', `/tasks/${id}`);
}
