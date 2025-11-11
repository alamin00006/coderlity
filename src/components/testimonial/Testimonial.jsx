import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

const testimonials = [
  {
    name: "Hosnain Rahman",
    role: "Project Manager - Dev Lab Maintenance",
    text: `"Working with this company was a game-changer for our business. Their expertise streamlined our workflows and took our projects to new heights!"`,
    image: "https://via.placeholder.com/100", // replace with real image URL
  },
  {
    name: "Arjun Kumar",
    role: "Digital Marketing Agency",
    text: `"Working with this company was a game-changer for our business. Their expertise streamlined our workflows and took our projects to new heights!"`,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Abdul Aziz",
    role: "CTO - IT Company",
    text: `"Working with this company was a game-changer for our business. Their expertise streamlined our workflows and took our projects to new heights!"`,
    image: "https://via.placeholder.com/100",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="py-5 bg-light text-center">
      <Container>
        <h2 className="fw-bold mb-3">Client Testimonials</h2>
        <p className="text-muted mb-5">
          Our clients share their success stories and experiences, highlighting
          our commitment, quality service, and outstanding project results.
        </p>

        <Carousel indicators={true} controls={true} interval={4000}>
          {testimonials.map((item, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                <Col md={8} lg={6}>
                  <Card className="p-4 shadow-sm border-0">
                    <div className="mb-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-circle"
                        width="80"
                        height="80"
                      />
                    </div>
                    <Card.Body>
                      <Card.Text className="fst-italic text-muted mb-4">
                        {item.text}
                      </Card.Text>
                      <h5 className="fw-bold">{item.name}</h5>
                      <p className="text-secondary">{item.role}</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
