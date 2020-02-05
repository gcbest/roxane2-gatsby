import React from "react"
import Header from "./components/Header";
import Accreds from './components/Accreds';
import Aside from './components/Aside';
import Home from './components/Home';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import RotatingCity from '../assets/videos/rotating-city.webm'
import Boris from '../assets/images/boris.png'
import AnimateStyles from './components/styles/animate.module.css';


export default () => (
  <div>
    <Header/>
    <div class="hero-video-wrap">
      <video autoplay="" muted="" loop="">
        <source src={RotatingCity} type="video/mp4"/>
      </video>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-grid">
          <img class={`${AnimateStyles.animated} ${AnimateStyles.slideInUp}`} src={Boris} alt="roxane"/>
          <div class="hero-text">

            <h1 class="name">Practical Psychology Consultancy Ltd.</h1>
            <h3>
              Providing focused solutions to improve and enhance workers’ well-being performance, and productivity; as
              well as effective organisational functionality.
            </h3>
            <a href="./contact.html"><button class="btn">Contact Roxane</button></a>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <Home/>
      
      <Aside/>
      <Accreds/>
    </div>
    <Footer/>
    <Copyright/>
  </div>
);
