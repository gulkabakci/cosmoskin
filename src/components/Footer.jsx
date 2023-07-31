import React from 'react'
import "./footercom.css"
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import telegram from "../assets/telegram.png";
import twitter from "../assets/twitter.png";
import logo from "../assets/lotus.png"
import Row from 'react-bootstrap/Row';

const Footer = () => {
  return (
    <div className="footer">
      <Row >
      <div className="col">
      <img style={{ maxHeight: "70px", paddingLeft: "130px", marginTop: "80px" }} src={logo} />
      </div>
          <div className="col ftr">
            <h1>Kurumsal</h1>
            <ul>
              <li>Hakkımızda</li> <br/>
              <li>İletişim</li><br/>
              <li>Gizlilik Bildirimi</li><br/>
              <li>Yasal Haklar</li><br/>
            </ul>
          </div>
          <div className="col ftr">
            <h1>Müşteri Hizmetleri</h1>
            <ul>
              <li>Orijinallik ve Memnuniyet Garantisi</li> <br/>
              <li>Şartlar, Politikalar ve Yasal Sözleşmeler </li><br/>
              <li>Kargo / Ödeme / İade</li><br/>
              <li>Destek Portalı</li><br/>
            </ul>
          </div>
          <div className="col ftr">
            <h1>Yardım</h1>
            <ul>
              <li>Sıkça Sorulan Sorular</li><br/>
              <li>Nasıl İade Edebilirim</li><br/>
              <li>Canlı Yardım</li><br/>
              <li>İşlem Rehberi</li>
            </ul>
          </div>
      </Row>
      <hr/>
      <div className='sosyalmedya'> <img src={facebook} />  <img src={instagram} /> <img src={twitter} /> <img src={youtube} /> <img src={telegram} /> </div>

    </div>
  )
}

export default Footer