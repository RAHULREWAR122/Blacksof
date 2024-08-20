import React from "react";

const Hero = () => {
  return (
    <section
      className="text-white py-20 text-center"
      style={{
        backgroundImage: "url(/Hero_section.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "110vh",
        objectFit: "cover",
      }}
    >
      <div className="container mx-auto  md:w-[80%] w-[95%] px-4">
        <h2 className="text-sm uppercase mb-4 font-[inter] font-[400px] md:text-[24px] text-[14px]">
          Smart Lighting Solutions
        </h2>
        <h1
          className="text-[30px]  md:text-[48px] font-[inter] line-clamp-[72px] font-[400] tracking-tight  mb-8 relative inline-block"
          style={{
            backgroundImage: "url(/bgss.gif)",
            backgroundSize: "cover",
            backgroundClip: "text",
            textFillColor: "transparent",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Bringing A New Perspective To Street Lights And The Cities Of
          Tomorrow.
        </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
          Login
        </button>
      </div>
    </section>
  );
};

export default Hero;
