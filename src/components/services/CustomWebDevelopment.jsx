import CommonWebDevelopmentSection from "./CommonWebDevelopmentSection";
import FullStackImage from "../../assets/web-development/full-stack.png";

const CustomWebDevelopment = () => {
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
      title="Custom Web Development"
      description="We offer Custom Web Development to provide tailored solutions for your specific needs. Our skilled developers build dynamic, responsive websites that follow the latest industry standards."
      contents={contents}
      image={FullStackImage}
    />
  );
};

export default CustomWebDevelopment;
