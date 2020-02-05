import React from "react"
import Header from "./components/Header";
import Accreds from './components/Accreds';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import RotatingCity from '../assets/videos/rotating-city.webm'
import Boris from '../assets/images/boris.png'

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
          <img class="animated slideInUp" src={Boris} alt="roxane"/>
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
      <article class="content">
        <h1 class="content-header">Main article area</h1>
        <p>
          In this layout, we display the areas in source order for any screen
          less that 500 pixels wide. We go to a two column layout, and then to a
          three column layout by redefining the grid, and the placement of items
          on the grid.
        </p>
        <br/>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, sunt! Porro facilis similique quo mollitia
          aspernatur minus architecto quia, quos, quae hic possimus doloribus, repudiandae reiciendis neque quasi tempore
          animi! Iste, in maiores eveniet nulla, doloremque fugiat at expedita recusandae necessitatibus molestias
          voluptates laborum temporibus a dolor enim. Corrupti, hic.
        </p>
      </article>
      <Aside/>
      <Accreds/>
    </div>
    <Footer/>
    <Copyright/>
  </div>
);
