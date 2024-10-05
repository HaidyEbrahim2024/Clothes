import React, { useState, useEffect } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import title from "./title.jpg";
import { Link } from "react-router-dom";
export default function ShoppingCard(
  {bascet,
  handelDeletItem,
  handelDeletAllItems}
) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cards")) || [];
    const itemsWithCount = items.map((item) => ({ ...item, count: 1 }));
    setCartItems(itemsWithCount);
  }, []);
  // const increment = (index) => {
  //   const newCartItems = [...cartItems];
  //   newCartItems[index].count += 1;
  //   updateLocalStorage(newCartItems);
  //   setCartItems(newCartItems);
  // };

  // const decrement = (index) => {
  //   const updatedCartItems = [...cartItems];
  //   if (updatedCartItems[index].count > 1) {
  //     updatedCartItems[index].count--;
  //     updateLocalStorage(updatedCartItems);
  //     setCartItems(updatedCartItems);
  //   }
  // };

  // const updateLocalStorage = (items) => {
  //   localStorage.setItem("cards", JSON.stringify(items));
  // };

  const increment = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].count += 1;
    localStorage.setItem("cards", JSON.stringify(newCartItems));
    setCartItems(newCartItems);
  };
  const decrement = (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].count > 1) {
      newCartItems[index].count -= 1;
      localStorage.setItem("cards", JSON.stringify(newCartItems));
      setCartItems(newCartItems);
    } else {
      toast.success("Item count cannot be less than 1.");
    }
  };
  function deletItem(index) {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    localStorage.setItem("cards", JSON.stringify(newCartItems));
    setCartItems(newCartItems);
    handelDeletItem();
  }
  function deletAllItems() {
    localStorage.removeItem("cards");
    setCartItems([]);
    handelDeletAllItems();
  }

  return (
    <>
      <div className="image">
        <h2>Shopping Card</h2>
        <img src={title} />
      </div>
      <div className="container">
      <div className="ShoppingCard col-12">
        {/* <h2>Shopping Cart</h2> */}
        <table className=" container table table-bordered table-info my-3">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="text-center">
                -
              </th>
              <th scope="col" className="text-center">
                Img
              </th>
              <th scope="col" className="text-center">
                Title
              </th>
              <th scope="col" className="text-center">
                Price
              </th>
              <th scope="col" className="text-center">
                Count
              </th>
              <th scope="col" className="text-center">
                Delete Item
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((el, index) => (
              <tr key={el.id}>
                <td className="text-center">{index + 1}</td>
                <td>
                  <img src={el.img} alt={el.title} style={{ width: "50px" }} />
                </td>
                <td>{el.title}</td>
                <td>{el.price}</td>
                <td className="text-center">
                  <button
                    className="btn btn-success m-1"
                    onClick={() => increment(index)}
                  >
                    +
                  </button>
                  <span className="fs-7 text-black">{el.count}</span>
                  <button
                    className="btn btn-danger m-1"
                    onClick={() => decrement(index)}
                  >
                    -
                  </button>
                </td>
                <td className="text-center">
                  <FontAwesomeIcon
                    onClick={() => deletItem(index)}
                    className="text-danger delete"
                    icon={faTrash}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="checkout d-flex justify-content-end col-12">
        <button className="link_orders" onClick={deletAllItems}>
          Delete All Items
        </button>
      </div>
      </div>
    </>
  );
}
