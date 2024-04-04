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
      // stuff goes in here
    ]);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "seeding failed" });
  }
};

const getAllTasks = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting" });
  }
};

const addTask = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error adding" });
  }
};

const updateTask = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error updating" });
  }
};

const deleteTask = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error deleting" });
  }
};

module.exports = {
  seedTasks,
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
};
