import React from "react";
import notfound from "../../../Assests/Images/notfound/notfound.png";

const NotFound = () => {
  return (
    <div className="container">
      <h2 className="mt-5 text-center" style={{ color: "lightseagreen" }}>
        Oops! Out of WildQuest
      </h2>
      <img
        className="mt-3 fluid rounded w-50 mx-auto mx-auto d-block"
        src={notfound}
        alt="Error Page"
      />
    </div>
  );
};

export default NotFound;
