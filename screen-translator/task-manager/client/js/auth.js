import { login, register } from './api.js';

// Здесь мы храним текущий режим формы.
// Возможны два значения:
// - 'login'    -> пользователь хочет войти
// - 'register' -> пользователь хочет зарегистрироваться
//
// Это важно, потому что HTML-форма у нас одна,
// но поведение у неё разное в зависимости от режима.
let currentMode = 'login';

// Получаем ссылки на элементы DOM один раз в начале.
// Это обычная практика: не искать одни и те же элементы по 10 раз.
const authTitle = document.getElementById('auth-title');
const authSubtitle = document.getElementById('auth-subtitle');
const authForm = document.getElementById('auth-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');
const formMessage = document.getElementById('form-message');
const showLoginBtn = document.getElementById('show-login-btn');
const showRegisterBtn = document.getElementById('show-register-btn');

//отвечает за визуальное и логическое переключение режима.
function setMode(mode) {
  currentMode = mode;

  const isLogin = mode === 'login';

  authTitle.textContent = isLogin ? 'Welcome back' : 'Create your account';
  authSubtitle.textContent = isLogin
    ? 'Log in to manage your tasks.'
    : 'Register to start managing your tasks.';
  submitBtn.textContent = isLogin ? 'Login' : 'Register';

  showLoginBtn.classList.toggle('auth-switcher__button--active', isLogin);
  showRegisterBtn.classList.toggle('auth-switcher__button--active', !isLogin);

  clearMessage();
}

// очищает текст сообщения и убирает классы состояния.
function clearMessage() {
  formMessage.textContent = '';
  formMessage.classList.remove('form-message--success', 'form-message--error');
}

//  показывает пользователю сообщение.
// - 'success'
// - 'error'
function showMessage(message, type) {
  formMessage.textContent = message;
  formMessage.classList.remove('form-message--success', 'form-message--error');
  formMessage.classList.add(type === 'success' ? 'form-message--success' : 'form-message--error');
}

// Блокировка формы во время запроса.
function setLoading(isLoading) {
  submitBtn.disabled = isLoading;
  submitBtn.textContent = isLoading
    ? currentMode === 'login'
      ? 'Logging in...'
      : 'Registering...'
    : currentMode === 'login'
      ? 'Login'
      : 'Register';
}

// После успешного логинасохранияет данные,
function persistAuthData(loginResult) {
  localStorage.setItem('token', loginResult.token);
  localStorage.setItem('userEmail', loginResult.user.email);
  localStorage.setItem('userId', String(loginResult.user.id));
}

// Этот сценарий используется в режиме login.
async function handleLogin(email, password) {
  const loginResult = await login(email, password);

  persistAuthData(loginResult);
  showMessage('Login successful. Redirecting...', 'success');

  window.location.href = './tasks.html';
}

// Этот сценарий используется в режиме register.
async function handleRegister(email, password) {
  await register(email, password);

  showMessage('Registration successful. Logging you in...', 'success');

  const loginResult = await login(email, password);
  persistAuthData(loginResult);

  window.location.href = './tasks.html';
}

// Главный обработчик формы.
authForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  clearMessage();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    showMessage('Email and password are required.', 'error');
    return;
  }

  setLoading(true);

  try {
    if (currentMode === 'login') {
      await handleLogin(email, password);
    } else {
      await handleRegister(email, password);
    }
  } catch (error) {
    showMessage(error.message, 'error');
  } finally {
    setLoading(false);
  }
});

// Кнопки только переключают режим.
showLoginBtn.addEventListener('click', () => {
  setMode('login');
});

showRegisterBtn.addEventListener('click', () => {
  setMode('register');
});

// проверка выполняется сразу при открытии страницы.
function redirectIfAlreadyAuthenticated() {
  const token = localStorage.getItem('token');

  if (token) {
    window.location.href = './tasks.html';
  }
}

redirectIfAlreadyAuthenticated();
setMode('login');
