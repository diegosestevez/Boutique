const User = require('./../models/userModel');

exports.signup = async (req, res) => {
  try{
    const {username, email, password} = req.body;

    const newUser = new User({
      username:username,
      email:email,
      password: password
    });

    await newUser.save();

    res.status(201).json({
      message:'success',
      data: newUser
    });
  }catch(err){
    res.status(500).json({
        message:'failed',
        error: err
    })
  }
}

exports.login = async (req, res) => {
  try{
    //Check to see if user exists
    const user = await User.findOne({username:req.body.username});
    !user && res.status(401).json({message:'wrong credentials'})

    //Checks password
    const unHashedPassword = await user.checkPassword();
    unHashedPassword !== req.body.password && res.status(401).json({message:'wrong credentials'})

    //Sends JSON users object without exposing password
    const {password, ...otherFields} = user._doc; //Note: there is another way to do this using query middleware in the model

    res.status(200).json({
      message:'success',
      data: otherFields
    });
  }catch(err){
    res.status(500).json({
        message:'failed',
        error: err
    })
  }
}
