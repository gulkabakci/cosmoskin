import React, { useEffect, useState } from 'react'
import { fontFamily, fontWeight } from '@mui/system'
import logo from "../assets/lotus.png"
import "./header.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./header.css"
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
const Header = () => {

    defineElement(lottie.loadAnimation);

    return (
        <div className='str' >
            <div className='iletisim'>
                Whatsapp Destek: 0555 343 54 00
            </div>
            <Row >
                <Col className="fc">
                    <div><img id='logo' src={logo} alt="" /></div>
                    <div className='pq' style={{ textAlign: "center" }}> &nbsp; cosmoskin</div>
                </Col>

                <Col >
                    <form action="#" method="post" style={{ display: "inline" }}>
                        <input type="text" name="search" placeholder="    Daha fazlası için ara..." className='search' />
                        <a href='#' ><lord-icon

                            id="search-icon"
                            src="https://cdn.lordicon.com/hgbzryoa.json"
                            trigger="hover"
                            colors="primary:#e8308c,secondary:#a2cee9,tertiary:#e8308c"
                            style={{ width: "30px", height: "30px" }}>
                        </lord-icon></a>
                    </form>
                </Col>

                <Col>
                    <ul>
                        <li><a href="" className='tooltipp'><script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                            <lord-icon class="header-icons"
                                src="https://cdn.lordicon.com/ajkxzzfb.json"
                                trigger="hover"
                                colors="primary:#f64698,secondary:#a2cee9"
                                style={{ width: "35px", height: "35px" }}>
                            </lord-icon> <span>Hesabım</span>  </a> </li>

                        <li><a href="" className='tooltipp'><script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                            <lord-icon class="header-icons"
                                src="https://cdn.lordicon.com/iwaotjbp.json"
                                trigger="hover"
                                colors="primary:#e964a2,secondary:#a2cee9"
                                style={{ width: "35px", height: "35px" }}>
                            </lord-icon> <span>Favorilerim</span>  </a></li>
                        <li><a href="" className='tooltipp'><script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                            <lord-icon class="header-icons"
                                src="https://cdn.lordicon.com/ggihhudh.json"
                                trigger="hover"
                                colors="primary:#136f82,secondary:#a2cee9,tertiary:#e8308c"
                                style={{ width: "35px", height: "35px" }}>
                            </lord-icon>  <span>Sepetim</span> </a></li>
                        <li><a href="" className='tooltipp'><script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                            <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                            <lord-icon 
                                src="https://cdn.lordicon.com/qmbxvtja.json"
                                trigger="hover"
                                colors="primary:#ebe6ef,secondary:#ffc738"
                                style={{ width: "35px", height: "35px" }}>
                            </lord-icon> <span>Karanlık Mod</span> </a></li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

export default Header