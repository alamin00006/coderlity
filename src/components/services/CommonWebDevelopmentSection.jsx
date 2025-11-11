import { Container, Row, Col } from "react-bootstrap";
import { Check } from "lucide-react";

export default function CommonWebDevelopmentSection({
  title,
  description,
  contents,
  image,
  gradient = true,
  reverse = false,
  md = 12,
}) {
  return (
    <section
      className={`py-5 ${gradient ? "" : ""}`}
      style={
        gradient
          ? {
              background: "linear-gradient(135deg, #e0f0ff 0%, #f5faff 100%)",
            }
          : {}
      }
    >
      <Container>
        <Row
          className={`align-items-center ${reverse ? "flex-row-reverse" : ""}`}
          style={{
            margin: "0px 20px",
          }}
        >
          {/* Text Content */}
          <Col md={6}>
            <h2 className="fw-bold">{title}</h2>
            <p className="mt-3 text-muted">{description}</p>

            <Row className="mt-4 g-4">
              {contents.map((section, index) => (
                <Col key={index} xs={12} sm={6} md={md}>
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

          {/* Image */}
          <Col md={6} className="text-center">
            <img
              src={image}
              alt={title}
              className="img-fluid w-75"
              style={{ maxWidth: "420px" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
