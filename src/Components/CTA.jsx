import React from "react";

const CTA = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#1B2431] text-white"
     style={{ marginTop: '-60px' }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 
        stye={{ fontFamily: '"Inter", sans-serif' }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Let's Build Your Vision Into Reality
        </h2>

        <button
          style={{ fontFamily: '"M PLUS 1", sans-serif' }} // ✅ added font here
          className="h-11 px-8 rounded-md border border-white text-white font-medium 
          hover:bg-white hover:text-[#1B2431] transition-all duration-300 cursor-pointer"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CTA;
