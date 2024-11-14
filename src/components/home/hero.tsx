"use client";
import { useState, useEffect } from "react";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["we are thitacian", "we are thitacian", "we are thitacian"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section
      id="hero"
      style={{ backgroundColor: "#f4f4f4", padding: "60px 0" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <div style={{ flex: "1 1 50%", padding: "20px" }}>
            <div>
              <span
                style={{ fontSize: "24px", color: "#888", display: "block" }}
              >
                Welcome to ThitaInfo
              </span>
              <h1>
                Hi! <span style={{ color: "#007bff" }}>{text}</span>
              </h1>
              <p style={{ lineHeight: "1.6", color: "#555" }}>
                Thita is a product-based company that specializes in web design,
                mobile application development, and ERP application development.
                Along with this, your company also provides tutorials on Java
                and technical news to keep up with the latest trends in the
                industry. Your blog section serves as a platform to share your
                expertise and knowledge with the wider community. With a focus
                on delivering cost-effective solutions and helping clients
                connect with their target audience, your company strives to
                thrive in the competitive digital world.
              </p>
              <button
                onClick={() => alert("/navigae-contact")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Let’s Connect <span style={{ marginLeft: "8px" }}>→</span>
              </button>
            </div>
          </div>
          <div
            style={{ flex: "1 1 50%", padding: "20px", textAlign: "center" }}
          >
            <img
              src={`headerImg`}
              alt="Header Img"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
