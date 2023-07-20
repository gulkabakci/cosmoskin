import { React, useState, useRef } from 'react'
import productt from '../data/Productdata';
import Products from "./Products"



const imagePerRow = 4;


const LoadMore = () => {

    const [basket, setBasket] = useState([])

    const [next, setNext] = useState(imagePerRow);
    const handleMoreProduct = () => {
        setNext(next + imagePerRow);
    };

    const btn = useRef()

    const styleButton = () => {
        btn.current.style.backgroundColor = "rgb(254, 241, 249)";
        btn.current.style.color = "rgba(227, 54, 106, 0.652)";
        btn.current.style.border = "1px solid rgba(227, 54, 106, 0.652)";


    }

    const styledButton = () => {
        btn.current.style.backgroundColor = "rgba(227, 54, 106, 0.652)";
        btn.current.style.color = "rgb(255, 255, 255)";


    }
    return (
        <div>
            <div style={{
                textAlign: "left", textTransform: "uppercase", color: "rgba(227, 54, 106, 0.652)", fontFamily: "'Raleway', Arial, sans-serif", fontSize: "28px", marginTop: "100px", marginBottom: "20px", marginLeft: "50px"
            }}>Ürünlere Göz At</div>
            <div className=" justify-center" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", }} >

                {productt?.slice(0, next)?.map((product, i) =>
                    <Products
                        key={i}
                        product={product}
                        basket={basket}
                        setBasket={setBasket}
                        onClick={() => {
                            const arr = [...basket];
                            if (arr.findIndex((ind) => {
                                return product.id === ind.id
                            }) === -1) {
                                arr.push(product)
                                setBasket(arr)
                            }
                            else {
                                arr.map((item) => {
                                    if (item.id === product.id) {
                                        return product.piece += 1;
                                    }
                                    setBasket(arr);
                                    
                                })
                            }
                            console.log(basket)
                        }} 
                        >
                    </Products>)}
                {next < productt?.length && (
                    <div style={{ margin: "auto", }}> <button ref={btn} className="mt-5 btnload" onMouseOver={styleButton} onMouseOut={styledButton} onClick={handleMoreProduct} style={{ padding: "12px", fontFamily: "'Varela Round', sans-serif", border: "1px solid #e14062", borderRadius: "3px", backgroundColor: "#e14062", color: "white", }} >
                        daha fazla yükle
                    </button></div>
                )}

            </div>

        </div>
    )
}

export default LoadMore
