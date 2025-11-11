import { ScrollVelocity } from "./ScrollVelocity";
import { useRef } from "react";
import "./ScrollVelocity.css";
import logo1 from "../../assets/technologies/1.png";
import logo2 from "../../assets/technologies/2.png";
import logo3 from "../../assets/technologies/3.png";

export const TechBanner = () => {
  const containerRef = useRef(null);

  const marqueeLogos = [logo1, logo2, logo3];
  return (
    <div className="tech-banner">
      <div className="tech-header">
        <h2>Technologies We Work With</h2>
        <div className="divider-line-technologies"></div>
        <p>
          At our company, we work with the latest technologies to deliver
          innovative, secure, and high-performing solutions. Our expertise
          includes web, mobile, cloud, AI, and blockchain development for modern
          businesses.
        </p>
      </div>

      {/* ---------- Logo MARQUEE ---------- */}
      <div ref={containerRef} className="marquee-container">
        <ScrollVelocity
          scrollContainerRef={containerRef}
          logos={marqueeLogos}
          direction="left"
          velocity={130}
          className=""
          numCopies={6}
          velocityMapping={{ input: [0, 600], output: [0, 6] }}
          parallaxClassName="parallax"
          scrollerClassName="scroller"
          parallaxStyle={{ height: "100%" }}
          scrollerStyle={{ gap: "2rem", color: "#111827" }}
        />
      </div>
      <div ref={containerRef} className="marquee-container">
        <ScrollVelocity
          scrollContainerRef={containerRef}
          logos={marqueeLogos}
          velocity={130}
          direction="right"
          className=""
          numCopies={6}
          velocityMapping={{ input: [0, 600], output: [0, 6] }}
          parallaxClassName="parallax"
          scrollerClassName="scroller"
          parallaxStyle={{ height: "100%" }}
          scrollerStyle={{ gap: "2rem", color: "#111827" }}
        />
      </div>
      <div ref={containerRef} className="marquee-container">
        <ScrollVelocity
          scrollContainerRef={containerRef}
          logos={marqueeLogos}
          velocity={130}
          direction="left"
          className=""
          numCopies={6}
          velocityMapping={{ input: [0, 600], output: [0, 6] }}
          parallaxClassName="parallax"
          scrollerClassName="scroller"
          parallaxStyle={{ height: "100%" }}
          scrollerStyle={{ gap: "2rem", color: "#111827" }}
        />
      </div>
    </div>
  );
};
