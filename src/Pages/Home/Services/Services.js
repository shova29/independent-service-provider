import React from "react";
import "./Service.css";
import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useServices();
  return (
    <div id="services" className="container">
      <h2
        className="services-title text-center fw-bold mt-5"
        style={{ color: "rgb(27, 141, 97)" }}
      >
        W
        <span className="" style={{ color: "lightseagreen" }}>
          ild
        </span>
        Q
        {/*  <span className="" style={{ color: "rgb(27, 141, 97)" }}>
          Q
        </span> */}
        <span className="" style={{ color: "lightseagreen" }}>
          uest
        </span>
        L
        {/*     <span className="" style={{ color: "rgb(27, 141, 97)" }}>
          L
        </span> */}
        <span className="" style={{ color: "lightseagreen" }}>
          ens{" "}
        </span>
        <span className="" style={{ color: "lightseagreen" }}>
          Services{" "}
        </span>
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