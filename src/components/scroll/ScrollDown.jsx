// ScrollDown.js
import { Button } from "react-bootstrap";
import "./ScrollDown.css";
import vector from "../../assets/hero/Vector1.png";

const ScrollDown = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-down-container text-center position-relative">
      {/* Vector background image */}
      <img
        src={vector}
        alt="Decorative Vector"
        className="img-fluid vector-image"
      />

      {/* Mouse button positioned on top of image */}
      <Button
        variant="link"
        className="scroll-down-btn position-absolute start-50 translate-middle"
        style={{ top: "60px", right: "40px" }}
        onClick={handleScroll}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="scroll-text ">Scroll Down</div>
      </Button>
    </div>
  );
};

export default ScrollDown;
