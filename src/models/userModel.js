const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
  });
  

const User = mongoose.model("User", UserSchema);

module.exports = User;
