import React from 'react';
import pureStyles from "./styles/pure.module.css"
import {FaRegEnvelope} from 'react-icons/fa';
import { IconContext } from "react-icons";


export default () => (
        <div className="contact-area">
            <div>
                <h3>Unit 34, Craven Park Training and Enterprise Centre</h3>
                <h3>Kingston-Upon-Hull</h3>
                <h3>HU9 5HE</h3>
                <h3>+44 (0)7887 743295</h3>
                <h3 className="email"><span>roxane.gervais</span><span>@practicalpsychologyconsultancy.com</span></h3>
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
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d271282.3763832949!2d-0.4930899966785164!3d53.691438506886456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd6ecb5fb58ceecf!2sThe%20Craven%20Park%20Training%20and%20Enterprise%20Centre!5e0!3m2!1sen!2sus!4v1666449379423!5m2!1sen!2sus"
                        frameBorder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>
            </div>
        </div>
);



