import Slider from "react-slick";
import { Card, Container } from "react-bootstrap";
import { Quote } from "lucide-react";
import "./Testimonial.css";
// ---- images -------------------------------------------------
import person1 from "../../assets/testimonial/person1.png";
import person2 from "../../assets/testimonial/person2.png";
import person3 from "../../assets/testimonial/person3.png";
// -----------------------------------------------------------------
const testimonials = [
  {
    name: "Hasanur Rahman",
    role: "Project Manager - One Line Maintenance",
    text: "“Working with this company was a game-changer for our business. Their expertise transformed our results! Working with this company was a game-changer for our business. Their expertise transformed our results!”",
    logo: person1,
  },
  {
    name: "Arjun Kumar",
    role: "Digital Marketing Agency",
    text: "“Working with this company was a game-changer for our business. Their expertise transformed our results! Working with this company was a game-changer for our business. Their expertise transformed our results!”",
    logo: person2,
  },
  {
    name: "Abdul Aziz",
    role: "CEO – XY Company",
    text: "“Partnering with Coderity was a turning point for our restaurant. Their POS setup made our order process smoother, faster, and more efficient, improving service and customer satisfaction across the board.”",
    logo: person3,
  },
  {
    name: "Abdul Aziz",
    role: "CEO – XY Company",
    text: "“Partnering with Coderity was a turning point for our restaurant. Their POS setup made our order process smoother, faster, and more efficient, improving service and customer satisfaction across the board.”",
    logo: person3,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
    appendDots: (dots) => (
      <div className="mt-4">
        <ul className="slick-custom-dots"> {dots} </ul>
      </div>
    ),
    customPaging: () => <div className="slick-dot mt-4"></div>,
  };

  return (
    <section className="py-5 bg-light" style={{ marginBottom: "50px" }}>
      <Container className="py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "#111827" }}>
            Client Testimonials
          </h2>
          <div className="divider-line"></div>
          <p
            className="text-muted"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            Our clients share their success stories and experiences,
            highlighting our commitment, quality service, and outstanding
            project results.
          </p>
        </div>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-3">
              <Card
                className="testimonial-card text-center py-4 px-3"
                style={{
                  maxWidth: "550px",
                  margin: "0 auto",
                  borderRadius: "16px",
                  border: "1.5px solid #e5e7eb",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  backgroundColor: "#f9fafb",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top blue line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "10%",
                    width: "80%",
                    height: "2px",
                    backgroundColor: "rgba(37, 99, 235, 0.5)",
                    borderRadius: "2px",
                  }}
                />

                {/* Top Quote */}
                <Quote
                  size={28}
                  color="#2563eb"
                  style={{
                    position: "absolute",
                    top: "15px",
                    left: "20px",
                    opacity: 0.25,
                  }}
                />

                {/* Avatar */}
                <div className="d-flex justify-content-center mt-3 mb-3">
                  <div
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      border: "2px solid #e5e7eb",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={item.logo}
                      alt="Logo"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>

                {/* Name & Role */}
                <h6 className="fw-bold mb-1" style={{ color: "#111827" }}>
                  {item.name}
                </h6>
                <p className="text-muted mb-3" style={{ fontSize: "0.9rem" }}>
                  {item.role}
                </p>

                {/* Quote Text */}
                <p
                  className="text-muted mx-3"
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                  }}
                >
                  {item.text}
                </p>

                {/* Bottom Quote */}
                <Quote
                  size={28}
                  color="#2563eb"
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    right: "20px",
                    opacity: 0.25,
                    transform: "rotate(180deg)",
                  }}
                />
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonial;
