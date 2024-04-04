const express = require("express");
const {
  seedDogs,
  getAllDogs,
  addDog,
  updateDog,
  deleteDog,
  getDogsByOwner,
  getDogById,
} = require("../controllers/dogs");
const router = express.Router();

router.get("/dogs/seed", seedDogs);
router.get("/dogs", getAllDogs);
router.post("/dogs/id", getDogById);
router.post("/dogs/owner", getDogsByOwner);
router.put("/dogs", addDog);
router.patch("/dogs", updateDog);
router.delete("/dogs", deleteDog);

module.exports = router;
