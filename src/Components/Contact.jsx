import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contactus"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2 }}
      className="py-20 px-6 md:px-12 bg-white dark:bg-[#0f1f1a] text-[#1A362B] dark:text-white"
    >
      <div className="max-w-6xl mx-auto bg-white dark:bg-[#132821] rounded-3xl shadow-xl p-8 md:p-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In Touch With Us
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            Email Address:{" "}
            <span className="font-semibold">
              info@eliterentalhub.com
            </span>
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left - Email */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center md:justify-start"
          >
            <div className="bg-gray-50 dark:bg-[#1b362d] border border-[#1A362B]/10 dark:border-white/10 rounded-2xl p-8 shadow-md w-full max-w-md">
              <h3 className="text-xl font-semibold mb-4">
                Reach Us by Email
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Have questions about equipment availability, pricing, or rental terms?
                Send us a message. we typically respond within 24 hours.
              </p>

              <a
                href="mailto:info@eliterentalhub.com"
                className="inline-flex items-center justify-center bg-[#1A362B] hover:bg-[#142a21] text-white px-6 py-3 rounded-xl transition duration-300 font-medium w-full"
              >
                Send Email
              </a>
            </div>
          </motion.div>

          {/* Right - Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/10">

              {/* Responsive Map */}
              <div className="w-full aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps?q=138+E+50th+St+%23Tr61,+New+York,+NY+10022&output=embed"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eliterentalhub Location - 138 E 50th St #Tr61, New York, NY 10022"
                />
              </div>
            </div>

            {/* Location Text */}
            <p className="mt-6 text-center text-gray-700 dark:text-gray-300 text-base font-medium">
              138 E 50th St #Tr61, New York, NY 10022
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;