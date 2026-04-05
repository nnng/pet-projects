const request = require('supertest');
const app = require('../../app');
const taskService = require('../../services/taskService');
const jwt = require('jsonwebtoken');

jest.mock('../../services/taskService', () => ({
  getAllTasks: jest.fn(),
  getTaskById: jest.fn(),
  createTask: jest.fn(),
  updateTask: jest.fn(),
  deleteTask: jest.fn(),
}));

jest.mock('../../config/database', () => ({
  query: jest.fn(),
  connect: jest.fn(),
}));

const mockUser = { id: 1 };
const validToken = jwt.sign(mockUser, process.env.JWT_SECRET || 'test_secret');

describe('Task Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /tasks', () => {
    test('should return 200 with tasks', async () => {
      const mockTasks = [{ id: 1, title: 'Task 1' }];
      taskService.getAllTasks.mockResolvedValue(mockTasks);

      const res = await request(app).get('/tasks').set('Authorization', `Bearer ${validToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockTasks);
    });

    test('should return 401 if no token provided', async () => {
      const res = await request(app).get('/tasks');

      expect(res.status).toBe(401);
      expect(res.body.message).toBe('Not authorized');
    });
  });

  describe('GET /tasks/:id', () => {
    test('should return 200 with task if found', async () => {
      const mockTask = { id: 1, title: 'Task 1' };
      taskService.getTaskById.mockResolvedValue(mockTask);

      const res = await request(app).get('/tasks/1').set('Authorization', `Bearer ${validToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockTask);
    });

    test('should return 404 if task not found', async () => {
      taskService.getTaskById.mockResolvedValue(null);

      const res = await request(app).get('/tasks/99').set('Authorization', `Bearer ${validToken}`);

      expect(res.status).toBe(404);
      expect(res.body.message).toBe('Task not found');
    });
  });

  describe('POST /tasks', () => {
    test('should return 201 with created task', async () => {
      const mockTask = { id: 1, title: 'New task' };
      taskService.createTask.mockResolvedValue(mockTask);

      const res = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${validToken}`)
        .send({ title: 'New task' });

      expect(res.status).toBe(201);
      expect(res.body).toEqual(mockTask);
    });

    test('should return 400 if title is missing', async () => {
      const res = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${validToken}`)
        .send({});

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Title is required');
    });
  });

  describe('PUT /tasks/:id', () => {
    test('should return 200 with updated task', async () => {
      const mockTask = { id: 1, title: 'Updated', completed: true };
      taskService.updateTask.mockResolvedValue(mockTask);

      const res = await request(app)
        .put('/tasks/1')
        .set('Authorization', `Bearer ${validToken}`)
        .send({ title: 'Updated', completed: true });

      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockTask);
    });

    test('should return 404 if task not found', async () => {
      taskService.updateTask.mockResolvedValue(null);

      const res = await request(app)
        .put('/tasks/99')
        .set('Authorization', `Bearer ${validToken}`)
        .send({ title: 'Updated' });

      expect(res.status).toBe(404);
    });
  });

  describe('DELETE /tasks/:id', () => {
    test('should return 200 with success message', async () => {
      taskService.deleteTask.mockResolvedValue({ id: 1 });

      const res = await request(app)
        .delete('/tasks/1')
        .set('Authorization', `Bearer ${validToken}`);

      expect(res.status).toBe(200);
      expect(res.body.message).toBe('Task deleted successfully');
    });

    test('should return 404 if task not found', async () => {
      taskService.deleteTask.mockResolvedValue(null);

      const res = await request(app)
        .delete('/tasks/99')
        .set('Authorization', `Bearer ${validToken}`);

      expect(res.status).toBe(404);
    });
  });
});
