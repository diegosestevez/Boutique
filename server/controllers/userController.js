const User = require('./../models/userModel');
const cryptoJS = require('crypto-js');


exports.getAllUsers = async (req, res) => {
 const query = req.query.new;

  try{
    const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find();
    res.status(200).json({
      message: 'success',
      users
    });
  }catch(err){
    res.status(500).json({
      message:'failed',
      error:err
    })
  }
}


exports.getUser = async (req, res) => {
  try{
    const user = await User.findById(req.params.id);
    const {password, ...others} = user._doc;

    res.status(200).json({
      message: 'success',
      others
    });
  }catch(err){
    res.status(500).json({
      message:'failed',
      error:err
    })
  }
}

exports.updateUser = async (req, res) => {
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

exports.deleteUser = async (req, res) => {
  try{
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json();
  }catch(err){
    res.status(500).json({
      message:'failed',
      error:err
    })
  }
}


exports.getUserStats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

  try{
    const data = await User.aggregate([
      {$match: {createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {$group: {
        _id: "$month",
        total: { $sum: 1 }
      }}
    ])

    res.status(200).json(data)
  }catch(err){
    res.status(500).json({
      message:'failed',
      error:err
    })
  }
}
