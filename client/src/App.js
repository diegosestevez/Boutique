import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Error from './pages/Error';
import {BrowserRouter as Router, useRoutes} from 'react-router-dom';

const HomeRoute = () => useRoutes([
  {path:"/", element:<Home/>}
])

const ProductRoute = () => useRoutes([
  {path: "/product", element: <Product/>},
  {path: "/product/:id", element: <Product/>}
])

const ProductsRoutes = () => useRoutes([
  {path: "/products", element: <ProductList/>},
  {path: "/products/:categories", element: <ProductList/>}
])

const LoginRoute = () => useRoutes([
  {path: "/login", element: <Login/>}
])

const RegisterRoutes = () => useRoutes([
  {path: "/register", element: <Register/>},
  {path: "/signup", element: <Register/>}
])

const CartRoute = () => useRoutes([
  {path: "/cart", element: <Cart/>}
])

// const ErrorRoute = () => useRoutes([
//   {path:"*", element: <Error/>}
// ])

function App() {
  const user = true;
  return (
    <Router>
      <HomeRoute/>
      <ProductRoute/>
      <ProductsRoutes/>
      {!user && <RegisterRoutes/>}
      {!user && <LoginRoute/>}
      <CartRoute/>
      {
        //<ErrorRoute/>
      }
    </Router>
  );
}

export default App;
