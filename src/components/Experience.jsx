import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Experience() {
  return (
    <>
      <section id="experience">
        <div className="container">
          <h2 className="text-center mb-5">Experience</h2>
          <div className="row pt-4">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-4">
              {/* nav btn start 👍 */}
              <div
                className="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {/* nav btn start 👍 */}
                <button
                  className="active nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  type="button"
                  data-bs-target="#tommy"
                >
                  Tommy
                </button>

                <button
                  className="nav-link"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#bigDrop"
                  type="button"
                >
                  BigDrop
                </button>
                <button
                  className="nav-link"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#cuker"
                  type="button"
                >
                  Coker
                </button>
              </div>

              {/* nav btn end 👍 */}
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 mx-auto mt-5 mt-md-0">
              <div className="tab-content" id="v-pills-tabContent">
                {/* tab pane start 👍 */}
                <div
                  className="tab-pane fade show active"
                  id="tommy"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="tab-main-content">
                    <div className="tab-info">
                      <h3 className="mb-3">Full Stack Web Developer</h3>
                      <span className="disabled" role="button">
                        Tommy
                      </span>
                      <h6 className="my-3">December 2015 - Present</h6>
                    </div>
                    <div className="tab-text d-flex">
                      <span>
                        <FaAngleDoubleRight className="icon" />
                      </span>
                      <p className="px-4">
                        Tote bag sartorial mlkshk air plant vinyl banjo
                        lumbersexual poke leggings offal cold-pressed brunch
                        neutra. Hammock photo booth live-edge disrupt.
                      </p>
                    </div>

                    <div className="tab-text d-flex">
                      <span>
                        <FaAngleDoubleRight className="icon" />
                      </span>
                      <p className="px-4">
                        Post-ironic selvage chambray sartorial freegan
                        meditation. Chambray chartreuse kombucha meditation, man
                        bun four dollar toast street art cloud bread live-edge
                        heirloom.
                      </p>
                    </div>

                    <div className="tab-text d-flex">
                      <span>
                        <FaAngleDoubleRight className="icon" />
                      </span>
                      <p className="px-4">
                        Butcher drinking vinegar franzen authentic messenger bag
                        copper mug food truck taxidermy. Mumblecore lomo echo
                        park readymade iPhone migas single-origin coffee franzen
                        cloud bread tilde vegan flexitarian.
                      </p>
                    </div>
                  </div>
                </div>

                {/* tab pane end 👍 */}

                {/* tab pane start 👍 */}
                <div
                  className="tab-pane fade show"
                  id="bigDrop"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="tab-main-content">
                    <div className="tab-info">
                      <h3 className="mb-3">Front-End Engineer</h3>
                      <span className="disabled" role="button">
                        BigDrop
                      </span>
                      <h6 className="my-3">May 2015 - December 2015</h6>
                    </div>
                    <div className="tab-text d-flex">
                      <span>
                        <FaAngleDoubleRight className="icon" />
                      </span>
                      <p className="px-4">
                        Hashtag drinking vinegar scenester mumblecore snackwave
                        four dollar toast, lumbersexual XOXO. Cardigan
                        church-key pabst, biodiesel vexillologist viral squid.
                      </p>
                    </div>

                    <div className="tab-text d-flex">
                      <span>
                        <FaAngleDoubleRight className="icon" />
                      </span>
                      <p className="px-4">
                        Franzen af pitchfork, mumblecore try-hard kogi XOXO roof
                        party la croix cardigan neutra retro tattooed copper
                        mug. Meditation lomo biodiesel scenester.
                      </p>
                    </div>

                    <div className="tab-text d-flex">
                      <span>
                        <FaAngleDoubleRight className="icon" />
                      </span>
                      <p className="px-4">
                        Fam VHS enamel pin try-hard echo park raw denim unicorn
                        fanny pack vape authentic. Helvetica fixie church-key,
                        small batch jianbing messenger bag scenester +1
                      </p>
                    </div>
                    <div className="tab-text d-flex">
                      <span>
                        <FaAngleDoubleRight className="icon" />
                      </span>
                      <p className="px-4">
                        Polaroid succulents tumeric before they sold out taiyaki
                        master cleanse neutra. Hammock photo booth live-edge
                        disrupt.
                      </p>
                    </div>
                  </div>
                </div>

                {/* tab pane end 👍 */}

                {/* tab pane start 👍 */}
                <div
                  className="tab-pane fade show"
                  id="cuker"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="tab-main-content">
                    <div className="tab-info">
                      <h3 className="mb-3">Back-End Engineer</h3>
                      <span className="disabled" role="button">
                        cuker
                      </span>
                      <h6 className="my-3">May 2014 - September 2015</h6>
                    </div>
                    <div className="tab-text d-flex">
                      <span>
                        <FaAngleDoubleRight className="icon" />
                      </span>
                      <p className="px-4">
                        Bushwick jianbing humblebrag chicharrones truffaut,
                        ramps williamsburg.
                      </p>
                    </div>

                    <div className="tab-text d-flex">
                      <span>
                        <FaAngleDoubleRight className="icon" />
                      </span>
                      <p className="px-4">
                        Farm-to-table quinoa man bun, 90's mlkshk blue bottle
                        wayfarers everyday carry heirloom asymmetrical swag pok
                      </p>
                    </div>

                    <div className="tab-text d-flex">
                      <span>
                        <FaAngleDoubleRight className="icon" />
                      </span>
                      <p className="px-4">
                        Mixtape church-key synth, whatever pickled prism migas
                        green juice iPhone vaporware pour-over fam chia craft
                        beer.
                      </p>
                    </div>
                    <div className="tab-text d-flex">
                      <span>
                        <FaAngleDoubleRight className="icon" />
                      </span>
                      <p className="px-4">
                        Prism tumblr freegan cloud bread squid palo santo,
                        disrupt twee.
                      </p>
                    </div>
                  </div>
                </div>
                {/* tab pane end 👍 */}
              </div>
            </div>
          </div>
        </div>

        {/* more info btn */}
        <div className="more-info-btn text-center text-uppercase mt-5">
          <NavLink to="/about">More Info</NavLink>
        </div>
      </section>
    </>
  );
}

export default Experience;
