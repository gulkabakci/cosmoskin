import React from 'react'
import NavbarCom from '../../components/NavbarCom';
import Slide from '../../components/Slide';
import Boxes from '../../components/Boxes';
import Footer from '../../components/Footer';
import Section from '../../components/Section';
const Home = () => {
  return (
    <div>
        <NavbarCom/>
        <Boxes/>
        <Slide/>
        <Section/>
        <Footer/>

    </div>
  )
}

export default Home;