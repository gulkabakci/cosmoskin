import ProductDetails from '../components/ProductDetails';
import Highlights from '../components/Highlights';
import { Route, NavLink as Link, Switch, useLocation, useParams } from "react-router-dom";
import "./productdetail.css"
  
import products from "../data/Productdata"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faHeart,faMinus } from '@fortawesome/free-solid-svg-icons'

import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

<script defer src="https://use.fontawesome.com/releases/v5.15.1/js/all.js"
  integrity="sha384-9/D4ECZvKMVEJ9Bhr3ZnUAF+Ahlagp1cyPC7h5yDlZdXs4DQ/vRftzfd+2uFUuqS"
  crossorigin="anonymous"></script>



const ProductDetail = () => {

  const [basket, setBasket] = useState("Sepete Ekle");
  const [count, setCount] = useState(1);
  const [isClicked, setIsClicked] = useState(faPlus);

  const { id } = useParams();
  const productId = parseInt(id);
  const product = products.find((item) => item.id === productId);
  const navigate = useNavigate()


  const fav = useRef()
  const favColor = () => {
    fav.current.style.color = "#e14062";
  }




  const notLike = () => {
    fav.current.style.color = "#e2879a";
  }


  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }


  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }


  return (
    <div className="productdiv"  >
      <div className='d-flex' style={{ position: "relative" }}>
        <img id="productimg" src={product.image}   />
        <div>
          <div className='mx-5 px-4' > <span style={{ textTransform: "capitalize", fontFamily: "'Varela Round', sans-serif", fontSize: "26px", }}>{product.brand}  {product.title}  </span><p style={{    fontFamily: " 'Annie Use Your Telescope', cursive",fontSize:"22px"}} >  ({product.volume}) </p>
            <FontAwesomeIcon icon={faHeart} size="2xl" onClick={favColor} ref={fav} onMouseOver={favColor} onMouseOut={notLike} style={{ color: "#e2879a", cursor: "pointer" }} id="fav" /></div>


          <div style={{ marginTop: "30px", marginLeft: "80px", fontSize: "25px", fontFamily: "Dosis, sans-serif" }} > {product.price} TL </div>

          <div style={{ marginTop: "30px", marginLeft: "80px", fontSize: "18px" }}>
            <span id="productnum"> <button onClick={() => (setCount(count - 1))}>-</button> {count} <button onClick={() => (setCount(count + 1))}>+</button></span>
            <button id='addtobasket'  onMouseOver={()=> setBasket(`Sepete Ekle ${product.price * count} TL`)} onMouseOut={()=> setBasket(`Sepete Ekle`)} >{basket} </button>
          </div>


          <div className="container"  > 
            <div className="accordion"     >
              <input type="checkbox" id="Acc1" style={{ zIndex: "-1" }} />
              <label htmlFor="Acc1">detaylar  <span style={{float:"right"}}><FontAwesomeIcon icon={faPlus} /></span> </label> 
              <div className="fas fa-chevron-down rotate"></div>
              <div className="content">
                {product.exp}
              </div>

            </div>
            <div className="accordion" >
              <input type="checkbox" id="Acc2" style={{ zIndex: "-1" }} />
              <label  htmlFor="Acc2">kullanımı   <span style={{float:"right"}} ><FontAwesomeIcon icon={faMinus}/></span></label>
              <div className="fas fa-chevron-down rotate"></div>
              <div className="content">
                {product.use}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )

}


export default ProductDetail