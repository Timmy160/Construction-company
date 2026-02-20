import React, { useState } from 'react';
import WheelLoader from "../assets/IMG/Wheel.jpg"
import Hydraulic from "../assets/IMG/Hydraulic.jpg"
import ForkLift from "../assets/IMG/ForkLift.jpg"
import Tractor from "../assets/IMG/Tractor.jpg"



function MachineryListings() {
  const [openCategory, setOpenCategory] = useState('Construction'); // which category is expanded
  const [selectedMachine, setSelectedMachine] = useState(null);    // for modal

  // Sample data – prices now in USD – replace with real values & real images
  const machineryData = {
    Construction: [
      {
        id: 1,
        name: 'Hydraulic Excavator (20 Ton)',
        description: 'Powerful digging and trenching machine with strong breakout force. Ideal for foundations and site prep.',
        price: '$950 / day',
        image: Hydraulic,
        details: 'Operating weight: 20,000 kg • Engine power: 150 hp • Max digging depth: 6.5 m • Bucket capacity: 0.8–1.2 m³'
      },
      {
        id: 2,
        name: 'Wheel Loader (3 m³ Bucket)',
        description: 'Versatile loader for material handling, grading, and loading trucks efficiently.',
        price: '$780 / day',
        image: WheelLoader,
        details: 'Bucket capacity: 3 m³ • Operating weight: 17,500 kg • Engine: 200 hp • Tipping load: 11,000 kg'
      },
      // ... add more machines here
    ],
    Industrial: [
      {
        id: 5,
        name: 'Rough Terrain Forklift (5 Ton)',
        description: 'All-terrain forklift with high lift capacity for warehouse, yard, and industrial material handling.',
        price: '$520 / day',
        image: ForkLift,
        details: 'Load capacity: 5,000 kg • Lift height: 6 m • 4WD • Diesel engine'
      },
      // ... more
    ],
    Agricultural: [
      {
        id: 8,
        name: 'Tractor (80 HP)',
        description: 'Powerful 4WD tractor for plowing, tilling, hauling, and farm implement operations.',
        price: '$580 / day',
        image: Tractor,
        details: 'Engine power: 80 hp • 4WD • PTO: 540/1000 rpm • 3-point hitch Category II'
      },
      // ... more
    ],
  };

  const categories = ['Construction', 'Industrial', 'Agricultural'];

  // Toggle category open/close
  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  // Open modal with selected machine
  const openModal = (machine) => {
    setSelectedMachine(machine);
  };

  const closeModal = () => {
    setSelectedMachine(null);
  };

  return (
    <section
      id="machinery"
      className="py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-background min-h-screen mb-20" // added mb-20 for bottom spacing
      style={{ marginTop: '-100px' }}
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
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
        </div>

        {/* Accordion-style Categories */}
        <div className="space-y-6">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
            >
              {/* Category Header – clickable */}
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
                  {openCategory === category ? '−' : '+'}
                </span>
              </button>

              {/* Content – only shown when open */}
              {openCategory === category && (
                <div className="px-6 pb-8 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {machineryData[category]?.map((machine) => (
                      <div
                        key={machine.id}
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
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMachine && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
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
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default MachineryListings;