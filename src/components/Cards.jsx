import React from 'react'
import "./cards.css"
import drjart from "../assets/prism.jpg";
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

const Cards = () => {
    defineElement(lottie.loadAnimation);

    return (
        <div className='sectionn animated animatedFadeInUp fadeInUp '>

            <div> <img className='animated animatedFadeInUp fadeInUp ' id="section-img" src={drjart} /> </div>
            <div className='section-txt' >  <h3 style={{ color: " #525252", fontFamily: "'Ubuntu', sans-serif" }}  >  Yeni ürün alarmı <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                <lord-icon
                    src="https://cdn.lordicon.com/inrunzby.json"
                    trigger="loop"
                    colors="primary:#ffd15d,secondary:#e8308c"
                    style={{ width: "60px", height: "60px", paddingTop: "15px" }}>

                </lord-icon> </h3 ><br /> <p className='animated animatedFadeInUp fadeInUp'> <span style={{
                    fontFamily: "'Ubuntu', sans-serif", fontWeight: "300", fontStyle: "italic",
                }} > Herbivore  <br /> prism 20 aha + 5 bha exfoliating glow facial</span>  <br />  AHA BHA Exfoliating Glow Facial, cildinizdeki ölü derileri arındırmak ve cildinizi yenilemek için özel olarak tasarlanmış bir yüz temizleme ürünüdür. İçeriğindeki AHA (Alfa Hidroksi Asit) ve BHA (Beta Hidroksi Asit) gibi etkili aktif bileşenler, cildinize nazik bir şekilde peeling yapar ve cildinizde biriken kir, yağ ve ölü hücreleri temizler.  

                </p></div>
        </div>
    )
}

export default Cards