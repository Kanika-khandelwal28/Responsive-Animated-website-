import React from "react"
import { NavLink } from "react-router-dom";
import web from "../src/images/imag1.webp"

const Card=(props)=>{
    return(
        <>
           <div className="col-md-4 col-10 mx-auto">
<div className="card">
    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
        <div class="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink href="#" className="btn btn-primary">Go somewhere</NavLink>
        </div>
</div>
</div>
        </>
    );
};
export default Card;
