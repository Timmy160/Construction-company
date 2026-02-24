import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.4 }}
      className="py-12 px-6 md:px-12 bg-[#1B2431] text-white"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info – slides up first */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            <h3 
              style={{ fontFamily: '"M PLUS 1", sans-serif' }}
              className="text-xl font-bold mb-2">Elliterentalhub</h3>
            <p style={{ fontFamily: '"M PLUS 1", sans-serif' }}
              className="text-sm text-gray-300">
              Your Trusted Partner for Reliable Construction Equipment Rental
            </p>
          </motion.div>

          {/* Navigation Links – slides up with delay */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          >
            <ul 
              style={{ fontFamily: '"M PLUS 1", sans-serif' }}
              className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="#aboutus"
                  className="hover:text-[#94BD0A] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#ourservices"
                  className="hover:text-[#94BD0A] transition-colors"
                >
                  Rental Services
                </a>
              </li>
              <li>
                <a
                  href="#machinery"
                  className="hover:text-[#94BD0A] transition-colors"
                >
                  Our Fleet Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contactus"
                  className="hover:text-[#94BD0A] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media – slides up last */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          >
            <h4 className="font-semibold mb-4 text-sm text-gray-300">Follow Us</h4>
            <div className="flex gap-4 text-sm text-gray-300">
              <a href="https://www.instagram.com/eliterentalhub?igsh=MXMxM3Noa2o1dmJyaQ==" className="hover:text-[#94BD0A] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider and Copyright – fades in last */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay: 0.8, ease: "easeOut" }}
          className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400"
        >
          © {new Date().getFullYear()} Eliterentalhub – Construction Equipment Rental. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;