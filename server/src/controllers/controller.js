/*******************************************************************************
 *
 * Copyright         : 2024 Damian Chee
 * File Name         : controller.js
 * Description       : Controller (functions) for mongodb CRUD operations.
 *                     For template purposes
 *
 ******************************************************************************/
const Model = require("../models/Model");

const seed = async (req, res) => {
  try {
    await Model.deleteMany({});

    const seeds = await Model.create([
      // stuff goes in here
    ]);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "seeding failed" });
  }
};

const getAll = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting" });
  }
};

const add = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error adding" });
  }
};

const update = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error updating" });
  }
};

const del = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error deleting" });
  }
};

module.exports = {
  seed,
  getAll,
  add,
  update,
  del,
};
