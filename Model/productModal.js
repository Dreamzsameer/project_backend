const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  brand: String,
  price: Number,
  Date: String,
  description: String,
  warrenty: Number,
  image: String,
  feedback: [{ type: Schema.Types.ObjectId, ref: "Feedback" }],
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
