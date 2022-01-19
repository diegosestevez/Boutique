const User = require('./../models/userModel');
const cryptoJS = require('crypto-js');

exports.updateMe = async (req, res) => {
  if(req.body.password){
    req.body.password =  await cryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString();
  }

  try{
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.status(200).json(updateUser);
  }catch(err){
    res.status(500).json({
      message:'failed',
      error:err
    })
  }
}
