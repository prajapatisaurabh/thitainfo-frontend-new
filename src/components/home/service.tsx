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
    <section id="services" className="services">
      <div>
        <div>
          {servicesData.map((service, index) => (
            <div key={index}>
              <div className="icon-box">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <h4>
                  <Link href={service.link}>{service.title}</Link>
                </h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
