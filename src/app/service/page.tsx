import React from "react";
import Link from "next/link";

import ServiceSection from "@/components/home/service";

const Services = () => (
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
          <li className="text-gray-800 font-semibold">Services</li>
        </ol>
      </div>
    </section>

    {/* Service Section */}
    <section id="services" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <ServiceSection />
      </div>
    </section>
  </main>
);

export default Services;
