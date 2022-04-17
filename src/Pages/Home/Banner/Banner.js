import React, { useState } from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../Assests/Images/banner/banner-1.png";
import banner2 from "../../../Assests/Images/banner/banner-2.png";
import banner3 from "../../../Assests/Images/banner/banner-3.png";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      fade
      className="fonts text-white"
    >
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 opacity-75"
          style={{ height: "600px" }}
          src={banner1}
          alt="Banner1"
        />
        <Carousel.Caption>
          <h1 className="fs-1 fw-bold">Wild Quest Lens</h1>
          <p className="fs-4 fw-light">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 opacity-75"
          style={{ height: "600px" }}
          src={banner2}
          alt="Banner1"
        />
        <Carousel.Caption>
          <h1 className="fs-1 fw-bold">The Lens of Light</h1>
          <p className="fs-4 fw-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 opacity-75"
          style={{ height: "600px" }}
          src={banner3}
          alt="Banner1"
        />
        <Carousel.Caption>
          <h1 className="fs-1 fw-bold">Third slide label</h1>
          <p className="fs-4 fw-light">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
