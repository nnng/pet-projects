require('dotenv').config();
require('./config/database');

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');

app.use('/tasks', taskRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(errorHandler);
