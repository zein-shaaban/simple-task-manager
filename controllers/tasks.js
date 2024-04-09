const Task = require("../models/taskSchema");
const asyncWrapper=require('../middleware/async');
const getAllTasks = asyncWrapper( async(req, res) => {
    const tasks = await Task.find();
    res.json({ tasks });
});

const getSingleTask = asyncWrapper(async (req, res) => {
    const TaskId = req.params.id;
    const task = await Task.findById(TaskId);
    if (!task)
      return res.status(404).json({ msg: `Sorry Not Found Task :${TaskId}` });
    res.json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
    const TaskId = req.params.id;
    let task = await Task.findByIdAndUpdate(TaskId, req.body, {
      new: true,
      runValidators: true,
    });
    if (task) return res.json({ task });
    res.status(404).json({ msg: `Sorry Not Found Task :${TaskId}` });
});

const deleteTask = asyncWrapper(async (req, res) => {
    const TaskId = req.params.id;
    let TaskDeleted = await Task.findByIdAndDelete(TaskId);
    if (TaskDeleted) return res.status(200).json({ TaskDeleted });
    res.status(404).json({ msg: `Sorry Not Found Task :${TaskId}` });
});

const addTask = asyncWrapper(async (req, res) => {
    let task = await Task.create(req.body);
    res.status(201).json({ task });
});
module.exports = {
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
  addTask,
};
