
    import React, { useEffect, useRef, useState } from 'react'
    import "./highlights.css"
    
    import ReactDOM from 'react-dom'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import {faHeart } from '@fortawesome/free-solid-svg-icons'
    import { useNavigate } from 'react-router-dom'

    //her bir ürün kartı
    
    const Highlights = ({ product }) => {
    
     const [imagePerRow, setImagePerRow] = useState(8);


      const [count, setCount] = useState(1);
      const [isButtonDisabled, setButtonDisabled] = useState(false);
      const [value,setValue] = useState("Sepete Ekle");
      const btn = useRef()
    
    
      const handleButtonClick = () => {
        if (count >= 1) {
          setButtonDisabled(true);
        }
      };
    
      const clickButton = () => {
        btn.current.style.backgroundColor="#98e498";
        btn.current.style.color="#ffffff";
    
        setValue("Sepete Eklendi");
        btn.current.style.fontSize="14px";
        btn.current.style.border="1px solid #77DD77";
      };
      
    
      const fav = useRef()
      const favColor = ()=> {
        fav.current.style.color="#e14062";
      }
    
      const navigate = useNavigate()

      return (
        <div className='outdiv mx-5'  >
          <div>  <img className='prd-img' src={product.image} onClick={()=> navigate(`products/${product?.id}`)} /> </div>
          <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
        <div  >  <FontAwesomeIcon icon={faHeart} size="xl" onClick={favColor} ref={fav} style={{color: "#fcf0f0",cursor:"pointer"}}  id="fav"  /></div>
          <div className='prd-txt' >  <div> <span style={{ fontFamily: "'Varela Round', sans-serif", fontSize: "16px" }} > {product.title}  </span>  <span style={{ float: "right", textTransform: "uppercase", fontFamily: "'Raleway', Arial, sans-serif", fontSize: "21px", }} >{product.price}TL </span>  </div>
            <span style={{ fontFamily: " 'Shadows Into Light', cursive", fontSize: "19px",marginBottom:"20px" }} > {product.brand}</span>  <br />
            {/* <span id="incele" > {productdata.type}</span>    */}
            <button id="sb" value={value} ref={btn} onClick={clickButton}> {value} </button>
          </div>
        </div>
    
      )
    }
    
    export default Highlights
    
    // 'Shadows Into Light', cursive