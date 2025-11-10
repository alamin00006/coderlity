import { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "motion/react";
import "./CircularLogos.css";

const logos = [
  "/logos/react.png",
  "/logos/node.png",
  "/logos/next.png",
  "/logos/js.png",
  "/logos/css.png",
  "/logos/html.png",
  "/logos/wordpress.png",
];

const getRotationTransition = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: "linear",
  duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: { type: "spring", damping: 20, stiffness: 300 },
});

const CircularLogos = ({ spinDuration = 25 }) => {
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  }, [spinDuration, controls, rotation]);

  return (
    <div className="relative flex justify-center items-center">
      <motion.div
        className="circular-logos"
        style={{ rotate: rotation }}
        initial={{ rotate: 0 }}
        animate={controls}
      >
        {logos.map((logo, i) => {
          const rotationDeg = (360 / logos.length) * i;
          const transform = `rotate(${rotationDeg}deg) translate(160px) rotate(-${rotationDeg}deg)`;
          return (
            <img
              key={i}
              src={logo}
              alt={`logo-${i}`}
              className="logo absolute w-12 h-12 object-contain"
              style={{ transform }}
            />
          );
        })}
      </motion.div>

      {/* Center logo */}
      <div className="absolute w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center">
        <img src="/logos/main-logo.png" alt="center" className="w-16 h-16" />
      </div>
    </div>
  );
};

export default CircularLogos;
