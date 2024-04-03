/*******************************************************************************
 *
 * Copyright         : 2024 Damian Chee
 * File Name         : Tasks.js
 * Description       : Mongoose Tasks Schema
 *
 ******************************************************************************/

const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    type: { type: String },
    difficulty: { type: String },
    startValue: { type: String },
    endValue: { type: String },
    deadline: { type: String },
    created_at: { type: String },
  },
  { collection: "tasks" }
);

module.exports = mongoose.model("Tasks", TasksSchema);
