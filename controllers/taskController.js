const Task = require('../models/Task');

// Get all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a task
exports.createTask = async (req, res) => {
  const { title } = req.body;
  try {
    const newTask = new Task({ title });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    try {
      const task = await Task.findById(id);
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      task.title = title || task.title;
      task.completed = completed !== undefined ? completed : task.completed;
      await task.save();
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  

// Delete a task
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: 'Task Deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
