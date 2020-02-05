import React, {Fragment} from 'react';
import HeaderSlimHero from './HeaderSlimHero';
import Aside from './Aside';
import Accreds from './Accreds';
import Footer from './Footer';
import Copyright from './Copyright';


export default (props) => (
    <Fragment>
        <HeaderSlimHero/>
        <div class="wrapper">
            {props.children}
            <Aside/>
            <Accreds/>
        </div>
        <Footer/>
        <Copyright/>
    </Fragment>
);