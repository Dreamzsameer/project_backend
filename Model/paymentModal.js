const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  user_id: String,
  product_id: String,
  amount: String,
  date_time: Date,
});

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
