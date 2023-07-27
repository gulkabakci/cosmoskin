import { React, useState, useRef,useEffect } from 'react'
import productt from '../data/Productdata';
import Products from "./Products"
import { motion } from 'framer-motion'; 



const imagePerRow = 3;


const LoadMore = ({basket,setBasket,liked,setLiked}) => {

    // const [basket, setBasket] = useState([])



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

    const container = {
        visible:{
            transition:{
                staggerChildren:0.2
            }
        }
    }

    const item = {
        hidden:{
            opacity:0,
            translateY:20
        },
        visible:{
            opacity:1,
            translateY:0
        }

    }

    return (
        <div>
            <div style={{
                textAlign: "left", textTransform: "uppercase", color: "rgba(227, 54, 106, 0.652)", fontFamily: "'Raleway', Arial, sans-serif", fontSize: "28px", marginTop: "100px", marginBottom: "20px", marginLeft: "150px"
            }}>Ürünlere Göz At</div>
            <motion.div variants={container} initial="hidden"  animate="visible" className="" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap",justifyContent:"center" }} >

                {productt?.slice(0, next)?.map((product, i) =>
                <motion.div variants={item}>
                    <Products 
                        key={i}
                        product={product}
                        basket={basket}
                        liked={liked} 
                        setLiked={setLiked}
                        lastprice={product.piece*product.price}
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
                    </Products></motion.div>)}
            

            </motion.div>
            {next < productt?.length && (
                    <div style={{ display:"flex",justifyContent:"center" }}> <button ref={btn} className="mt-5 btnload" onMouseOver={styleButton} onMouseOut={styledButton} onClick={handleMoreProduct} style={{ padding: "12px", fontFamily: "'Varela Round', sans-serif", border: "1px solid #e14062", borderRadius: "3px", backgroundColor: "#e14062", color: "white",
                }} > daha fazla yükle</button></div>
                )}
        </div>
    )
}

export default LoadMore
