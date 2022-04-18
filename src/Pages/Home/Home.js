import React from "react";
import AwardSection from "./AwardSection/AwardSection";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <AwardSection></AwardSection>
    </div>
  );
};

export default Home;
