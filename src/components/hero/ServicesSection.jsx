import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WebDevelopmentServices = () => {
  return (
    <section
      className="container-fluid bg-light py-5"
      style={{ background: "linear-gradient(to bottom, #ffffff, #e6f0ff)" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left part: Text content */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-3 fw-bold mb-3">Web Development Services</h1>
            <p className="lead mb-5">
              At Coderly, we specialize in crafting high-performance, scalable,
              and responsive websites tailored to your business goals. Whether
              you need a simple website or a complex web application, we have
              the expertise to deliver outstanding results.
            </p>
          </div>
          {/* Right part: Icons */}
          <div
            className="col-md-6 position-relative"
            style={{ height: "300px" }}
          >
            {/* Central icon */}
            <div className="position-absolute top-50 start-50 translate-middle bg-dark rounded-circle p-3">
              <img
                src="https://via.placeholder.com/80?text=Monitor"
                alt="Monitor"
                className="img-fluid"
              />
            </div>
            {/* Orbiting icons - using absolute positioning for simplicity */}
            <div
              className="position-absolute"
              style={{ top: "0", left: "calc(50% - 40px)" }}
            >
              <img
                src="https://via.placeholder.com/40?text=Flutter"
                alt="Flutter"
                className="rounded-circle"
              />
            </div>
            <div
              className="position-absolute"
              style={{ top: "20%", right: "20%" }}
            >
              <img
                src="https://via.placeholder.com/40?text=WP"
                alt="WordPress"
                className="rounded-circle"
              />
            </div>
            <div
              className="position-absolute"
              style={{ top: "50%", right: "10%" }}
            >
              <img
                src="https://via.placeholder.com/40?text=GCP"
                alt="GCP"
                className="rounded-circle"
              />
            </div>
            <div
              className="position-absolute"
              style={{ bottom: "20%", right: "20%" }}
            >
              <img
                src="https://via.placeholder.com/40?text=Unity"
                alt="Unity"
                className="rounded-circle"
              />
            </div>
            <div
              className="position-absolute"
              style={{ bottom: "0", left: "calc(50% - 40px)" }}
            >
              <img
                src="https://via.placeholder.com/40?text=Figma"
                alt="Figma"
                className="rounded-circle"
              />
            </div>
            <div
              className="position-absolute"
              style={{ bottom: "20%", left: "20%" }}
            >
              <img
                src="https://via.placeholder.com/40?text=Symfony"
                alt="Symfony"
                className="rounded-circle"
              />
            </div>
            <div
              className="position-absolute"
              style={{ top: "50%", left: "10%" }}
            >
              <img
                src="https://via.placeholder.com/40?text=React"
                alt="React"
                className="rounded-circle"
              />
            </div>
            <div
              className="position-absolute"
              style={{ top: "20%", left: "20%" }}
            >
              <img
                src="https://via.placeholder.com/40?text=Analytics"
                alt="Analytics"
                className="rounded-circle"
              />
            </div>
            {/* Add more icons as needed to match the image */}
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-primary rounded-pill px-4 py-2">
            Scroll Down <i className="bi bi-arrow-down"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentServices;
