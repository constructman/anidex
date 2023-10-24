const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, 'Email exist']
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  }
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
