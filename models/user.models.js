const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: { type: String, maxlength: 64 },
    lastName: { type: String, maxlength: 64 },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, maxlength: 1024 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
