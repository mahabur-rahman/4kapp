import React from "react";
import FeaturedHeading from "./FeaturedHeading";
import FeaturedAngular from "./FeaturedAngular";
import angular from "../images/angular.svg";
import gatsby from "../images/gatsby.svg";
import FeaturedProject2 from "./FeaturedProject2";
import FeaturedBtn from "./FeaturedBtn";

function FeaturedProject1() {
  return (
    <>
      <section id="angularProject">
        <div className="container">
          <FeaturedHeading title="Featured projects" />
          <div className="row">
            <FeaturedAngular
              imgSrc={angular}
              num="01."
              title="Angular Project"
              btnText1="Angular"
              btnText2="Firebase"
              btnUrl="/projects"
              text="I'm baby salvia lomo yuccie, vinyl seitan XOXO tousled bicycle rights slow-carb occupy taiyaki microdosing brunch. Photo booth slow-carb health goth kickstarter cardigan. Roof party pour-over swag pork belly glossier DIY farm-to-table godard locavore. Chicharrones gastropub slow-carb food truck tumblr semiotics, heirloom ugh wolf unicorn thundercats health goth."
            />
          </div>
        </div>
      </section>
      <FeaturedProject2 />
      <section id="angularProject">
        <div className="container">
          <div className="row">
            <FeaturedAngular
              imgSrc={gatsby}
              num="03."
              title="Gatsby Project"
              btnText1="Gatsby"
              btnText2="Strapi"
              btnUrl="/projects"
              text="I'm baby salvia lomo yuccie, vinyl seitan XOXO tousled bicycle rights slow-carb occupy taiyaki microdosing brunch. Photo booth slow-carb health goth kickstarter cardigan. Roof party pour-over swag pork belly glossier DIY farm-to-table godard locavore. Chicharrones gastropub slow-carb food truck tumblr semiotics, heirloom ugh wolf unicorn thundercats health goth."
            />
          </div>
        </div>
        <FeaturedBtn />
      </section>
    </>
  );
}

export default FeaturedProject1;
