import React from "react";
import "./Service.css";
// import { Card } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Service = ({ service }) => {
  const { id, name, image, price, description } = service;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      {" "}
      <div className="card shadow" style={{ width: "18rem" }}>
        <div className="card-img-top service-image p-3 ">
          <img src={image} className="card-img-top" alt={image} />
        </div>

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>Price: {price}</p>
          <p className="card-text">
            {" "}
            {description
              ? description
              : "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
          </p>
          <div className="text-center">
            {" "}
            <a
              href="#"
              className="btn btn-green w-75 bg-gradient bg-opacity-25 fw-bold text-white me-3 ms-2"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
