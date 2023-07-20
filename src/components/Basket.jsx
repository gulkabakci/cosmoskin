import React from 'react'

const Basket = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div>
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
                </Offcanvas.Body>
            </Offcanvas></div>
    )
}

export default Basket