const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username:{
      type: String,
      required: [true, 'User requires a name'],
      unique: true
    },
    email:{
      type: String,
      required: [true, 'User requires an email'],
      unique: true
    },
    password:{
      type: String,
      required: [true, 'User requires a password'],
    },
    isAdmin:{
      type: Boolean,
      default: false
    }
  },
  { timestamps: true} //a native MongoDB substitute in place of a createdAt field
);

module.exports = mongoose.model("User", userSchema);
