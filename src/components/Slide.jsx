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

         

            <div style={{ textAlign: "center", marginTop: "90px", marginBottom: "80px" }} ><h3 style={{ fontFamily: "'Raleway', Arial, sans-serif", fontSize: "22px", letterSpacing: "1px", }}>Peki neden Cosmoskin'e uğramalısın?</h3></div>
            <div className='sliderow  '>

                <figure class="snip0016">
                    <img src={cap1} alt="sample42" className='imgg' />
                    <figcaption>
                        <h2>Doğal Güzelliği Yansıtın</h2>
                        <p>Cosmoskin, doğal güzelliğinizi ortaya çıkarmak ve desteklemek için özenle seçilmiş doğal ve organik kozmetik ürünleri sunar. Sağlıklı ve ışıltılı bir cilt, güvenle kullanabileceğiniz doğal ürünlerle mümkündür.</p>
                        <a href="#"></a>
                    </figcaption>
                </figure>
                <figure class="snip0016">
                    <img src={cap3} alt="sample42" className='imgg' />
                    <figcaption>
                        <h2>Trendlere Uygun Ürünler</h2>
                        <p>Kozmetik dünyasındaki trendleri takip eder ve en güncel ürünleri sizinle buluştururuz. Yeni çıkan ürünler, popüler markaların en son koleksiyonları ve sezonun en trend renkleri Cosmoskin'de yer alır. Modaya uygun ve stil sahibi olmak isteyenler için ideal bir seçenektir.</p>
                        <a href="#"></a>
                    </figcaption>
                </figure>
                <figure class="snip0016">
                    <img src={cap4} alt="sample43" className='imgg' />
                    <figcaption>
                        <h2>Müşterİ Desteğİ</h2>
                        <p> Cosmoskin, müşteri memnuniyetine büyük önem verir. Profesyonel ve deneyimli müşteri hizmetleri ekibimiz, sorularınızı yanıtlamak ve sorunlarınızı çözmek için her zaman hazırdır. Size en iyi hizmeti sunmak için buradayız.</p>
                        <a href="#"></a>
                    </figcaption>
                </figure>
                <figure class="snip0016">
                    <img src={cap2} alt="sample43" className='imgg' />
                    <figcaption>
                        <h2>Genİş Ürün Yelpazesi </h2>
                        <p>Cosmoskin, geniş bir kozmetik ürün yelpazesi sunar. Cilt bakımından makyaja, saç bakımından vücut ürünlerine kadar pek çok kategoriye ve markaya yer verir. İhtiyaçlarınıza ve tercihlerinize uygun ürünleri tek bir yerde bulabilirsiniz</p>
                        <a href="#"></a>
                    </figcaption>
                </figure>
            </div>

        </div>
    )
}


export default Slide

