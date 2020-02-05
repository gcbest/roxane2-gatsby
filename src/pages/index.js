import React from "react"
import Header from "./components/Header";
import RotatingCity from '../assets/videos/rotating-city.webm'
import Boris from '../assets/images/boris.png'

export default () => (<div>

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
    <aside class="side">
      <ul>
        <li><a href="./index.html">Home</a></li>
        <li class="full-text"><a href="./about.html">About</a> </li>
        <li class="short-text"><a href="./about.html">About</a> </li>
        <li><a href="./publications.html">Publications</a></li>
        <li><a href="./contact.html">Contact</a></li>
      </ul>
    </aside>
    <div class="accreds">
      <img src="./assets/images/chartered_psychologist_logo.png" alt="accred1"/>
      <img src="./assets/images/hpc-reg-logo.png" alt="accred2"/>
    </div>
  </div>
  <footer class="main-footer">
    <div class="about">
      <h2>About Roxane</h2>
      Dr. Gervais is a highly goal-oriented professional with strong data analytic and interpretation experience. Highly
      experienced in
      research design, survey design, psychological assessment, organisational change, organisational development,
      psychometrics, and career development. Extremely organised with the ability to manage multiple projects and meet
      deadlines. Years of experience working in diverse teams and in international environments. A strong work ethic
      combined with a commitment to excellence in all projects undertaken. Strong communication and presentation
      skills.
    </div>
    <div class="posts">
      <h2>Recent Posts</h2>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </div>
    <div class="contact">
      <h2>Contact Us</h2>
      <p>Roxane Gervais</p>
      <p>55 Old Trattford Rd, Hull Yorkshire, North of the Wall</p>
    </div>
  </footer>
  <div class="copyright">
    Copyright &copy; 2020 Roxane Gervais
  </div>

  </div>)
