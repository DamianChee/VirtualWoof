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
    description: { type: String, require: true },
    type: { type: String, require: true, default: "Show" },
    difficulty: { type: String, default: "Easy" },
    startValue: { type: Number, default: 0 },
    endValue: { type: Number, default: 1 },
    created_at: {
      type: Date,
      require: true,
      default: function () {
        // Return the exact time and date right now
        return Date.now();
      },
    },
  },
  { collection: "tasks" }
);

module.exports = mongoose.model("Tasks", TasksSchema);
