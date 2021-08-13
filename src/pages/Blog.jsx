import React from "react";

import blogData from "../Data/BlogData";

function Blog() {
  return (
    <>
      <section id="blogs">
        <div className="container">
          <h2 className="text-center">All Blogs</h2>
          <div className="row mt-5 pt-4">
            <div className="col-xl-10 col-lg-12 col-md-12 mx-auto">
              <div className="row gy-4">
                {blogData.map((data) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-11 col-11 mx-auto"
                    key={data.id}
                  >
                    <div className="blog-content">
                      <div className="card text-center shadow p-4">
                        <img
                          src={data.imgSrc}
                          className="card-img-top img-fluid"
                          alt={data.title}
                        />
                        <div className="card-body">
                          <h5 className="card-title my-3">{data.title}</h5>
                          <p className="card-text">{data.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
