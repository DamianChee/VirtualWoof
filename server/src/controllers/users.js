/*******************************************************************************
 *
 * Copyright         : 2024 Damian Chee
 * File Name         : users.js
 * Description       : Controller (functions) for mongodb CRUD operations.
 *                     For users collection.
 *
 ******************************************************************************/
const UsersModel = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const seedUsers = async (req, res) => {
  try {
    await UsersModel.deleteMany({});

    const users = await UsersModel.create([
      {
        _id: "660f6811728f55dc40297b90",
        email: "test@gmail.com",
        username: "test",
        password:
          "$2b$12$L3Y15OdcRAGb1eDrj8H/du1LG1CXNwAn/G8qQgr6lN1Lxfel/BiLC",
        goalMode: "Blank",
        tasks: [],
        dogs: [],
      },
      {
        _id: "660e1c58b23ff2bdba967db5",
        email: "test@mail.com",
        username: "test",
        password:
          "$2b$12$37LpR..erY9KK0/IBokpSub6sYeGdzIj.N0P6m5TeJydomel22iEi",
        goalMode: "Show",
        tasks: [
          {
            name: "Play with the dog",
            description: "A healthy dog is a happy dog!",
            type: "Routine",
            difficulty: "easy",
            startValue: 0,
            endValue: 3,
            deadline: "2024-04-03T15:59:59.000Z",
            created_at: "2024-04-02T16:00:00.000Z",
            _id: "660e1d3d31b260c3ea0d1495",
          },
          {
            name: "Feed the dog",
            description:
              "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
            type: "Routine",
            difficulty: "easy",
            startValue: 0,
            endValue: 3,
            deadline: "2024-04-03T15:59:59.000Z",
            created_at: "2024-04-02T16:00:00.000Z",
            _id: "660e1d3d31b260c3ea0d1496",
          },
        ],
        dogs: [
          "660e20599a62ff52a09a9b02",
          "660e20689a62ff52a09a9b04",
          "660e263ba081619e89b45d9a",
        ],
      },
      {
        _id: "660e1b5c65f086c63d2edfc7",
        email: "test1@mail.com",
        username: "test1",
        password:
          "$2b$12$b5DSKTNpUg1rVXksuVWLnu/lOe9JaPp4evbiRa8WszrU7PTFZc8HG",
        goalMode: "Companion",
        tasks: [
          {
            name: "Feed the dog",
            description:
              "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
            type: "Routine",
            difficulty: "easy",
            startValue: 0,
            endValue: 3,
            deadline: "2024-04-03T15:59:59.000Z",
            created_at: "2024-04-02T16:00:00.000Z",
            _id: "660e1d3d31b260c3ea0d1498",
          },
          {
            name: "Feed the dog",
            description:
              "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
            type: "Routine",
            difficulty: "easy",
            startValue: 0,
            endValue: 3,
            deadline: "2024-04-03T15:59:59.000Z",
            created_at: "2024-04-02T16:00:00.000Z",
            _id: "660e1d3d31b260c3ea0d1499",
          },
        ],
        dogs: ["660e25f6a081619e89b45d92"],
      },
      {
        _id: "660e1c62b23ff2bdba967db8",
        email: "test2@mail.com",
        username: "test2",
        password:
          "$2b$12$i9MCZ7K5e5r6za/oOQeZAudNZE4MB8.Rbndjt8YYBOVoTG1VYZzXy",
        goalMode: "Companion",
        tasks: [
          {
            name: "Feed the dog",
            description:
              "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
            type: "Routine",
            difficulty: "easy",
            startValue: 0,
            endValue: 3,
            deadline: "2024-04-03T15:59:59.000Z",
            created_at: "2024-04-02T16:00:00.000Z",
            _id: "660e1d3d31b260c3ea0d149b",
          },
          {
            name: "Feed the dog",
            description:
              "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
            type: "Routine",
            difficulty: "easy",
            startValue: 0,
            endValue: 3,
            deadline: "2024-04-03T15:59:59.000Z",
            created_at: "2024-04-02T16:00:00.000Z",
            _id: "660e1d3d31b260c3ea0d149c",
          },
        ],
        dogs: ["660e2605a081619e89b45d96"],
      },
      {
        _id: "660e1c68b23ff2bdba967dbb",
        email: "test3@mail.com",
        username: "test3",
        password:
          "$2b$12$y/3y53fZv.OnAoc8yx6.LOs7zz4Iy3WdXSFoVTKChF6qj956MOX1e",
        goalMode: "Companion",
        tasks: [
          {
            name: "Feed the dog",
            description:
              "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
            type: "Routine",
            difficulty: "easy",
            startValue: 0,
            endValue: 3,
            deadline: "2024-04-03T15:59:59.000Z",
            created_at: "2024-04-02T16:00:00.000Z",
            _id: "660e1d3d31b260c3ea0d149e",
          },
          {
            name: "Feed the dog",
            description:
              "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
            type: "Routine",
            difficulty: "easy",
            startValue: 0,
            endValue: 3,
            deadline: "2024-04-03T15:59:59.000Z",
            created_at: "2024-04-02T16:00:00.000Z",
            _id: "660e1d3d31b260c3ea0d149f",
          },
        ],
        dogs: ["660e260fa081619e89b45d98"],
      },
      {
        _id: "660e1c6eb23ff2bdba967dbe",
        email: "test4@mail.com",
        username: "test4",
        password:
          "$2b$12$Q7VWVk5C0ITmc4nj/XUX.OY./CFIOS/Wya0xScyKeK1j/sKsJAOOS",
        goalMode: "Companion",
        tasks: [
          {
            name: "Feed the dog",
            description:
              "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
            type: "Routine",
            difficulty: "easy",
            startValue: 0,
            endValue: 3,
            deadline: "2024-04-03T15:59:59.000Z",
            created_at: "2024-04-02T16:00:00.000Z",
            _id: "660e1d3d31b260c3ea0d14a1",
          },
          {
            name: "Feed the dog",
            description:
              "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
            type: "Routine",
            difficulty: "easy",
            startValue: 0,
            endValue: 3,
            deadline: "2024-04-03T15:59:59.000Z",
            created_at: "2024-04-02T16:00:00.000Z",
            _id: "660e1d3d31b260c3ea0d14a2",
          },
        ],
        dogs: ["660e25fea081619e89b45d94"],
      },
    ]);

    res.json({ status: "ok", msg: "seeding successful", data: users });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "seeding failed" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await UsersModel.find();
    res.json(allUsers);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting" });
  }
};

