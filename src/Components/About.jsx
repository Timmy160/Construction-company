import React, { useState } from "react";

const About = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <section
      id="aboutus"
      className="py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-background"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <p
            style={{ fontFamily: '"Poppins", sans-serif' }}
            className="text-muted-foreground text-xs sm:text-sm uppercase mb-2 text-center md:text-left"
          >
            Who we are
          </p>

          <h2
            style={{ fontFamily: '"M PLUS 1", sans-serif' }}
            className="text-3xl sm:text-4xl font-bold mb-6 text-[#1A362B] text-center md:text-left"
          >
            About Our Company
          </h2>

          <div style={{ fontFamily: '"Inter", sans-serif' }} className="text-muted-foreground text-sm sm:text-base">
            {/* Short Overview */}
            <p className="mb-4">
              Elliterentalhub provides reliable, high-quality construction machinery rental services. Our well-maintained fleet supports construction, infrastructure, industrial, and agricultural projects, helping clients complete work on time and on budget.
            </p>

            {/* Mission & Vision */}
            <p className="mb-4">
              <strong>Our Mission:</strong> Deliver dependable equipment and exceptional service so every project succeeds safely and efficiently.
            </p>
            <p className="mb-6">
              <strong>Our Vision:</strong> Become the trusted leader in machinery rental through innovation and reliability.
            </p>

            {/* Collapsible Details */}
            <button
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
              className="text-[#1A362B] font-medium flex items-center mb-4 hover:underline"
            >
              {isDetailsOpen ? "Hide" : "Show"} more details
              <span className="ml-2">{isDetailsOpen ? "▲" : "▼"}</span>
            </button>

            {isDetailsOpen && (
              <div className="mb-8 space-y-4">
                <div>
                  <h4 className="font-semibold text-[#1A362B] mb-1">
                    Experience & Commitment
                  </h4>
                  <p>
                    With over 8 years in the industry, we maintain a diverse fleet with strict safety protocols, regular servicing, operator support, fast delivery, 24/7 assistance, and transparent pricing.
                  </p>
                </div>
              </div>
            )}

            {/* CEO Profile - with text placeholder instead of image */}
            <h3 className="text-lg font-semibold text-[#1A362B] mt-8 mb-4">
              Meet Our CEO
            </h3>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* CEO Photo Placeholder */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm font-medium text-center shadow-md">
                  CEO<br />Photo
                </div>
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-base text-[#1A362B]">
                  CEO Name
                </p>
                <p className="text-sm text-muted-foreground">
                  CEO & Founder
                </p>
                <p className="mb-3">
                  CEO Name has extensive experience in construction management, equipment operations, and leadership. Passionate about reliable solutions, he founded Elliterentalhub to help businesses build better and safer.
                </p>
                <blockquote className="italic text-sm border-l-4 border-[#1A362B] pl-4">
                  “We are committed to providing reliable machinery and excellent service to every client—because when our partners succeed, projects succeed.”
                </blockquote>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center md:text-left">
            <button
              type="button"
              className="h-11 px-8 rounded-md border border-white text-white font-medium bg-[#1B2431] hover:bg-white hover:text-[#1B2431] transition-all duration-300 cursor-pointer"
              style={{ fontFamily: '"M PLUS 1", sans-serif' }}
            >
              Get to Know Us Better
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;