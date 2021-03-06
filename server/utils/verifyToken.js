const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
  let token;

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    token = req.headers.authorization.split(' ')[1];
  }

  if(!token){
    return res.status(401).json({message: 'Not authenticated, please login in'});
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if(err) res.status(403).json({message: 'Invalid token'});
    req.user = user
    next();
  });
}

exports.restrictTo = (req, res, next) => {
  if(req.user.isAdmin || req.user.id === req.params.id){
    next();
  }else{
   return res.status(403).json({message:'Access Denied: Invalid credentials'})
  }
}

exports.restrictToAdmin = (req, res, next) => {
  if(req.user.isAdmin){
    next();
  }else{
   return res.status(403).json({message:'Access Denied: Invalid credentials'})
  }
}
