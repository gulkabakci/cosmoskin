import { fontFamily, fontWeight } from '@mui/system'
import logo from "../assets/lotus.png"
import "./navbar.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import React from 'react'

function NavbarCom() {
  return (

    <div className=' ' >
     

      <Carousel fade variant="dark" className='mt-1' interval={null}     >
        <Carousel.Item className=''>
          <img
            className="d-block w-100 sldr  "
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
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className='wr animated animatedFadeInUp fadeInUp' >
              <div><p className='carouselCap'>Bu nedenle, sizin için en uygun dermokozmetik ürünleri bulmanızda yardımcı olmaya karar verdik! Markaların ürünlerinin içeriklerinin kullanım amacına uygunluğunu ve formülasyonlarını değerlendirerek size doğru bilgiyi sunuyoruz. Böylece, cildinizin ihtiyaçlarına uygun olarak seçtiğiniz ürünlerle sağlıklı bir cilt bakım rutini oluşturabilirsiniz.</p></div>
              <div className="frame">
                <p className='carouselCap'>  Daha fazla ayrıntı için  <a className="bouton1" href="#">tıkla.</a>

                </p>  </div>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>


  )
}

export default NavbarCom