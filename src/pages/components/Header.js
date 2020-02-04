import React from 'react';
import {Link} from 'gatsby';

export default () => 
<header class="main-head">
    <div class="head-container">

    <h1 class="logo"><Link href="index.html">
        <img src="./assets/images/logo_transparent_background.png" alt=""/></Link></h1>

    <div class="banner-info">

        <p class="phone-number"><span class="brand-color">Call:</span><a href="tel:+44 (0)1482 274551">+44 (0)1482
            274551</a></p>

        <ul class="top-social-media">

        <li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>

        <li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>

        <li><a href="https://www.linkedin.com/in/dr-roxane-gervais/" target="_blank"><i
                class="fa fa-linkedin"></i></a>
        </li>
        </ul>

    </div>
    </div>
    <nav class="main-nav">
    <ul>
        <li><Link class="nav-link" to="/">Home</Link></li>
        <li><Link class="nav-link" to="/about/">About</Link> </li>
        <li><Link class="nav-link" to="/publications/">Publications</Link></li>
        <li><Link class="nav-link" to="/contact/">Contact</Link></li>
    </ul>
    </nav>
</header>