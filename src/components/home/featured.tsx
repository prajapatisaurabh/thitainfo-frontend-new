import Link from "next/link";

const Featured = () => {
  const items = [
    {
      icon: "🌟", // Replace with actual icon or icon class
      title: "Create",
      link: "/create",
      heading: "Awesome Experiences",
      description:
        "We create awesome experiences by designing and developing high-performing websites. Combining modern design, UX thinking, and deep research, we create exceptional brands that differentiate you and help grow your business.",
    },
    {
      icon: "🌐",
      title: "Connect",
      link: "/connect",
      heading: "You To Your Customers",
      description:
        "We help you connect with your audience through effective social media campaigns, user-centric content, custom newsletters, paid marketing, and engagement on popular networking platforms.",
    },
    {
      icon: "📣",
      title: "Communicate",
      link: "/communicate",
      heading: "Your Brand Story",
      description:
        "With proven digital marketing strategies, we communicate your brand story to your audience. We create engaging content, videos, infographics, and long-form content to attract, convert, and delight your audience.",
    },
  ];

  return (
    <section id="featured" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl text-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <h4 className="text-lg text-gray-700 font-medium mt-2">
                  {item.heading}
                </h4>
                <p className="text-gray-600 mt-4">{item.description}</p>
                <p className="mt-4">
                  <Link
                    href={item.link}
                    className="text-primary hover:underline"
                  >
                    Read More
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
