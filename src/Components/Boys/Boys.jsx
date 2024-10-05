import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEye } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import Price from "../Price/Price";
export default function ShopBoys({handelCount}) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/data.json"); // تأكد من أن هناك ملف data.json في نفس الدليل الجذري للمشروع
      setData(response.data.Boys);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const renderStars = (rating, reviews) => {
    const starsArray = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        starsArray.push(
          <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#81d1e5" }} />
        );
      } else if (hasHalfStar && i === fullStars + 1) {
        starsArray.push(
          <FontAwesomeIcon key={i} icon={faStarHalf} style={{ color: "#81d1e5" }} />
        );
      } else {
        starsArray.push(
          <FontAwesomeIcon key={i} icon={faStar} className="text-muted fs-6" />
        );
      }
    }

    return starsArray;
  };

  return (
    <div className="ShopBoys col-12">
      <div className="container">
        <h2 className="text-center my-5">Boys Items</h2>
        <div className="row">
          {data.map((item) => (
            <div className="col-sm-12 col-md-6 col-lg-3 mb-5" key={item.id}>
              <div className="card">
                <div className="col-12">
                  <img
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => openModal(item)}
                    src={item.img}
                    className="col-12"
                    style={{ height: "270px", objectFit: "cover", cursor: "pointer" }}
                    alt={item.title}
                  />
                  {hoveredItem === item.id && (
                    <FontAwesomeIcon
                      icon={faEye}
                      className="position-absolute top-0 start-0 m-2 fs-4"
                      onClick={() => openModal(item)}
                      style={{ fontSize: "2rem", color: "#696868", cursor: "pointer" }}
                    />
                  )}
                </div>
                <div className="card-body">
                  <h5
                    className="card-title col-12 text-center fs-4 m-0"
                    style={{ cursor: "pointer" }}
                    onMouseEnter={(e) => (e.target.style.color = "#81d1e5")}
                    onMouseLeave={(e) => (e.target.style.color = "black")}
                    onClick={() => openModal(item)}
                  >
                    {item.title}
                  </h5>
                  <p className="card-text text-center fs-5 m-0">
                    <span style={{ fontWeight: "500" }}>Price: </span>{item.price} EGP
                  </p>
                  <div className="d-flex justify-content-center my-2">
                    {item.stars && renderStars(item.stars.rating, item.stars.reviews)}
                  </div>
                  <div className="button">
                    <div style={{ background: "#81d1e5", padding: "4px" }}>
                      <button
                        className="btn"
                        onClick={() => handelCount(item)}

                        style={{
                          background: "#81d1e5",
                          border: "2px white dashed",
                          padding: "5px",
                          width: "100%",
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={closeModal} size="md">
        <Modal.Header closeButton>
          <Modal.Title className="fs-3" style={{ color: "#81d1e5" }}>Category OF {selectedItem?.Categuary}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            <Carousel.Item className="col-6">
              <img
                className="d-block col-12"
                src={selectedItem?.img}
                alt={selectedItem?.title}
                style={{ height: "100%", objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block col-12"
                src={selectedItem?.img1}
                alt={selectedItem?.title}
                style={{ height: "100%", objectFit: "cover" }}
              />
            </Carousel.Item>
            {/* يمكنك إضافة Carousel.Item إضافية حسب عدد الصور المراد عرضها */}
          </Carousel>
          <div className="mt-3">
            <p className="mb-1">
              <span className="fs-5" style={{ fontWeight: "600" }}>Name of Product: </span> <span style={{color:"blue" ,fontSize:"18px"}}>{selectedItem?.title}</span>
            </p>
            <p className="mb-1">
              <span className="fs-5" style={{ fontWeight: "600" }}>Price before discount: </span><span  style={{color:"blue" ,fontSize:"18px",textDecoration:"line-through"}}>{selectedItem?.Pricebeforediscount} EGP</span>
            </p>
            <p className="mb-1">
              <span className="fs-5" style={{ fontWeight: "600" }}>Price after rebate: </span><span  style={{color:"blue" ,fontSize:"18px"}}>{selectedItem?.price} EGP</span> 
            </p>
            <p className="mb-0">
              <span className="fs-5" style={{ fontWeight: "600" }}>Available Colors:</span> <span style={{color:"blue" ,fontSize:"18px"}}>{selectedItem?.availableColors}</span>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex flex-start col-12">
            <button style={{background:"#81d1e5",borderRadius:"10px" , border:"none" , padding:"10px 15px"}} onClick={closeModal}>Close</button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
