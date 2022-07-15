const mongoose = require("mongoose");
const uuid = require("uuid");
const { debug } = require("../utils/DebugLogger");
const PasswordCrypt = require("../utils/PasswordCrypt");

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v4,
  },

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", function (next) {
  // console.log(`${this.isModified("password")}`);
  if (!this.isModified("password")) {
    return next();
  }

  this.password = PasswordCrypt.encryptPassword(this.password);
  console.log(`Password encrypted: ${this.password}`);
  next();
});

module.exports = mongoose.model("User", userSchema);
