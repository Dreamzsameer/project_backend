const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user_id: String,
  product_id: String,
  amount: String,
  date_time: Date,
  payment: false,
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  product: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
