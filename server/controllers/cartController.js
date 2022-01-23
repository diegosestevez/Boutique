const Cart = require('./../models/cartModel');

exports.getAllCarts = async (req, res) => {
  try{
  const carts = await Cart.find()

    res.status(200).json({
      message: 'success',
      carts
    });
  }catch(err){
    res.status(500).json({
      message:'failed',
      error:err
    })
  }
}

exports.getCart = async (req, res) => {
  try{
    const cart = await Cart.findOne({userId: req.params.id});

    res.status(200).json({
      message: 'success',
      cart
    });
  }catch(err){
    res.status(500).json({
      message:'failed',
      error:err
    })
  }
}

exports.newCart = async (req, res) => {
  const newCart = new Cart(req.body)

  try{
    const savedCart = await newCart.save();
    res.status(200).json({
      message:'success',
      savedCart
    })
  }catch(err){
    res.status(500).json({
      message:'failed',
      error:err
    })
  }
  newCart.save()
}

exports.updateCart = async (req, res) => {
  try{
    const updateCart = await Cart.findOneAndUpdate({userId:req.params.id}, req.body, {new:true});
    res.status(200).json(updateCart);
  }catch(err){
    res.status(500).json({
      message:'failed',
      error:err
    })
  }
}

exports.deleteCart = async (req, res) => {
  try{
    await Cart.findOneAndDelete({userId: req.params.id});
    res.status(204).json();
  }catch(err){
    res.status(500).json({
      message:'failed',
      error:err
    })
  }
}
