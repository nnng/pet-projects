// server.js

// импортируем express
const express = require('express');

// создаем приложение
const app = express();

// порт сервера
const PORT = 3000;

// импортируем routes
const taskRoutes = require('./routes/taskRoutes');

// middleware для работы с JSON
app.use(express.json());

// подключаем routes
app.use(taskRoutes);

// запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
