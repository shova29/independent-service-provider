import React from "react";
import "./Services.css";
import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useServices();
  return (
    <div id="services" className="container">
      <h2
        className="services-title text-center fs-1 fw-bold mt-5"
        style={{ color: "rgb(27, 141, 97)" }}
      >
        W
        <span className="fs-2" style={{ color: "lightseagreen" }}>
          ild
        </span>
        Q
        <span className="fs-2" style={{ color: "lightseagreen" }}>
          uest
        </span>
        L
        <span className="fs-2" style={{ color: "lightseagreen" }}>
          ens{" "}
        </span>
        <span className="">Services </span>
      </h2>
      <div className="services-title-underline "></div>
      <div className="row services-container mt-3">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
