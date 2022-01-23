const Order = require('./../models/orderModel');

exports.getAllOrders = async (req, res) => {
  try{
  const orders = await Order.find()

    res.status(200).json({
      message: 'success',
      orders
    });
  }catch(err){
    res.status(500).json({
      message:'failed',
      error:err
    })
  }
}

exports.getOrder = async (req, res) => {
  try{
    const orders = await Order.find({userId: req.params.id});

    res.status(200).json({
      message: 'success',
      orders
    });
  }catch(err){
    res.status(500).json({
      message:'failed',
      error:err
    })
  }
}

exports.newOrder = async (req, res) => {
  const newOrder = new Order(req.body)

  try{
    const savedOrder = await newOrder.save();
    res.status(200).json({
      message:'success',
      savedOrder
    })
  }catch(err){
    res.status(500).json({
      message:'failed',
      error:err
    })
  }
  newOrder.save()
}

exports.updateOrder = async (req, res) => {
  try{
    const updateOrder = await Order.findOneAndUpdate({userId:req.params.id}, req.body, {new:true});
    res.status(200).json(updateOrder);
  }catch(err){
    res.status(500).json({
      message:'failed',
      error:err
    })
  }
}

exports.deleteOrder = async (req, res) => {
  try{
    await Order.findOneAndDelete({userId: req.params.id});
    res.status(204).json();
  }catch(err){
    res.status(500).json({
      message:'failed',
      error:err
    })
  }
}

exports.income = async (req, res) => {
 const date = new Date();
 const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
 const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

   try{
     const income = await Order.aggregate([
       { $match: { createdAt: { $gte: previousMonth } } },
       {
         $project: {
           month: { $month: "$createdAt" },
           sales: "$amount",
         },
       },
       {
         $group: {
           _id: "$month",
           total: { $sum: "$sales" },
         },
       },
     ]);

   res.status(200).json({
     income
   });
   }catch(err){
     res.status(500).json(
       {
       message:'failed',
       error: err
     })
   }
}
