import React from "react";

function FeaturedHeading({ title }) {
  return (
    <>
      <section id="featuredHeading">
        <div className="container">
          <h2 className="text-center"> {title} </h2>
        </div>
      </section>
    </>
  );
}

export default FeaturedHeading;
