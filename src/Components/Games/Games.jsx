import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Carousel } from 'react-bootstrap';
import { faStar, faEye } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Games({handelCount}) {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data.json'); // تأكد من أن المسار المحدد (/data.json) صحيح
        setToys(response.data.Toys); // تأكد من تنسيق بيانات الملف JSON بشكل صحيح
      } catch (error) {
        console.error('Error fetching toys:', error);
      }
    };

    fetchData();
  }, []); // استخدم مصفوفة فارغة كثاني متغير للتأكد من أن الدالة تستدعى مرة واحدة فقط

  const renderStars = (rating, reviews) => {
    const starsArray = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        starsArray.push(
          <FontAwesomeIcon key={i} icon={faStar} style={{ color: "rgb(209 224 123)" }} />
        );
      } else if (hasHalfStar && i === fullStars + 1) {
        starsArray.push(
          <FontAwesomeIcon key={i} icon={faStarHalf} style={{ color: "rgb(209 224 123)" }} />
        );
      } else {
        starsArray.push(
          <FontAwesomeIcon key={i} icon={faStar} className="text-muted fs-6" />
        );
      }
    }

    return starsArray;
  };

  return (
    <div className="Toys col-12">

      <div className="container">

        <h2 className="text-center my-5">Toys Items</h2>

        <div className="row">
          {toys.map((item) => (
            <div className="col-sm-12 col-md-6 col-lg-3 mb-5" key={item.id}>
              <div className="card">
                <img src={item.img} className="card-img-top col-12" alt={item.title} />
                
                <div className="card-body">
                  <h5 className="card-title col-12 text-center fs-4 m-0" style={{ cursor: "pointer" }}>
                    {item.title}
                  </h5>

                  <p className="card-text text-center fs-5 m-0">
                    <span style={{ fontWeight: "500" }}>Price: </span>{item.price} EGP
                    <br />
                  </p>

                  <div className="d-flex justify-content-center my-2">
                    {item.stars && renderStars(item.stars.rating, item.stars.reviews)}
                  </div>

                  <div className="button">
                    <div style={{ background: "rgb(209 224 123)", padding: "4px" }}>
                      <button
                        className="btn"
                        // onClick={() => handelCount(item)} 
                        onClick={() => handelCount(item)}


                        style={{
                          background: "rgb(209 224 123)",
                          border: "2px white dashed",
                          padding: "5px",
                          width: "100%",
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
