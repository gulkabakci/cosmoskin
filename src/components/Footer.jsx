import React from 'react'
import "./footercom.css"
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import telegram from "../assets/telegram.png";
import twitter from "../assets/twitter.png";
import logo from "../assets/lotus.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
  return (
    <div class="footer">
      <Row >
      <div class="col">
      <img style={{ maxHeight: "70px", paddingLeft: "130px", marginTop: "80px" }} src={logo} />
      </div>
          <div class="col ftr">
            <h1>Kurumsal</h1>
            <ul>
              <li>Hakkımızda</li>
              <li>İletişim</li>
              <li>Gizlilik Bildirimi</li>
              <li>Yasal Haklar</li>


            </ul>
          </div>
          <div class="col ftr">
            <h1>Müşteri Hizmetleri</h1>
            <ul>
              <li>Orijinallik ve Memnuniyet Garantisi</li>
              <li>Şartlar, Politikalar ve Yasal Sözleşmeler </li>
              <li>Kargo / Ödeme / İade</li>
              <li>Destek Portalı</li>
            </ul>
          </div>
          <div class="col ftr">
            <h1>technical skills</h1>
            <ul>
              <li>Figma & XD</li>
              <li>Illustrator</li>
              <li>InDesign</li>
              <li>Photoshop</li>
              <li>Animate</li>
            </ul>
          </div>
      </Row>
      <hr/>
      <div className='sosyalmedya'> <img src={facebook} />  <img src={instagram} /> <img src={twitter} /> <img src={youtube} /> <img src={telegram} /> </div>

    </div>
  )
}

export default Footer