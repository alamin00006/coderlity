import CircularLogos from "./CircularLogos";
import ScrollDown from "../scroll/ScrollDown";

const WebDevelopmentServices = () => {
  return (
    <section
      className="container-fluid bg-light py-5 position-relative"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #e6f0ff)",
        minHeight: "calc(100vh - 300px)",
      }}
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

          {/* Right part: Rotating logos */}
          <div
            className="col-md-6 position-relative"
            style={{ height: "300px" }}
          >
            <CircularLogos />
          </div>
        </div>

        {/* ScrollDown at the bottom */}
        <div
          className="position-absolute start-50 translate-middle-x"
          style={{ bottom: "0px" }}
        >
          <ScrollDown />
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentServices;
