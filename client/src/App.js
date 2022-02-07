import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Success from './pages/Success';
import Error from './pages/Error';
import {BrowserRouter as Router, Route, Routes, Redirect, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

function App() {
  const user = useSelector(state=> state.user.currentUser);
  // const user = false;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/products/:categories" element={<ProductList/>}/>
        {!user ? <Route path="/login" element={<Login/>} /> : <Route path="/login" element={<Navigate to='/'/>} />}
        {!user ? <Route path="/register" element={<Register/>} /> : <Route path="/register" element={<Navigate to='/'/>} />}
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
