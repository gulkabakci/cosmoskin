import Home from "./pages/home/Home";
import {React,useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Manager from "./pages/Manager";
import { useDispatch,useSelector } from 'react-redux'; // useDispatch ekledik

function App() {

  const [basket, setBasket] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const users = useSelector((state) => state.users); // Redux store'daki users state'ine erişiyoruz.
  const [liked, setLiked] = useState([])

  const usersCopy = useSelector((state) => state.users);
  console.log("kullanıcılar son", usersCopy);


  
  return (
    <div >

      < ToastContainer /> 
      <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} basket={basket} setBasket={setBasket}  liked={liked} setLiked={setLiked} />
      <Routes>
        <Route path="/"  element={<Home basket={basket} setBasket={setBasket}  liked={liked} setLiked={setLiked} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} users={users} />} />
        <Route path="/register" element={<Register users={users}  />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/manage" element={< Manager />} />

      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
