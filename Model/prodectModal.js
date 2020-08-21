const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  brand: String,
  price: String,
  added_date: String,
  desc: String,
  warrenty: Boolean,
  img: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
