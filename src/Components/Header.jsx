import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="absolute top-2 left-0 w-full text-black z-50 px-4 sm:px-6 md:px-16 lg:px-24"
      style={{ fontFamily: '"M PLUS 1", sans-serif' }}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 md:py-6">
        {/* Logo */}
        <div className="text-xl cursor-pointer md:text-2xl font-bold text-white">
          Company Name
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          {["About Us", "Our Services", "Gallery", "Contact Us"].map(
            (item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-white hover:text-[#1B2431] transition-colors"
              >
                {item}
              </motion.a>
            )
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-black focus:outline-none z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-3xl">&#10005;</span> // Close (X)
          ) : (
            <span className="text-3xl">&#9776;</span> // Hamburger
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed inset-0 bg-white text-black flex flex-col items-start justify-start gap-8 text-m font-semibold px-8 pt-24 z-40"
          >
            {["About Us", "Our Services", "Gallery", "Contact Us"].map(
              (label, i) => (
                <div
                  key={i}
                  className="w-full flex items-center justify-between border-b border-gray-100 pb-2"
                >
                  <a
                    href={`#${label.toLowerCase().replace(/\s/g, "")}`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-gray-700 transition-colors"
                  >
                    {label}
                  </a>

                  {/* Small dropdown arrow for About Us */}
                 </div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
