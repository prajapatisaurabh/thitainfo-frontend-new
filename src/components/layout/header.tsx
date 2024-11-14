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
    // Redirect is penfing
    alert("redirect to " + value);
    // navigate("/" + value);
  };

  return (
    <div>
      <div>
        <div onClick={() => onUpdateActiveLink("")}>LOGO Here</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <a href="#home" onClick={() => onUpdateActiveLink("home")}>
            Home
          </a>
          <a href="#about" onClick={() => onUpdateActiveLink("about")}>
            About
          </a>
          <a href="#service" onClick={() => onUpdateActiveLink("service")}>
            Service
          </a>
          <a href="#team" onClick={() => onUpdateActiveLink("team")}>
            Team
          </a>
          <div style={{ position: "relative", display: "inline-block" }}>
            <button>Learn</button>
            <div>
              <a href="#blog" onClick={() => onUpdateActiveLink("blog")}>
                Blog
              </a>
              <a href="#code" onClick={() => onUpdateActiveLink("code")}>
                Code With Me
              </a>
              <a
                href="#interview"
                onClick={() => onUpdateActiveLink("interview")}
              >
                Interview Preparation
              </a>
            </div>
          </div>
          <a href="#contact" onClick={() => onUpdateActiveLink("contact")}>
            Contact Us
          </a>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
