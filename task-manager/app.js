require('dotenv').config();

const express = require('express');

const app = express();

const helmet = require('helmet');
app.use(helmet());

const morgan = require('morgan');

const morganFormat = ':method :url :status :response-time ms';
app.use(morgan(morganFormat));

app.use(express.json());

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');

app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);

app.use(errorHandler);

module.exports = app;
