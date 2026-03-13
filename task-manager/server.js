require('dotenv').config();
require('./config/database');

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');

// подключаем routes
app.use(taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(errorHandler);
