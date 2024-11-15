import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => (
  <main id="main">
    {/* Breadcrumbs Section */}
    <section id="breadcrumbs" className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <ol className="flex space-x-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-800 font-semibold">About Us</li>
        </ol>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div>
            <Image
              src="assets/img/about.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              We create software solutions using new technologies for both small
              businesses and larger companies.
            </h3>
            <p className="text-gray-600 mb-6">
              We strive to assist companies in embracing new technologies and
              simplifying complex problems that can arise during technological
              advancements. We specialize in AI/ML, Web Development, IoT, cloud,
              and mobile technologies.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start space-x-3">
                <div className="text-primary font-bold">✔</div>
                <p className="text-gray-600">
                  Our mission is to help our clients achieve significant and
                  lasting performance improvements, while also building a great
                  company that attracts, develops, and retains exceptional
                  people.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="text-primary font-bold">✔</div>
                <p className="text-gray-600">
                  We are a diverse global family that prioritizes doing the
                  right thing with precision, pace, and passion. We trust and
                  enjoy winning together, taking ownership, and shaping our
                  future while creating sustainable growth for all.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="text-primary font-bold">✔</div>
                <p className="text-gray-600">
                  Our vision guides every aspect of our business and outlines
                  what we need to accomplish to achieve sustainable,
                  high-quality growth.
                </p>
              </li>
            </ul>
            <p className="text-gray-600">
              <Link href="/" className="text-primary font-bold hover:underline">
                ThitaInfo
              </Link>
              is a dedicated team with a passion for developing and delivering
              enterprise-grade applications. With over 2+ years of experience,
              we have developed applications that are now being used by millions
              of consumers worldwide. We pride ourselves on understanding how to
              build successful software products that not only meet our
              clients&apos; needs but also exceed their expectations. Our
              team&apos;s expertise and commitment to quality enable us to
              deliver reliable and scalable solutions to businesses of all
              sizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default About;
