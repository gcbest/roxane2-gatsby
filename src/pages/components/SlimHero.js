import React from 'react';
import {Link} from 'gatsby';

import WorkMeeting from '../../assets/images/work-meeting.jpg'

export default () => (
    <div className="hero-img-wrap">
        <img className="hero-background-img" src={WorkMeeting} alt="meeting"/>
        <div className="hero-overlay"></div>
        <div className="hero-content-small">
            <div className="hero-text-small">
                <h1 className="name">Dr. Roxane Gervais</h1>
                <h3>
                    Enjoy the productivity benefits of working with one of the UK's best Occupational Psychologists
                </h3>
                <Link to="/contact" className="btn">Contact Us</Link>
            </div>
        </div>
    </div>
)