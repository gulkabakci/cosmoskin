import React, { useEffect, useRef, useState } from 'react'
import "./highlights.css"

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import ProductDetail from '../pages/ProductDetail'
import { useNavigate } from 'react-router-dom'
import Navbar from "./Navbar"
import { motion } from 'framer-motion'; 

const Highlights = ({ productdata }) => {

  const [isLiked, setisLiked] = useState(true);
  const fav = useRef()


  const isFavItem = () => {
      setisLiked(!isLiked);
      if(isLiked=== true){
        fav.current.style.color = "#e14062";
      }
      else{
        fav.current.style.color = "#fcf0f0";

      }
  }

  const navigate = useNavigate()

 
  return (

    <div className='outdiv mx-5' style={{ cursor: "default" }} >
      <div>  <img className='prd-img' src={productdata.image} /> </div>
      <div>  <FontAwesomeIcon icon={faHeart} size="xl" onClick={() => {
        isFavItem();
        // setFavorite(...favorite,productdata);
        // <Navbar favorite={favorite}/>
      }} ref={fav} style={{ color: "#fcf0f0", cursor: "pointer" }} id="favv" /></div>
      <div className='prd-txt' >  <div> <span style={{ fontFamily: "'Varela Round', sans-serif", fontSize: "16px" }} > {productdata.title}  </span>  <span style={{ float: "right", textTransform: "uppercase", fontFamily: "'Raleway', Arial, sans-serif", fontSize: "21px", }} >{productdata.price}TL </span>  </div>
        <span style={{ fontFamily: " 'Shadows Into Light', cursive", fontSize: "19px", marginBottom: "20px" }} > {productdata.brand}</span>  <br />
        <button id="sb" onClick={() => navigate(`products/${productdata?.id}`)}> İncele </button>
      </div>
    </div>

  )
}

export default Highlights

// 'Shadows Into Light', cursive