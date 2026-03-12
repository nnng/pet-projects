require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');

// middleware для работы с JSON
app.use(express.json());

// подключаем routes
app.use(taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(errorHandler);
