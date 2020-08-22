const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  amount: String,
  date_time: Date,
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);
module.exports = Feedback;
