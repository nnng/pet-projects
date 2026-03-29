require('dotenv').config();
require('./config/database');

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const morgan = require('morgan');

// MORGAN LOGGER
const morganFormat = ':method :url :status :response-time ms';
app.use(morgan(morganFormat));

app.use(express.json());

const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, // Разрешить cookies
  optionsSuccessStatus: 200, // Для старых браузеров
};

app.use(cors(corsOptions));

app.use('/tasks', taskRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(errorHandler);
