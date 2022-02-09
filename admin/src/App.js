import React from 'react';
import Home from './pages/home/Home';
import User from './pages/user/User';
import UserList from './pages/userList/UserList';
import NewUser from './pages/newUser/NewUser';
import Product from './pages/product/Product';
import ProductList from './pages/productList/ProductList';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import './app.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;
  return (
    <Router>
    <Routes>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    { admin && (
      <>
        <Topbar/>
        <div className='container'>
        <Sidebar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/users" element={<UserList/>}/>
            <Route path="/user/:userId" element={<User/>}/>
            <Route path="/newUser" element={<NewUser/>}/>
            <Route path="/products" element={<ProductList/>}/>
            <Route path="/product/:productId" element={<Product/>}/>
            <Route path="/newproduct" element={<NewProduct/>}/>
          </Routes>
        </div>
      </>
    )}
    </Router>
  );
}

export default App;
