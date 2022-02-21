const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    id:{
      type: String,
      required: [true, 'Order requires an id']
    },
    products:[
      {
        productId:{
          type: String
        },
        quantity:{
          type: Number,
          default: 1
        },
        img:{
          type: String
        },
        title:{
          type: String
        },
        price:{
          type: Number
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
      default: "Success"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
