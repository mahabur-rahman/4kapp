import React from "react";
import { FaGithubSquare, FaReplyAll } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function FeaturedReact({
  imgSrc,
  num,
  title,
  btnUrl,
  btnText1,
  btnText2,
  text,
}) {
  return (
    <>
      <div className="col-xl-6 order-2">
        <div className="react-project">
          <div className="react-img img-thumbnail">
            <img src={imgSrc} alt={title} />
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-10 col-11 mx-auto order-1">
        <div className="card shadow-lg">
          <h3> {num} </h3>
          <NavLink to="/projects">
            <h4> {title} </h4>
          </NavLink>
          <p> {text} </p>
          <div className="react-btn">
            <NavLink to={btnUrl} className="disabled" type="button">
              {btnText1}
            </NavLink>
            <NavLink to={btnUrl} className="disabled mx-2" type="button">
              {btnText2}
            </NavLink>
          </div>
          <div className="icons mt-3">
            <span>
              <NavLink to={btnUrl}>
                <FaGithubSquare className="icon" />
              </NavLink>
            </span>
            <span>
              <NavLink to={btnUrl}>
                <FaReplyAll className="icon mx-3" />
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedReact;
