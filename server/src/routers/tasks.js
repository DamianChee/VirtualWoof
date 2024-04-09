const express = require("express");
const {
  seedTasks,
  getAllTasks,
  getTasksByType,
  getTasksByDifficulty,
  addTask,
  updateTask,
  deleteTask,
  getRandomTasks,
  getRandomTasksByType,
  getRandomTasksByDifficulty,
  getTasksByTypeDifficulty,
  getRandomTasksByTypeDifficulty,
  getTaskById,
} = require("../controllers/tasks");
const router = express.Router();

router.get("/tasks/seed", seedTasks);
router.get("/tasks", getAllTasks);
router.post("/tasks/id", getTaskById);
router.post("/tasks/type", getTasksByType);
router.post("/tasks/difficulty", getTasksByDifficulty);
router.post("/tasks/typedifficulty", getTasksByTypeDifficulty);
router.get("/tasks/random", getRandomTasks);
router.post("/tasks/random/type", getRandomTasksByType);
router.post("/tasks/random/difficulty", getRandomTasksByDifficulty);
router.post("/tasks/random/typedifficulty", getRandomTasksByTypeDifficulty);
router.put("/tasks", addTask);
router.patch("/tasks", updateTask);
router.delete("/tasks", deleteTask);

module.exports = router;
