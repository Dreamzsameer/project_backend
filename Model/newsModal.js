const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  heading: String,
  image: String,
  description: Number,
  date: String,
});

const News = mongoose.model("News", newsSchema);
module.exports = News;