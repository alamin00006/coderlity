import WebDevelopmentServices from "../../components/hero/ServicesSection";
import ServiceTabs from "../../components/services/ServicesTabs";
import Technologies from "../../components/Technologies/Technologies";
import FAQSection from "../../components/faq/FAQSection";
import Testimonial from "../../components/testimonial/Testimonial";
import WhyChooseCoderlity from "../../components/WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <WebDevelopmentServices />
      <ServiceTabs />
      <Technologies />
      <WhyChooseCoderlity />
      <FAQSection />
      <Testimonial />
    </>
  );
};

export default HomePage;
