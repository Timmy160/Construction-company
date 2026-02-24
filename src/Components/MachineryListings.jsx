import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// All your image imports (kept exactly as you have them)
import WheelLoader from "../assets/IMG/Wheel.jpg";
import Hydraulic from "../assets/IMG/Hydraulic.jpg";
import ForkLift from "../assets/IMG/ForkLift.jpg";
import Tractor from "../assets/IMG/Tractor.jpg";
import Dozer from "../assets/IMG/Dozer.jpg";
import Grader from "../assets/IMG/Grader.jpg";
import Roller from "../assets/IMG/Roller.jpg";
import Loader from "../assets/IMG/Loader.jpg";
import Truck from "../assets/IMG/Truck.jpg";
import Digger from "../assets/IMG/Digger.jpg";
import Handler from "../assets/IMG/Handler.jpg";
import Generator from "../assets/IMG/Generator.jpg";
import Compressor from "../assets/IMG/Compressor.jpg";
import ScissorLift from "../assets/IMG/ScissorLift.jpg";
import BoomLift from "../assets/IMG/BoomLift.jpg";
import WeldingMachine from "../assets/IMG/WeldingMachine.jpg";
import MaterialHoist from "../assets/IMG/MaterialHoist.jpg";
import LightTower from "../assets/IMG/LightTower.jpg";
import ContainerHandler from "../assets/IMG/ContainerHandler.jpg";
import CombineHarvester from "../assets/IMG/CombineHarvester.jpg";
import DiscHarrow from "../assets/IMG/DiscHarrow.jpg";
import Sprayer from "../assets/IMG/Sprayer.jpg";
import RotaryTiller from "../assets/IMG/RotaryTiller.jpg";
import Baler from "../assets/IMG/Baler.jpg";
import MowerConditioner from "../assets/IMG/MowerConditioner.jpg";
import Subsoiler from "../assets/IMG/Subsoiler.jpg";
import HayRake from "../assets/IMG/HayRake.jpg";
import ManureSpreader from "../assets/IMG/ManureSpreader.jpg";

