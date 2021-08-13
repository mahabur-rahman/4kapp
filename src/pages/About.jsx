import React from "react";
import aboutImg from "../images/about.svg";

function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-7 col-md-7 col-sm-7 mx-auto">
              <div className="about-main-img">
                <img src={aboutImg} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-10 col-md-11 col-sm-12 mx-auto">
              <div className="about-content mt-5 mt-xl-0">
                <div className="about-heading">
                  <h2> about me</h2>
                  <p className="mt-5">
                    Salvia tousled chambray, shoreditch retro cliche
                    dreamcatcher coloring book roof party keffiyeh small batch
                    pork belly actually mlkshk shaman. Stumptown typewriter you
                    probably haven't heard of them pork belly dreamcatcher umami
                    woke, chambray snackwave craft beer. You probably haven't
                    heard of them slow-carb trust fund thundercats bespoke
                    live-edge forage echo park artisan coloring book. Semiotics
                    af tumblr, health goth viral iPhone cold-pressed ugh kogi
                    fanny pack. Photo booth 3 wolf moon narwhal, marfa.
                  </p>
                  <div className="about-list mt-4">
                    <ul className="list-inline">
                      <li className="list-inline-item p-2">HTML</li>
                      <li className="list-inline-item mx-2 p-2">CSS</li>
                      <li className="list-inline-item mx-2 p-2">JAVASCRIPT</li>
                      <li className="list-inline-item mx-2 p-2">REACT JS</li>
                      <li className="list-inline-item mx-2 p-2">NODE JS</li>
                      <li className="list-inline-item mx-2 p-2">EXPRESS JS</li>
                    </ul>
                  </div>
                  <div className="about-diagram">
                    <dl className="skills-diagram mt-5 pt-5">
                      <dt className="skill-5">React</dt>
                      <dd>5</dd>
                      <dt className="skill-10">NODE</dt>
                      <dd>10</dd>
                      <dt className="skill-3">SASS</dt>
                      <dd>3</dd>
                      <dt className="skill-8">EXPRESS</dt>
                      <dd>8</dd>
                      <dt className="skill-4">WP</dt>
                      <dd>4</dd>
                      <dt className="skill-6">HTML5</dt>
                      <dd>6</dd>
                      <dt className="skill-7">JS</dt>
                      <dd>7</dd>
                      <dt className="skill-9">CSS</dt>
                      <dd>9</dd>
                      <dt className="skill-2">JQ</dt>
                      <dd>2</dd>
                    </dl>
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

export default About;
