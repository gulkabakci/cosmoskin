import { fontFamily, fontWeight } from '@mui/system'
import logo from "../assets/lotus.png"
import "./navbar.css"
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import pattern5 from "../assets/bg1.jpg";
import pattern4 from "../assets/bg3.jpg";


import React from 'react'

function NavbarCom() {
  return (

    <div className='nvbr ' >
      <Row className='str ' >

        <Col className='topbar' >
          <div className='socialdiv d-flex'> <div className='fcc'> <img className='social' src={phone} title="Telefon" /></div> <p className='pq'> &nbsp;  &nbsp; 0546254342</p> </div>
          <div className='socialdiv d-flex mx-2'> <div className='fcc'> <img className='social' src={mail} title="Mail" /></div> <p className='pq'>&nbsp;  &nbsp; cosmo@outlook.com</p> </div>
        </Col>

        <Col className='fc' xs={4}>
          <div ><img id='logo' src={logo} alt="" /></div>
          <div className='pq' style={{ textAlign: "center" }}>COSMOWEB</div>
        </Col>

        <Col className='topbar'>
          <ul>
            <li>Biz Kimiz?</li>
            <li>Blog</li>
            <li>İletişim</li>
          </ul>
        </Col>

      </Row>
      
      <Carousel fade variant="dark" className='mt-1' interval={null}     >
        <Carousel.Item className=''>
          <img
            className="d-block w-100 sldr  "
            src={pattern5}
            alt="First slide"
          />
          <Carousel.Caption >
          
            <div className='wr d-block animated animatedFadeInUp fadeInUp' >
              <h2 style={{ textAlign: "left", fontFamily: " 'Teko', sans-serif", fontSize: "50px", }}>Ne kullandığını bil.</h2>
              <p className='carouselCap' >İyi bir cilt bakım rutini sağlıklı ve ışıltılı bir cilt için şarttır. Ancak, hangi kozmetik ürünleri seçeceğimizi ve kullanacağımızı bilmek kolay değildir. Kozmetik endüstrisi oldukça karmaşıktır ve içerik listelerindeki kimyasal isimler genellikle anlaşılması zor olabilir.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className=''>
          <img
            className="d-block w-100 sldr "
            src={pattern4}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className='wr animated animatedFadeInUp fadeInUp' >
             <div><p className='carouselCap'>Bu nedenle, sizin için en uygun dermokozmetik ürünleri bulmanızda yardımcı olmaya karar verdik! Markaların ürünlerinin içeriklerinin kullanım amacına uygunluğunu ve formülasyonlarını değerlendirerek size doğru bilgiyi sunuyoruz. Böylece, cildinizin ihtiyaçlarına uygun olarak seçtiğiniz ürünlerle sağlıklı bir cilt bakım rutini oluşturabilirsiniz.</p></div> 
             <div className="frame">
                <p className='carouselCap'>  Daha fazla ayrıntı için  <a class="bouton1" href="#">tıkla.</a>

</p>  </div> 
              </div>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>


  )
}

export default NavbarCom