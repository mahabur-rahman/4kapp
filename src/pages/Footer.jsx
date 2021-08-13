import React, { useState } from "react";
import footerLogo from "../images/logo.svg";

import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaTelegramPlane,
  FaAngleUp,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

import { FooterAddress, usefulLinks, copyrightLinks } from "../Data/FooterData";

function Footer() {
  const year = new Date().getFullYear();
  const name = " WebDev";

  // footerLogo & paragraph
  const [state, setState] = useState({
    logo: footerLogo,
    visitLogo: "/",
    text: "Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur.",
    title: "WebDev",
    icon1: <FaFacebookF />,
    icon2: <FaTwitter />,
    icon3: <FaGooglePlusG />,
  });

  // email
  const [email, setEmail] = useState({
    email: "",
  });

  // for subscribe
  const [msg, setMsg] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email : ${email.email}`);
    setMsg(true);
  };

  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              {FooterAddress.map((data) => (
                <div className="col-xl-4 col-md-4 mb-30" key={data.id}>
                  <div className="single-cta mt-4 mt-md-0">
                    {data.icon}
                    <div className="cta-text">
                      <h4>{data.title}</h4>
                      <span>{data.address}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <NavLink to={state.visitLogo}>
                      <img
                        src={state.logo}
                        className="img-fluid"
                        alt={state.title}
                      />
                    </NavLink>
                  </div>
                  <div className="footer-text">
                    <p>{state.text}</p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a href="https://www.facebook.com" target="blank">
                      {state.icon1}
                    </a>
                    <a href="https://twitter.com/" target="blank">
                      {state.icon2}
                    </a>
                    <a href="https://www.google.com/" target="blank">
                      {state.icon3}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30 mt-5 mt-lg-0">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    {usefulLinks.map((data) => (
                      <li key={data.id}>
                        <NavLink to={data.visit}>{data.title}</NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50 mt-5 mt-lg-0">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="email"
                        value={email.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                      />
                      <button type="submit">
                        <span>
                          <FaTelegramPlane />
                        </span>
                      </button>

                      {msg ? (
                        <span className="text-success">
                          Your email is pending...
                        </span>
                      ) : (
                        ""
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p className="mb-0">
                    Copyright &copy; {year}, All Right Reserved By
                    <NavLink to="/">{name}</NavLink>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    {copyrightLinks.map((data) => (
                      <li key={data.id}>
                        <NavLink to={data.visit}>{data.title}</NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* top arrow */}
        <div className="top-arrow">
          <a href="#navbar">
            <span>
              <FaAngleUp />
            </span>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
