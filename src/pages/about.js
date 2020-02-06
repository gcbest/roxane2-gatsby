import React, {Fragment} from 'react';
import Layout from './components/Layout';
import ProfilePic from '../assets/images/roxane-linkedin.jpeg'


export default () => (
    <Layout contentHeader="About">
            <p>
                <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, quas beatae. Recusandae
                    veritatis asperiores odio blanditiis saepe molestiae, libero deserunt.</strong>
                <br/>
                In this layout, we display the areas in source order for any screen
                less that 500 pixels wide. We go to a two column layout, and then to a
                three column layout by redefining the grid, and the placement of items
                on the grid.
            </p>
            <br/>
            <div>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat repudiandae similique
                    consequatur ipsa ab illo, vitae rerum nisi molestias optio dolorum officia. Ea quam reprehenderit
                    repudiandae repellendus doloremque aliquid odio cum repellat cumque optio ullam quas fuga magni aut
                    facere consequatur, animi temporibus laboriosam perferendis? Labore delectus adipisci aperiam?

                </p>
                <img className="about-me-pic"
                    src={ProfilePic}
                    alt="linkedIn picture"/>
            </div>
            <div className="youtube-area">
                <div className="youtube-video">
                    <iframe src="https://www.youtube.com/embed/o9Y3M0M_axA" frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
                <div className="youtube-video">
                    <iframe src="https://www.youtube.com/embed/aYImNDUTeWU" frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>
    </Layout>
);