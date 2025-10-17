import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../assets/IMG/hero.png";

const Hero = () => {
  return (
    <section
      className="relative min-h-[520px] flex items-center justify-center bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${HeroImg})`, fontFamily: '"M PLUS 1", sans-serif' }}
    >
      {/* 🔥 Animated Overlay (fades in softly before text) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-black"
      ></motion.div>

      {/* 🔥 Animated Text and Button */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.8, // starts after overlay fades in
        }}
        className="relative z-10 text-center px-6 py-2 md:py-12 text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1,
            ease: "easeOut",
          }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-snug md:leading-tight"
        >
          Professional <br />
          Construction Services <br />
          For Your Needs
        </motion.h1>

        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.3,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="h-11 px-8 rounded-md border border-white text-white font-medium 
          bg-[#1B2431] hover:bg-white hover:text-[#1B2431] transition-all duration-300 cursor-pointer" 
        >
          See Your Services
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