function MachineryListings() {
  const [openCategory, setOpenCategory] = useState("Construction");
  const [selectedMachine, setSelectedMachine] = useState(null);

  // Ref object to store references to each category div (ONLY DECLARED ONCE)
  const categoryRefs = useRef({});

  const machineryData = {
    Construction: [
      // All 10 machines (your original + added ones) – unchanged
      {
        id: 1,
        name: "Hydraulic Excavator (20 Ton)",
        description:
          "Powerful digging and trenching machine with strong breakout force. Ideal for foundations and site prep.",
        price: "$950 / day",
        image: Hydraulic,
        details:
          "Operating weight: 20,000 kg • Engine power: 150 hp • Max digging depth: 6.5 m • Bucket capacity: 0.8–1.2 m³",
      },
      {
        id: 2,
        name: "Wheel Loader (3 m³ Bucket)",
        description:
          "Versatile loader for material handling, grading, and loading trucks efficiently.",
        price: "$780 / day",
        image: WheelLoader,
        details:
          "Bucket capacity: 3 m³ • Operating weight: 17,500 kg • Engine: 200 hp • Tipping load: 11,000 kg",
      },
      {
        id: 3,
        name: "Crawler Dozer (D8 Class)",
        description:
          "Heavy-duty crawler dozer for large-scale earthmoving, land clearing, and rough grading.",
        price: "$1,200 / day",
        image: Dozer,
        details:
          "Blade capacity: 8–12 m³ • Operating weight: 38,000 kg • Engine power: 310 hp",
      },
      {
        id: 4,
        name: "Motor Grader (140M)",
        description:
          "Precision grader for road construction, maintenance, and fine surface leveling.",
        price: "$890 / day",
        image: Grader,
        details:
          "Blade width: 3.7 m • Engine power: 195 hp • Moldboard lift above ground: 480 mm",
      },
      {
        id: 5,
        name: "Vibratory Roller (10 Ton)",
        description:
          "Smooth drum roller for compacting asphalt, gravel, and sub-base materials.",
        price: "$650 / day",
        image: Roller,
        details:
          "Operating weight: 10,000 kg • Vibration frequency: 30–35 Hz • Drum width: 2.1 m",
      },
      {
        id: 6,
        name: "Skid Steer Loader (Compact)",
        description:
          "Maneuverable loader for tight spaces, landscaping, and light material handling.",
        price: "$420 / day",
        image: Loader,
        details:
          "Rated operating capacity: 900 kg • Engine power: 60 hp • Lift height: 2.8 m",
      },
      {
        id: 7,
        name: "Dump Truck (25 Ton Articulated)",
        description:
          "Off-road articulated dump truck for hauling earth, sand, and aggregates.",
        price: "$1,450 / day",
        image: Truck,
        details:
          "Payload capacity: 25,000 kg • Engine power: 320 hp • Heaped capacity: 15 m³",
      },
      {
        id: 10,
        name: "Mini Digger (1.8 Ton)",
        description:
          "Compact excavator for confined spaces, trenching, and landscaping work.",
        price: "$380 / day",
        image: Digger,
        details:
          "Operating weight: 1,800 kg • Dig depth: 2.4 m • Engine power: 18 hp",
      },
    ],

    Industrial: [
      {
        id: 5,
        name: "Rough Terrain Forklift (5 Ton)",
        description:
          "All-terrain forklift with high lift capacity for warehouse, yard, and industrial material handling.",
        price: "$520 / day",
        image: ForkLift,
        details:
          "Load capacity: 5,000 kg • Lift height: 6 m • 4WD • Diesel engine",
      },
      {
        id: 11,
        name: "Telescopic Handler (4 Ton / 17m)",
        description:
          "Reach forklift for loading/unloading at height in industrial yards and warehouses.",
        price: "$680 / day",
        image: Handler,
        details:
          "Max lift capacity: 4,000 kg • Max lift height: 17 m • Stabilizers included",
      },
      {
        id: 12,
        name: "Industrial Diesel Generator",
        description:
          "High-capacity standby/prime power generator for factories, events, and construction sites.",
        price: "$420 / day",
        image: Generator,
        details:
          "Rated power: 300 kVA • Fuel tank: 500 L • Sound attenuated canopy",
      },
      {
        id: 13,
        name: "Air Compressor",
        description:
          "Portable diesel air compressor for powering pneumatic tools and sandblasting.",
        price: "$280 / day",
        image: Compressor,
        details:
          "Free air delivery: 185 CFM • Working pressure: 7–12 bar • Towable",
      },
      {
        id: 14,
        name: "Scissor Lift",
        description:
          "Battery-powered scissor lift for indoor/outdoor maintenance and installation work.",
        price: "$320 / day",
        image: ScissorLift,
        details:
          "Working height: 10 m • Platform capacity: 230 kg • Non-marking tires",
      },
      {
        id: 15,
        name: "Boom Lift (Articulating 20m)",
        description:
          "Diesel articulating boom lift for reaching over obstacles in industrial settings.",
        price: "$580 / day",
        image: BoomLift,
        details:
          "Working height: 20 m • Horizontal outreach: 12 m • 4WD",
      },
      {
        id: 16,
        name: "Portable Welding Machine (400A)",
        description:
          "Heavy-duty diesel welder/generator for site welding and power supply.",
        price: "$250 / day",
        image: WeldingMachine,
        details:
          "Output current: 60–400 A • Duty cycle: 60% • 10 kVA auxiliary power",
      },
      {
        id: 18,
        name: "Material Hoist",
        description:
          "Rack-and-pinion hoist for lifting materials to upper floors in industrial plants.",
        price: "$750 / day",
        image: MaterialHoist,
        details:
          "Payload: 2,000 kg • Max height: 100 m • Speed: 36 m/min",
      },
      {
        id: 19,
        name: "Portable Light Tower (800W/1200W LED)",
        description:
          "Mobile LED light tower for night work, security, and emergency lighting.",
        price: "$180 / day",
        image: LightTower,
        details:
          "Illumination: 4 × 1000 W LED • Mast height: 8 m • Diesel generator",
      },
      {
        id: 20,
        name: "Container Handler (Empty)",
        description:
          "Reach stacker for handling empty containers in industrial yards and ports.",
        price: "$1,600 / day",
        image: ContainerHandler,
        details:
          "Lifting capacity: 10 tons • Stacking height: 5 high • Diesel engine",
      },
    ],

    Agricultural: [
      {
        id: 8,
        name: "Tractor (80 HP)",
        description:
          "Powerful 4WD tractor for plowing, tilling, hauling, and farm implement operations.",
        price: "$580 / day",
        image: Tractor,
        details:
          "Engine power: 80 hp • 4WD • PTO: 540/1000 rpm • 3-point hitch Category II",
      },
      {
        id: 21,
        name: "Combine Harvester (Small Grain)",
        description:
          "Self-propelled combine for harvesting wheat, barley, rice, and other grains.",
        price: "$1,400 / day",
        image: CombineHarvester,
        details:
          "Cutting width: 4.5 m • Grain tank: 4,500 L • Engine power: 220 hp",
      },
      {
        id: 22,
        name: "Disc Harrow",
        description:
          "Heavy-duty offset disc harrow for primary tillage and soil preparation.",
        price: "$320 / day",
        image: DiscHarrow,
        details:
          "Working width: 3 m • Disc diameter: 660 mm • Tractor power required: 80–120 hp",
      },
      {
        id: 24,
        name: "Sprayer (Boom 24m)",
        description:
          "Self-propelled boom sprayer for efficient pesticide and fertilizer application.",
        price: "$890 / day",
        image: Sprayer,
        details:
          "Tank capacity: 4,000 L • Boom width: 24 m • GPS-guided",
      },
      {
        id: 25,
        name: "Rotary Tiller",
        description:
          "Heavy-duty rotary tiller for seedbed preparation and weed control.",
        price: "$260 / day",
        image: RotaryTiller,
        details:
          "Working width: 2.5 m • Tractor power: 60–90 hp • Gear-driven",
      },
      {
        id: 26,
        name: "Baler (Round – Large)",
        description:
          "Large round baler for hay, straw, and silage baling.",
        price: "$680 / day",
        image: Baler,
        details:
          "Bale diameter: 1.2–1.8 m • Bale width: 1.2 m • Net wrap system",
      },
      {
        id: 27,
        name: "Mower-Conditioner",
        description:
          "High-speed disc mower-conditioner for cutting and conditioning forage crops.",
        price: "$520 / day",
        image: MowerConditioner,
        details:
          "Cutting width: 3.5 m • Conditioner type: Steel rollers • PTO: 1000 rpm",
      },
      {
        id: 28,
        name: "Manure Spreader (10 m³)",
        description:
          "Trailing manure spreader for even distribution of organic fertilizer.",
        price: "$380 / day",
        image: ManureSpreader,
        details:
          "Capacity: 10 m³ • Spreading width: 12–24 m • Vertical beaters",
      },
      {
        id: 29,
        name: "Subsoiler (5 Shank)",
        description:
          "Deep tillage subsoiler for breaking up hardpan and improving soil drainage.",
        price: "$180 / day",
        image: Subsoiler,
        details:
          "Working depth: up to 60 cm • Shank spacing: 75 cm • Tractor power: 150+ hp",
      },
      {
        id: 30,
        name: "Hay Rake (Rotary 9m)",
        description:
          "Large rotary rake for gathering hay and forage into windrows.",
        price: "$340 / day",
        image: HayRake,
        details:
          "Working width: 9 m • Rotor diameter: 3.8 m • Hydraulic folding",
      },
    ],
  };

  const categories = ["Construction", "Industrial", "Agricultural"];

  const toggleCategory = (category) => {
    const isOpening = openCategory !== category;

    setOpenCategory(isOpening ? category : null);

    // Scroll to top of the category when opening
    if (isOpening && categoryRefs.current[category]) {
      setTimeout(() => {
        categoryRefs.current[category].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    }
  };

  const openModal = (machine) => {
    setSelectedMachine(machine);
  };

  const closeModal = () => {
    setSelectedMachine(null);
  };

  return (
    <section
      id="machinery"
      className="py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-background min-h-screen mb-20"
      style={{ marginTop: "-100px" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.4 }}
        className="container mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p
            style={{ fontFamily: '"Poppins", sans-serif' }}
            className="text-muted-foreground text-xs sm:text-sm uppercase mb-2"
          >
            Our Fleet
          </p>
          <h2
            style={{ fontFamily: '"M PLUS 1", sans-serif' }}
            className="text-3xl sm:text-4xl font-bold text-[#1A362B]"
          >
            Available Machinery for Rent
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Browse our wide range of well-maintained equipment.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-6">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              ref={(el) => (categoryRefs.current[category] = el)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                delay: 0.4 + catIndex * 0.2,
                ease: "easeOut",
              }}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition"
              >
                <h3
                  className="text-2xl font-bold text-[#1A362B]"
                  style={{ fontFamily: '"M PLUS 1", sans-serif' }}
                >
                  {category}
                </h3>
                <span className="text-2xl font-bold text-[#1A362B]">
                  {openCategory === category ? "−" : "+"}
                </span>
              </button>

              {openCategory === category && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="px-6 pb-8 pt-2 overflow-hidden"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {machineryData[category]?.map((machine, machIndex) => (
                      <motion.div
                        key={machine.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.3 + machIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="h-48 overflow-hidden">
                          <img
                            src={machine.image}
                            alt={machine.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-5">
                          <h4 className="text-lg font-bold text-[#1A362B] mb-2">
                            {machine.name}
                          </h4>
                          <p className="text-sm text-gray-600 mb-4">
                            {machine.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold text-[#1A362B]">
                              {machine.price}
                            </p>
                            <button
                              onClick={() => openModal(machine)}
                              className="px-4 py-2 bg-[#1B2431] text-white text-sm rounded-md hover:bg-[#1A362B] transition"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedMachine && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-[#1A362B]">
                      {selectedMachine.name}
                    </h3>
                    <button
                      onClick={closeModal}
                      className="text-gray-500 hover:text-gray-800 text-3xl"
                    >
                      ×
                    </button>
                  </div>

                  <img
                    src={selectedMachine.image}
                    alt={selectedMachine.name}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />

                  <p className="text-gray-700 mb-4">{selectedMachine.description}</p>

                  <div className="mb-6">
                    <p className="text-xl font-bold text-[#1A362B] mb-2">
                      Rental Rate: {selectedMachine.price}
                    </p>
                    <p className="text-gray-600">{selectedMachine.details}</p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={closeModal}
                      className="flex-1 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default MachineryListings;