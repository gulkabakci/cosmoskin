import React, { useEffect, useState, useRef } from 'react'
import { fontFamily, fontWeight } from '@mui/system'
import "./navbar.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas';
import x from "../assets/x.png"
import İletisim from "./İletisim"
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Link } from 'react-scroll';


import { BrowserRouter as Router, Route, } from 'react-router-dom';

import Products from "./Products"
import productdata from '../data/Productdata';
import Basket from './Basket';

const Navbar = ({ isLoggedIn, setIsLoggedIn, basket, setBasket, liked, setLiked }) => {


    defineElement(lottie.loadAnimation);

    const navigate = useNavigate()

    const ref = React.createRef();

    const [showBasket, setShowBasket] = useState(false);
    const handleBasketClick = () => {
        setShowBasket(!showBasket);
    };



    return (

        <Row className='nvbr' >
            <Col className="fc">
                <div className='pq' onClick={() => navigate(`/`)}> COSMOSKIN</div>
            </Col>
            <Col >
                <form action="#" method="post" style={{ display: "inline" }}>
                    <input type="text" name="search" placeholder="    Daha fazlası için ara..." className='search' />
                    <a href='#' >
                        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon
                            id="search-icon"
                            src="https://cdn.lordicon.com/xfftupfv.json"
                            trigger="hover"
                            colors="primary:#060404"
                            style={{ width: "30px", height: "30px" }}>
                        </lord-icon></a>
                </form>
            </Col>

            <Col>
                <ul>
                    {['bottom'].map((placement) => (
                        <OverlayTrigger
                            trigger="click"
                            key={placement}
                            placement={placement}
                            overlay={
                                <Popover id={`popover-positioned-${placement}`} className='' style={{ borderRadius: "10px", backgroundColor: "rgba(244, 244, 244, 0.108)", border: "1px solid white", width: "150px" }}>
                                    <Popover.Body style={{ textAlign: "center", }} >
                                        <div id='logpopover'>
                                            {isLoggedIn ? ( // Eğer kullanıcı giriş yaptıysa çıkış yap butonunu göster
                                                <div>
                                                    <button className='logoutButton px-3' onClick={() => { setIsLoggedIn(false); window.location.reload() }}>
                                                        Çıkış Yap
                                                    </button>
                                                </div>
                                            ) : (
                                                // Kullanıcı giriş yapmadıysa giriş yap butonunu göster
                                                <div>
                                                    <button className='myAccountButton px-4' onClick={() => navigate(`/login`)}>
                                                        Giriş Yap
                                                    </button>
                                                    <button className='myAccountButton px-4' onClick={() => navigate(`/register`)}>
                                                        Üye Ol
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </Popover.Body>
                                </Popover>
                            }
                        >

                            <li><a href="#" className='tooltipp'><script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                                <lord-icon
                                    src="https://cdn.lordicon.com/bhfjfgqz.json"
                                    trigger="hover"
                                    colors="primary:#ffffff"
                                    style={{ width: "30px", height: "30px" }}>
                                </lord-icon>  </a> </li>
                        </OverlayTrigger>
                    ))}
                    {['bottom'].map((placement) => (
                        <OverlayTrigger
                            trigger="click"
                            key={placement}
                            placement={placement}
                            overlay={
                                <Popover style={{ backgroundColor: "rgba(244, 244, 244, 0.16)", border: "1px solid white", color: "white" }} id={`popover-positioned-${placement}`}>
                                    <Popover.Body style={{ maxHeight: "300px", overflow: "auto", }}>
                                        <div style={{textAlign:"center"}}> <span style={{ fontFamily: " 'Raleway', Arial, sans-serif",fontSize:"16px", color: "#ffffff" ,borderBottom:"1px solid #ffffff7c" }} >Favorilerim   </span>{liked && liked.length > 0 ? (
                                            liked.map((product, index) => {
                                                return <div> <li style={{ border: "none", borderBottom: "1px solid #ffffff63" }} id="offcanvasli" key={index}>
                                                    <img id='offcanvasimage' src={product.image} />
                                                    <p style={{ textTransform: "lowercase", color: "#393939", fontFamily: " 'Roboto Slab', serif", marginLeft: "15px", color: "white" }} >{product.title}  <span style={{ position: "absolute", top: "13px", right: "15px" }}>
                                                        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                                                    </span> <br /> <span style={{ fontFamily: "'Shadows Into Light', cursive", color: "white" }} >{product.brand}</span>
                                                    </p>
                                                </li>
                                                </div>
                                            })) : (
                                            <p style={{ fontFamily: " 'Raleway', Arial, sans-serif", color: "white" }}>Henüz favorin yok.</p>
                                        )}
                                        </div>
                                    </Popover.Body>
                                </Popover>
                            }
                        >
                            <li><a href="#" className='tooltipp'><script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                                <lord-icon
                                    src="https://cdn.lordicon.com/pnhskdva.json"
                                    trigger="hover"
                                    colors="primary:#ffffff"
                                    state="hover"
                                    style={{ width: "30px", height: "30px" }}>
                                </lord-icon></a></li>
                        </OverlayTrigger>
                    ))}
                    <li onClick={handleBasketClick} ><a href="#" id='tikla' className='tooltipp'><script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/hyhnpiza.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            style={{ width: "30px", height: "30px" }}>
                        </lord-icon>  </a></li>
                    <Link to="aboutSection" smooth={true} duration={200}>
                        <li><a ref={ref} href="#" className='tooltipp'><script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                            <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                            <lord-icon
                                src="https://cdn.lordicon.com/hpivxauj.json"
                                trigger="hover"
                                colors="primary:#ffffff"
                                style={{ width: "30px", height: "30px" }}>
                            </lord-icon></a> </li>      </Link>


                </ul>
            </Col>


            {showBasket && (
                <Basket
                    show={showBasket}
                    handleClose={() => setShowBasket(false)}
                    basket={basket}
                    setBasket={setBasket}
                // Diğer prop değerlerini buraya ekleyin
                />
            )}




        </Row>


    )
}

export default Navbar