import React from "react";
import ServicesData from "../Data/ServicesData";
import ServicesContent from "./ServicesContent";

function Services() {
  return (
    <>
      <section id="services">
        <div className="container">
          <h2 className="text-center mb-5">Services</h2>
          <div className="row pt-4">
            <div className="col-xl-10 col-lg-10 col-11 mx-auto">
              <div className="row gy-4">
                {ServicesData.map((data) => (
                  <ServicesContent key={data.id} {...data} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
