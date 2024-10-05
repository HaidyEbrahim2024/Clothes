import React from "react";
import "./index.scss";
import Girls from "../../Components/Girls/Girls";
import SearchProduct from "../../Components/SearchProduct/SearchProduct";
export default function ShopGirls({handelCount}) {
  return (
    <div className="container">
      <SearchProduct />
      <Girls   handelCount={handelCount} />
    </div>
  );
}
