import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Rentallogo from "../assets/IMG/Rentallogo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-12 lg:px-24"
      style={{ fontFamily: '"M PLUS 1", sans-serif' }}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 md:py-6">
        {/* Logo – bigger entrance + bounce */}
        <motion.a
          href="/"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            type: "spring",
            stiffness: 180,
            damping: 12,
          }}
          whileHover={{ scale: 1.08, rotate: 3 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 rounded-xl"
          aria-label="Elliterentalhub Home"
        >
          <img
            src={Rentallogo}
            alt="Elliterentalhub – Reliable Construction & Equipment Rental Services"
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain rounded-xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)] border border-white/10"
            loading="eager"
          />
        </motion.a>

        {/* Desktop Navigation – staggered fade & slide */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {["About Us", "Our Services", "Gallery", "Contact Us"].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase().replace(/\s/g, "")}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.6 + i * 0.12,
                ease: "easeOut",
              }}
              whileHover={{ y: -4, color: "#FFD700", scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="text-white hover:text-[#FFD700] font-medium tracking-wide transition-colors duration-300 text-base lg:text-lg"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Hamburger – animated lines */}
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

      {/* Mobile Menu Overlay – slides down + fade */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-gray-900/95 backdrop-blur-md z-40 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-12 text-2xl md:text-3xl font-medium">
              {["About Us", "Our Services", "Gallery", "Contact Us"].map((label, i) => (
                <motion.a
                  key={i}
                  href={`#${label.toLowerCase().replace(/\s/g, "")}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  whileHover={{ scale: 1.08, color: "#FFD700" }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white/90 hover:text-[#FFD700] transition-colors duration-300 px-12 py-5 rounded-2xl hover:bg-white/5 w-full max-w-xs text-center"
                >
                  {label}
                </motion.a>
              ))}
            </div>

            {/* Large visible close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white text-7xl font-thin hover:text-[#FFD700] transition-colors duration-300 focus:outline-none"
              aria-label="Close menu"
            >
              ×
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;