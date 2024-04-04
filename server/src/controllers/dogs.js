/*******************************************************************************
 *
 * Copyright         : 2024 Damian Chee
 * File Name         : dogs.js
 * Description       : Controller (functions) for mongodb CRUD operations.
 *                     For dogs collection.
 *
 ******************************************************************************/
const DogsModel = require("../models/Dogs");

const seedDogs = async (req, res) => {
  try {
    await DogsModel.deleteMany({});

    const dogs = await DogsModel.create([
      // stuff goes in here
    ]);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "seeding failed" });
  }
};

const getAllDogs = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting" });
  }
};

const addDog = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error adding" });
  }
};

const updateDog = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error updating" });
  }
};

const deleteDog = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error deleting" });
  }
};

module.exports = {
  seedDogs,
  getAllDogs,
  addDog,
  updateDog,
  deleteDog,
};
