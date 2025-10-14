import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Galeryoneimg from "../assets/IMG/galery(1).png";
import Galerytwoimg from "../assets/IMG/galery(2).png";
import Galerythreeimg from "../assets/IMG/galery(3).png";
import Galeryfourimg from "../assets/IMG/galery(4).png";
import Galeryfiveimg from "../assets/IMG/galery(5).png";
import Galerysiximg from "../assets/IMG/galery(6).png";

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
    Galeryoneimg,
    Galerytwoimg,
    Galerythreeimg,
    Galeryfourimg,
    Galeryfiveimg,  
    Galerysiximg,
  ];

  return (
    <section
      id="gallery"
      className="py-20 px-6 md:px-12 bg-white text-[#1A362B]"
      style={{ marginTop: "-60px" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-10">
          <div className="text-center sm:text-left">
            <p className="text-[#000000] text-sm uppercase mb-2 tracking-wide">
              Our Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">Gallery</h2>
          </div>

          {/* Controls (visible only on mobile) */}
          <div className="flex gap-3 sm:hidden">
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
          </div>
        </div>

        {/* Gallery Grid */}
        <div
          ref={scrollRef}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto sm:overflow-visible scroll-smooth no-scrollbar"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-[80%] sm:min-w-0 bg-[#FCE67A]/10 border border-[#94BD0A]/30 rounded-xl aspect-video overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
