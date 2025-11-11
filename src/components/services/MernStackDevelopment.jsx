import CommonWebDevelopmentSection from "./CommonWebDevelopmentSection";
import MernImage from "../../assets/web-development/mern-stack.png";

export default function MernStackDevelopment() {
  const contents = [
    {
      title: "Frontend Benefits of Mern Stack:",
      items: [
        "Unified JavaScript environment (frontend + backend).",
        "Real-time data updates.",
        "Scalable and responsive applications.",
        "Fast and efficient development process.",
      ],
    },
  ];

  return (
    <CommonWebDevelopmentSection
      title="MERN Stack Development"
      description="We offer MERN Stack Development to provide robust solutions for your business. Our developers build modern, scalable, and responsive web applications using the latest technologies."
      contents={contents}
      image={MernImage}
    />
  );
}
