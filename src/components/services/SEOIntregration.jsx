import { Container, Row, Col } from "react-bootstrap";
import { Check } from "lucide-react";

const SEOIntregration = () => {
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
            <h2 className="fw-bold">SEO Integration for Web Development</h2>
            <p className="mt-3 text-muted">
              At Coderlity, we ensure that every website we build is optimized
              for search engines, helping you rank better and reach a broader
              audience. We implement best practices for on-page SEO to make sure
              your website performs well on Google and other search engines.
            </p>

            <Row className="mt-4 g-4">
              {/* Data arrays for optimized mapping */}
              {[
                {
                  title: "Our SEO Services Include:",
                  items: [
                    "On-page optimization (keywords, meta tags, alt text)",
                    "Fast loading speeds",
                    "SEO-friendly URL structure",
                    "Mobile-first design",
                    "Mobile and Tablet Optimized Shopping Experience",
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
export default SEOIntregration;
