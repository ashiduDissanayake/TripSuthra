import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="relative w-full h-[92vh]">
        <img
          src="pexels-harsha-samaranayake-303340503-13391116-1.png"
          alt="Vacation Train"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h1
            style={{
              fontFamily: "'Expletus Sans', sans-serif",
              fontSize: "4rem",
              fontWeight: "bold",
            }}
          >
            Travel further. Travel longer. Travel deeper.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
