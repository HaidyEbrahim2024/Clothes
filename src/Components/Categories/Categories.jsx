
import React from "react";
import "./categories.scss";
import Girl from "/images/Girl.jpg";
import boy from "/images/boy.jpg";
import toys from "/images/toys.jpg";
import { Link } from "react-router-dom";
export default function Categories() {
  return (
    <div className="col-12 Categories" id="cat">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4">
            <div className="girls"> 
            <Link to="/ShopGirls">
              <div
                className="btn-wrapper"
                style={{ background: "#ff8087", padding: "4px" }}
              >
                <div
                  className="btn"
                  style={{
                    background: "#ff8087",
                    border: "2px white dashed",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={Girl}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />

                  <div
                    className="text"
                    style={{
                      position: "absolute",
                      bottom: "5%",
                      left: "5%",
                      color: "white",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <h1 style={{ margin: "0" }}>Girls</h1>
                    <h5 style={{ margin: "0" }}>Clothing</h5>
                    <p style={{ margin: "0" }}>World's Best Brands</p>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <Link to='/ShopBoys'>
            <div className="girls">
              <div
                className="btn-wrapper"
                style={{ background: "#81d1e5", padding: "4px" }}
              >
                <div
                  className="btn"
                  style={{
                    background: "#81d1e5",
                    border: "2px white dashed",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={boy}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />

                  <div
                    className="text"
                    style={{
                      position: "absolute",
                      bottom: "5%",
                      left: "5%",
                      color: "white",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <h1 style={{ margin: "0" }}>Boys</h1>
                    <h5 style={{ margin: "0" }}>Clothing</h5>
                    <p style={{ margin: "0" }}>World's Best Brands</p>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <Link to="/Toys">
            <div className="girls">
              <div
                className="btn-wrapper"
                style={{ background: "#c7db68", padding: "4px" }}
              >
                <div
                  className="btn"
                  style={{
                    background: "#c7db68",
                    border: "2px white dashed",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={toys}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />

                  <div
                    className="text"
                    style={{
                      position: "absolute",
                      bottom: "5%",
                      left: "5%",
                      color: "white",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <h1 style={{ margin: "0" }}>Toys</h1>
                    <h5 style={{ margin: "0" }}>& Games</h5>
                    <p style={{ margin: "0" }}>For All Pages</p>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
     </div>
  );
}
