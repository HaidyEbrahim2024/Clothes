import React from "react";
import "./herosection.scss";
import cover from "/images/cover.jpg";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

export default function Herosection() {
  return (
    <div className="Herosection">
      <div className="col-12">
      <img src={cover} className="image" />

      </div>
      <div className="text">
        <h2>Shine Bright</h2>
        <h4>Like a SuperStart</h4>
        <div className="button" >
          <Link to="/ShopGirls">
           <div  style={{background:"#ff8087" ,borderRadius:"20px", padding:"4px"}}>
          <div className="btn" style={{background:"#ff8087", border:"2px white dashed", padding:"10px" }}>Shop Girls</div>
          </div>
          </Link>
         <Link to="/ShopBoys">
           <div  style={{background:"#81d1e5" , borderRadius:"20px", padding:"4px"}}>
          <button className="btn" style={{background:"#81d1e5", border:"2px white dashed", padding:"10px" ,borderRadius:"20px" }}>Boys Shop</button>
          </div>
         </Link>
        
        
        </div>
      </div>
    </div>
  );
}
