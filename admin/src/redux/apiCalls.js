import {loginStart, loginSuccess, loginFailure, logout} from './userRedux';
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure
} from './productRedux';
import {getUsersStart, getUsersSuccess, getUsersFailure} from './usersRedux';
import {publicRequest, userRequest} from './../requestMethods';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try{
    const res = await publicRequest.post('/auth/login', user)
    dispatch(loginSuccess(res.data));
    window.location.reload(false);
  }catch(err){
    dispatch(loginFailure());
  }
}

export const logoutUser = async (dispatch, signout) => {
  dispatch(logout(signout));
}

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try{
    const res = await userRequest.get('/users')
    dispatch(getUsersSuccess(res.data.users));
  }catch(err){
    dispatch(getUsersFailure());
  }
}

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try{
    const res = await publicRequest.get('/products')
    dispatch(getProductSuccess(res.data.products));
  }catch(err){
    dispatch(getProductFailure());
  }
}

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try{
    // await userRequest.delete(`/products/${id}`)
    dispatch(deleteProductSuccess(id));
  }catch(err){
    dispatch(deleteProductFailure());
  }
}

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try{
    // await userRequest.patch(`/products/${id}`)
    dispatch(updateProductSuccess({id:id, product:product}));
  }catch(err){
    dispatch(updateProductFailure());
  }
}

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try{
    const res = await userRequest.post(`/products`, {product})
    dispatch(addProductSuccess(res.data));
  }catch(err){
    dispatch(addProductFailure());
  }
}
