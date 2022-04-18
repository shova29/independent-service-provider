import React from "react";
import spinner from "../../../Assests/Images/loader/loader.gif";

const Loading = () => {
  return (
    <div
      style={{ height: "400px" }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
      <img src={spinner} alt="Spinner-loader" />
    </div>
  );
};

export default Loading;
