import Home from "./pages/home/Home";
import {React,useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import Authentication from "./Authentication";
import Products from "./components/Products";
import ViewBasket from "./pages/ViewBasket";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [basket, setBasket] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [liked, setLiked] = useState([])

   // localStorage'dan kayıtları çek
   useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  },[])

    // localStorage'a kayıtları yaz
    useEffect(() => {
      localStorage.setItem("users", JSON.stringify(users));
    }, [users]);
  
  
  
  return (
    <div >

      < ToastContainer /> 
      <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} basket={basket} setBasket={setBasket}  liked={liked} setLiked={setLiked} />
      <Routes>
        <Route path="/"  element={<Home basket={basket} setBasket={setBasket}  liked={liked} setLiked={setLiked} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} users={users} />} />
        <Route path="/register" element={<Register setUsers={setUsers} />} />
        <Route path="/" element={<Authentication isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/basket" element={<ViewBasket />} />

      </Routes>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;
