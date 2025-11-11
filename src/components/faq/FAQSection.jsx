import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
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
    <section className="py-5" style={{ background: "#f4f8ff" }}>
      <Container>
        <Row className="g-5 align-items-center">
          <Col md={5}>
            <h2 className="fw-bold mb-3">Freequently asked Questions</h2>
            <p className="text-muted mb-4">
              Have questions about our services, process, or pricing? Our FAQ
              section is here to provide clear answers and help you better
              understand how Codelrity can support your digital journey.
            </p>
            <Button
              style={{
                background: "#0d6efd",
                border: 0,
                padding: "10px 25px",
                borderRadius: "10px",
              }}
            >
              Let's Talk
            </Button>
          </Col>

          <Col md={7}>
            {faqs.map((item, index) => (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                className="p-3 mb-3 shadow-sm rounded-3 bg-white"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="mb-0 fw-semibold">{item.q}</h6>
                  {openIndex === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>
                {openIndex === index && (
                  <p className="text-muted small mt-2 mb-0">{item.a}</p>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
