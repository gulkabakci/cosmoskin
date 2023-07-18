import React, { useEffect, useState } from 'react'
import { fontFamily, fontWeight } from '@mui/system'
import "./navbar.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { useLocation } from 'react-router-dom';



const Header = () => {

    defineElement(lottie.loadAnimation);



    return (
         
        <Row className='nvbr' >
            <Col className="fc">
                <div className='pq'> COSMOSKIN</div>
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
                            colors="primary:#000000"
                            style={{ width: "30px", height: "30px" }}>
                        </lord-icon></a>
                </form>
            </Col>

            <Col>
                <ul>
                    <li><a href="" className='tooltipp'><script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/bhfjfgqz.json"
                            trigger="hover"
                            colors="primary:#000000"
                            style={{ width: "30px", height: "30px" }}>
                        </lord-icon>  </a> </li>

                    <li><a href="" className='tooltipp'><script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/pnhskdva.json"
                            trigger="hover"
                            colors="primary:#000000"
                            state="hover"
                            style={{ width: "30px", height: "30px" }}>
                        </lord-icon><span>Favorilerim</span>  </a></li>
                    <li><a href="" className='tooltipp'><script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/hyhnpiza.json"
                            trigger="hover"
                            colors="primary:#000000"
                            style={{ width: "30px", height: "30px" }}>
                        </lord-icon>  <span>Sepetim</span> </a></li>
                    <li><a href="" className='tooltipp'><script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/hpivxauj.json"
                            trigger="hover"
                            colors="primary:#000000"
                            style={{ width: "30px", height: "30px" }}>
                        </lord-icon> <span>Yardım</span> </a></li>
                </ul>
            </Col>

         
        </Row>
    
       
    )
}

export default Header