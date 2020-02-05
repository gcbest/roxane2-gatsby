import React from 'react';
import {Link} from 'gatsby';

export default () => (
    <aside class="side">
      <ul>
        <li><Link to="">Home</Link></li>
        <li class="full-text"><Link to="/about">About</Link> </li>
        <li><Link to="/publications">Publications</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </aside>
)


