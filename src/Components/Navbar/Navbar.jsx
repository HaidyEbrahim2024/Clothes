import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "/images/nav.png"
import { Link, NavLink, useLocation } from "react-router-dom";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
export default function Navbar({ bascet }) {
  const [currentpage, setcurrentpage] = useState("");
  const location = useLocation();
  function handelCategrious() {
    const catSection = document.getElementById("cat");
    catSection.scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => {
    // Cuando la ubicación cambia, actualiza currentPage con la nueva ruta
    setcurrentpage(location.pathname);
  }, [location]);
  return (
    <div className="Navbar col-12">
      <nav class="navbar navbar-expand-lg bg-body-tertiary d-flex Justify-content-center">
        <div class="container-fluid">
          <div className="imaage">
            <img src={logo} style={{ height: "55px" }} />
          </div>
          {/* //menuResponsive */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ zIndex: "8888" }}
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink
                  to="/"
                  style={currentpage === "/" ? { color: "#ff8087" } : {}}
                >
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/about"
                  style={currentpage === "/about" ? { color: "#ff8087" } : {}}
                >
                  About
                </NavLink>
              </li>
              {window.location.pathname === "/" && (
                <li class="nav-item">
                  <NavLink onClick={handelCategrious}>Categories</NavLink>{" "}
                </li>
              )}
              <li class="nav-item">
                <NavLink
                  to="/AllProduct"
                  style={
                    currentpage === "/AllProduct" ? { color: "#ff8087" } : {}
                  }
                >
                  Shop
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink
                  to="/Contact"
                  style={currentpage === "/Contact" ? { color: "#ff8087" } : {}}
                >
                  Contact
                </NavLink>
              </li>
              {/* <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle text-black  "
                  style={{ fontWeight: "500", fontSize: "18px" }}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item">Home</Link>
                  </li>
               
                </ul> 
              </li> */}
            </ul>
            <div className=" d-flex justify-content-center">
              <div
                className="Account d-flex justify-content-center"
                style={{
                  background: "#81d1e5",
                  borderRadius: "20px",
                  padding: "4px",
                }}
              >
                <div
                  className="icons d-flex iicons "
                  style={{
                    background: "#81d1e5  ",
                    border: "2px #ddd dashed",
                    padding: "10px 60px",
                    borderRadius: "20px",
                  }}
                >
                  <Link to="/ShoppingCard">
                    <FontAwesomeIcon
                      className="shopping"
                      style={{
                        color: "white",
                        fontSize: "20px",
                        cursor: "pointer",
                        position: "relative",
                      }}
                      icon={faBagShopping}
                      alt="Shopping Bag Icon"
                    />
                    <span
                      className="p-1 cc"
                      style={{
                        position: "absolute",
                        top: "15%",
                        right: "7.9%",
                        color: "black",
                      }}
                    >
                      {bascet}
                    </span>
                  </Link>

                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      color: "white",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
