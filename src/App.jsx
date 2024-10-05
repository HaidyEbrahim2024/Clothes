import React, { useState ,useEffect } from "react";
import "./App.scss";
import toast ,{Toaster} from "react-hot-toast";
import MainLayout from "./Components/MainLayout/MainLayout";
import Homepage from "./Pages/Homepage";
import ShopGirls from "./Pages/ShopGirls";
import ShopBoys from "./Pages/ShopBoys";
import Toys from "./Pages/Toys";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import LoginPage from "./Pages/LoginPage";
import Page404 from "./Pages/Page404";
import NewCollection from "./Pages/NewCollection";
import AllProduct from "./Pages/AllProduct/AllProduct";
import ShoppingCard from "./Pages/ShoppingCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [bascet, setbascet] = useState(0);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cards")) || [];
    setbascet(items.length);
  }, []);

  const handelCount = (card) => {
    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    setbascet(bascet + 1);
    cards.push(card);
    localStorage.setItem("cards", JSON.stringify(cards));
    toast.success("Item added to basket right.", {
      position: "bottom-right",
    });
  };

  
  // const handelCount = (card) => {
  //   let cards = JSON.parse(localStorage.getItem("cards")) || [];
  //   const existingCardIndex = cards.findIndex((item) => item.id === card.id);
  //   console.log(existingCardIndex);
  //   if (existingCardIndex !== -1) {
  //     cards[existingCardIndex].count += 1;
  //   } else {
  //     card.count = 1;
  //     cards.push(card);
  //   }
  //   setbascet(cards);
  //   localStorage.setItem("cards", JSON.stringify(cards));
  //   toast.success("Item added to basket right.", {
  //     position: "bottom-right",
  //   });
  // };
  function handelDeletItem(){
    setbascet(bascet-1)
  }
  function handelDeletAllItems(){
    localStorage.removeItem("cards");
    setbascet(0)
  }

  return (
    <div className="App">
      <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout bascet={bascet} />}>
            <Route index element={<Homepage handelCount={handelCount} />} />
            <Route path="ShopGirls" element={<ShopGirls   handelCount={handelCount}/>} />
            <Route path="ShopBoys" element={<ShopBoys   handelCount={handelCount}/>} />
            <Route path="Toys" element={<Toys   handelCount={handelCount}/>} />
            <Route path="about" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="LoginPage" element={<LoginPage />} />
            <Route path="NewCollection" element={<NewCollection />} />
            <Route path="AllProduct" element={<AllProduct  handelCount={handelCount} />} />
            <Route
              path="ShoppingCard"
              element={<ShoppingCard handelDeletAllItems={handelDeletAllItems} handelDeletItem={handelDeletItem} bascet={bascet} />}
            />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
