/*******************************************************************************
 *
 * Copyright         : 2024 Damian Chee
 * File Name         : Dogs.js
 * Description       : Mongoose Dogs Schema
 *
 ******************************************************************************/

const mongoose = require("mongoose");

const DogsSchema = new mongoose.Schema(
  {
    breed: { type: String, require: true },
    size: { type: String, require: true },
    personality: { type: String, require: true },
    coat: { type: String, require: true },
    currentAffection: { type: Number, require: true, default: 50 },
    currentObedience: { type: Number, require: true, default: 50 },
    currentHunger: { type: Number, require: true, default: 50 },
    birthday: {
      type: Date,
      require: true,
      default: function () {
        return Date.now();
      },
    },
    owner: { type: mongoose.Schema.ObjectId, ref: "Users" },
  },
  { collection: "dogs" }
);

module.exports = mongoose.model("Dogs", DogsSchema);
