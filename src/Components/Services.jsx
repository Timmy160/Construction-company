import React from "react";
import { motion } from "framer-motion";
import Loader from "../assets/IMG/Loader.jpg";

const Services = () => {
  const services = [
    "Excavators & Diggers",
    "Loaders & Bulldozers",
    "Cranes & Lifting Equipment",
    "Tractors & Agricultural Machines",
    "Compactors & Rollers",
  ];

  return (
    <section
      id="ourservices"
      className="py-20 px-6 md:px-12 bg-white text-[#1A362B]"
      style={{ marginTop: '-60px' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - slides from left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <p
              style={{ fontFamily: '"Poppins", sans-serif' }}
              className="text-[#000000] text-sm uppercase mb-2 tracking-wide"
            >
              What we Offer
            </p>

            <h2
              style={{ fontFamily: '"M PLUS 1", sans-serif' }}
              className="text-3xl sm:text-4xl font-bold mb-6 text-[#1A362B]"
            >
              Equipment Rental Services
            </h2>

            <p
              style={{ fontFamily: '"M PLUS 1", sans-serif' }}
              className="text-gray-600 mb-8 leading-relaxed"
            >
              We provide a wide range of well-maintained construction, industrial, and agricultural machinery for short-term and long-term rental. From excavators to tractors, reliable equipment, fast delivery, and flexible terms for your projects.
            </p>

            <div className="rounded-2xl aspect-video flex items-center justify-center mb-8">
              <p className="text-gray-500 italic">
                <img src={Loader} alt="" />
              </p>
            </div>
          </motion.div>

          {/* Right Side - slides from right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            {/* Highlighted Service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="bg-[#94BD0A]/10 border border-[#1B2431]/40 p-6 rounded-2xl mb-6 shadow-sm hover:shadow-md transition-all"
            >
              <h3
                style={{ fontFamily: '"Poppins", sans-serif' }}
                className="font-semibold text-xl mb-3 text-[#1A362B]"
              >
                Excavators & Diggers
              </h3>
              <p
                style={{ fontFamily: '"M PLUS 1", sans-serif' }}
                className="text-gray-600 leading-relaxed"
              >
                Powerful hydraulic excavators in various sizes, perfect for digging, trenching, demolition, and foundation work. Available daily or long-term.
              </p>
            </motion.div>

            {/* Collapsible Service List */}
            <div className="space-y-3" style={{ fontFamily: '"Inter", sans-serif' }}>
              {services.slice(1).map((service, index) => (
                <motion.details
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.15, ease: "easeOut" }}
                  className="group border border-[#1B2431]/40 rounded-xl px-5 py-3 transition-all"
                >
                  <summary className="font-semibold cursor-pointer list-none flex justify-between items-center text-[#1A362B]">
                    {service}
                    <span className="transition-transform group-open:rotate-180 text-[#1B2431]">
                      ▼
                    </span>
                  </summary>
                  <p
                    style={{ fontFamily: '"Inter", sans-serif' }}
                    className="text-gray-600 mt-3 leading-relaxed"
                  >
                    Rent top-quality {service.toLowerCase()}, regularly serviced, ready to work, with flexible rental periods and on-time delivery.
                  </p>
                </motion.details>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;