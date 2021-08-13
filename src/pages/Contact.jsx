import React, { useState } from "react";

function Contact() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  // for message show
  const [msg, setMsg] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name : ${userInfo.name} Email : ${userInfo.email} Message : ${userInfo.message}`
    );
    // for message show
    setMsg(true);
  };

  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-10 col-11 mx-auto">
              <div className="contact-part shadow p-5 bg-white">
                <h2 className="text-capitalize text-center mb-4">
                  get in touch
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      value={userInfo.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      name="message"
                      value={userInfo.message}
                      onChange={handleChange}
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                    />
                  </div>
                  <div className="d-grid gap-2 mt-4">
                    <button
                      className="btn submit-btn btn-lg text-uppercase"
                      type="submit"
                    >
                      Submit Here
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-4 text-center">
                {msg ? (
                  <span className="text-success text-capitalize">
                    Very good job 🙂
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
