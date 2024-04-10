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
        currentAffection: 30,
        currentObedience: 30,
        currentHunger: 30,
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
    res.status(400).json({ status: "error", msg: "Error in seedDogs" });
  }
};

const getAllDogs = async (req, res) => {
  try {
    const dogs = await DogsModel.find();
    if (allDogs.length)
      res.json({ status: "ok", msg: "dogs found", data: dogs });
    else res.json({ status: "ok", msg: "no dogs found" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "Error in getAllDogs" });
  }
};

const getDogById = async (req, res) => {
  try {
    const dog = await DogsModel.findById(req.body.id);
    if (dog.length) res.json({ status: "ok", msg: "dogs found", data: dog });
    else res.json({ status: "ok", msg: "Dog id does not exist" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "Error in getDogById" });
  }
};

const getDogsByOwner = async (req, res) => {
  try {
    const dogs = await DogsModel.find({ owner: req.body.owner });
    if (dogs.length) res.json({ status: "ok", msg: "dogs found", data: dogs });
    else res.json({ status: "ok", msg: "Owner has no dogs" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "Error in getDogsByOwner" });
  }
};

const addDog = async (req, res) => {
  try {
    const newDog = {
      breed: req.body.breed,
      size: req.body.size || "Medium",
      personality: req.body.personality || "Excited",
      coat: req.body.coat || "Short",
      currentAffection: req.body.currentAffection || 50,
      currentObedience: req.body.currentObedience || 50,
      currentHunger: req.body.currentHunger || 50,
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
    res.status(400).json({ status: "error", msg: "Error in addDog" });
  }
};

const updateDog = async (req, res) => {
  try {
    const updateDog = {};
    if ("breed" in req.body) updateDog.breed = req.body.breed;
    if ("size" in req.body) updateDog.size = req.body.size;
    if ("personality" in req.body) updateDog.personality = req.body.personality;
    if ("coat" in req.body) updateDog.coat = req.body.coat;
    if ("currentAffection" in req.body)
      updateDog.currentAffection = req.body.currentAffection;
    if ("currentObedience" in req.body)
      updateDog.currentObedience = req.body.currentObedience;
    if ("currentHunger" in req.body)
      updateDog.currentHunger = req.body.currentHunger;
    if ("owner" in req.body) updateDog.owner = req.body.owner;
    const dogs = await DogsModel.findByIdAndUpdate(req.body.id, updateDog);

    res.json({ status: "ok", msg: "dog updated", data: dogs });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "Error in updateDog" });
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
    res
      .status(400)
      .json({ status: "error", msg: "Error in increaseDogAffection" });
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
    res
      .status(400)
      .json({ status: "error", msg: "Error in increaseDogObedience" });
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
    res
      .status(400)
      .json({ status: "error", msg: "Error in increaseDogHunger" });
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
    res.status(400).json({ status: "error", msg: "Error in deleteDog" });
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
