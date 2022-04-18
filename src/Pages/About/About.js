import React from "react";
import about from "../../Assests/Images/about/about.jpg";
const About = () => {
  return (
    <div className="text-center mb-4">
      <h2 className="mb-5">
        About <span className="text-success">Me</span>
      </h2>
      <div className="mt-4 container row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="me-5">
            <img
              className="w-75 h-25"
              src={about}
              alt="About"
              style={{
                marginLeft: "30%",
                marginRight: "10px",
                borderRadius: "18px",
              }}
            />
          </div>
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-12 mt-2 w-50 h-75 "
          style={{
            backgroundColor: " #aee0bb",
            borderRadius: "18px",
          }}
        >
          {" "}
          <h4 className="text-center mt-5">Bibi Halima</h4>
          <p className="container text-start mt-4">
            {" "}
            I'm a CSE fresh-graduate and also an enthusiastic JavaScript
            developer with knowing some framework for the frontend. I always
            focus on learning new tools and technology. However, I want to
            become a Full-Stack Web Developer by {new Date().getFullYear()}. To
            achieve this goal, I will be dedicated as learner. Give 10-12 hours
            per day to learn backend framework of JavaScript. No matter what
            happens I will practice regularly and will be motivated myself that
            I can achieve my goal sincerely.
            <br />I also want to pursue a challenging career and be part of an
            enlightened organization that gives scope to augment my knowledge,
            skills, and to reach the summit within the computing and analysis
            field with pure fortitude, endeavor, and diligence.
          </p>
          <div className=""></div>
          <div className="text-center bottom-0">
            <button
              href="#"
              className="btn btn-green border-none w-50 bg-gradient bg-opacity-25 fw-bold text-white me-3 ms-2 mb-3"
            >
              Let's Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
