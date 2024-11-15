"use client";

import { useState, useEffect } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
    alert("Redirecting to " + value);
    // Uncomment for navigation functionality
    // navigate("/" + value);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div
          onClick={() => onUpdateActiveLink("")}
          className="text-2xl font-bold text-white cursor-pointer"
        >
          LOGO Here
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6 text-white">
          <a
            href="#home"
            onClick={() => onUpdateActiveLink("home")}
            className={`${
              activeLink === "home" ? "text-primary font-semibold" : ""
            } hover:text-primary transition`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => onUpdateActiveLink("about")}
            className={`${
              activeLink === "about" ? "text-primary font-semibold" : ""
            } hover:text-primary transition`}
          >
            About
          </a>
          <a
            href="#service"
            onClick={() => onUpdateActiveLink("service")}
            className={`${
              activeLink === "service" ? "text-primary font-semibold" : ""
            } hover:text-primary transition`}
          >
            Service
          </a>
          <a
            href="#team"
            onClick={() => onUpdateActiveLink("team")}
            className={`${
              activeLink === "team" ? "text-primary font-semibold" : ""
            } hover:text-primary transition`}
          >
            Team
          </a>

          {/* Dropdown Menu */}
          <div className="relative group">
            <button className="hover:text-primary transition">Learn</button>
            <div className="absolute left-0 hidden bg-gray-900 rounded-md shadow-lg group-hover:block mt-2">
              <a
                href="#blog"
                onClick={() => onUpdateActiveLink("blog")}
                className="block px-4 py-2 text-white hover:text-primary"
              >
                Blog
              </a>
              <a
                href="#code"
                onClick={() => onUpdateActiveLink("code")}
                className="block px-4 py-2 text-white hover:text-primary"
              >
                Code With Me
              </a>
              <a
                href="#interview"
                onClick={() => onUpdateActiveLink("interview")}
                className="block px-4 py-2 text-white hover:text-primary"
              >
                Interview Preparation
              </a>
            </div>
          </div>

          <a
            href="#contact"
            onClick={() => onUpdateActiveLink("contact")}
            className={`${
              activeLink === "contact" ? "text-primary font-semibold" : ""
            } hover:text-primary transition`}
          >
            Contact Us
          </a>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-hover-color transition">
            Login
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
