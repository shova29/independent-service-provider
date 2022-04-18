import React from "react";
import { Card } from "react-bootstrap";
import award from "../../../Assests/Images/award/award1.jpg";
const AwardSection = () => {
  return (
    <div className="container">
      <h2
        className="text-center fs-1 fw-bold mt-5"
        style={{ color: "rgb(27, 141, 97)" }}
      >
        AWARDS{" "}
      </h2>
      <h3 className="text-center mt-3 fs-4">
        A few photography{" "}
        <span className="fs-2" style={{ color: "lightseagreen" }}>
          Awards
        </span>{" "}
        to be excited about
      </h3>
      <div className="row mt-5">
        <div className="col-lg-8">
          <h4>Puffin in Flight, Homeward Bound</h4>
          <h5 className="mt-3">Natures Best 2009</h5>
          <h5 className="mt-1">Bird Behaviour Category Winner</h5>
          <p>
            I spent a week on the Treshnish Isles, a small offshore island
            photographing a range of different seabird species. My main target
            was the Puffin, these birds can be very tame and confiding and after
            spending some time with them I can see why it is one of the nation’s
            favourite birds. I took over 2000 images of puffins in flight but
            only a small percentage were in focus as they are so fast in flight.
            This one was heading straight towards its burrow with its catch to
            feed its young chick. It is my all time favourite image.
          </p>
        </div>
        <div className="col-lg-4">
          <Card className="shadow border-0">
            <Card.Img className="px-3 py-3" variant="top" src={award} />
          </Card>
          <br />
        </div>
      </div>
    </div>
  );
};

export default AwardSection;
