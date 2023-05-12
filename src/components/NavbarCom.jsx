import { fontFamily, fontWeight } from '@mui/system'
import logo from "../assets/lotus.png"
import "./navbar.css"
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import React from 'react'

function NavbarCom() {
  return (

    <div className='nvbr ' >

      <Row className='str '>

        <Col className='topbar' >
          <div className='socialdiv'> <div className='fcc'> <img className='social' src={phone} title="Telefon" /></div> <p className='pq'> &nbsp; 0546254342</p> </div>
          <div className='socialdiv mx-2'> <div className='fcc'> <img className='social' src={mail} title="Mail" /></div> <p className='pq'>&nbsp; cosmo@outlook.com</p> </div>
        </Col>

        <Col className='fc' xs={4}>
          <div ><img id='logo' src={logo} alt="" /></div>
          <div className='pq' style={{textAlign:"center"}}>COSMOWEB</div>
        </Col>

        <Col className='topbar'>
          <ul>
            <li>Biz Kimiz?</li>
            <li>Blog</li>
            <li>İletişim</li>
          </ul>
        </Col>

      </Row>

            <div className='firstdiv' style={{position:"relative"}}>
                <p className='firstexp'>Kozmetik ürünlerin içeriklerinin kullanım amacına 
                uygunluğunu ve formülasyonlarını değerlendirerek size doğru bilgiyi sunuyoruz. Daha fazla ayrıntı için
               arama butonuna tıklayın!
                  </p>
                  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
                <br /><br />
                <form action="" style={{position:"absolute",top:"380px", }} >
                    <input className="mt-3" type="search" placeholder="Ara.." required />
                    <i class="fa fa-search"></i>
                </form> 
            </div>
            
    </div>









  )
}

export default NavbarCom