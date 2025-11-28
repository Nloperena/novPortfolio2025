'use client'

import React from 'react';

const TechStackStrip = () => {
  const [selectedTech, setSelectedTech] = React.useState<string | null>(null);

  const techStack = [
    { name: 'React', description: 'Building dynamic, component-based user interfaces.' },
    { name: 'TypeScript', description: 'Ensuring type safety and robust code quality.' },
    { name: 'Tailwind CSS', description: 'Rapidly styling with a utility-first framework.' },
    { name: 'Next.js', description: 'Server-side rendering and seamless routing.' },
  ];

  return (
    <section
      aria-label="Tech stack"
      className="bg-[#f5f5f0] py-8 md:py-10 border-b border-gray-200 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            {/* Label */}
            <div className="flex-shrink-0">
              <p className="text-sm md:text-base text-gray-600 font-medium whitespace-nowrap">
                Primary tech stack:
              </p>
            </div>

            {/* Tech Stack Items */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              {techStack.map((tech, index) => (
                <React.Fragment key={tech.name}>
                  <button
                    onClick={() => setSelectedTech(selectedTech === tech.name ? null : tech.name)}
                    className={`text-base md:text-lg lg:text-xl font-semibold transition-colors duration-200 ${selectedTech === tech.name ? 'text-[#F2611D]' : 'text-gray-800 hover:text-[#F2611D]'
                      }`}
                  >
                    {tech.name}
                  </button>
                  {index < techStack.length - 1 && (
                    <span className="text-gray-400 text-lg">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Description Area */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${selectedTech ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-gray-600 text-base italic">
              {selectedTech && techStack.find(t => t.name === selectedTech)?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackStrip;



