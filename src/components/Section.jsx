import React from 'react'
import "./section.css"
import Container from 'react-bootstrap/Container';
import doctor from "../assets/doctor.jpg";

const Section = () => {
  return (
    <Container className='section'>
      <h2 id="h2" style={{fontSize: "40px",marginBottom:"50px",cursor: "pointer", fontFamily: "'Teko', sans-serif"}}>Uzman Görüşü</h2>
      <img  id="doctor" src={doctor} />
      <p id="p"> <i> Cosmoskin olarak, yaz aylarında cildinizi koruma ve nemlendirme ihtiyaçlarınızı karşılayacak doğal ve hafif formüllü ürünler sunuyoruz. Cildinizi güneşin zararlı etkilerinden koruyarak ve sağlıklı bir parlaklık sağlayarak yaz mevsimini en iyi şekilde geçirmenize yardımcı oluyoruz."
</i> </p>
      <h6 style={{fontSize: "30px",marginBottom:"0px", fontFamily: "'Teko', sans-serif"}}> Dr. Derya Akca</h6>
      <h6 style={{fontSize: "20px",fontWeight:"300",marginBottom:"80px",     fontFamily:" 'Raleway', Arial, sans-serif"
}}> Dermotolog | Cosmoskin Kurucusu</h6>

    </Container>
  )
}

export default Section