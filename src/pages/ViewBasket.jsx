import React from 'react'
import productt from '../data/Productdata';
import "../components/highlights.css"

const ViewBasket = (product,handlebasket,basket,setBasket,lastPrice,removeBasket) => {

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
    
  return (
  <>                
                {basket.map((product, index) => {
                  return <div> <li id="offcanvasli" key={index}>
                    <img id='offcanvasimage' src={product.image} />
                    <p style={{ textTransform: "lowercase", color: "#393939", fontFamily: " 'Roboto Slab', serif", marginLeft: "15px" }} >{product.title}  <span style={{ position: "absolute", top: "13px", right: "15px" }}>
                      <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                      <lord-icon
                        src="https://cdn.lordicon.com/kfzfxczd.json"
                        trigger="hover"
                        colors="primary:#5d5d5d"
                        state="morph-fill"
                        onClick={() => removeBasket(product.id)}
                        style={{ width: "20px", height: "20px", cursor: "pointer" }}>
                      </lord-icon> </span> <br /> <span style={{ fontFamily: "'Shadows Into Light', cursive" }} >{product.brand}</span>
                      <span>   <br /> <br />  {product.price * product.piece}  tl </span>   <div id="offcanvasbutton"><button style={{ backgroundColor: "transparent" }} onClick={() => handleDecrement(index)}>-</button> {product.piece} <button onClick={() => handleIncrement(index)} style={{ backgroundColor: "transparent" }}>+</button></div>
                    </p>
                  </li>
                  </div>

                })}

  </>



  )
}

export default ViewBasket;