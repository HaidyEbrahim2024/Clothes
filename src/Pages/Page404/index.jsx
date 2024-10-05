import React, { useState, useEffect } from "react";
import title from "./title.jpg";
import "./index.scss";
import pic from "./two.jpeg";
// import LoadingPage from "../Loadingpage/Loadingpage"; // استيراد مكون صفحة التحميل

export default function Page404() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000); 
  // }, []);

  // if (loading) {
  //   return <LoadingPage />; 
  // }

  return (
    <div className="Page404 col-12">
      <div className="image">
        <h2>Page 404</h2>
        <img src={title} />
      </div>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <p className="text-center">
          It looks like nothing was found at this location. Maybe try a search?
        </p>
        <div className=" d-flex justify-content-center">
          <img src={pic} className="" />
        </div>
      </div>
    </div>
  );
}
