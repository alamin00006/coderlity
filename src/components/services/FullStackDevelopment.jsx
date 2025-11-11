import CommonWebDevelopmentSection from "./CommonWebDevelopmentSection";
import FullStackImage from "../../assets/web-development/full-stack.png";

export default function FullStackWebDevelopment() {
  const contents = [
    {
      title: "Frontend Technologies:",
      items: ["React.js", "Vue.js", "Angular", "HTML5, CSS3, JavaScript"],
    },
    {
      title: "Backend Technologies:",
      items: ["Node.js", "PHP"],
    },
    {
      title: "Database Management:",
      items: ["MongoDB", "MySQL", "Firebase"],
    },
  ];

  return (
    <CommonWebDevelopmentSection
      title="Full Stack Web Development"
      description="We provide end-to-end Full Stack Web Development solutions for both the frontend and backend. Our team delivers dynamic, responsive, and secure web applications."
      contents={contents}
      image={FullStackImage}
      gradient={false}
      md={4}
    />
  );
}
