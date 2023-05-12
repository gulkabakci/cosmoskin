import React from 'react'
import "./options.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import bgg from "../assets/bathroom-floor-tiles-textured-backdrop.jpg";


const Options = () => {
  return (
    <div className='' style={{  }}>
        <Row className='rw py-3 '>
            <Col className='cl col-2 mx-3 py-5' >  <figure className='box'><img className='icons box__img' src={icon1} /> <figcaption class="box__caption">teknoloji</figcaption></figure> </Col>
            <Col className='cl col-2 mx-3 py-5' >  <figure className='box'><img className='icons box__img' src={icon2} /> <figcaption class="box__caption">içerik</figcaption></figure> </Col>
            <Col className='cl col-2 mx-3 py-5' >  <figure className='box'><img className='icons box__img' src={icon3} /> <figcaption class="box__caption">ürün</figcaption></figure> </Col>
            <Col className='cl col-2 mx-3 py-5' >  <figure className='box'><img className='icons box__img' src={icon4} /> <figcaption class="box__caption">formülasyon</figcaption></figure> </Col>
            <Col className='cl col-2 mx-3 py-5' >  <figure className='box'><img className='icons box__img' src={icon5} /> <figcaption class="box__caption">uzmanlar</figcaption></figure> </Col>

        </Row>

        
        <Container className='idiv py-5'  >
         <div className='icondiv'><figure className='box'><img className='iconss box__img' src={icon1} /> <figcaption class="box__caption">teknoloji</figcaption></figure></div>
         <div className='icondiv'>  <img src={icon2} className='iconss' /></div>
         <div className='icondiv'>  <img src={icon3} className='iconss' /></div>
         <div className='icondiv'>  <img src={icon4} className='iconss' /></div>
         <div className='icondiv'>  <img src={icon5} className='iconss' /></div>

    
    </Container>
    </div>

  )
}

export default Options

