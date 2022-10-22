import React from 'react';
import { Helmet } from "react-helmet";
import {Link} from 'gatsby';
import Logo from '../../assets/images/logo_transparent_background.png'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";



export default () => 
<header className="main-head">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Practical Psychology Consultancy</title>
        <link rel="canonical" href="https://www.practicalpsychologyconsultancy.com" />
    </Helmet>
    <div className="head-container">

    <h1 className="logo"><Link to="/">
        <img src={Logo} alt="logo"/></Link></h1>

    <div className="banner-info">

        <p className="phone-number"><span className="brand-color">Call:</span><a href="tel:+44 (0)7887 743295">+44 (0)7887 743295</a></p>

        <ul className="top-social-media">

        <li><a href="https://twitter.com/roxanelgervais" target="_blank" rel="noopener noreferrer"><FaTwitter/></a></li>

        <li><a href="https://www.linkedin.com/in/dr-roxane-gervais/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a>
        </li>
        </ul>

    </div>
    </div>
    <nav className="main-nav">
    <ul>
        <li><Link className="nav-link" to="/about">About</Link> </li>
        <li><Link className="nav-link" to="/services">Services</Link> </li>
        <li><Link className="nav-link" to="/contact">Contact</Link></li>
    </ul>
    </nav>
</header>