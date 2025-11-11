import FAQSection from "./components/faq/FAQSection";
import WebDevelopmentServices from "./components/hero/ServicesSection";
import ServiceTabs from "./components/services/ServicesTabs";
import { TechBanner } from "./components/technolgys/Technolgys";
import ClientTestimonials from "./components/testimonial/Testimonial";
import WhyChooseCodelritly from "./components/WhyChooseUs/WhyChooseUs";

function App() {
  return (
    <div>
      <WebDevelopmentServices />
      <ServiceTabs />
      <TechBanner />
      <WhyChooseCodelritly />
      <FAQSection />
      <ClientTestimonials />
    </div>
  );
}

export default App;
