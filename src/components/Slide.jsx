import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import cap1 from "../assets/cap1.jpg";
import cap2 from "../assets/cap2.jpg";
import cap3 from "../assets/cap3.jpg";
import cap4 from "../assets/cap4.jpg";
import "./slide.css"

const Slide = () => {



    return (
        <div className='aq'>

         

            <div style={{ textAlign: "center", marginTop: "90px", marginBottom: "80px" }} ><h3 style={{ fontFamily: " 'Teko', sans-serif", fontSize: "30px", letterSpacing: "3px", }}>Peki neden Cosmoweb'e uğramalısın?</h3></div>
            <div className='sliderow  '>

                <figure class="snip0016">
                    <img src={cap1} alt="sample42" className='imgg' />
                    <figcaption>
                        <h2>Doğru kullanım bilgileri</h2>
                        <p>Ürünün doğru kullanımı hakkında bilgi sağlayarak, ürünün etkili olmasını ve beklentilerinize uygun sonuçlar vermesini sağlarız.</p>
                        <a href="#"></a>
                    </figcaption>
                </figure>
                <figure class="snip0016">
                    <img src={cap3} alt="sample42" className='imgg' />
                    <figcaption>
                        <h2>Ürünleri karşılaştırma</h2>
                        <p>Benzer ürünler arasında karşılaştırma yaparak hangi ürünün daha sağlıklı olduğunu belirlemeye yardımcı oluruz.</p>
                        <a href="#"></a>
                    </figcaption>
                </figure>
                <figure class="snip0016">
                    <img src={cap2} alt="sample43" className='imgg' />
                    <figcaption>
                        <h2>BİLİNÇLİ  TÜKETİM</h2>
                        <p>Ürünler hakkında doğru bilgi sağlayarak, bilinçli tüketim konusunda farkındalık yaratabilir ve tüketicilerin daha sağlıklı ve sürdürülebilir seçimler yapmalarına yardımcı oluruz.</p>
                        <a href="#"></a>
                    </figcaption>
                </figure>
                <figure class="snip0016">
                    <img src={cap4} alt="sample43" className='imgg' />
                    <figcaption>
                        <h2>Zararlı maddeleri tespit etme </h2>
                        <p>Kozmetik ürünlerdeki bazı kimyasallar sağlık açısından zararlı olabilir.Bu maddeleri tespit ederek sağlıklı seçimler yapmalarına yardımcı oluruz.</p>
                        <a href="#"></a>
                    </figcaption>
                </figure>
            </div>

        </div>
    )
}


export default Slide

