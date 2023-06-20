import React from 'react'
import "./section.css"
import Container from 'react-bootstrap/Container';
import doctor from "../assets/doctor.jpg";

const Section = () => {
  return (
    <Container className='section'>
      <h2 id="h2" style={{fontSize: "40px",marginBottom:"50px",cursor: "pointer", fontFamily: "'Teko', sans-serif"}}>Uzman Görüşü</h2>
      <img  id="doctor" src={doctor} />
      <p id="p"> <i> Kozmetik ürünlerdeki kimyasal içerikler hakkında bilinçli olmak ve doğru ürünü seçmek sağlıklı bir cilt için önemlidir. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aspernatur nihil, dolor natus fugit necessitatibus fuga quam dolores reprehenderit asperiores.</i> </p>
      <h6 style={{fontSize: "30px",marginBottom:"0px", fontFamily: "'Teko', sans-serif"}}> Dr. Derya Akca</h6>
      <h6 style={{fontSize: "20px",fontWeight:"300",marginBottom:"80px",     fontFamily:" 'Raleway', Arial, sans-serif"
}}> Dermotolog | Cosmoweb Kurucusu</h6>

    </Container>
  )
}

export default Section