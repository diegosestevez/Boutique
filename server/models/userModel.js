const mongoose = require('mongoose');
const cryptoJS = require('crypto-js');

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
    phone:{
      type: Number,
      unique: true
    },
    password:{
      type: String,
      required: [true, 'User requires a password']
    },
    isAdmin:{
      type: Boolean,
      default: false
    },
    img:{type:String}
  },
  { timestamps: true} //a native MongoDB substitute in place of a createdAt field
);

//Runs before user document created
userSchema.pre('save', async function(next){
  this.password = await cryptoJS.AES.encrypt(this.password, process.env.PASS_SECRET);
  next();
});

userSchema.methods.checkPassword = async function(){
  return await cryptoJS.AES.decrypt(this.password, process.env.PASS_SECRET).toString(cryptoJS.enc.Utf8);
}

module.exports = mongoose.model("User", userSchema);
