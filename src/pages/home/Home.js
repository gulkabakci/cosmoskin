import React from 'react'
import NavbarCom from '../../components/NavbarCom';
import Slide from '../../components/Slide';
import Boxes from '../../components/Boxes';
import Footer from '../../components/Footer';
import Section from '../../components/Section';
import Header from '../../components/Header';
const Home = () => {
  return (
    <div>
        <Header/>
        <NavbarCom/>
        <Boxes/>
        <Slide/>
        <Section/>
        <Footer/>

    </div>
  )
}

export default Home;