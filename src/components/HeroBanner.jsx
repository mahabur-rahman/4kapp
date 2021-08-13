import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { socialIcons } from "../Data/NavbarData";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
// ityped
import { init } from "ityped";

// props
function HeroBanner({
  heroHeading,
  titleOne,
  titleTwo,
  titleThree,
  titleFour,
  btnText,
  btnUrl,
  imgSrc,
}) {
  const [hover, setHover] = useState(true);

  const toggle = () => {
    setHover(!hover);
  };

  // ityped

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: [`${titleTwo}`, `${titleThree}`, `${titleFour}`],
    });
  }, []);

  return (
    <>
      <section id="heroBanner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-10 col-lg-10 col-md-12 mx-auto">
              <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-12 mx-auto align-self-center">
                  <div className="hero-content mt-5">
                    <div className="hero-info">
                      <h2>{heroHeading}</h2>
                      <h5>
                        {titleOne}
                        <span ref={textRef} className="fw-bold"></span>
                      </h5>
                      <NavLink
                        to={btnUrl}
                        className="btn contact-btn"
                        onMouseEnter={toggle}
                        onMouseLeave={toggle}
                      >
                        {btnText}
                        <span className="mx-1">
                          {hover ? <FaAngleRight /> : <FaArrowRight />}
                        </span>
                      </NavLink>
                    </div>
                    <div className="hero-icons">
                      <ul className="list-inline">
                        {/* social icons part */}
                        {socialIcons.map((data) => (
                          <li className="list-inline-item mx-3" key={data.id}>
                            <a href={data.url} target={data.target}>
                              {data.icon}
                            </a>
                          </li>
                        ))}
                      </ul>
                      {/* end of social icons part */}
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 d-none d-lg-block mx-auto align-self-center ms-auto">
                  <div className="hero-img text-center">
                    <img src={imgSrc} alt="Hero Banner" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroBanner;
