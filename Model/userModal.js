const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  contact: String,
  password: String,
  address: String,
  feedback: [{ type: Schema.Types.ObjectId, ref: "Feedback" }],
  product: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
