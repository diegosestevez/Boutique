const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
  {
    userId:{
      type: String,
      required: [true, 'User ID is required']
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
