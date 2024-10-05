import React from "react";
import "./part.scss";
import { Link } from "react-router-dom";
import bg1 from "/images/bg2Girls.jpg";
import bg from "/images/bg-girls.jpg";
export default function Part() {
  return (
    <div className="Part col-12 d-flex">
      <div className="image col-6 ">
        <img src={bg1} />
        <div className="text">
          <h1>Collections</h1>
          <p className="text-center text1">
            We celebrate childhood by supporting babies, children, and families
          </p>
          <p className="text-center  text2">
            with thoughtful designs, quality materials and construction, and
            convenient shopping options.
          </p>
        </div>
        <div className="d-flex justify-content-center">
            <Link to="/AllProduct" className="icon">
           <div  style={{background:"#ff8087" ,borderRadius:"20px", padding:"4px"}}>
          <div className="btn" style={{background:"#ff8087", borderRadius:"20px", border:"2px white dashed", padding:"10px" }}>Shop Collection</div>
          </div>
          </Link> 
        </div>
       
      </div>
      <div className="image col-6">
        <img src={bg} />
      </div>
   
    </div>
  );
}
