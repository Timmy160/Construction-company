import React from "react";
import { Hammer, DollarSign, Package, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Hammer,
      title: "The Best Service",
      description:
        "We deliver exceptional craftsmanship and attention to every detail.",
    },
    {
      icon: DollarSign,
      title: "The Best Price",
      description:
        "Get premium quality services at unbeatable prices, guaranteed.",
    },
    {
      icon: Package,
      title: "The Best Materials",
      description:
        "We use durable and trusted materials that ensure long-lasting results.",
    },
    {
      icon: Award,
      title: "The Best Conditions",
      description:
        "We ensure transparency, safety, and excellence in every project.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 flex justify-center"
       style={{ marginTop: '-60px' }}
    >
      <div className="w-full max-w-7xl bg-[#f9d448] rounded-3xl shadow-lg p-10 sm:p-12 md:p-16 text-[#1A362B]">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            We Build with Passion
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white/70 border border-[#1A362B]/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:scale-105 shadow-md"
              >
                <Icon className="w-12 h-12 mb-4 text-[#1A362B]" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-[#1A362B]/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
