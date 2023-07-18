import ErrorHandler from "../middlewares/error.js";
import { Tasks } from "../models/taskModel.js";

export const newTask = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

export const getMyTasks = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const tasks = await Tasks.find({ user: userId });

    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = await Tasks.findById(id);

    if (!task) return next(new ErrorHandler("Task not found!", 404));

    task.isCompleted = !task.isCompleted;
    task.save();

    res.status(200).json({
      success: true,
      message: "Task Updated Successfully!",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = await Tasks.findById(id);

    if (!task) return next(new ErrorHandler("Task not found!", 404));

    task.deleteOne();

    res.status(200).json({
      success: true,
      message: "Task Deleted Successfully!",
    });
  } catch (error) {
    next(error);
  }
};
