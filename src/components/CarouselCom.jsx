import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import gorsel1 from "../assets/ciltbakim.jpg";
import gorsel2 from "../assets/ciltbakim2.jpg";
import Container from 'react-bootstrap/Container';

import "./deneme.css"

function CarouselFadeExample() {
    return (
       
        <Container className='my-5'>

          <div style={{display:"flex",marginTop:"150px",justifyContent:"space-evenly",alignItems:"center"}}>
            <p className='cap'>İyi bir cilt bakım rutini, sağlıklı ve ışıltılı bir cilt için şarttır. Ancak, hangi kozmetik ürünleri seçeceğimizi ve kullanacağımızı bilmek kolay değildir. Kozmetik endüstrisi oldukça karmaşıktır ve içerik listelerindeki kimyasal isimler genellikle anlaşılması zor olabilir.</p>
            <img className='photos' src={gorsel1}></img>
          </div>

          <div style={{display:"flex",marginTop:"120px",justifyContent:"space-evenly",alignItems:"center"}}>
          <img className='photos' src={gorsel2}></img>
          <p className='cap'>Bu nedenle, sizin için en uygun kozmetik ürünleri bulmanızda yardımcı olacak bir web sitesi tasarladık. Markaların ürünlerinin içeriklerinin kullanım amacına uygunluğunu ve formülasyonlarının uygunluğunu değerlendirerek, size doğru bilgiyi sunuyoruz. Böylece, cildinizin ihtiyaçlarına uygun olarak seçtiğiniz ürünlerle sağlıklı bir cilt bakım rutini oluşturabilirsiniz.</p>

          </div>
        </Container>
    );
}

export default CarouselFadeExample;
