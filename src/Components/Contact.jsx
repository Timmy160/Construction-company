import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contactus"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.4 }}
      className="py-20 px-6 md:px-12 bg-[rgba(255,255,255,0.95)] text-[#1A362B]"
      style={{ marginTop: '-80px' }}
    >
      <div className="max-w-5xl mx-auto bg-[rgba(255,255,255,0.95)] rounded-2xl shadow-lg p-8 md:p-10">
        {/* Header – slides up */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay: 0.3, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2
            style={{ fontFamily: '"M PLUS 1", sans-serif' }}
            className="text-3xl sm:text-4xl font-bold mb-4 text-[#1A362B]"
          >
            Get In Touch With Us
          </h2>

          <p
            style={{ fontFamily: '"Inter", sans-serif' }}
            className="text-gray-600"
          >
            Email Address:{" "}
            <span className="font-semibold text-[#1B2431]">
              info@eliterentalhub.com
            </span>
          </p>
        </motion.div>

        {/* Grid: Email left (slides from left), Map right (slides from right) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Email contact */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="bg-white/80 border border-[#1A362B]/20 rounded-xl p-8 shadow-sm w-full max-w-md">
              <h3
                style={{ fontFamily: '"Poppins", sans-serif' }}
                className="text-xl font-semibold mb-4 text-[#1A362B]"
              >
                Reach Us by Email
              </h3>
              <p className="text-gray-700 mb-6">
                Have questions about our equipment, availability, pricing, or rental terms? Send us a message, we typically respond within 24 hours.
              </p>
              <a
                href="mailto:info@eliterentalhub.com"
                className="inline-flex items-center gap-2 bg-[#1B2431] text-white px-6 py-3 rounded-lg hover:bg-[#1A362B] transition font-medium"
              >
                Send Email Now
              </a>
            </div>
          </motion.div>

          {/* Right: US Location Map */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
            className="w-full h-[400px] rounded-xl overflow-hidden shadow-md border border-gray-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.1234567890123!2d-97.12345678901234!3d32.7890123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9f1b12345678%3A0xabcdef1234567890!2sConstruction%20Equipment%20Rental%20Texas!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elliterentalhub Equipment Rental Location - United States"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;