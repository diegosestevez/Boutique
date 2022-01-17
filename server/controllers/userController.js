const User = require('./../models/userModel');

exports.test = (req, res) => {
  res.send('userdata route');
};

exports.testPost = async (req, res, next) => {
  try{
    const {username, email, password} = req.body;
    console.log(req.body)

    await User.create({
      username:username,
      email:email,
      password:password
    })

    res.status(200).json({
      message:'success'
    });
    
  }catch(err){
    res.status(400).json({
        message:'failed',
        error: err
    })
  }
}
