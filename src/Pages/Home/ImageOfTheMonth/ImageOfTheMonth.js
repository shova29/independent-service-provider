import React from "react";
import { Card } from "react-bootstrap";
import bestImg from "../../../Assests/Images/bestimg/bestimg.jpg";

const ImageOfTheMonth = () => {
  return (
    <div className="container">
      <h2
        className="text-center fs-1 fw-bold mt-5"
        style={{ color: "rgb(27, 141, 97)" }}
      >
        Image of the Month{" "}
      </h2>
      <p className="text-center fs-5 ms-5 me-5 mt-3">
        I enjoy posting an image of the month from my recent workshops and
        travels.
        <br />
      </p>
      <div className="row mt-5">
        <div className="col-lg-12">
          <Card className="shadow">
            <Card.Img className="" variant="top" src={bestImg} />
            <Card.Text className="text-center">March 2022</Card.Text>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ImageOfTheMonth;
