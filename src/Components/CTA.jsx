import React from "react";

const CTA = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#1B2431] text-white"
     style={{ marginTop: '-60px' }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Let's Build Your Vision Into Reality
        </h2>
        <button
          className="h-11 px-8 rounded-md border border-white text-white font-medium 
          hover:bg-white hover:text-[#1B2431] transition-all duration-300"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CTA;
