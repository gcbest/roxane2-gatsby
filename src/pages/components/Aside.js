import React from 'react';
import {Link} from 'gatsby';

export default () => (
    <aside className="side">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li className="full-text"><Link to="/about">About</Link> </li>
        <li><Link to="/services">Services</Link> </li>
        <li><Link to="/publications">Publications</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </aside>
)


