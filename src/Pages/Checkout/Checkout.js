import React from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>Welcome to Checkout</h2>
    </div>
  );
};

export default Checkout;
