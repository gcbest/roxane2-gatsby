import React from 'react';
import pureStyles from "./styles/pure.module.css"
import {FaRegEnvelope} from 'react-icons/fa';
import { IconContext } from "react-icons";


export default () => {
    return (
    <div className="contact-area">
                <form className={`${pureStyles.pureForm} ${pureStyles.pureFormStacked}`} action="https://formspree.io/mgeabglg" method="POST">
                    <fieldset>
                        <input type="email" name="_replyto" placeholder="Your Email"/>
                        <textarea className="pure-input-1" rows="4" cols="20" placeholder="Your message..."></textarea>
                        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
                        <button type="submit" className={`${pureStyles.pureButton} ${pureStyles.pureButtonPrimary}`}><span style={{paddingBottom: '1rem'}}>Send</span> <FaRegEnvelope/>
                        </button>
                        </IconContext.Provider>
                    </fieldset>
                </form>

                <div className="mapouter">
                    <div className="gmap_canvas"><iframe id="gmap_canvas"
                            src="https://maps.google.com/maps?q=1st%20floor%2C%20Norwich%20House%2C%20Savile%20Street%2C%20Hull%2C%20East%20Riding%20of%20Yorkshire&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>
                </div>
            </div>
    )
};