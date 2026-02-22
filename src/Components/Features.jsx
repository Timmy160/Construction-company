import React from "react";
import { motion } from "framer-motion";
import { Hammer, DollarSign, Package, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Hammer,
      title: "Wide Range of Equipment",
      description:
        "From excavators and loaders to cranes and tractors, we have the right machine for every job.",
    },
    {
      icon: DollarSign,
      title: "Competitive Rental Rates",
      description:
        "Affordable daily, weekly, and long-term pricing with no hidden fees, best value in the industry.",
    },
    {
      icon: Package,
      title: "Well-Maintained Fleet",
      description:
        "All machines are regularly serviced, inspected, and ready to work, minimal downtime guaranteed.",
    },
    {
      icon: Award,
      title: "Reliable & Safe Service",
      description:
        "Fast delivery/pickup, 24/7 support, full insurance options, and strict safety standards.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 flex justify-center"
      style={{ marginTop: '-60px' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2 }}
        className="w-full max-w-7xl bg-[#f9d448] rounded-3xl shadow-lg p-10 sm:p-12 md:p-16 text-[#1A362B]"
      >
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            style={{ fontFamily: '"M PLUS 1", sans-serif' }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Why Rent With Elliterentalhub
          </motion.h2>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.3 + index * 0.15, // staggered entrance
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center bg-white/70 border border-[#1A362B]/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:shadow-lg shadow-md"
              >
                <Icon className="w-12 h-12 mb-4 text-[#1A362B]" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-[#1A362B]/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Features;