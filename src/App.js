import Home from "./pages/home/Home";

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from "./pages/Auth";

import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";

function App() {

  return (
    <div >
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/products/:id" element={<ProductDetail />} />

      </Routes>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;
