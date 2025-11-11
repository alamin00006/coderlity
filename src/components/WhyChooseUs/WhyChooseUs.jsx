import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CheckSquare } from "lucide-react";

export default function WhyChooseCodelritly() {
  const features = [
    {
      title: "Expert Developers",
      desc: "We have a team of experienced developers proficient in the latest technologies and best practices.",
    },
    {
      title: "Tailored Solutions",
      desc: "We create software that fits your business in a unique way. We provide customized solutions designed to meet your specific needs.",
    },
    {
      title: "End-to-End Services",
      desc: "From planning and design to development and deployment, we offer complete end-to-end solutions.",
    },
    {
      title: "Responsive Designs",
      desc: "Our websites are designed to be mobile-friendly and look great on all devices.",
    },
    {
      title: "Fast and Secure",
      desc: "We ensure your website is optimized for high performance and built with the highest standards of security.",
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #e8f2ff 0%, #f8fbff 100%)",
      }}
    >
      <Container>
        <h2 className="text-center fw-bold mb-3">
          Why Choose Codelritly for Web Development
        </h2>
        <p
          className="text-center text-muted mb-5"
          style={{ maxWidth: "750px", margin: "0 auto" }}
        >
          Choosing Codelritly for your web development means partnering with a
          team that values innovation, quality, and performance. We specialize
          in creating responsive, user-friendly, and visually engaging websites
          tailored to your business goals. Our expert developers use the latest
          technologies to ensure fast, secure, and reliable web solutions that
          help you stand out in the digital world.
        </p>

        <Row className="align-items-center g-5">
          <Col md={6}>
            {features.map((item, index) => (
              <Card
                key={index}
                className="mb-3 p-3 shadow-sm border-0 d-flex flex-row align-items-start"
                style={{ borderRadius: "15px" }}
              >
                <div
                  className="me-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    backgroundColor: "#e0edff",
                    color: "#0d6efd",
                  }}
                >
                  <CheckSquare size={26} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">{item.title}</h6>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </Card>
            ))}
          </Col>

          <Col md={6}>
            <div className="text-center">
              <img
                src="/images/why-choose-img.png"
                alt="Why Choose Us"
                className="img-fluid rounded-4 shadow"
                style={{ border: "4px solid #cfe2ff" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
