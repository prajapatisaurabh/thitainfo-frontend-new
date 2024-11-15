const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:space-x-12">
        {/* Image Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-600 text-lg">Image Here</span>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="lg:w-1/2 text-gray-700 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">Our Expertise</h1>
          <p>
            Our expertise is to formulate personalized solutions that will give
            your business the leverage it needs to excel. As a top software
            development company, we specialize in mobile app development, SEO,
            and graphics.
          </p>
          <p>
            Our mobile app development services are among the best in the
            industry. We build smart, interactive, cross-platform apps tailored
            to your business needs.
          </p>
          <p>
            SEO keeps businesses visible and on top. We provide strategic SEO
            solutions to keep businesses distinguished and noticeable.
          </p>
          <p>
            Our mobile app development services are globally recognized. We
            deliver smart, interactive, cross-platform apps that drive business
            growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
