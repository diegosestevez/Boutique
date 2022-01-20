const Product = require('./../models/productModel');


exports.getAllProducts = async (req, res) => {
 const queryNew = req.query.new;
 const queryCategory = req.query.category;

  try{
    let products;

    if(queryNew){
      products = await Product.find().sort({createdAt: -1}).limit(5)
    }else if(queryCategory){
        products = await Product.find({categories:{
          $in:[queryCategory]
        }
      })
    }else{
      products = await Product.find()
    }

    res.status(200).json({
      message: 'success',
      products
    });
  }catch(err){
    res.status(500).json({
      message:'failed',
      error:err
    })
  }
}


exports.getProduct = async (req, res) => {
  try{
    const product = await Product.findById(req.params.id);

    res.status(200).json({
      message: 'success',
      product
    });
  }catch(err){
    res.status(500).json({
      message:'failed',
      error:err
    })
  }
}

exports.newProduct = async (req, res) => {
  const newProduct = new Product(req.body)

  try{
    const savedProduct = await newProduct.save();
    res.status(200).json({
      message:'success',
      savedProduct
    })
  }catch(err){
    res.status(500).json({
      message:'failed',
      error:err
    })
  }
  newProduct.save()
}

exports.updateProduct = async (req, res) => {
  try{
    const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.status(200).json(updateProduct);
  }catch(err){
    res.status(500).json({
      message:'failed',
      error:err
    })
  }
}

exports.deleteProduct = async (req, res) => {
  try{
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).json();
  }catch(err){
    res.status(500).json({
      message:'failed',
      error:err
    })
  }
}
