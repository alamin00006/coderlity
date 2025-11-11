import WebDevelopmentServices from "../../components/hero/ServicesSection";
import ServiceTabs from "../../components/services/ServicesTabs";
import { TechBanner } from "../../components/technolgys/Technolgys";
import WhyChooseCodelritly from "../../components/WhyChooseUs/WhyChooseUs";
import FAQSection from "../../components/faq/FAQSection";
import Testimonial from "../../components/testimonial/Testimonial";

const HomePage = () => {
  return (
    <>
      <WebDevelopmentServices />
      <ServiceTabs />
      <TechBanner />
      <WhyChooseCodelritly />
      <FAQSection />
      <Testimonial />
    </>
  );
};

export default HomePage;
