import {React,useState,useEffect} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';

const Basket = ({show,setShow,handleClose,basket,setBasket,removeBasket,}) => {

    const [cost, setCost] = useState()
    useEffect(() => {
      const totalPrice = basket.reduce((pre, basket) => pre + (basket.price * basket.piece), 0)
      setCost(totalPrice)
      console.log(totalPrice)
    }, [basket])

  
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
        <div>
            <Offcanvas show={show} onHide={handleClose} placement="end" style={{ width: "500px",backgroundColor: "rgb(240, 240, 240)" }} >
            <Offcanvas.Header>
            <Offcanvas.Title className='mt-5 ml-3' style={{ fontFamily: " 'Roboto Slab', serif" }}>SEPETİM</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body >
            <div style={{ marginTop: "-30px" }}>
              <ul style={{ marginLeft: "0", paddingLeft: "0px", }} id="offcanvaslist">
                
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
              </ul>
            </div>
            <hr />
            <div style={{ float: "right", fontFamily: "Raleway, Arial, sans-serif", fontSize: "18px" }} > Toplam : {cost} TL
            </div>

          </Offcanvas.Body>
            </Offcanvas></div>
    )
}

export default Basket

