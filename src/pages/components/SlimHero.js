import React from 'react';
import WorkMeeting from '../../assets/images/work-meeting.jpg'

export default () => (
    <div class="hero-img-wrap">
        <img class="hero-background-img" src={WorkMeeting} alt="meeting"/>
        <div class="hero-overlay"></div>
        <div class="hero-content-small">
            <div class="hero-text-small">
                <h1 class="name">Dr. Roxane Gervais</h1>
                <h3>
                    Enjoy the productivity benefits of working with one of the UK's best Occupational Psychologists
                </h3>
                <a href="./contact.html" class="btn">Contact Roxane</a>
            </div>
        </div>
    </div>
)