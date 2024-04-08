const express = require("express");
const {
  seedTasks,
  getAllTasks,
  getTasksByType,
  getTasksByDifficulty,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");
const router = express.Router();

router.get("/tasks/seed", seedTasks);
router.get("/tasks", getAllTasks);
router.post("/tasks/type", getTasksByType);
router.post("/tasks/difficulty", getTasksByDifficulty);
router.put("/tasks", addTask);
router.patch("/tasks", updateTask);
router.delete("/tasks", deleteTask);

module.exports = router;
