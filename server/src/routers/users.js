const express = require("express");
const {
  seedUsers,
  getAllUsers,
  addUser,
  giveUserDog,
  updateUser,
  deleteUser,
  register,
  login,
  refresh,
} = require("../controllers/users");
const router = express.Router();

router.get("/users/seed", seedUsers);
router.get("/users", getAllUsers);
router.put("/users", addUser);
router.put("/users/adopt", giveUserDog);
router.patch("/users", updateUser);
router.delete("/users", deleteUser);
router.post("/users/register", register);
router.post("/users/login", login);
router.post("/users/refresh", refresh);

module.exports = router;
