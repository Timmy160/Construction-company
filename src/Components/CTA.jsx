import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  const handleContactClick = () => {
    document.getElementById("contactus")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.section
      id="cta"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.4 }}
      className="py-20 px-6 md:px-12 bg-[#1B2431] text-white flex items-center justify-center text-center"
      style={{ marginTop: "-60px", minHeight: "70vh" }}
    >
      <div className="max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay: 0.3, ease: "easeOut" }}
          style={{ fontFamily: '"Inter", sans-serif' }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight"
        >
          Ready to Power Your Project? <br />
          Rent the Right Equipment Today
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleContactClick} // ← Added smooth scroll to #contactus
          style={{ fontFamily: '"M PLUS 1", sans-serif' }}
          className="h-11 px-8 rounded-md border border-white text-white font-medium 
          hover:bg-white hover:text-[#1B2431] transition-all duration-300 cursor-pointer"
        >
          Contact Us
        </motion.button>
      </div>
    </motion.section>
  );
};

export default CTA;