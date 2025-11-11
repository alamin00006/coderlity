import { ScrollVelocity } from "./ScrollVelocity";
import { useRef } from "react";
import "./ScrollVelocity.css";

const icons = [
  "html5.svg",
  "css3.svg",
  "js.svg",
  "angular.svg",
  "laravel.svg",
  "php.svg",
  "mysql.svg",
  "git.svg",
  "github.svg",
  "mongo.svg",
  "express.svg",
  "react.svg",
  "node.svg",
  "vue.svg",
  "nuxt.svg",
  "flutter.svg",
  "bootstrap.svg",
  "tailwind.svg",
  "firebase.svg",
  "digital-marketing.svg",
  "seo.svg",
  "strategy.svg",
  "analytics.svg",
  "google-search.svg",
  "semrush.svg",
  "email.svg",
  "wordpress.svg",
  "backlink.svg",
];

export const TechBanner = () => {
  const containerRef = useRef(null);
  const logoContainerRef = useRef(null); // <-- new ref for logo marquee

  const marqueeTexts = [
    "Technologies We Work With",
    "Web • Mobile • Cloud • AI • Blockchain",
  ];

  return (
    <div className="tech-banner">
      {/* ---------- LOGO MARQUEE (ScrollVelocity) ---------- */}
      <div ref={logoContainerRef} className="logo-marquee-wrapper">
        <ScrollVelocity
          scrollContainerRef={logoContainerRef}
          texts={["Unflash"]} // <-- logo text (SVG will be rendered inside)
          velocity={80}
          numCopies={4}
          velocityMapping={{ input: [0, 800], output: [0, 4] }}
          parallaxClassName="parallax"
          scrollerClassName="logo-scroller"
          parallaxStyle={{ height: "100%" }}
          scrollerStyle={{ gap: "4rem" }}
        >
          <img
            src="/assets/unflash-logo.svg"
            alt="Unflash"
            className="unflash-logo-img"
          />
        </ScrollVelocity>
      </div>

      {/* ---------- HEADER ---------- */}
      <div className="tech-header">
        <h2>Technologies We Work With</h2>
        <p>
          At our company, we work with the latest technologies to deliver
          innovative, secure, and high-performing solutions. Our expertise
          includes web, mobile, cloud, AI, and blockchain development for modern
          businesses.
        </p>
      </div>

      {/* ---------- ICON GRID ---------- */}
      <div className="tech-icons">
        {icons.map((icon, i) => (
          <img
            key={i}
            src={`/assets/${icon}`}
            alt={icon.replace(".svg", "").replace(/-/g, " ")}
          />
        ))}
      </div>

      {/* ---------- TEXT MARQUEE (existing) ---------- */}
      <div ref={containerRef} className="marquee-container">
        <ScrollVelocity
          scrollContainerRef={containerRef}
          texts={marqueeTexts}
          velocity={130}
          className=""
          numCopies={6}
          velocityMapping={{ input: [0, 1200], output: [0, 6] }}
          parallaxClassName="parallax"
          scrollerClassName="scroller"
          parallaxStyle={{ height: "100%" }}
          scrollerStyle={{ gap: "2rem", color: "#111827" }}
        />
      </div>
    </div>
  );
};
