/*******************************************************************************
 *
 * Copyright         : 2024 Damian Chee
 * File Name         : Users.js
 * Description       : Mongoose Users Schema
 *
 ******************************************************************************/

const mongoose = require("mongoose");

const Task = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String },
  type: { type: String },
  difficulty: { type: String },
  startValue: { type: Number },
  endValue: { type: Number },
  deadline: {
    type: Date,
    require: true,
    default: function () {
      // Return end of the day
      return new Date(new Date().setHours(23, 59, 59, 999));
    },
  },
  created_at: {
    type: Date,
    require: true,
    default: function () {
      // Return the exact time and date right now
      return Date.now();
    },
  },
});

const UsersSchema = new mongoose.Schema(
  {
    email: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
    goalMode: { type: String, require: true },
    tasks: { type: [Task] },
    dogs: [{ type: mongoose.Schema.ObjectId, ref: "Dogs" }],
  },
  { collection: "users" }
);

module.exports = mongoose.model("Users", UsersSchema);

// user schema example
// {
//   email: "something@mail.com",
//   username: "name",
//   password: "password",
//   goalMode: "companion",
//   tasks: [
//     {
//       name: "Feed the dog",
//       description:
//         "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
//       type: "Routine",
//       difficulty: "easy",
//       startValue: 0,
//       endValue: 3,
//       deadline: "2024-04-03T23:59:59",
//       created_at: "2024-04-03T00:00:00",
//     },
//     {
//       name: "Feed the dog",
//       description:
//         "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
//       type: "Routine",
//       difficulty: "easy",
//       startValue: 0,
//       endValue: 3,
//       deadline: "2024-04-03T23:59:59",
//       created_at: "2024-04-03T00:00:00",
//     },
//     {
//       name: "Feed the dog",
//       description:
//         "Keeping a routine of feeding your dog on time builds discipline and allows your dog to feel less stressed and worried about when their next meal will be provided!",
//       type: "Routine",
//       difficulty: "easy",
//       startValue: 0,
//       endValue: 3,
//       deadline: "2024-04-03T23:59:59",
//       created_at: "2024-04-03T00:00:00",
//     },
//   ],
//   dogs: [{ id: "objectId" }, { id: "objectId" }, { id: "objectId" }],
// };
