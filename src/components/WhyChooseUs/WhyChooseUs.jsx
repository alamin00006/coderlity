import { Container, Row, Col, Card } from "react-bootstrap";
import ChooseUseImage from "../../assets/programming-background-collage.png";

import chooseIcon from "../../assets/choose-icon.png";
const WhyChooseCoderlity = () => {
  const features = [
    {
      title: "Expert Developers",
      desc: "Our websites are designed to be mobile-friendly and look great on all devices.",
    },
    {
      title: "Tailored Solutions",
      desc: "Our websites are designed to be mobile-friendly and look great on all devices.",
    },
    {
      title: "End-to-End Services",
      desc: "Our websites are designed to be mobile-friendly and look great on all devices.",
    },
    {
      title: "Responsive Designs",
      desc: "Our websites are designed to be mobile-friendly and look great on all devices.",
    },
    {
      title: "Fast and Secure",
      desc: "Our websites are designed to be mobile-friendly and look great on all devices.",
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
        <div className="divider-line-choose-us"></div>
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

        <Row className="align-items-center justify-content-center g-5">
          <Col md={6}>
            <div className="d-flex flex-column">
              {features.map((item, index) => (
                <Card
                  key={index}
                  className="mb-3 p-3 shadow-sm border-0 d-flex flex-row align-items-start"
                  style={{ borderRadius: "15px" }}
                >
                  <div
                    className="me-3 d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <img
                      src={chooseIcon}
                      alt="Choose Icon"
                      className="img-fluid"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">{item.title}</h6>
                    <p className="text-muted small mb-0">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Col>

          <Col md={6}>
            <div className="d-flex align-items-center justify-content-center h-100">
              <img
                src={ChooseUseImage}
                alt="Why Choose Us"
                className="img-fluid shadow"
                style={{
                  border: "4px solid #cfe2ff",
                  width: "100%",
                  maxHeight: "550px",
                  objectFit: "cover",
                  borderTopLeftRadius: "100px",
                  borderBottomRightRadius: "100px",
                  borderTopRightRadius: "0px",
                  borderBottomLeftRadius: "0px",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseCoderlity;
