import { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "motion/react";

// Import all images
import one from "../../assets/hero/1.png";
import laravel from "../../assets/hero/laravel.png";
import erp from "../../assets/hero/erp.png";
import figma from "../../assets/hero/figma.png";
import flutter from "../../assets/hero/flutter.png";
import node from "../../assets/hero/node.png";
import wordpress from "../../assets/hero/wordpress.png";
import react from "../../assets/hero/react.png";
import up from "../../assets/hero/up.png";

const logos = [one, node, flutter, laravel, erp, figma, react, wordpress, up];

const CircularLogos = ({ spinDuration = 25, radius = 160 }) => {
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      transition: {
        duration: spinDuration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls, rotation, spinDuration]);

  return (
    <div
      className="position-relative d-flex justify-content-center align-items-center"
      style={{
        width: `${radius * 3}px`,
        height: `${radius * 3}px`,
        margin: "auto",
      }}
    >
      {/* Rotating outer logos */}
      <motion.div
        className="position-absolute"
        style={{ rotate: rotation }}
        animate={controls}
      >
        {logos.map((logo, i) => {
          const angle = (360 / logos.length) * i;
          const transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;

          return (
            <motion.img
              key={i}
              src={logo}
              alt={`logo-${i}`}
              className="position-absolute rounded-circle shadow-sm"
              style={{
                transform,
                width: "80px",
                height: "80px",
                objectFit: "contain",
                background: "white",
                padding: "8px",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            />
          );
        })}
      </motion.div>

      {/* Center fixed logo */}
      <div
        className="position-absolute d-flex justify-content-center align-items-center rounded-circle shadow-lg bg-white"
        style={{
          width: "130px",
          height: "130px",
          zIndex: 2,
        }}
      >
        <img
          src={node}
          alt="center-logo"
          style={{
            width: "90px",
            height: "90px",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default CircularLogos;
