import CircularLogos from "./CircularLogos";

const ServicesSection = () => {
  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-10 md:px-20 bg-gradient-to-br from-white to-blue-50">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Web Development <br /> <span className="text-blue-600">Services</span>
        </h1>
        <p className="text-gray-600 max-w-md">
          At Codefinity, we specialize in crafting high-performance, scalable,
          and responsive websites tailored to your business goals. Whether you
          need a simple website or a complex web application, we have the
          expertise to deliver outstanding results.
        </p>
      </div>

      {/* Right Section */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <CircularLogos />
      </div>
    </section>
  );
};

export default ServicesSection;
