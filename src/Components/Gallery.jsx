import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ForkLift from "../assets/IMG/ForkLift.jpg";
import Generator from "../assets/IMG/Generator.jpg";
import Sprayer from "../assets/IMG/Sprayer.jpg";
import ScissorLift from "../assets/IMG/ScissorLift.jpg";
import WeldingMachine from "../assets/IMG/WeldingMachine.jpg";
import HayRake from "../assets/IMG/HayRake.jpg";

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const images = [
    ForkLift,
    ScissorLift,
    Sprayer,
    WeldingMachine,
    HayRake,  
    Generator,
  ];

  return (
    <section
      id="gallery"
      className="py-20 px-6 md:px-12 bg-white text-[#1A362B]"
      style={{ marginTop: "-60px" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.4 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header – slides up */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-10"
        >
          <div className="text-center sm:text-left">
            <p 
              style={{ fontFamily: '"Poppins", sans-serif' }}
              className="text-[#000000] text-sm uppercase mb-2 tracking-wide"
            >
              Our Fleet
            </p>
            <h2 
              style={{ fontFamily: '"M PLUS 1", sans-serif' }}
              className="text-3xl sm:text-4xl font-bold"
            >
              Gallery of Available Equipment
            </h2>
          </div>

          {/* Mobile Controls – fade in */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex gap-3 sm:hidden"
          >
            <button
              onClick={() => scroll("left")}
              className="p-2 border border-[#94BD0A] rounded-full hover:bg-[#94BD0A] hover:text-white transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 border border-[#94BD0A] rounded-full hover:bg-[#94BD0A] hover:text-white transition-all"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Gallery Grid – cards stagger in */}
        <div
          ref={scrollRef}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto sm:overflow-visible scroll-smooth no-scrollbar"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: 0.3 + index * 0.12, // staggered entrance
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.02 }}
              className="min-w-[80%] sm:min-w-0 bg-[#FCE67A]/10 border border-[#94BD0A]/30 rounded-xl aspect-video overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={img}
                alt={`Elliterentalhub rental equipment - machine ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;