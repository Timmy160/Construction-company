import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Rentallogo from "../assets/IMG/Rentallogo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="absolute top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-12 lg:px-24"
      style={{ fontFamily: '"M PLUS 1", sans-serif' }}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 md:py-6">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center transition-all duration-300 hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#FFD700] rounded-md"
          aria-label="Elliterentalhub - Return to Home"
        >
          <img
            src={Rentallogo}
            alt="Elliterentalhub – Reliable Construction & Equipment Rental Services"
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain rounded-xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
            loading="eager"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {["About Us", "Our Services", "Gallery", "Contact Us"].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase().replace(/\s/g, "")}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="text-white hover:text-[#FFD700] font-medium tracking-wide transition-colors duration-300 text-base lg:text-lg"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Hamburger – transforms to single centered × */}
        <button
          className="md:hidden text-white focus:outline-none z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            className="w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 },
              }}
              transition={{ duration: 0.4 }}
              className="block w-full h-0.5 bg-white rounded-full origin-center"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
              className="block w-full h-0.5 bg-white rounded-full"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 },
              }}
              transition={{ duration: 0.4 }}
              className="block w-full h-0.5 bg-white rounded-full origin-center"
            />
          </motion.div>
        </button>
      </nav>

      {/* Mobile Menu – Uber-style slide from right, dark blur */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xl z-40 flex justify-end"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="w-[85%] max-w-sm bg-[#0F1419]/95 backdrop-blur-lg h-full overflow-y-auto shadow-2xl"
            >
              {/* Links – large, centered, spaced */}
              <div className="flex flex-col items-center gap-10 px-6 py-20 text-xl font-medium">
                {["About Us", "Our Services", "Gallery", "Contact Us"].map((label, i) => (
                  <motion.a
                    key={i}
                    href={`#${label.toLowerCase().replace(/\s/g, "")}`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, color: "#f9d448" }}
                    whileTap={{ scale: 0.98 }}
                    className="text-white hover:text-[#94BD0A] transition-colors duration-300 w-full text-center py-5 border-b border-gray-700/50 last:border-none"
                  >
                    {label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;