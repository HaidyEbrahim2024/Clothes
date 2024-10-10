import React from "react";
import "./index.scss";
import title from "./title.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
export default function Contact() {
  return (
    <>
      <div className="image">
        <h2>Contact Us</h2>
        <img src={title} />
      </div>
      <div className="container">
        <div className="Contact">
          <div className=" text col-12">
            <h2 className="">Have a Question?</h2>
            <p>
              Or just wanna say Hi. We’d love to get to know you. Tell us a
              little about yourself and how
            </p>
            <p>
              we can help. Get answers to all your questions about our online
              service here Monday to
            </p>
            <p>Friday from 9:30 to 17:30 (EET / GM+2)</p>
          </div>
          <div className=" ways-contact  d-flex justify-content-center align-items-center ">
            <div className="whats  d-flex flex-column justify-content-center align-items-center">
              <h2 className="my-5">You Contact With Us Throught </h2>
              <div className="rr">
                <div
                  className="ws-c mb-3"
                  style={{
                    background: "#24cd24",
                    borderRadius: "20px",
                    padding: "10px 8px",
                  }}
                >
                  {/* <Link to="https://wa.me/01102643952">
                    <div
                      className="btn"
                      style={{
                        border: "2px white dashed",
                        padding: "10px 50px",
                        borderRadius: "20px",
                      }}
                    >
                      Whats App
                    </div>
                  </Link> */}
                  <Link
                    to="https://wa.me/01102643952"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="btn"
                      style={{
                        border: "2px white dashed",
                        padding: "5px 20px",
                        borderRadius: "20px",
                      }}
                    >
                      <div className="d-flex gap-3 justify-content-center align-items-center fs-5">
                           <FontAwesomeIcon icon={faWhatsapp} />
                      Whats App
                      </div>
                   
                    </div>
                  </Link>
                </div>
                <div
                  className="ws-c mb-3"
                  style={{
                    background: "#81d1e5",
                    borderRadius: "20px",
                    padding: "10px 8px",
                  }}
                >
                  <Link
                    to="https://tg.me/01102643952"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="btn"
                      style={{
                        border: "2px white dashed",
                        padding: "5px 30px",
                        borderRadius: "20px",
                      }}
                    >
                      <div className="d-flex gap-3 justify-content-center align-items-center fs-5">
                          <FontAwesomeIcon icon={faTelegram} />

                      Telegram
                      </div>
                
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
