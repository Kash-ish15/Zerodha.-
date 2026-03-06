import React from 'react';
import Awards from './Awards.js';
import Education from './Education';
import Stats from './Stats';
import Hero from './Hero.js';
import Pricing from './Pricing';

import OpenAccount from '../../OpenAccount.js';

function HomePage() {
    return ( 
        <>
   
        <Hero />
         
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />

        

        </>
     );
}

export default HomePage;