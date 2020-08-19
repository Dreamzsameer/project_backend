const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  amount: String,
  date_time: Date,
  payment: String,
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
