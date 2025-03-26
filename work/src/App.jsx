import React from 'react'
import Home from './Home';
import Service from './Service';
import Contact from './Contact';
import About from './About';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {  Route,Redirect, Routes} from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';

const App =()=>{
    return(
        <>
        <Navbar/>

       <Routes>

        <Route exact path="/" Component={Home}/>
        <Route exact path="/about" Component={About}/>
        <Route exact path="/service" Component={Service} />
        <Route exact path="/contact" Component={Contact}/>
        

       </Routes>

       <Footer/>

        </>
    );
};

export default App;
