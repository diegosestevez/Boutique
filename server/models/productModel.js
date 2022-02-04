const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title:{
      type: String,
      required: [true, 'Product must have a title'],
      unique: true
    },
    desc:{
      type: String,
      required: [true, 'Product must have a description']
    },
    img:{
      type: String,
      required: [true, 'Product must have an image']
    },
    categories:{
      type: Array,
      required: [true, 'Product must belong to a category']
    },
    size:{
      type: Array
    },
    color:{
      type: Array
    },
    price:{
      type: Number,
      required: [true, 'Product must have a price']
    },
    inStock:{
      type: Boolean,
      default:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
