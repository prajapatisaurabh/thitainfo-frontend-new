import Link from "next/link";

const Featured = () => {
  const items = [
    {
      icon: "ICON",
      title: "Create",
      link: "",
      heading: "Awesome Experiences",
      description:
        "We create awesome experiences by designing and developing highly performing websites. Combining the modern design, UX thinking and deep research, we create exceptional brands that differentiate you in the industry and help to grow your business.",
    },
    {
      icon: "ICON",
      title: "Connect",
      link: "",
      heading: "You To Your Customers",
      description:
        "We help you to connect your audience through effective social media campaigns, user centric content, custom newsletters, paid marketing and contributing on popular networking websites. We help you to nurture your leads into happy customers.",
    },
    {
      icon: "ICON",
      title: "Communicate",
      link: "",
      heading: "Your Brand Story",
      description:
        "With the proven digital marketing strategies, we communicate your brand story to your audience. We create engaging content, videos, infographics, long-form content, such as e-books/white papers to attract, convert and delight your audience.",
    },
  ];

  return (
    <section id="featured" className="featured">
      <div>
        <div>
          {items.map((item, index) => (
            <div key={index}>
              <div className="mb-4">
                <div className="card-icon">{item.icon}</div>
                <div>
                  <p>{item.title}</p>
                  <p>{item.heading}</p>
                  <p>{item.description}</p>
                  <p>
                    <Link href={item.link}>Read More</Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
