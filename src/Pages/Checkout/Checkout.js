import React from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const Checkout = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2 className="text-center">Welcome to Checkout</h2>
      <div className="mt-5 signup-form container w-50 mx-auto shadow">
      <h2
        className="mb-3"
        style={{
          textAlign: "center",
          marginTop: "15px",
          color: "lightseagreen",
        }}
      >
        Please Sign-Up
      </h2>
      <Form >
        <Form.Group className="mb-3 px-5 pt-5" controlId="formBasicName">
          <Form.Control
            style={{ borderRadius: "18px", boxShadow: "8px 8px 6px" }}
            type="text"
            name="name"
            placeholder="Your Name"
          />
        </Form.Group>
        <Form.Group className="mt-4 mb-3 px-5" controlId="formBasicEmail">
          <Form.Control
            style={{ borderRadius: "18px", boxShadow: "8px 8px 6px" }}
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
        </Form.Group>
        <Form.Group className="mt-4 mb-3 px-5" controlId="formBasicEmail">
          <Form.Control
            style={{ borderRadius: "18px", boxShadow: "8px 8px 6px" }}
            type="text"
            name="address"
            placeholder="Address"
            required
          />
        </Form.Group>
        <Form.Group className="mt-4 mb-3 px-5" controlId="formBasicPassword">
          <Form.Control
            style={{ borderRadius: "18px", boxShadow: "8px 8px 6px" }}
            type="phone"
            name="phonnumber"
            placeholder="PhoneNumber"
            required
          />
        </Form.Group>
       
        <Button
          type="submit"
         
          style={{ backgroundColor: "rgb(27, 141, 97)", borderRadius: "18px" }}
          className="btn-outline shadow btn-lg mt-3 w-50 d-grid ms-5 py-1 text-center align-items-center mb-5 mt-5"
        >
        Proceed CheckOut
        </Button>
        <br/>
      </Form>
      
    </div>
    </div>
  );
};

export default Checkout;
