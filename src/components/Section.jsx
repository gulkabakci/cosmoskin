import React from 'react'
import "./section.css"
import Container from 'react-bootstrap/Container';
import doctor from "../assets/doctor.jpg";
import { colors } from '@mui/material';

const Section = () => {
  return (
    <Container className='section'>
      <h2 id="h2" style={{ fontSize: "25px", marginBottom: "50px", cursor: "pointer", fontFamily: "'Raleway', Arial, sans-serif" ,}}>Kurucumuzdan size bir mesaj var!</h2>
      <img id="doctor" src={doctor} />
      <p id="p"> <i> Cosmoskin olarak, yaz aylarında cildinizi koruma ve nemlendirme ihtiyaçlarınızı karşılayacak doğal ve hafif formüllü ürünler sunuyoruz. Cildinizi güneşin zararlı etkilerinden koruyarak ve sağlıklı bir parlaklık sağlayarak yaz mevsimini en iyi şekilde geçirmenize yardımcı oluyoruz.
      </i> </p>
      <h6 style={{ fontSize: "22px", marginBottom: "0px", fontFamily: "'Raleway', Arial, sans-serif" }}> Dr. Derya Akca</h6>
      <h6 style={{
        fontSize: "18px", fontWeight: "300", marginBottom: "80px", fontFamily: " 'Raleway', Arial, sans-serif"
      }}> Dermotolog | Cosmoskin Kurucusu</h6>

    </Container>
  )
}

export default Section