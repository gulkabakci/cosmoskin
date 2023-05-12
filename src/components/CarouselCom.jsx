import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import background from "../assets/background.jpg";

import "./deneme.css"
import { Container } from 'react-bootstrap';

function CarouselFadeExample() {
    return (
       
        <Container>
        <Carousel fade variant="dark" interval={null}        >
            <Carousel.Item className=''>
                <img
                    className="d-block w-100 sldr "
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption >
                    <div style={{paddingBottom:"120px", paddingLeft:"20px",width:"50%"}}>
                    <p className='carouselCap' >İyi bir cilt bakım rutini, sağlıklı ve ışıltılı bir cilt için şarttır. Ancak, hangi kozmetik ürünleri seçeceğimizi ve kullanacağımızı bilmek kolay değildir. Kozmetik endüstrisi oldukça karmaşıktır ve içerik listelerindeki kimyasal isimler genellikle anlaşılması zor olabilir.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 sldr"
                    src={slider2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                <div style={{paddingBottom:"200px",display:"flex",width:"75%" }}>
                    <p className='carouselCap'>Bu nedenle, sizin için en uygun kozmetik ürünleri bulmanızda yardımcı olacak bir web sitesi tasarladık. Markaların ürünlerinin içeriklerinin kullanım amacına uygunluğunu ve formülasyonlarının uygunluğunu değerlendirerek, size doğru bilgiyi sunuyoruz. Böylece, cildinizin ihtiyaçlarına uygun olarak seçtiğiniz ürünlerle sağlıklı bir cilt bakım rutini oluşturabilirsiniz.</p>
                 </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Container>
    );
}

export default CarouselFadeExample;
