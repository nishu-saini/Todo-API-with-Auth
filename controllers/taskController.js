import { Tasks } from "../models/taskModel.js";

export const newTask = async (req, res) => {
  const { title, description } = req.body;

  await Tasks.create({
    title,
    description,
    user: req.user,
  });

  res.status(201).json({
    success: true,
    message: "Task added Successfully!",
  });
};

export const getMyTasks = async (req, res) => {
  const userId = req.user._id;

  const tasks = await Tasks.find({ user: userId });

  res.status(200).json({
    success: true,
    tasks,
  });
};

export const updateTask = async (req, res) => {
  const id = req.params.id;
  const task = await Tasks.findById(id);

  if (!task)
    return res.status(404).json({
      success: false,
      message: "Task not found!",
    });

  task.isCompleted = !task.isCompleted;
  task.save();

  res.status(200).json({
    success: true,
    message: "Task Updated Successfully!",
  });
};

export const deleteTask = async (req, res) => {
  const id = req.params.id;
  const task = await Tasks.findById(id);

  if (!task)
    return res.status(404).json({
      success: false,
      message: "Task not found!",
    });

  task.deleteOne();

  res.status(200).json({
    success: true,
    message: "Task Deleted Successfully!",
  });
};
