"use client";
import { useState } from "react";
import Link from "next/link";
import ContactInfo from "@/components/contactus/contactinfo";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Form validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields");
      return; // stop the function if validation fails
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Send contact data to the backend
      //   await axios.post(
      //     `${API_URL}/contact/send`,
      //     {
      //       name: name.trim(),
      //       email: email.trim(),
      //       message: message.trim(),
      //       source: "Thita Website",
      //     },
      //     {
      //       withCredentials: true,
      //     }
      //   );
      // Reset form data and show success message
      setName("");
      setEmail("");
      setMessage("");
      setLoading(false);
      //toast.success("Mail/Message sent successfully");
    } catch (error) {
      setLoading(false);
      setError("Error sending message" + error);
      //toast.error("Error sending message" + error.message);
    }
  };

  return (
    <main id="main" className="bg-gray-50">
      {/* Breadcrumbs Section */}
      <section id="breadcrumbs" className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-800">Contact Us</li>
          </ol>
        </div>
      </section>

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
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Message */}
                {error && (
                  <div className="text-red-500 text-sm bg-red-100 p-3 rounded">
                    {error}
                  </div>
                )}

                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <textarea
                    placeholder="Message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary h-32"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition ${
                      loading ? "cursor-not-allowed opacity-50" : ""
                    }`}
                  >
                    {loading ? "Loading..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
