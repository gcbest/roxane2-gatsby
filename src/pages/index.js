import React from "react"
import {Link} from 'gatsby';
import Header from "./components/Header";
import Accreds from './components/Accreds';
import Aside from './components/Aside';
import Home from './components/Home';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import RotatingCity from '../assets/videos/rotating-city.webm'
import ProfilePic from '../assets/images/roxy_transparent_background.png'
import AnimateStyles from './components/styles/animate.module.css';


export default () => (
  <div>
    <Header/>
    <div className="hero-video-wrap">
      <video autoplay="true" muted="true" loop="true">
        <source src={RotatingCity} type="video/mp4"/>
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-grid">
          <img className={`${AnimateStyles.animated} ${AnimateStyles.slideInUp} animated-pic`} src={ProfilePic} alt="roxane"/>
          <div className="hero-text">

            <h1 className="font_1">Practical Psychology Consultancy Ltd.</h1>
            <h3 className="font_2">
              Providing focused solutions to improve and enhance workers’ well-being performance, and productivity; as
              well as effective organisational functionality.
            </h3>
            <Link to="./contact"><button className="btn">Contact Us</button></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="wrapper">
      <Home/>
      
      <Aside/>
      <Accreds/>
    </div>
    <Footer/>
    <Copyright/>
  </div>
);
