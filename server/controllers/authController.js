const User = require('./../models/userModel');
const jwt = require('jsonwebtoken');

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
    const user = await User.findOne({username:req.body.username})
    !user && res.status(401).json({message:'wrong credentials'})

    //Checks password
    const unHashedPassword = await user.checkPassword();
    unHashedPassword !== req.body.password && res.status(401).json({message:'wrong credentials'});

    //Creates JWT token
    const accessToken = jwt.sign({
        id: user._id,
        isAdmin: user.isAdmin
      },
      process.env.JWT_SECRET,
      {expiresIn: "3h"}
    );

    //Sends JSON users object without exposing password
    const {password, ...otherFields} = user._doc; 

    res.status(200).json({
      message:'success',
      ...otherFields,
      accessToken
    });
  }catch(err){
    res.status(500).json({
        message:'failed',
        error: err
    })
  }
}
