import React from 'react'
import "./icons.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
const Boxes = () => {
  return (

    <div>
      <div class="searchbox">
      <div style={{ textAlign: "center", marginTop: "90px", marginBottom: "80px" }} ><h3 style={{ fontFamily: "  'Raleway', Arial, sans-serif", fontSize: "25px", }}>İçeriğini merak ettiğin ürüne ulaşmak için ara.</h3></div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
        <form action="">
          <input type="search" required />
          <i class="fa fa-search"></i>
        </form>
      </div>
      <div className='ct shaper' >
        <Row className=' p-5'>
          <Col className='boxes '><figure class="box"><img class="box__img" src={icon2} alt="img" /><figcaption class="box__caption">PH DENGESİ</figcaption></figure></Col>
          <Col className='boxes '><figure class="box"><img class="box__img" src={icon3} alt="img" /><figcaption class="box__caption">doğallık</figcaption></figure></Col>
          <Col className='boxes '><figure class="box"><img class="box__img" src={icon6} alt="img" /><figcaption class="box__caption">hayvan deneyleri</figcaption></figure></Col>
          <Col className='boxes'><figure class="box"><img class="box__img" src={icon1} alt="img" /><figcaption class="box__caption">CİLT BAKIMI</figcaption></figure></Col>
          <Col className='boxes'><figure class="box"><img class="box__img" src={icon5} alt="img" /><figcaption class="box__caption">DOĞRU ÜRÜN</figcaption></figure></Col>

        </Row>
      </div>
    </div>
  )
}

export default Boxes