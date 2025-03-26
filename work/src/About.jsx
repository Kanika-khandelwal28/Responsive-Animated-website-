import React from 'react'
import { NavLink } from 'react-router-dom';
import Common from './Common';
import web from "../src/images/224b9559-df98-4416-a32e-bbfc6e8ead0a.avif"
const About =()=>{
    return(
        <>
     <Common 
     name='Welcome to About page' 
     imgsrc={web}
      visit="/contact"  
      btname="Contact Now"/>
        </>
    );
};

export default About;
