const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
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
    ],
    amount:{
      type: Number,
      required:[true, 'A purchase price is required']
    },
    address:{
      type: Object,
      required: [true, 'A valid Stripe object is missing']
    },
    status:{
      type: String,
      default: "Pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
