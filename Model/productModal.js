const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productname: String,
  brand: String,
  category: String,
  price: Number,
  date: String,
  description: String,
  warrenty: Number,
  image: String,
  feedback: [{ type: Schema.Types.ObjectId, ref: "Feedback" }],
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
