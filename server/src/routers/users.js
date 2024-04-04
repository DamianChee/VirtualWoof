const express = require("express");
const {
  seedUsers,
  getAllUsers,
  addUser,
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
router.patch("/users", updateUser);
router.delete("/users", deleteUser);
router.post("/users/register", register);
router.post("/users/login", login);
router.post("/users/refresh", refresh);

module.exports = router;
