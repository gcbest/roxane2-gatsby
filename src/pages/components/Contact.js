import React from 'react';
import pureStyles from "./styles/pure.module.css"
import {FaRegEnvelope} from 'react-icons/fa';
import { IconContext } from "react-icons";


export default () => (
        <div className="contact-area">
            <div>
                <h3>1st floor, Norwich House,</h3>
                <h3>Savile Street,</h3>
                <h3>Hull, East Riding of Yorkshire.</h3>
                <h3>HU1 3ES.</h3>
                <h3>+44 (0)1482 274551</h3>
                <h3>+44 (0)7887 743295</h3>
                <h3>roxane.gervais@practicalpsychologyconsultancy.com</h3>
            </div>  
            <form className={`${pureStyles.pureForm} ${pureStyles.pureFormStacked}`} action="https://formspree.io/mgeabglg" method="POST">
                <fieldset>
                    <input type="email" name="_replyto" placeholder="Your Email"/>
                    <textarea className="pure-input-1" name="message" rows="4" cols="20" placeholder="Your message..."></textarea>
                    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
                    <button type="submit" className={`${pureStyles.pureButton} ${pureStyles.pureButtonPrimary}`}><span style={{paddingBottom: '1rem'}}>Send</span> <FaRegEnvelope/>
                    </button>
                    </IconContext.Provider>
                </fieldset>
            </form>

            <div className="maprouter">
                <div className="gmap_canvas"><iframe id="gmap_canvas" title="office"
                        src="https://maps.google.com/maps?q=1st%20floor%2C%20Norwich%20House%2C%20Savile%20Street%2C%20Hull%2C%20East%20Riding%20of%20Yorkshire&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>
            </div>
        </div>
);