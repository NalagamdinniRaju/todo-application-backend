const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const router = express.Router();

// GET request to fetch all tasks
router.get('/', getTasks);

// POST request to create a new task
router.post('/', createTask);

// PUT request to update a task by ID
router.put('/:id', updateTask);

// DELETE request to delete a task by ID
router.delete('/:id', deleteTask);

module.exports = router;
