import React from "react";
import AboutImg from "../assets/IMG/About.png"

const About = () => {
  return (
    <section
      id="aboutus"
      // 🔽 Changed from py-20 → py-10 to reduce top & bottom spacing
      className="py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-background"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <p
         style={{ fontFamily: '"Poppins", sans-serif' }}
           className="text-muted-foreground text-xs sm:text-sm uppercase mb-2"
          >
            Who we are
         </p>

            <h2 style={{ fontFamily: '"M PLUS 1", sans-serif' }} // ✅ added font here
 className="text-3xl sm:text-4xl font-bold mb-6 text-[#1A362B]">
              About Our Company
            </h2>
           <div style={{ fontFamily: '"Inter", sans-serif' }}>
  <p className="text-muted-foreground text-sm sm:text-base mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
  </p>
  <p className="text-muted-foreground text-sm sm:text-base mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
  </p>
  <p className="text-muted-foreground text-sm sm:text-base mb-6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur.
  </p>
</div>

           <button
            type="submit"
          className="h-11 px-8 rounded-md border border-white text-white font-medium 
           bg-[#1B2431] hover:bg-white hover:text-[#1B2431] transition-all duration-300 cursor-pointer"
         style={{ fontFamily: '"M PLUS 1", sans-serif' }} // ✅ added font here
        >
          Get to Know us better
        </button>
          </div>

          {/* Image / placeholder */}
          <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
            <p className="text-muted-foreground">

              <img src={AboutImg} alt="" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
