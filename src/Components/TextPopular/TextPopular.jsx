import React from "react";
import "./textPopular.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
export default function TextPopular() {
  return (
      <div className="TextPopular">
       <div className="container">
        <div className="text">
            <div className="texts">
                 <h1 className="text-center"> You'll<span > <FontAwesomeIcon icon={faHeart} className="" /></span> This </h1>
       <p className="text-center">We’ve picked few pieces we’re pretty sure you’ll love.</p>
        <p className="text-center">Check back often and enjoy.</p>

            </div>
      
        </div>
      </div>
    </div>
  );
}
