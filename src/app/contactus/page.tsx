import ContactInfo from "@/components/contactus/contactinfo";
import Breadcrumbs from "@/components/layout/breadcrumb";
import ContactUsForm from "@/components/contactus/contactus-form";

const Contact = () => {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Contact Us" }];
  return (
    <main id="main" className="bg-gray-50">
      {/* Breadcrumbs Section */}
      <Breadcrumbs paths={breadcrumbs} />

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start lg:space-x-12">
            {/* Contact Info */}
            <div className="flex-1 mb-8 lg:mb-0">
              <ContactInfo />
            </div>

            {/* Contact Form */}
            <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                We Want to Hear From You
              </h2>
              <ContactUsForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
