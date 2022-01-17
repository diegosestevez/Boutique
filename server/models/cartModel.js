const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
  {
    user:{
      type: String,
      required: [true, 'User is required']
    },
    products:[
      {
        productId:{
          type: String
        },
        quantity:{
          type: Number,
          default: 1
        }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
