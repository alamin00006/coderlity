import { useState } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import { Minus, Plus } from "lucide-react";
import faqVector from "../../assets/faq-vector.png";
const FAQSection = () => {
  const faqs = [
    {
      q: "What services does Codelrity provide?",
      a: "Reliable and secure hosting solutions to keep your website online and performing at its best all the time.",
    },
    {
      q: "How long does it take to complete a project?",
      a: "Project timelines vary based on complexity, but most projects are completed within 2 to 6 weeks.",
    },
    {
      q: "What is your pricing model—fixed cost or hourly?",
      a: "We offer both fixed pricing and hourly contracts depending on project requirements.",
    },
    {
      q: "How do I get started with Codelrity?",
      a: "Simply contact us through our website or schedule a consultation call.",
    },
    {
      q: "How do I get started with Codelrity?",
      a: "You can begin by sharing your project details and we'll guide you through the next steps.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-5" style={{ background: "#CEE7FE" }}>
      <Container style={{ height: "600px" }}>
        <Row className="g-5 align-items-center">
          <Col md={6} className="position-relative">
            <h2 className="fw-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-muted mb-4">
              Have questions about our services, process, or pricing? Our FAQ
              section is here to provide clear answers and help you better
              understand how Codelrity can support your digital journey.
            </p>
            <Button
              style={{
                background: "#0d6efd",
                border: 0,
                padding: "10px 35px",
                borderRadius: "10px",
              }}
            >
              Let's Talk
            </Button>
            <div
              className="position-absolute"
              style={{ top: "200px", right: "130px" }}
            >
              <img src={faqVector} alt="FAQ Vector" className="img-fluid" />
            </div>
          </Col>

          <Col md={6}>
            {faqs.map((item, index) => (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                className="p-4 mb-3 shadow-sm rounded-3 d-flex flex-column justify-content-center"
                style={{
                  cursor: "pointer",
                  backgroundColor: openIndex === index ? "#1E6FFF" : "#E9EAF0",
                  height: "auto",
                  color: openIndex === index ? "white" : "black",
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="mb-0 fw-semibold fs-5">{item.q}</h6>
                  {openIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </div>
                {openIndex === index && (
                  <p
                    className=" mt-2 mb-0"
                    style={{
                      color: openIndex === index ? "white" : "black",
                      fontSize: "1rem",
                    }}
                  >
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default FAQSection;
