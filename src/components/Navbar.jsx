import React, { useEffect, useState } from 'react'
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

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


import Products from "./Products"

const Header = ({ onClick, handleShow, favories }) => {

    defineElement(lottie.loadAnimation);


    const navigate = useNavigate()


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
                            colors="primary:#ffffff"
                            style={{ width: "30px", height: "30px" }}>
                        </lord-icon></a>
                </form>
            </Col>

            <Col>
                <ul>
                    <li><a href="#" className='tooltipp'><script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/bhfjfgqz.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            style={{ width: "30px", height: "30px" }}>
                        </lord-icon>  </a> </li>

                    {['bottom'].map((placement) => (
                        <OverlayTrigger
                            trigger="click"
                            
                            key={placement}
                            placement={placement}
                            overlay={
                                <Popover id={`popover-positioned-${placement}`}>
                                    <Popover.Header as="h3">{`Favorilerim`}</Popover.Header>
                                    <Popover.Body>
                                        <div> </div>
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
                                </lord-icon><span>Favorilerim</span>  </a></li>
                        </OverlayTrigger>
                    ))}
                    <li><a href="#" onClick={() => {
                        onClick();
                        handleShow();
                    }} className='tooltipp'><script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/hyhnpiza.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            style={{ width: "30px", height: "30px" }}>
                        </lord-icon>  <span>Sepetim</span> </a></li>
                    <li><a href="#" className='tooltipp'><script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/hpivxauj.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            style={{ width: "30px", height: "30px" }}>
                        </lord-icon> <span>Yardım</span> </a></li>
                </ul>
            </Col>


        </Row>


    )
}

export default Header