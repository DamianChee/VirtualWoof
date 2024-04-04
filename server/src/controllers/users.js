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
        email: "test@mail.com",
        username: "test",
        password: "?",
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
            deadline: "2024-04-03T23:59:59",
            created_at: "2024-04-03T00:00:00",
          },
          {
            name: "Feed the dog",
            description:
              "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
            type: "Routine",
            difficulty: "easy",
            startValue: 0,
            endValue: 3,
            deadline: "2024-04-03T23:59:59",
            created_at: "2024-04-03T00:00:00",
          },
        ],
        dogs: [{ _id: "?" }],
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

// const giveUserDog = async (req, res) => {
//   try {
//     const userDoc = await UsersModel.findById(req.body.id);
//     const user = userDoc.json();

//     user.dogs.push(req.body.dog);
//     res.json({ status: "ok", msg: "dog adopted!", data: user });
//   } catch (error) {
//     console.error(error.message);
//     res.status(400).json({ status: "error", msg: "error adopting dog" });
//   }
// };

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
    if (req.body.tasks) updateUser.tasks = req.body.tasks;
    if (req.body.dogs) updateUser.dogs = req.body.dogs;
    const users = await UsersModel.findByIdAndUpdate(req.params.id, updateUser);

    res.json({ status: "ok", msg: "book updated", data: users });
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
    const data = await AuthModel.create({
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
    const auth = await UserModel.findOne({ email: req.body.email });
    if (!auth)
      return res.status(400).json({ status: "error", msg: "not authorized" });

    const result = await bcrypt.compare(req.body.password, auth.hash);
    if (!result) {
      console.error("email or password incorrect");
      return res.status(401).json({ status: "error", msg: "login failed" });
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
    res.status(400).json({ status: "error", msg: "not authorized" });
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
  updateUser,
  deleteUser,
  register,
  login,
  refresh,
};
