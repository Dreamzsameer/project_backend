const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  contact: String,
  password: String,
  address: String,
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 20);
});

userSchema.statics.checkCredentialsDb = async (email, password) => {
  const user1 = await User.findOne({ email: email });
  const matched = bcrypt.compareSync(password, user1.password);
  return matched ? user1 : null;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "sameerKey");

  user.tokens = user.tokens.concat({ token: token });
  await user.save();
  return token;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
