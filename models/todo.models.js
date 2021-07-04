const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    name: { type: String, maxlength: 256 },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Todo', TodoSchema)