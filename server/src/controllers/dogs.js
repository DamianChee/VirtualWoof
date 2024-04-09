/*******************************************************************************
 *
 * Copyright         : 2024 Damian Chee
 * File Name         : dogs.js
 * Description       : Controller (functions) for mongodb CRUD operations.
 *                     For dogs collection.
 *
 ******************************************************************************/
const DogsModel = require("../models/Dogs");
const UsersModel = require("../models/Users");
const { giveUserDog } = require("./users");

const seedDogs = async (req, res) => {
  try {
    await DogsModel.deleteMany({});

    const dogs = await DogsModel.create([
      {
        _id: "660e20599a62ff52a09a9b02",
        breed: "Corgi",
        size: "Medium",
        personality: "Lazy",
        coat: "Short",
        currentAffection: 80,
        currentObedience: 50,
        currentHunger: 25,
        owner: "660e1c58b23ff2bdba967db5",
        birthday: "2024-04-04T03:36:57.119Z",
      },
      {
        _id: "660e20689a62ff52a09a9b04",
        breed: "Husky",
        size: "Large",
        personality: "Exciteable",
        coat: "Short",
        currentAffection: 80,
        currentObedience: 50,
        currentHunger: 25,
        owner: "660e1c58b23ff2bdba967db5",
        birthday: "2024-04-04T03:37:12.158Z",
      },
      {
        _id: "660e25f6a081619e89b45d92",
        breed: "Husky",
        size: "Large",
        personality: "Exciteable",
        coat: "Short",
        currentAffection: 80,
        currentObedience: 50,
        currentHunger: 25,
        owner: "660e1b5c65f086c63d2edfc7",
        birthday: "2024-04-04T04:00:54.090Z",
      },
      {
        _id: "660e25fea081619e89b45d94",
        breed: "Husky",
        size: "Large",
        personality: "Exciteable",
        coat: "Short",
        currentAffection: 80,
        currentObedience: 50,
        currentHunger: 25,
        owner: "660e1c6eb23ff2bdba967dbe",
        birthday: "2024-04-04T04:01:02.314Z",
      },
      {
        _id: "660e2605a081619e89b45d96",
        breed: "Husky",
        size: "Large",
        personality: "Exciteable",
        coat: "Short",
        currentAffection: 80,
        currentObedience: 50,
        currentHunger: 25,
        owner: "660e1c62b23ff2bdba967db8",
        birthday: "2024-04-04T04:01:09.104Z",
      },
      {
        _id: "660e260fa081619e89b45d98",
        breed: "Husky",
        size: "Large",
        personality: "Exciteable",
        coat: "Short",
        currentAffection: 80,
        currentObedience: 50,
        currentHunger: 25,
        owner: "660e1c68b23ff2bdba967dbb",
        birthday: "2024-04-04T04:01:19.459Z",
      },
      {
        _id: "660e263ba081619e89b45d9a",
        breed: "Corgi",
        size: "Medium",
        personality: "Lazy",
        coat: "Short",
        currentAffection: 50,
        currentObedience: 50,
        currentHunger: 25,
        owner: "660e1c58b23ff2bdba967db5",
        birthday: "2024-04-04T04:02:03.177Z",
      },
    ]);

    res.json({ status: "ok", msg: "seed completed", data: dogs });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "seeding failed" });
  }
};

const getAllDogs = async (req, res) => {
  try {
    const allDogs = await DogsModel.find();
    if (allDogs.length)
      res.json({ status: "ok", msg: "dogs found", data: allDogs });
    else res.json({ status: "ok", msg: "no dogs found" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting" });
  }
};

const getDogById = async (req, res) => {
  try {
    const dog = await DogsModel.findById(req.body.id);
    res.json({ status: "ok", msg: "dogs found", data: dog });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting" });
  }
};

const getDogsByOwner = async (req, res) => {
  try {
    const dogs = await DogsModel.find({ owner: req.body.owner });
    res.json({ status: "ok", msg: "dogs found", data: dogs });
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
      owner: req.body.owner,
    };
    const dog = await DogsModel.create(newDog);

    let user = await UsersModel.findById(req.body.owner);
    user.dogs.push(dog._id);
    user = await UsersModel.findByIdAndUpdate(req.body.owner, user, {
      new: true,
    });

    res.json({ status: "ok", msg: "dog saved", data: { dog, user } });
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

const increaseDogAffection = async (req, res) => {
  try {
    const updateDog = {};
    if (req.body.currentAffection)
      updateDog.currentAffection = req.body.currentAffection;
    else updateDog.$inc = { currentAffection: 5 };
    const dog = await DogsModel.findByIdAndUpdate(req.body.id, updateDog, {
      new: true,
    });

    res.json({ status: "ok", msg: "dog updated", data: dog });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error updating" });
  }
};

const increaseDogObedience = async (req, res) => {
  try {
    const updateDog = {};
    if (req.body.currentObedience)
      updateDog.currentObedience = req.body.currentObedience;
    else updateDog.$inc = { currentObedience: 5 };
    const dog = await DogsModel.findByIdAndUpdate(req.body.id, updateDog, {
      new: true,
    });

    res.json({ status: "ok", msg: "dog updated", data: dog });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error updating" });
  }
};

const increaseDogHunger = async (req, res) => {
  try {
    const updateDog = {};
    if (req.body.currentHunger)
      updateDog.currentHunger = req.body.currentHunger;
    else updateDog.$inc = { currentHunger: 5 };
    const dog = await DogsModel.findByIdAndUpdate(req.body.id, updateDog, {
      new: true,
    });

    res.json({ status: "ok", msg: "dog updated", data: dog });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error updating" });
  }
};

const deleteDog = async (req, res) => {
  try {
    const dog = await DogsModel.findByIdAndDelete(req.body.dog);
    const user = await UsersModel.findByIdAndUpdate(
      req.body.id,
      { $pull: { dogs: req.body.dog } },
      { new: true }
    );
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
  increaseDogAffection,
  increaseDogObedience,
  increaseDogHunger,
  deleteDog,
};
