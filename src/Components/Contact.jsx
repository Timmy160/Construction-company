import React from "react";

const Contact = () => {
  return (
    <section
      id="contactus"
      className="py-20 px-6 md:px-12 bg-[rgba(255,255,255,0.95)] text-[#1A362B]"
       style={{ marginTop: '-80px' }}
    >
      <div className="max-w-2xl mx-auto bg-[rgba(255,255,255,0.95)] rounded-2xl shadow-lg p-8 md:p-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 
          style={{ fontFamily: '"M PLUS 1", sans-serif' }} // ✅ added font here
          className="text-3xl sm:text-4xl font-bold mb-4 text-[#1A362B]">
            Get In Touch With Us
          </h2>

          <p 
          style={{ fontFamily: '"Inter", sans-serif' }}
          className="text-gray-600">
            Email Address:{" "}
            <span className="font-semibold text-[#1B2431]">
              info@eliterentalhub.com
            </span>{" "}
          </p>

        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Name Fields */}
          <div 
          style={{ fontFamily: '"Inter", sans-serif' }}
          className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-[#1A362B]">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 
                bg-white focus:outline-none focus:ring-2 focus:ring-[#94BD0A] transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-[#1A362B]">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 
                bg-white focus:outline-none focus:ring-2 focus:ring-[#94BD0A] transition"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2 text-[#1A362B]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 
              bg-white focus:outline-none focus:ring-2 focus:ring-[#94BD0A] transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2 text-[#1A362B]">
              How Can We Help You?
            </label>
            <textarea
              rows={6}
              placeholder="Type your message here..."
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 
              bg-white focus:outline-none focus:ring-2 focus:ring-[#94BD0A] transition resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <div className="text-right">
            <button
           style={{ fontFamily: '"M PLUS 1", sans-serif' }} // ✅ added font here
           type="submit"
           className="h-11 px-8 rounded-xl border border-white text-white font-medium 
           bg-[#1B2431] hover:bg-white hover:text-[#1B2431] transition-all duration-300 cursor-pointer"
        >
          Send Message
        </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
