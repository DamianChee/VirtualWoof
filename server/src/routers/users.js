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
  getUserById,
  getUserTasks,
  hasUserTasksExpired,
  replaceTasksRandomly,
  replaceTasksByType,
  replaceTasksByDifficulty,
  replaceTasksByTypeDifficulty,
} = require("../controllers/users");
const { authUser } = require("../middleware/auth");
const router = express.Router();

router.get("/users/seed", seedUsers);
router.get("/users", getAllUsers);
router.post("/users/tasks", getUserTasks);
router.post("/users/tasksexpired", hasUserTasksExpired);
router.post("/users/tasksreplace", replaceTasksRandomly);
router.post("/users/tasksreplace/type", replaceTasksByType);
router.post("/users/tasksreplace/difficulty", replaceTasksByDifficulty);
router.post("/users/tasksreplace/typedifficulty", replaceTasksByTypeDifficulty);

router.put("/users", addUser);
router.put("/users/adopt", giveUserDog);
router.patch("/users", updateUser);
router.delete("/users", deleteUser);
router.post("/users/register", register);
router.post("/users/login", login);
router.post("/users/refresh", refresh);
router.post("/users/userid", getUserById);

// router.get("/users/seed", seedUsers);
// router.get("/users", getAllUsers);
// router.put("/users", addUser);
// router.put("/users/adopt", giveUserDog);
// router.patch("/users", authUser, updateUser);
// router.delete("/users", authUser, deleteUser);
// router.post("/users/register", register);
// router.post("/users/login", login);
// router.post("/users/refresh", authUser, refresh);
// router.post("/users/userid", authUser, getUserById);

module.exports = router;
