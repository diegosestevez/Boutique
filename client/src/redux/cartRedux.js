import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name:'cart',
  initialState:{
    products:[],
    quantity:0,
    total:0,
  },
  reducers:{
    addProduct:(state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price *action.payload.quantity;
    },
    deleteProduct:(state, action) => {
      state.quantity -= 1;
      state.products =  state.products.filter((product, index)  => index !== action.payload.index) //problem if two of the same item
      state.total = state.total - action.payload.price;
    },
    deleteAllProducts:(state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0
    },
  },
});

export const {addProduct, deleteProduct, deleteAllProducts} = cartSlice.actions;
export default cartSlice.reducer;
