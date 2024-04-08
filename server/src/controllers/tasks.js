/*******************************************************************************
 *
 * Copyright         : 2024 Damian Chee
 * File Name         : tasks.js
 * Description       : Controller (functions) for mongodb CRUD operations.
 *                     For tasks collection.
 *
 ******************************************************************************/
const TasksModel = require("../models/Tasks");

const seedTasks = async (req, res) => {
  try {
    await TasksModel.deleteMany({});

    const tasks = await TasksModel.create([
      {
        _id: "661345cb7a8b057f7ff660b0",
        name: "Feed the dog!",
        description:
          "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
        type: "Routine & Discipline",
        difficulty: "Easy",
        startValue: 0,
        endValue: 3,
        created_at: new Date("2024-04-08T01:18:03.378+00:00"),
      },
      {
        _id: "661345f27a8b057f7ff660b2",
        name: "Play with the dog!",
        description: "A healthy dog is a happy dog!",
        type: "Routine",
        difficulty: "Easy",
        startValue: 0,
        endValue: 3,
        created_at: new Date("2024-04-08T01:18:42.326Z"),
      },
      {
        _id: "661346167a8b057f7ff660b4",
        name: "Train the dog!",
        description: "All play and no work makes jack a dull boy...",
        type: "Routine & Discipline",
        difficulty: "Easy",
        startValue: 0,
        endValue: 3,
        created_at: new Date("2024-04-08T01:20:05.540Z"),
      },
      {
        _id: "6613462e7a8b057f7ff660b6",
        name: "Train the dog!",
        description: "All play and no work makes jack a dull boy...",
        type: "Routine & Discipline",
        difficulty: "Medium",
        startValue: 0,
        endValue: 5,
        created_at: new Date("2024-04-08T01:20:05.540Z"),
      },
      {
        _id: "661346457a8b057f7ff660b8",
        name: "Train the dog!",
        description: "All play and no work makes jack a dull boy...",
        type: "Routine & Discipline",
        difficulty: "Hard",
        startValue: 0,
        endValue: 8,
        created_at: new Date("2024-04-08T01:20:05.540Z"),
      },
      {
        _id: "6613466d7a8b057f7ff660ba",
        name: "Play with the dog!",
        description: "A healthy dog is a happy dog!",
        type: "Companionship",
        difficulty: "Easy",
        startValue: 0,
        endValue: 1,
        created_at: new Date("2024-04-08T01:20:45.087Z"),
      },
      {
        _id: "661346897a8b057f7ff660bc",
        name: "Feed the dog!",
        description:
          "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
        type: "Companionship",
        difficulty: "Easy",
        startValue: 0,
        endValue: 1,
        created_at: new Date("2024-04-08T01:21:13.116Z"),
      },
      {
        _id: "661346a97a8b057f7ff660be",
        name: "Train the dog!",
        description: "All play and no work makes jack a dull boy...",
        type: "Companionship",
        difficulty: "Easy",
        startValue: 0,
        endValue: 1,
        created_at: new Date("2024-04-08T01:21:45.776Z"),
      },
    ]);

    res.json({ status: "ok", msg: "seeding successful", data: tasks });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "seeding failed" });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await TasksModel.find();
    res.json({ status: "ok", msg: "returning all tasks", data: allTasks });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting" });
  }
};

const getTasksByType = async (req, res) => {
  try {
    const tasks = await TasksModel.find({ type: req.body.type });
    res.json({
      status: "ok",
      msg: `returning all ${req.body.type} tasks`,
      data: tasks,
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting" });
  }
};

const getTasksByDifficulty = async (req, res) => {
  try {
    const tasks = await TasksModel.find({ difficulty: req.body.difficulty });
    res.json({
      status: "ok",
      msg: `returning all ${req.body.difficulty} tasks`,
      data: tasks,
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting" });
  }
};

const addTask = async (req, res) => {
  try {
    const newTask = {
      name: req.body.name,
      description: req.body.description,
      type: req.body.type,
      difficulty: req.body.difficulty,
      startValue: req.body.startValue,
      endValue: req.body.endValue,
    };
    const tasks = await TasksModel.create(newTask);

    res.json({ status: "ok", msg: "task saved", data: tasks });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error adding" });
  }
};

const updateTask = async (req, res) => {
  try {
    const updateTask = {};
    if (req.body.name) updateTask.name = req.body.name;
    if (req.body.description) updateTask.description = req.body.description;
    if (req.body.type) updateTask.type = req.body.type;
    if (req.body.difficulty) updateTask.difficulty = req.body.difficulty;
    if (req.body.startValue) updateTask.startValue = req.body.startValue;
    if (req.body.endValue) updateTask.endValue = req.body.endValue;
    const task = await TasksModel.findByIdAndUpdate(req.body.id, updateTask, {
      new: true,
    });

    res.json({ status: "ok", msg: "task updated", data: task });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error updating" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await TasksModel.findByIdAndDelete(req.body.id);
    res.json({ status: "ok", msg: "task deleted", data: task });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error deleting" });
  }
};

module.exports = {
  seedTasks,
  getAllTasks,
  getTasksByType,
  getTasksByDifficulty,
  addTask,
  updateTask,
  deleteTask,
};
