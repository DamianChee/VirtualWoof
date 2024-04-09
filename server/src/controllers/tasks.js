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
        _id: "66148304a774a3c020b8f369",
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
        _id: "66148304a774a3c020b8f36a",
        name: "Play with the dog!",
        description: "A healthy dog is a happy dog!",
        type: "Routine & Discipline",
        difficulty: "Easy",
        startValue: 0,
        endValue: 3,
        created_at: new Date("2024-04-08T01:18:42.326Z"),
      },
      {
        _id: "66148304a774a3c020b8f36b",
        name: "Train the dog!",
        description: "All play and no work makes jack a dull boy...",
        type: "Routine & Discipline",
        difficulty: "Easy",
        startValue: 0,
        endValue: 3,
        created_at: new Date("2024-04-08T01:20:05.540Z"),
      },
      {
        _id: "66148304a774a3c020b8f36e",
        name: "Feed the dog!",
        description:
          "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
        type: "Routine & Discipline",
        difficulty: "Medium",
        startValue: 0,
        endValue: 5,
        created_at: new Date("2024-04-08T01:18:03.378+00:00"),
      },
      {
        _id: "66148304a774a3c020b8f36f",
        name: "Play with the dog!",
        description: "A healthy dog is a happy dog!",
        type: "Routine & Discipline",
        difficulty: "Medium",
        startValue: 0,
        endValue: 5,
        created_at: new Date("2024-04-08T01:18:42.326Z"),
      },
      {
        _id: "66148304a774a3c020b8f370",
        name: "Train the dog!",
        description: "All play and no work makes jack a dull boy...",
        type: "Routine & Discipline",
        difficulty: "Medium",
        startValue: 0,
        endValue: 5,
        created_at: new Date("2024-04-08T01:20:05.540Z"),
      },
      {
        _id: "66148304a774a3c020b8f371",
        name: "Feed the dog!",
        description:
          "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
        type: "Routine & Discipline",
        difficulty: "Hard",
        startValue: 0,
        endValue: 8,
        created_at: new Date("2024-04-08T01:18:03.378+00:00"),
      },
      {
        _id: "66148304a774a3c020b8f372",
        name: "Play with the dog!",
        description: "A healthy dog is a happy dog!",
        type: "Routine & Discipline",
        difficulty: "Hard",
        startValue: 0,
        endValue: 8,
        created_at: new Date("2024-04-08T01:18:42.326Z"),
      },
      {
        _id: "66148304a774a3c020b8f373",
        name: "Train the dog!",
        description: "All play and no work makes jack a dull boy...",
        type: "Routine & Discipline",
        difficulty: "Hard",
        startValue: 0,
        endValue: 8,
        created_at: new Date("2024-04-08T01:20:05.540Z"),
      },

      {
        _id: "66148304a774a3c020b8f374",
        name: "Feed the dog!",
        description:
          "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
        type: "Companionship",
        difficulty: "Easy",
        startValue: 0,
        endValue: 3,
        created_at: new Date("2024-04-08T01:18:03.378+00:00"),
      },
      {
        _id: "66148304a774a3c020b8f375",
        name: "Play with the dog!",
        description: "A healthy dog is a happy dog!",
        type: "Companionship",
        difficulty: "Easy",
        startValue: 0,
        endValue: 3,
        created_at: new Date("2024-04-08T01:18:42.326Z"),
      },
      {
        _id: "66148304a774a3c020b8f376",
        name: "Train the dog!",
        description: "All play and no work makes jack a dull boy...",
        type: "Companionship",
        difficulty: "Easy",
        startValue: 0,
        endValue: 3,
        created_at: new Date("2024-04-08T01:20:05.540Z"),
      },
      {
        _id: "66148304a774a3c020b8f377",
        name: "Feed the dog!",
        description:
          "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
        type: "Companionship",
        difficulty: "Medium",
        startValue: 0,
        endValue: 5,
        created_at: new Date("2024-04-08T01:18:03.378+00:00"),
      },
      {
        _id: "66148304a774a3c020b8f36c",
        name: "Play with the dog!",
        description: "A healthy dog is a happy dog!",
        type: "Companionship",
        difficulty: "Medium",
        startValue: 0,
        endValue: 5,
        created_at: new Date("2024-04-08T01:18:42.326Z"),
      },
      {
        _id: "66148304a774a3c020b8f36d",
        name: "Train the dog!",
        description: "All play and no work makes jack a dull boy...",
        type: "Companionship",
        difficulty: "Medium",
        startValue: 0,
        endValue: 5,
        created_at: new Date("2024-04-08T01:20:05.540Z"),
      },
      {
        _id: "66148304a774a3c020b8f37a",
        name: "Feed the dog!",
        description:
          "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
        type: "Companionship",
        difficulty: "Hard",
        startValue: 0,
        endValue: 8,
        created_at: new Date("2024-04-08T01:18:03.378+00:00"),
      },
      {
        _id: "66148304a774a3c020b8f37b",
        name: "Play with the dog!",
        description: "A healthy dog is a happy dog!",
        type: "Companionship",
        difficulty: "Hard",
        startValue: 0,
        endValue: 8,
        created_at: new Date("2024-04-08T01:18:42.326Z"),
      },
      {
        _id: "66148304a774a3c020b8f37c",
        name: "Train the dog!",
        description: "All play and no work makes jack a dull boy...",
        type: "Companionship",
        difficulty: "Hard",
        startValue: 0,
        endValue: 8,
        created_at: new Date("2024-04-08T01:20:05.540Z"),
      },

      {
        _id: "66148304a774a3c020b8f37d",
        name: "Feed the dog!",
        description:
          "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
        type: "Dog Show",
        difficulty: "Easy",
        startValue: 0,
        endValue: 3,
        created_at: new Date("2024-04-08T01:18:03.378+00:00"),
      },
      {
        _id: "66148304a774a3c020b8f37e",
        name: "Play with the dog!",
        description: "A healthy dog is a happy dog!",
        type: "Dog Show",
        difficulty: "Easy",
        startValue: 0,
        endValue: 3,
        created_at: new Date("2024-04-08T01:18:42.326Z"),
      },
      {
        _id: "66148304a774a3c020b8f37f",
        name: "Train the dog!",
        description: "All play and no work makes jack a dull boy...",
        type: "Dog Show",
        difficulty: "Easy",
        startValue: 0,
        endValue: 3,
        created_at: new Date("2024-04-08T01:20:05.540Z"),
      },
      {
        _id: "66148304a774a3c020b8f380",
        name: "Feed the dog!",
        description:
          "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
        type: "Dog Show",
        difficulty: "Medium",
        startValue: 0,
        endValue: 5,
        created_at: new Date("2024-04-08T01:18:03.378+00:00"),
      },
      {
        _id: "66148304a774a3c020b8f381",
        name: "Play with the dog!",
        description: "A healthy dog is a happy dog!",
        type: "Dog Show",
        difficulty: "Medium",
        startValue: 0,
        endValue: 5,
        created_at: new Date("2024-04-08T01:18:42.326Z"),
      },
      {
        _id: "66148304a774a3c020b8f382",
        name: "Train the dog!",
        description: "All play and no work makes jack a dull boy...",
        type: "Dog Show",
        difficulty: "Medium",
        startValue: 0,
        endValue: 5,
        created_at: new Date("2024-04-08T01:20:05.540Z"),
      },
      {
        _id: "66148304a774a3c020b8f383",
        name: "Feed the dog!",
        description:
          "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
        type: "Dog Show",
        difficulty: "Hard",
        startValue: 0,
        endValue: 8,
        created_at: new Date("2024-04-08T01:18:03.378+00:00"),
      },
      {
        _id: "6613462e7a8b057f7ff660b6",
        name: "Play with the dog!",
        description: "A healthy dog is a happy dog!",
        type: "Dog Show",
        difficulty: "Hard",
        startValue: 0,
        endValue: 8,
        created_at: new Date("2024-04-08T01:18:42.326Z"),
      },
      {
        _id: "66148304a774a3c020b8f378",
        name: "Train the dog!",
        description: "All play and no work makes jack a dull boy...",
        type: "Dog Show",
        difficulty: "Hard",
        startValue: 0,
        endValue: 8,
        created_at: new Date("2024-04-08T01:20:05.540Z"),
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

const getTasksByTypeDifficulty = async (req, res) => {
  try {
    const tasks = await TasksModel.find({
      type: req.body.type,
      difficulty: req.body.difficulty,
    });
    res.json({
      status: "ok",
      msg: `returning all ${req.body.type} & ${req.body.difficulty} tasks`,
      data: tasks,
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting" });
  }
};

const getRandomTasks = async (req, res) => {
  try {
    const allTasks = await TasksModel.find();
    const random = allTasks.sort(() => Math.random() - 0.5).slice(0, 3);

    res.json({
      status: "ok",
      msg: "returning three random tasks",
      data: random,
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting" });
  }
};

const getRandomTasksByType = async (req, res) => {
  try {
    const tasks = await TasksModel.find({ type: req.body.type });
    const random = tasks.sort(() => Math.random() - 0.5).slice(0, 3);

    res.json({
      status: "ok",
      msg: `returning three random ${req.body.type} tasks`,
      data: random,
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting" });
  }
};

const getRandomTasksByDifficulty = async (req, res) => {
  try {
    const tasks = await TasksModel.find({ difficulty: req.body.difficulty });
    const random = tasks.sort(() => Math.random() - 0.5).slice(0, 3);

    res.json({
      status: "ok",
      msg: `returning three random ${req.body.difficulty} tasks`,
      data: random,
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting" });
  }
};

const getRandomTasksByTypeDifficulty = async (req, res) => {
  try {
    const tasks = await TasksModel.find({
      type: req.body.type,
      difficulty: req.body.difficulty,
    });
    const random = tasks.sort(() => Math.random() - 0.5).slice(0, 3);

    res.json({
      status: "ok",
      msg: `returning three random ${req.body.type} & ${req.body.difficulty} tasks`,
      data: random,
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
  getTasksByTypeDifficulty,
  getRandomTasks,
  getRandomTasksByType,
  getRandomTasksByDifficulty,
  getRandomTasksByTypeDifficulty,
  addTask,
  updateTask,
  deleteTask,
};
