import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg md:text-2xl mb-6">
        I am a passionate developer creating modern web experiences.
      </p>
      <a
        href="#about"
        className="bg-white text-blue-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
      >
        Learn More
      </a>
    </section>
  );
};

export default Hero;
