
// export default AnyPage;
// استيراد الحزم الضرورية
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollToTopButton from "../ScrollButton/ScrollButton";

export default function AnyPage({ bascet }) {
  return (
    <>
     <Navbar bascet={bascet} />
     <Outlet></Outlet>
     <ScrollToTopButton />

     <Footer/>
    </>
  );
}
