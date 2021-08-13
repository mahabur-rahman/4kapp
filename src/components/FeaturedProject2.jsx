import React from "react";
import FeaturedReact from "./FeaturedReact";
import react from "../images/react.svg";

function FeaturedProject2() {
  return (
    <>
      <section id="reactProject">
        <div className="container">
          <div className="row">
            <FeaturedReact
              imgSrc={react}
              num="02."
              title="React Project"
              btnUrl="/projects"
              btnText1="React"
              btnText2="Redux"
              text="Tumblr intelligentsia brunch, heirloom crucifix tousled butcher poke
            fanny pack lumbersexual forage. Keytar portland lyft mixtape fixie
            tofu vice blue bottle. Ethical waistcoat flannel vape banjo you
            probably haven't heard of them mlkshk, mumblecore umami fam
            slow-carb. Shaman fashion axe mlkshk bitters quinoa cornhole pok pok
            pabst cray cronut snackwave dreamcatcher you probably haven't heard
            of them."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedProject2;
