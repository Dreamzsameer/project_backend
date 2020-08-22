const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  brand: String,
  price: String,
  added_date: String,
  desc: String,
  warrenty: Boolean,
  img: String,
  feedback: [{ type: Schema.Types.ObjectId, ref: "Feedback" }],
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
