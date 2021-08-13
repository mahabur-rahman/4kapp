import React from "react";
import { NavLink } from "react-router-dom";

function ServicesContent({ icon, title, text, visit }) {
  return (
    <>
      <div className="col-xl-4 col-lg-6 mx-auto">
        <NavLink to={visit}>
          <div className="card text-center shadow">
            <div className="card-body">
              <span>{icon}</span>
              <h5 className="card-title text-capitalize">{title}</h5>
              <p className="card-text">{text}</p>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default ServicesContent;
