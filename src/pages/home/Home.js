import React from 'react'
import NavbarCom from '../../components/NavbarCom';
import Slide from '../../components/Slide';
import Carousel from '../../components/CarouselCom';
import Boxes from '../../components/Boxes';
import Footer from '../../components/Footer';
import Section from '../../components/Section';
const Home = () => {
  return (
    <div>
        <NavbarCom/>
        <Carousel/>
        <Slide/>
        <Section/>
        <Boxes/>

        <Footer/>

    </div>
  )
}

export default Home;