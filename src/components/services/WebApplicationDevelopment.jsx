import CommonWebDevelopmentSection from "./CommonWebDevelopmentSection";
import WebAppImage from "../../assets/web-development/OBJECTS (1).png"; // replace with your web app image

const WebApplicationDevelopment = () => {
  const contents = [
    {
      title: "Key Features of Our Web Apps:",
      items: [
        "High performance and scalability",
        "User authentication and authorization",
        "Secure data handling and encryption",
        "Cloud-based solutions",
        "Mobile and Tablet Optimized Shopping Experience",
      ],
    },
  ];

  return (
    <CommonWebDevelopmentSection
      title="Web Application Development"
      description="We build powerful Web Applications that are fast, scalable, and secure. Whether you need a simple tool or a comprehensive web app for business operations, we create solutions that streamline processes and improve user experience."
      contents={contents}
      image={WebAppImage}
    />
  );
};

export default WebApplicationDevelopment;
