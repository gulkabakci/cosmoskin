import React from 'react'
import "./cards.css"
import drjart from "../assets/prism.jpg";
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

const Cards = () => {
    defineElement(lottie.loadAnimation);

    return (
        <div className='sectionn animated animatedFadeInUp fadeInUp '>

            <div> <img className='animated animatedFadeInUp fadeInUp' id="section-img" src={drjart} /> </div>
            <div className='section-txt' >  <h3 style={{ color: " #525252", fontFamily: "'Ubuntu', sans-serif" }}  >  Yeni ürün alarmı <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                <lord-icon
                    src="https://cdn.lordicon.com/inrunzby.json"
                    trigger="loop"
                    colors="primary:#ffd15d,secondary:#e8308c"
                    style={{ width: "60px", height: "60px", paddingTop: "15px" }}>

                </lord-icon> </h3 ><br /> <p className='animated animatedFadeInUp fadeInUp'> <span style={{
                    fontFamily: "'Ubuntu', sans-serif", fontWeight: "300", fontStyle: "italic",
                }} > Pore Medic - Pore Minish Bubble Foam</span>   <br /> Cilt Gözeneklerinizi Sihirli Bir Dokunuşla Temizleyin
                Siz de pürüzsüz ve göz alıcı bir cilde sahip olmak için doğru yerdesiniz! Pore Minish Bubble Foam ile cilt bakım rutininizde devrim yaratın ve gözeneklerinize yeniden nefes aldırın. </p></div>
        </div>
    )
}

export default Cards