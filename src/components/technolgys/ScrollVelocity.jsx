import { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react";
import "./ScrollVelocity.css";

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);
  return width;
}

export const ScrollVelocity = ({
  scrollContainerRef,
  logos = [],
  velocity = 100,
  direction = "left", // "left", "right", or "alternate"
  className = "",
  logoClassName = "velocity-logo",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName = "parallax",
  scrollerClassName = "scroller",
  parallaxStyle,
  scrollerStyle,
  logoSpacing = "2rem",
}) => {
  function VelocityLogos({
    logos,
    baseVelocity = velocity,
    direction = "left",
    scrollContainerRef,
    className = "",
    logoClassName = "velocity-logo",
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
    logoSpacing = "2rem",
  }) {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef
      ? { container: scrollContainerRef }
      : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping ?? 50,
      stiffness: stiffness ?? 400,
    });
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping?.input || [0, 1000],
      velocityMapping?.output || [0, 5],
      { clamp: false }
    );
    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min, max, v) {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    }

    const x = useTransform(baseX, (v) => {
      if (copyWidth === 0) return "0px";
      return `${wrap(-copyWidth, 0, v)}px`;
    });

    const directionFactor = useRef(1);

    // Set initial direction based on prop
    useLayoutEffect(() => {
      if (direction === "right") {
        directionFactor.current = -1;
      } else if (direction === "left") {
        directionFactor.current = 1;
      }
      // For "alternate", we start with left (1) by default
    }, [direction]);

    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      // Handle scroll velocity direction
      if (velocityFactor.get() < 0) {
        directionFactor.current = direction === "right" ? 1 : -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = direction === "right" ? -1 : 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    // Render logos with spacing
    const renderLogos = () => {
      return logos.map((logo, index) => (
        <div
          key={index}
          className="logo-item"
          style={{ marginRight: logoSpacing }}
        >
          <img src={logo} alt={`Logo ${index + 1}`} className={logoClassName} />
        </div>
      ));
    };

    const spans = [];
    for (let i = 0; i < numCopies; i++) {
      spans.push(
        <div className={className} key={i} ref={i === 0 ? copyRef : null}>
          {renderLogos()}
        </div>
      );
    }

    return (
      <div className={parallaxClassName} style={parallaxStyle}>
        <motion.div
          className={scrollerClassName}
          style={{ x, ...scrollerStyle }}
        >
          {spans}
        </motion.div>
      </div>
    );
  }

  return (
    <section>
      <VelocityLogos
        logos={logos}
        className={className}
        logoClassName={logoClassName}
        baseVelocity={velocity}
        direction={direction}
        scrollContainerRef={scrollContainerRef}
        damping={damping}
        stiffness={stiffness}
        numCopies={numCopies}
        velocityMapping={velocityMapping}
        parallaxClassName={parallaxClassName}
        scrollerClassName={scrollerClassName}
        parallaxStyle={parallaxStyle}
        scrollerStyle={scrollerStyle}
        logoSpacing={logoSpacing}
      />
    </section>
  );
};

export default ScrollVelocity;
