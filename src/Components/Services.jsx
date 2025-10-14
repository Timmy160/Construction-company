import React from "react";
import ServicesImg from "../assets/IMG/Services.png"


const Services = () => {
  const services = [
    "Construction of all kinds of houses",
    "Construction of Garages",
    "Construction of Fences",
    "Renovation & Remodeling",
    "Interior & Exterior Finishing",
  ];

  return (
    <section
      id="services"
      className="py-20 px-6 md:px-12 bg-white text-[#1A362B]"
       style={{ marginTop: '-60px' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <p className="text-[#000000] text-sm uppercase mb-2 tracking-wide">
              What we Offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#1A362B]">
              Our Construction Services
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We specialize in delivering quality construction and renovation
              projects across residential and commercial spaces. From small
              builds to large-scale developments, we bring your vision to life
              with precision and professionalism.
            </p>

            <div className="bg-[#FCE67A]/20 rounded-2xl aspect-video flex items-center justify-center shadow-md mb-8">
              <p className="text-gray-500 italic">
                <img src={ServicesImg} alt="" />
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div>
            {/* Highlighted Service */}
            <div className="bg-[#94BD0A]/10 border border-[#94BD0A]/40 p-6 rounded-2xl mb-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-semibold text-xl mb-3 text-[#1A362B]">
                Construction of all kinds of houses
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From modern duplexes to traditional bungalows, we handle every
                stage of construction with excellence and structural integrity.
              </p>
            </div>

            {/* Collapsible Service List */}
            <div className="space-y-3">
              {services.slice(1).map((service, index) => (
                <details
                  key={index}
                  className="group border border-[#94BD0A]/40 rounded-xl px-5 py-3 bg-[#94BD0A]/10 hover:bg-[#94BD0A]/20 transition-all"
                >
                  <summary className="font-semibold cursor-pointer list-none flex justify-between items-center text-[#1A362B]">
                    {service}
                    <span className="transition-transform group-open:rotate-180 text-[#94BD0A]">
                      ▼
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 leading-relaxed">
                    We provide high-quality {service.toLowerCase()} with durable
                    materials and expert craftsmanship.
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
