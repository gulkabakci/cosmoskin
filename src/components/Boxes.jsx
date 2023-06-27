import React from 'react'
import "./icons.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";


const Boxes = () => {

  return (

    <div>
     
      <div className='ct shaper' >
        <Row className=' p-5'>
          <Col className='boxes '><figure className="box"><img className="box__img" src={icon2} alt="img" /><figcaption className="box__caption">PH DENGESİ</figcaption></figure></Col>
          <Col className='boxes '><figure className="box"><img className="box__img" src={icon3} alt="img" /><figcaption className="box__caption">doğallık</figcaption></figure></Col>
          <Col className='boxes '><figure className="box"><img className="box__img" src={icon6} alt="img" /><figcaption className="box__caption">hayvan deneyleri</figcaption></figure></Col>
          <Col className='boxes'><figure className="box"><img className="box__img" src={icon1} alt="img" /><figcaption className="box__caption">CİLT BAKIMI</figcaption></figure></Col>
          <Col className='boxes'><figure className="box"><img className="box__img" src={icon5} alt="img" /><figcaption className="box__caption">DOĞRU ÜRÜN</figcaption></figure></Col>

        </Row>
      </div>
    </div>
  )
}

export default Boxes