
import React, { useEffect, useRef, useState } from 'react'
import "./highlights.css"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import x from "../assets/x.png"
import Navbar from "./Navbar";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
//her bir ürün kartı

const Highlights = ({ product, onClick, basket, setBasket }) => {


  const [imagePerRow, setImagePerRow] = useState(8);

  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [value, setValue] = useState("Sepete Ekle");
  const btn = useRef()


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fav = useRef()
  const favColor = () => {
    fav.current.style.color = "#e14062";
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

  return (


    <div className='outdiv mx-5'  >
      <div>  <img className='prd-img' src={product.image} onClick={() => navigate(`products/${product?.id}`)} /> </div>
      <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>

      <div  >  <FontAwesomeIcon icon={faHeart} size="xl" onClick={favColor} ref={fav} style={{ color: "#fcf0f0", cursor: "pointer", top: "10px" }} id="fav" /></div>
      <div className='prd-txt' >  <div> <span style={{ fontFamily: "'Varela Round', sans-serif", fontSize: "16px" }} > {product.title}  </span>  <span style={{ float: "right", textTransform: "uppercase", fontFamily: "'Raleway', Arial, sans-serif", fontSize: "21px", }} >{product.price}TL </span>  </div>
        <span style={{ fontFamily: " 'Shadows Into Light', cursive", fontSize: "19px", marginBottom: "20px" }} > {product.brand}</span>  <br />
        <button id="sb" value={value} ref={btn} onClick={() => {
          onClick();
          handleShow();
        }}> {value} </button>
      </div>


      <div >
        <Offcanvas show={show} onHide={handleClose} placement="end" style={{ backgroundColor: "rgb(253, 246, 251)", width: "500px" }} >
          <Offcanvas.Header>
            <Offcanvas.Title className='mt-5 ml-3' style={{ fontFamily: " 'Roboto Slab', serif" }}>sepetim</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body >
            <div style={{ marginTop: "-30px" }}>
              <ul style={{ marginLeft: "0", paddingLeft: "0px", }} id="offcanvaslist">
                {basket.map((product, index) => {
                  return <div> <li id="offcanvasli" key={index}>
                    <img id='offcanvasimage' src={product.image} />
                    <p style={{ textTransform: "lowercase", color: "#393939", fontFamily: " 'Roboto Slab', serif", marginLeft: "15px" }} >{product.title}  <span style={{ position: "absolute", top: "7px", right: "12px" }}> <img onClick={() => removeBasket(product.id)} style={{ cursor: "pointer" }} src={x} /> </span> <br /> <span style={{ fontFamily: "'Shadows Into Light', cursive" }} >{product.brand}</span>
                      <div id="offcanvasbutton"> <button onClick={() => (product.piece -= 1)}>-</button> {product.piece} <button onClick={() => (product.piece += 1)}>+</button></div>
                    </p>
                  </li>
                  </div>

                })}
              </ul>
            </div>
            <div style={{}} > Toplam :  </div>

          </Offcanvas.Body>
        </Offcanvas>
      </div>


    </div>

  )
}

export default Highlights;