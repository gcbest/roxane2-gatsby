import React, {Fragment} from 'react';
import Layout from './components/Layout';


export default () => (
    <Layout>
        <article class="content">
            <h1 class="content-header">Contact Me</h1>
            <div class="contact-area">
                <form class="pure-form pure-form-stacked" action="https://formspree.io/mgeabglg" method="POST">
                    <fieldset>
                        <input type="email" name="_replyto" placeholder="Your Email"/>
                        <textarea class="pure-input-1" rows="4" cols="20" placeholder="Your message..."></textarea>
                        <button type="submit" class="pure-button pure-button-primary">Send <i
                                class="fa fa-envelope-o"></i>
                        </button>
                    </fieldset>
                </form>

                <div class="mapouter">
                    <div class="gmap_canvas"><iframe id="gmap_canvas"
                            src="https://maps.google.com/maps?q=1st%20floor%2C%20Norwich%20House%2C%20Savile%20Street%2C%20Hull%2C%20East%20Riding%20of%20Yorkshire&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>
                </div>
            </div>
        </article>
    </Layout>
);