import React from 'react'
import "./productcards.css"




const ProductCards = ({product}) => {


  return (
   
<main>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

  <div className = "pcard">
           
  <img src={product.image} />

   <div className="card-content">
      <h2>
        {product.title}
      </h2>
    </div>
  </div>
</main>
    
  )
}

export default ProductCards