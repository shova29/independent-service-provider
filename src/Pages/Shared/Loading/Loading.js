import React from "react";
import spinner from "../../../Assests/Images/loader/loader.gif";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    /*     <div
      style={{ height: "100px", width: "100px" }}
      className="ms-5 d-flex justify-content-center align-items-center"
    >
      <img src={spinner} alt="Spinner-loader" />
    </div> */
    <div
      style={{ height: "100px" }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loading;
