import CommonWebDevelopmentSection from "./CommonWebDevelopmentSection";
import FullStackImage from "../../assets/web-development/full-stack.png";

export default function CustomWebDevelopment() {
  const contents = [
    {
      title: "Our Custom Web Development Includes:",
      items: [
        "Tailored CMS Solutions",
        "API Development and Integrations",
        "E-commerce Solutions",
        "Web Application Development",
        "Content Management Systems",
      ],
    },
  ];

  return (
    <CommonWebDevelopmentSection
      title="Full Stack Web Development"
      description="We offer Full Stack Web Development to provide complete solutions for both the frontend and backend of your website. Our skilled developers build dynamic, responsive websites that follow the latest industry standards."
      contents={contents}
      image={FullStackImage}
    />
  );
}
