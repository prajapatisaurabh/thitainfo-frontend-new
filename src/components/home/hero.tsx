"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 2000;
  const router = useRouter();

  // Moving toRotate inside the useCallback function
  const tick = useCallback(() => {
    const toRotate = ["Web Developer", "Full Stack Developer", "React Expert"];

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
  }, [isDeleting, loopNum, period, text]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section id="hero" className="bg-gray-900 text-white py-20" key={index}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between px-6">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <span className="text-lg font-semibold text-primary">
            Welcome to ThitaInfo
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold">
            Hi! <span className="text-primary">{text}</span>
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Thita is a product-based company that specializes in web design,
            mobile application development, and ERP application development. We
            provide tutorials on Java and technical news to keep up with the
            latest trends. Our blog section serves as a platform to share
            expertise with the community. We focus on delivering cost-effective
            solutions to help clients connect with their audience.
          </p>
          <button
            onClick={() => router.push("/contactus")}
            className="bg-primary text-white px-6 py-3 mt-4 rounded-lg hover:bg-hover-color transition duration-300"
          >
            Let’s Connect <span>→</span>
          </button>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <Image
            src="/img/about/about.jpg"
            alt="Header Image"
            className="w-full rounded-lg shadow-lg"
            width={550}
            height={550}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
