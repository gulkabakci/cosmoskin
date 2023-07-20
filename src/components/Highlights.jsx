import React, { useEffect, useRef, useState } from 'react'
import "./highlights.css"

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import ProductDetail from '../pages/ProductDetail'
import { useNavigate } from 'react-router-dom'
import Navbar from "./Navbar"

const Highlights = ({ productdata }) => {

  const [favories, setFavories] = useState([])

  const fav = useRef()
  const favColor = () => {
    fav.current.style.color = "#e14062";
  }

  // <Navbar favories={favories}  />
  // const addFavories = () => {
  //   const arr = [...favories];
  //   if (arr.findIndex((ind) => {
  //     return productdata.id === ind.id
  //   }) === -1) {
  //     arr.push(productdata)
  //     setFavories(arr);
  //     console.log(favories)
  //   }

  // }

  const navigate = useNavigate()

  return (

    <div className='outdiv mx-5' style={{ cursor: "default" }} >
      <div>  <img className='prd-img' src={productdata.image} /> </div>
      <div>  <FontAwesomeIcon icon={faHeart} size="xl" onClick={() => {
        favColor();
        
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