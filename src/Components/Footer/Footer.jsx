import "./footer.scss";
// import logo from "./logo.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <section>
        <div className="container">
          <div className="Parent">
            <div className="social_media gap-2 d-flex flex-column justify-content-start align-items-start ">
              {/* <img src={logo} className="" /> */}
              <h4 className="">Information</h4>
              <h6 className="">
                Lukas is the best parts shop for your car accessories. What kind
                of parts do you need you can get here soluta nobis
              </h6>
              <div className="d-flex gap-3">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className=" icon fs-4"
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  className=" icon fs-4"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className=" icon fs-4"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className=" icon fs-4 "
                />
              </div>
            </div>
            <div className="About d-flex flex-column justify-content-start align-items-start ">
              <h4 className=""> About Us</h4>
              <Link to="" className="links_footer">
                {" "}
                About us
              </Link>
              <Link to="" className="links_footer">
                {" "}
                Why us
              </Link>
              <Link to="" className="links_footer">
                {" "}
                security
              </Link>
              <Link to="" className="links_footer">
                {" "}
                About us
              </Link>
            </div>
            <div className="Help d-flex flex-column justify-content-start align-items-start ">
              <h4 className=""> Help</h4>
              <Link to="" className="links_footer">
                Account
              </Link>
              <Link to="" className="links_footer">
                {" "}
                Support Center
              </Link>
              <Link to="" className="links_footer">
                {" "}
                Privacy Policy
              </Link>
              <Link to="" className="links_footer">
                {" "}
                Terms & Condition
              </Link>
            </div>
            <div className="contact d-flex flex-column justify-content-start align-items-start ">
              <h4 className=""> Contact Us</h4>
              <Link to="" className="links_footer">
              164 7th Avenue, Seattle, WA 9801
              </Link>
              <Link to="" className="links_footer">
                {" "}
                Phone: +1.888.292.7171
              </Link>
              <Link to="" className="links_footer">
                {" "}
                Privacy Policy
              </Link>
              <Link to="" className="links_footer">
                {" "}
                Email: shop@baby.street
              </Link>
            </div>
          </div>
        </div>
        <div className="copy_righr col-12">
          <p className="text-center  col-12 m-0">
            © 2024 Developed By<a href="#"> Haidy Ibrahim</a>
          </p>
        </div>
      </section>
    </>
  );
}
