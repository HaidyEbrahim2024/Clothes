import "./index.scss";
import { Link } from "react-router-dom";
import title from "./about.jpg";
import a from "./aa.jpg";
import a1 from "./a1.jpg";
export default function About() {
  return (
    <>
      <div className="image">
        <h2>About</h2>
        <img src={title} />
      </div>
      <div className="container">
        <div className="About">
          <div className="parent d-flex justify-content-center align-items-center my-5">
            <div className=" imagee col-6 d-flex justify-content-center">
              <img src={a} className="col-10" />
            </div>
            <div className=" text col-6 d-flex flex-column  justify-content-center ">
              <h2 className="mb-3">Story & Mission</h2>
              <p>
                We believe that childhood is a celebration, and the colorful
                prints and cute characters we design are inspired by the joy and
                love children bring into our lives. We celebrate childhood by
                supporting babies, children, and families with thoughtful
                designs, quality materials and construction, and convenient
                shopping options.
              </p>
            </div>
          </div>
          <div className="parent d-flex justify-content-center align-items-center my-5">
            <div className=" imagee col-6 d-flex justify-content-center">
              <img src={a1} className="col-10" />
            </div>
            <div className=" text col-6 d-flex flex-column  justify-content-center ">
              <h2 className="mb-3">Our Philosoph</h2>
              <p>
                We believe that childhood is a celebration, and the colorful
                prints and cute characters we design are inspired by the joy and
                love children bring into our lives. We celebrate childhood by
                supporting children and families with thoughtful designs,
                quality materials and convenient shopping options.
              </p>
           
            <Link to="">
           <div  style={{background:"#81d1e5" , borderRadius:"20px", padding:"4px" ,width:"fit-content"}}>
          <button className="btn" style={{background:"#81d1e5", border:"2px white dashed", padding:"10px" ,borderRadius:"20px" }}>SHOP Now</button>
          </div>
         </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
