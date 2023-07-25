import React from 'react'
import "./iletisim.css"
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const İletisim = () => {
  return (
   
    <div class="contain"  >

  <div class="wrapper" >

    <div class="form">
      <h4 style={{marginBottom:"35px",color:"white",  fontFamily: "'Raleway', Arial, sans-serif",
}}>İLETİŞİM KUTUSU</h4>
      <form id="submit-form" action="">
        <p>
          <label htmlFor="email" style={{marginBottom:"10px",color:"rgb(255, 255, 255)", fontFamily: "'Raleway', Arial, sans-serif",}}>Mail Adresin</label>
          <input id="email" class="form-input" type="email" />
        </p>
        <p class="full-width">
            <label htmlFor="message" style={{marginBottom:"10px",color:"rgb(255, 255, 255)", fontFamily: "'Raleway', Arial, sans-serif",}}>Mesajın</label>
          <textarea  minlength="20" id="message" cols="30" rows="7" required></textarea>
        </p>
        <p class="full-width">
          <input type="submit" class="submit-btn" value="Gönder" onclick="checkValidations()"/>
        </p>
      </form>
    </div>

    <div class="contacts contact-wrapper" style={{ fontFamily: "'Raleway', Arial, sans-serif",fontSize:"18px",}}>

      <ul id='contactlist'>
        <li>Cilt bakımının gücünü keşfet. Soruların için buradayız. parlamak için bize ulaş! </li>
        <span class="hightlight-contact-info">
          <li class="email-info"><i class="fa fa-envelope" aria-hidden="true"></i><br/><FontAwesomeIcon icon={faEnvelope} style={{color: "#252b35",}} />  info@cosmoskin.com</li> <br/>
          <li><i class="fa fa-phone" aria-hidden="true"></i> <span class="highlight-text" style={{color:"rgb(31, 65, 81)"}}> <FontAwesomeIcon icon={faMobileScreenButton} />   0542 434 543 65</span></li>
        </span>
      </ul>
    </div>
  </div>

</div>
  )
}

export default İletisim