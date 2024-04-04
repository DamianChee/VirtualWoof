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

const getDogById = async (req, res) => {
  try {
    const dog = await DogsModel.findById(req.param.id);
    res.json({ status: "ok", msg: "dogs found", data: dog });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting" });
  }
};

const getDogsByOwner = async (req, res) => {
  try {
    const dogs = await DogsModel.find({ owner: req.body.id });
    res.json({ status: "ok", msg: "dogs found", data: dogs });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting" });
  }
};

const getAllDogs = async (req, res) => {
  try {
    const allDogs = await BooksModel.find();
    if (allDogs.length)
      res.json({ status: "ok", msg: "dogs found", data: allDogs });
    else res.json({ status: "ok", msg: "no dogs found" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting" });
  }
};

const addDog = async (req, res) => {
  try {
    const newDog = {
      breed: req.body.breed,
      size: req.body.size,
      personality: req.body.personality,
      coat: req.body.coat,
      currentAffection: req.body.currentAffection,
      currentObedience: req.body.currentObedience,
      currentHunger: req.body.currentHunger,
      owner: req.body.user,
    };
    const dogs = await DogsModel.create(newDog);

    res.json({ status: "ok", msg: "dog saved", data: dogs });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error adding" });
  }
};

const updateDog = async (req, res) => {
  try {
    const updateDog = {};
    if (req.body.breed) updateDog.breed = req.body.breed;
    if (req.body.size) updateDog.size = req.body.size;
    if (req.body.personality) updateDog.personality = req.body.personality;
    if (req.body.coat) updateDog.coat = req.body.coat;
    if (req.body.currentAffection)
      updateDog.currentAffection = req.body.currentAffection;
    if (req.body.currentObedience)
      updateDog.currentObedience = req.body.currentObedience;
    if (req.body.currentHunger)
      updateDog.currentHunger = req.body.currentHunger;
    if (req.body.owner) updateDog.owner = req.body.owner;
    const dogs = await DogsModel.findByIdAndUpdate(req.body.id, updateDog);

    res.json({ status: "ok", msg: "dog updated", data: dogs });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error updating" });
  }
};

const deleteDog = async (req, res) => {
  try {
    const dog = await BooksModel.findByIdAndUpdate(req.body.id);
    res.json({ status: "ok", msg: "dog deleted", data: dog });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error deleting" });
  }
};

module.exports = {
  seedDogs,
  getAllDogs,
  getDogById,
  getDogsByOwner,
  addDog,
  updateDog,
  deleteDog,
};
