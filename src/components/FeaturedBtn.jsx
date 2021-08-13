import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";

function FeaturedBtn() {
  const [hover, setHover] = useState(true);

  const toggle = () => {
    setHover(!hover);
  };
  return (
    <>
      <div className="project-btn text-center my-5 pt-5">
        <NavLink
          className="shadow-lg"
          to="/projects"
          onMouseEnter={toggle}
          onMouseLeave={toggle}
        >
          Projects
          <span className="mx-1">
            {hover ? <FaAngleRight /> : <FaArrowRight />}
          </span>
        </NavLink>
      </div>
    </>
  );
}

export default FeaturedBtn;