const addUser = async (req, res) => {
  try {
    const newPassword = await bcrypt.hash(req.body.password, 12);
    const newUser = {
      email: req.body.email,
      username: req.body.username,
      password: newPassword,
      goalMode: req.body.goalMode || "Blank",
      tasks: req.body.tasks || [],
      dogs: req.body.dogs || [],
    };
    const users = await UsersModel.create(newUser);

    res.json({ status: "ok", msg: "user saved", data: users });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error adding" });
  }
};

const giveUserDog = async (req, res) => {
  try {
    let user = await UsersModel.findById(req.body.id);
    user.dogs.push(req.body.dog);
    await UsersModel.findByIdAndUpdate(req.body.id, user);

    res.json({ status: "ok", msg: "dog adopted!", data: user });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error adopting dog" });
  }
};

const replaceTaskInUser = async (req, res) => {
  try {
    const updateUser = {};
    updateUser.$set = { tasks: req.body.tasks };
    const users = await UsersModel.findByIdAndUpdate(req.body.id, updateUser, {
      new: true,
    });

    res.json({ status: "ok", msg: "tasks replaced in user", data: users });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error adding task to user" });
  }
};

const addTaskToUser = async (req, res) => {
  try {
    const updateUser = {};
    updateUser.$set = { tasks: req.body.tasks };
    const users = await UsersModel.findByIdAndUpdate(req.body.id, updateUser, {
      new: true,
    });

    res.json({ status: "ok", msg: "tasks replaced in user", data: users });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error adding task to user" });
  }
};

const updateUser = async (req, res) => {
  try {
    const updateUser = {};
    if (req.body.email) updateUser.email = req.body.email;
    if (req.body.username) updateUser.username = req.body.username;
    if (req.body.password) {
      const newPassword = await bcrypt.hash(req.body.password, 12);
      updateUser.password = newPassword;
    }
    if (req.body.goalMode) updateUser.goalMode = req.body.goalMode;
    if (req.body.tasks) updateUser.$set = { tasks: req.body.tasks };
    if (req.body.dogs) updateUser.$set = { dogs: req.body.dogs };
    const users = await UsersModel.findByIdAndUpdate(req.body.id, updateUser, {
      new: true,
    });

    res.json({ status: "ok", msg: "user updated", data: users });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error updating" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await UsersModel.findByIdAndDelete(req.body.id);
    res.json({ status: "ok", msg: "user deleted", data: user });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error deleting" });
  }
};

const register = async (req, res) => {
  try {
    const auth = await UsersModel.findOne({ email: req.body.email });
    if (auth)
      return res.status(400).json({ status: "error", msg: "duplicate email" });
    const password = await bcrypt.hash(req.body.password, 12);
    const data = await UsersModel.create({
      email: req.body.email,
      username: req.body.username,
      password: password,
      goalMode: "Blank",
      tasks: [],
      dogs: [],
    });

    res.json({ status: "ok", msg: "user created", data: data });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "invalid registration" });
  }
};

const login = async (req, res) => {
  try {
    const auth = await UsersModel.findOne({ email: req.body.email });
    if (!auth)
      return res.status(400).json({ status: "error", msg: "email failure" });

    const result = await bcrypt.compare(req.body.password, auth.password);
    if (!result) {
      console.error("email or password incorrect");
      return res.status(401).json({ status: "error", msg: "password failure" });
    }

    const claims = {
      email: auth.email,
      role: auth.role,
    };

    const access = jwt.sign(claims, process.env.ACCESS_SECRET, {
      expiresIn: "20m",
      jwtid: uuidv4(),
    });

    const refresh = jwt.sign(claims, process.env.REFRESH_SECRET, {
      expiresIn: "30d",
      jwtid: uuidv4(),
    });

    res.json({ status: "ok", msg: "logged in", access, refresh });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error not authorized" });
  }
};

const refresh = async (req, res) => {
  try {
    const decoded = jwt.verify(req.body.refresh, process.env.REFRESH_SECRET);

    const claims = {
      email: decoded.email,
      role: decoded.role,
    };

    const access = jwt.sign(claims, process.env.ACCESS_SECRET, {
      expiresIn: "20m",
      jwtid: uuidv4(),
    });

    res.json({ access });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "not authorized" });
  }
};

module.exports = {
  seedUsers,
  getAllUsers,
  addUser,
  giveUserDog,
  updateUser,
  deleteUser,
  register,
  login,
  refresh,
};
