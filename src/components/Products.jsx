
import React, { useEffect, useRef, useState } from 'react'
import "./highlights.css"
import Basket from './Basket';
import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import ViewBasket from '../pages/ViewBasket';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
//her bir ürün kartı

const Products = ({ product, onClick, basket, setBasket, lastprice,liked,setLiked }) => {

  const handlebasket = onClick;


  const [imagePerRow, setImagePerRow] = useState(8);

  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [value, setValue] = useState("Sepete Ekle");
  const btn = useRef()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  function handleShow() {
   setShow(true);
   console.log("çalıştı")
  }


  const [cost, setCost] = useState()
  useEffect(() => {
    const totalPrice = basket.reduce((pre, basket) => pre + (basket.price * basket.piece), 0)
    setCost(totalPrice)
    console.log(totalPrice)
  }, [basket])

  const [isLiked, setisLiked] = useState(true);
  const fav = useRef()


  const isFavItem = () => {

    setisLiked(!isLiked);
      if(isLiked=== true){
        fav.current.style.color = "#e14062";
        setLiked([...liked, product]);
        console.log("ekleyince:" ,liked)

      }
      else{
        fav.current.style.color = "#fcf0f0";
        setLiked(liked.filter(item => item.id !== product.id));
        console.log("çıkarıncas:" ,liked)

      }

  }


  const navigate = useNavigate()


  function removeBasket(productid) {
    const removeFind = basket.find(item => item.id === productid);
    removeFind.piece -= 1;
    if (removeFind.piece === 0) {
      setBasket([...basket.filter(item => item.id !== productid)]);
    }
    else {
      setBasket([...basket.filter(item => item.id !== productid)])
    }
  }

  const handleDecrement = (index) => {
    // Ürün sayısını azaltan fonksiyon
    // Eğer 1'den küçükse, 1 olarak tutarız.
    if (basket[index].piece > 1) {
      const updatedBasket = [...basket];
      updatedBasket[index].piece -= 1;
      setBasket(updatedBasket);
    }
  };

  const handleIncrement = (index) => {
    // Ürün sayısını artıran fonksiyon
    const updatedBasket = [...basket];
    updatedBasket[index].piece += 1;
    setBasket(updatedBasket);
  };

  // <ViewBasket product={product} handlebasket={handlebasket} basket={basket} setBasket={setBasket} lastprice={lastprice} removeBasket={removeBasket} />
  return (


    <div className='outdiv mx-5'  >
      <div>  <img className='prd-img' src={product.image} onClick={() => navigate(`products/${product?.id}`)} /> </div>
      <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>

      <div  >  <FontAwesomeIcon icon={faHeart} size="xl" onClick={ isFavItem} ref={fav} style={{ color: "#fcf0f0", cursor: "pointer", top: "10px" }} id="fav" /></div>
      <div className='prd-txt' >  <div> <span style={{ fontFamily: "'Varela Round', sans-serif", fontSize: "16px" }} > {product.title}  </span>  <span style={{ float: "right", textTransform: "uppercase", fontFamily: "'Raleway', Arial, sans-serif", fontSize: "21px", }} >{product.price}TL </span>  </div>
        <span style={{ fontFamily: " 'Shadows Into Light', cursive", fontSize: "19px", marginBottom: "20px" }} > {product.brand}</span>  <br />
        <button id="sb" value={value} ref={btn} onClick={() => {
          handlebasket();
          handleShow();
        }}> {value} </button>
      </div>


      <div >
        <Basket show={show} setShow={setShow} handleClose={handleClose} basket={basket} setBasket={setBasket} removeBasket={removeBasket} onHide={handleClose} style={{ backgroundColor: "rgb(240, 240, 240)", width: "500px" }} />
      </div>


    </div>

  )
}

export default Products;