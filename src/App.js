// import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
// import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Route,
  // Navigate,
} from "react-router-dom";
import { Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} /> 
      <Route  path="/products/:category" element={<ProductList />} /> 
      <Route  path="/products" element={<ProductList />} /> 
      {/* <Route  path="/products/:id" element={<Product/>} />  */}
      <Route  path="/cart" element={<Cart/>}/> 
       
       
      
        {/* <Route path="/success">
          <Success />
        </Route> */}
        {/* <Route path="/login" element={user ? <Navigate to="/login" /> : <Login />} /> */}
        <Route path="/login" element={ <Login />}/>
        {/* <Route path="/register" element ={user ? <Navigate to="/register" /> : <Register />}/> */}
        <Route path="/register" element ={<Register />}/>
        
      </Routes>
    </Router>
  )
    
};

export default App;
