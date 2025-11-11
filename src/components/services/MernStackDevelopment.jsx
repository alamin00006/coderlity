import { Container, Row, Col } from "react-bootstrap";
import { Check } from "lucide-react";

const MernStackDevelopment = () => {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #e0f0ff 0%, #f5faff 100%)",
      }}
    >
      <Container>
        <Row className="align-items-center g-5">
          <Col md={6}>
            <h2 className="fw-bold">Full Stack Web Development</h2>
            <p className="mt-3 text-muted">
              We offer Full Stack Web Development to provide complete solutions
              for both the frontend and backend of your website. Our skilled
              developers build dynamic, responsive websites that follow the
              latest industry standards.
            </p>

            <Row className="mt-4 g-4">
              {/* Data arrays for optimized mapping */}
              {[
                {
                  title: "Frontend Benefits of Mern Stack:",
                  items: [
                    "Unified development environment with JavaScript on both the front and backend.",
                    "Real-time data updates.",
                    "Scalable and responsive applications.",
                    "HTML5, CSS3, Fast and efficient development process.",
                  ],
                },
              ].map((section, index) => (
                <Col key={index} xs={12} sm={12} md={12}>
                  <h6 className="fw-semibold">{section.title}</h6>
                  <ul className="list-unstyled mt-2 small">
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="d-flex align-items-center gap-2 mb-1"
                      >
                        <span
                          style={{
                            backgroundColor: "#0d6efd",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "15px",
                            height: "15px",
                            borderRadius: "50%",
                          }}
                        >
                          <Check size={10} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Row>
          </Col>

          <Col md={6} className="text-center">
            <img
              src="/images/fullstack-illustration.png"
              alt="Full Stack Illustration"
              className="img-fluid w-75"
              style={{ maxWidth: "420px" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default MernStackDevelopment;
