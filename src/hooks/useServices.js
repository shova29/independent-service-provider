import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service-data.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return [services, setServices];
};

export default useServices;
