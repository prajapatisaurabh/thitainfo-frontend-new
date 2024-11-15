import Link from "next/link";

const servicesData = [
  {
    icon: "bx bxl-dribbble",
    title: "Website Design",
    description:
      "Interact with your customers with a great looking website that is easy-to-use and simple to edit with our website design services.",
    link: "/service",
  },
  {
    icon: "bx bx-file",
    title: "Mobile App Development",
    description:
      "We are developing mobile experiences that serve the unique needs of your target audience by mobile application development.",
    link: "/service",
  },

  {
    icon: "bx bx-slideshow",
    title: "Digital Marketing",
    description:
      "We provide our clients with a strong creative digital marketing presence, through strategy, positioning and conversion.",
    link: "/service",
  },
  {
    icon: "bx bx-world",
    title: "Social Media Marketing",
    description:
      "By using the power of social media interact with your customers in a way that would never before have been possible with creative social media marketing services.",
    link: "/service",
  },
  {
    icon: "bx bx-arch",
    title: "Graphics & Design",
    description:
      "Coming soon ... Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur",
    link: "/service",
  },
  {
    icon: "bx bx-tachometer",
    title: "Software Development",
    description:
      "Our custom software development services to help your business run more efficiently. We measure, analyse and iterate to ensure your systems remain relevant and effective for users.",
    link: "/service",
  },
];

const ServiceSection = () => {
  return (
    <section id="services" className="services bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center transition transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="icon-box flex flex-col items-center">
                <div className="icon text-primary text-4xl mb-4">
                  <i className={service.icon}></i>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">
                  <Link
                    href={service.link}
                    className="hover:text-primary transition"
                  >
                    {service.title}
                  </Link>
                </h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
