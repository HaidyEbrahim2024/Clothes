import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./productshero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import pic1 from "/images/pic1.jpg";
import pic2 from "/images/pic2.jpg";
import pic3 from "/images/pic3.jpg";
import pic4 from "/images/pic4.jpg";
import hpic1 from "/images/hpic1.jpg";
import hpic2 from "/images/hpic2.jpg";
import hpic3 from "/images/hpic3.jpg";
import hpic4 from "/images/hpic4.jpg";
import pic5 from "/images/pic5.jpg";
import hpic5 from "/images/hpic5.jpg";
import pic6 from "/images/pic6.jpg";
import hpic6 from "/images/hpic6.jpg";
import pic7 from "/images/pic7.jpg";
import pic8 from "/images/pic8.jpg";
import hpic7 from "/images/hpic7.jpg";
import hpic8 from "/images/hpic8.jpg";

export default function Productshero({ handelCount }) {
  const [ishover, setishover] = useState(false);
  const [ishoverpic1, setishoverpic1] = useState(false);
  const [ishoverpic2, setishoverpic2] = useState(false);
  const [ishoverpic3, setishoverpic3] = useState(false);
  const [ishoverpic4, setishoverpic4] = useState(false);
  const [ishoverpic5, setishoverpic5] = useState(false);
  const [ishoverpic6, setishoverpic6] = useState(false);
  const [ishoverpic7, setishoverpic7] = useState(false);
  const [ishoverpic8, setishoverpic8] = useState(false);

  return (
    <>
      <div className="Productshero col-12">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="card mb-3">
                <div style={{ position: "relative" }}>
                  <img
                    className="col-12 bg-light"
                    src={ishover ? hpic1 : pic1}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setishover(true)}
                    onMouseLeave={() => setishover(false)}
                  />
                  {/* {ishover && (
                <div>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    style={{ position: "absolute", bottom: "10%", left: "10%" }}
                  />
                </div>
              )} */}
                  <div className="card-body">
                    <p
                      style={{
                        position: "absolute",
                        top: "3%", // Adjust this value to position the badge correctly
                        left: "15%",
                        transform: "translateX(-50%)",
                        color: "white",
                        background: "#ff8087",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        textAlign: "center",
                        lineHeight: "40px", // Center text vertically
                        zIndex: 1, // Ensure it's above the image
                      }}
                    >
                      -25%
                    </p>
                    <p className="mb-0 text-center mt-2">Stuffed Blue Shark</p>
                    <p className="mb-0 text-center">
                      <span style={{ textDecoration: "line-through" }}>
                        {" "}
                        550EGP
                      </span>{" "}
                      <span className="text-primary">320EGP</span>{" "}
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-outline-dark mb-4"
                    onClick={() => handelCount(item)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="card">
                <div style={{ position: "relative" }}>
                  <img
                    className="col-12 bg-light"
                    src={ishoverpic1 ? hpic2 : pic2}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setishoverpic1(true)}
                    onMouseLeave={() => setishoverpic1(false)}
                  />
                  <div style={{ position: "absolute", right: "8%", top: "5%" }}>
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                  </div>
                  <div className="card-body">
                    <p className="text-center mb-0 text-center mt-2">
                      Denim Jumpsuit
                    </p>
                    <p className="mb-0 text-center">
                      <span style={{ textDecoration: "line-through" }}>
                        430EGP
                      </span>{" "}
                      <span className="text-primary">360EGP</span>{" "}
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-outline-dark mb-4"
                      onClick={() => handelCount(item)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card">
                <div style={{ position: "relative" }}>
                  <img
                    className="col-12 bg-light"
                    src={ishoverpic2 ? hpic3 : pic3}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setishoverpic2(true)}
                    onMouseLeave={() => setishoverpic2(false)}
                  />
                  <div className="card-body">
                    <p
                      style={{
                        position: "absolute",
                        top: "3%", // Adjust this value to position the badge correctly
                        left: "15%",
                        transform: "translateX(-50%)",
                        color: "white",
                        background: "#ff8087",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        textAlign: "center",
                        lineHeight: "40px", // Center text vertically
                        zIndex: 1, // Ensure it's above the image
                      }}
                    >
                      -50%
                    </p>
                    <p className="mb-0 text-center mt-2">Super Star Knit Hat</p>
                    <p className="mb-0 text-center">
                      <span style={{ textDecoration: "line-through" }}>
                        {" "}
                        400EGP
                      </span>{" "}
                      <span className="text-primary"> 350EGP</span>{" "}
                    </p>
                  </div>
                  <div className="d-flex justify-content-center mb-4">
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => handelCount(item)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="card">
                <div style={{ position: "relative" }}>
                  <img
                    className="col-12 bg-light"
                    src={ishoverpic3 ? hpic4 : pic4}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setishoverpic3(true)}
                    onMouseLeave={() => setishoverpic3(false)}
                  />
                  <div className="card-body">
                    <p
                      style={{
                        position: "absolute",
                        top: "3%", // Adjust this value to position the badge correctly
                        left: "15%",
                        transform: "translateX(-50%)",
                        color: "white",
                        background: "#ff8087",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        textAlign: "center",
                        lineHeight: "40px", // Center text vertically
                        zIndex: 1, // Ensure it's above the image
                      }}
                    >
                      Sale
                    </p>
                    <p className="mb-0 text-center mt-2">Grouped Product</p>
                    <p className="mb-0 text-center">
                      <span style={{ textDecoration: "line-through" }}>
                        350EGP
                      </span>{" "}
                      <span className="text-primary"> 250EGP </span>{" "}
                    </p>
                  </div>
                  <div className="d-flex justify-content-center mb-4">
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => handelCount(item)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="card">
                <div style={{ position: "relative" }}>
                  <img
                    className="col-12 bg-light"
                    src={ishoverpic5 ? hpic5 : pic5}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setishoverpic5(true)}
                    onMouseLeave={() => setishoverpic5(false)}
                  />
                  {/* {ishover && (
                <div>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    style={{ position: "absolute", bottom: "10%", left: "10%" }}
                  />
                </div>
              )} */}
                  <div className="card-body">
                    {/* <p
                style={{
                  position: "absolute",
                  top: "3%", // Adjust this value to position the badge correctly
                  left: "15%",
                  transform: "translateX(-50%)",
                  color: "white",
                  background: "#ff8087",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  textAlign: "center",
                  lineHeight: "40px", // Center text vertically
                  zIndex: 1, // Ensure it's above the image
                }}
              >
                -25%
              </p> */}
                    <p className="mb-0 text-center mt-2">Stuffed Blue Shark</p>
                    <p className="mb-0 text-center">
                      <span style={{ textDecoration: "line-through" }}>
                        {" "}
                        550EGP
                      </span>{" "}
                      <span className="text-primary">320EGP</span>{" "}
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-outline-dark mb-4"
                    onClick={() => handelCount(item)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card">
                <div style={{ position: "relative" }}>
                  <img
                    className="col-12 bg-light"
                    src={ishoverpic6 ? hpic6 : pic6}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setishoverpic6(true)}
                    onMouseLeave={() => setishoverpic6(false)}
                  />
                  <div className="card-body">
                    <p
                      style={{
                        position: "absolute",
                        top: "3%", // Adjust this value to position the badge correctly
                        left: "15%",
                        transform: "translateX(-50%)",
                        color: "white",
                        background: "#ff8087",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        textAlign: "center",
                        lineHeight: "40px", // Center text vertically
                        zIndex: 1, // Ensure it's above the image
                      }}
                    >
                      -50%
                    </p>
                    <p className="mb-0 text-center mt-2">Super Star Knit Hat</p>
                    <p className="mb-0 text-center">
                      <span style={{ textDecoration: "line-through" }}>
                        {" "}
                        400EGP
                      </span>{" "}
                      <span className="text-primary"> 350EGP</span>{" "}
                    </p>
                  </div>
                  <div className="d-flex justify-content-center mb-4">
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => handelCount(item)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card">
                <div style={{ position: "relative" }}>
                  <img
                    className="col-12 bg-light"
                    src={ishoverpic7 ? hpic7 : pic7}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setishoverpic7(true)}
                    onMouseLeave={() => setishoverpic7(false)}
                  />
                  <div className="card-body">
                    {/* <p
                style={{
                  position: "absolute",
                  top: "3%", // Adjust this value to position the badge correctly
                  left: "15%",
                  // transform: "translateX(-50%)",
                  color: "white",
                  background: "#ff8087",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  textAlign: "center",
                  lineHeight: "40px", // Center text vertically
                  zIndex: 1, // Ensure it's above the image
                }}
              >
                -50%
              </p> */}
                    <p className="mb-0 text-center mt-2">Super Star Knit Hat</p>
                    <p className="mb-0 text-center">
                      <span style={{ textDecoration: "line-through" }}>
                        {" "}
                        500EGP
                      </span>{" "}
                      <span className="text-primary"> 350EGP</span>{" "}
                    </p>
                  </div>
                  <div className="d-flex justify-content-center mb-4">
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => handelCount(item)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="card">
                <div style={{ position: "relative" }}>
                  <img
                    className="col-12 bg-light"
                    src={ishoverpic8 ? hpic8 : pic8}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setishoverpic8(true)}
                    onMouseLeave={() => setishoverpic8(false)}
                  />
                  <div style={{ position: "absolute", right: "8%", top: "5%" }}>
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                  </div>
                  <div className="card-body">
                    <p className="text-center mb-0 text-center mt-2">
                      Denim Jumpsuit
                    </p>
                    <p className="mb-0 text-center">
                      <span style={{ textDecoration: "line-through" }}>
                        430EGP
                      </span>{" "}
                      <span className="text-primary">360EGP</span>{" "}
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-outline-dark mb-4"
                      onClick={() => handelCount(item)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
