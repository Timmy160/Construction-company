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
        {/* Logo – polished & professional look */}
        <a
          href="/"
          className="flex items-center transition-all duration-300 hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#FFD700] rounded-md"
          aria-label="Elliterentalhub - Return to Home"
        >
          <img
            src={Rentallogo}
            alt="Elliterentalhub – Reliable Construction & Equipment Rental Services"
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain rounded-xl  drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <span className="text-4xl font-light leading-none">×</span>
          ) : (
            <span className="text-3xl leading-none">☰</span>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 bg-[#1A362B]/95 backdrop-blur-sm text-white flex flex-col items-center justify-center gap-12 text-2xl font-semibold z-40"
          >
            {["About Us", "Our Services", "Gallery", "Contact Us"].map((label, i) => (
              <motion.a
                key={i}
                href={`#${label.toLowerCase().replace(/\s/g, "")}`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="hover:text-[#FFD700] transition-colors duration-300 px-6 py-3 rounded-lg hover:bg-white/10"
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;