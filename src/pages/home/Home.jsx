import {React,useState} from 'react'
import Slide from '../../components/Slide';
import Section from '../../components/Section';
import ProductCards from '../../components/ProductCards';
import Header from '../../components/Header';
import LoadMore from '../../components/LoadMore';
import İletisim from "../../components/İletisim"

import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import card4 from "../../assets/card4.jpg";
import card5 from "../../assets/card5.jpg";
import card6 from "../../assets/prism.jpg";
import card7 from "../../assets/card7.jpg";
import card8 from "../../assets/card8.jpg";
import card9 from "../../assets/card9.png";
import Highlights from '../../components/Highlights';


import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/navigation";
import "swiper/css/pagination";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import 'swiper/swiper-bundle.css';
import productdata from "../../data/MostLoved"
import { motion,useScroll,useSpring } from 'framer-motion'; 


const Home = () => {



  const products = [

    {
      id: 1,
      image: card3,
      title: "fenty",
    },
    {
      id: 0,
      image: card1,
      title: "Laneige",
    },
    {
      id: 2,
      image: card2,
      title: "Fourth Ray",
    },

    {
      id: 4,
      image: card6,
      title: "herbivore",
    },
    {
      id: 3,
      image: card5,
      title: "ı am proud",
    },
    {
      id: 5,
      image: card4,
      title: "caudalie",
    }
    ,
    {
      id: 7,
      image: card7,
      title: "skin & lab",
    },
    {
      id: 8,
      image: card8,
      title: "sweet chef",
    },
    {
      id: 9,
      image: card9,
      title: "Then ı met you",
    }
  ];



  const [basket, setBasket] = useState([])
  
  const container = {
    visible:{
        transition:{
            staggerChildren:0.2
        }
    }
}

const item = {
    hidden:{
        opacity:0,
        translateY:40
    },
    visible:{
        opacity:1,
        translateY:0
    }
}



  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}}   >
      <Header />
      <div style={{
        textAlign: "left", textTransform: "uppercase", color: "#4d5466", fontFamily: "'Raleway', Arial, sans-serif", fontSize: "28px", marginTop: "100px", marginBottom: "20px", marginLeft: "90px"
      }} >CosmoskIn'İn En Sevİlenlerİ</div>

      <div className="justify-center d-flex mx-5 "  >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y,]}
          spaceBetween={10}
          loop={true}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}>
          <div className=''  >
            {productdata && productdata.map((productdata, i) => <SwiperSlide >
              <Highlights 
              key={i}  
              productdata={productdata} > </Highlights></SwiperSlide>)}
              
          </div>
        </Swiper>
      </div>



      <div style={{
                textAlign: "left", textTransform: "uppercase", color: "#4d5466", fontFamily: "'Raleway', Arial, sans-serif", fontSize: "28px", marginTop: "100px", marginBottom: "20px", marginLeft: "90px"
      }} >En İyİ Markaları Keşfet</div>
      <div className='' style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} >
        {products && products.map((product, i) => (<ProductCards key={i} product={product} />))}
      </div>

    
      <LoadMore/>
      <Slide />
      <İletisim/>
      <Section />
     

    </motion.div>
  )
}

export default Home;
