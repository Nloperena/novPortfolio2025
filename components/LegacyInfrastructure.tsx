"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

export default function LegacyInfrastructure() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <section className="w-full flex justify-center items-center px-4">
        <div
          className="relative group w-full max-w-4xl h-[500px] cursor-pointer overflow-hidden rounded-sm border border-[#0a0a0a] shadow-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsDrawerOpen(true)}
        >
          {/* ==============================================
              LAYER 1: MODERN INFRASTRUCTURE (The Senior Dev)
              Visible by default. Hides on hover.
             ============================================== */}
          <motion.div
            className="absolute inset-0 bg-white z-20 flex flex-col justify-between p-8 md:p-12"
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Top Tech Header */}
            <div className="flex justify-between items-start border-b border-[#0a0a0a]/10 pb-4">
              <div>
                <h3 className="text-[#0a0a0a] font-bold text-lg tracking-tight">
                  NICHOLAS LOPERENA
                </h3>
                <p className="text-[#0a0a0a]/60 font-mono text-xs uppercase tracking-widest mt-1">
                  Senior Software Engineer
                </p>
              </div>
              <div className="bg-[#0a0a0a]/5 text-[#0a0a0a]/60 px-3 py-1 text-[10px] font-mono rounded-full uppercase tracking-wider border border-[#0a0a0a]/10">
                System Architecture
              </div>
            </div>

            {/* Central Diagrammatic Visual (CSS Grid Lines) */}
            <div className="flex-grow flex items-center justify-center relative opacity-20">
              <div className="absolute inset-0 border-r border-[#0a0a0a]/20 w-1/2 left-0" />
              <div className="absolute inset-0 border-t border-[#0a0a0a]/20 h-1/2 top-0" />
              <div className="w-4 h-4 bg-[#0a0a0a] rounded-full z-10" />
            </div>

            {/* Bottom Tech Footer */}
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <div className="h-[2px] w-12 bg-[#0a0a0a]" />
                <p className="text-[#0a0a0a]/60 text-sm font-medium">
                  Building scalable, fault-tolerant applications.
                </p>
              </div>
              <ArrowUpRight className="text-[#0a0a0a]/40 w-6 h-6" />
            </div>
          </motion.div>

          {/* ==============================================
              LAYER 2: LEGACY INFRASTRUCTURE (The Archive)
              Hidden by default. Revealed on hover.
             ============================================== */}
          <div className="absolute inset-0 z-10 bg-[#F9F7F1] flex flex-col justify-center items-center text-center p-8">
            
            {/* CSS Noise Texture (No Image Required) */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply"
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
            />
            
            {/* Vignette Shadow */}
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(60,50,40,0.1)] pointer-events-none" />

            {/* Content */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="relative z-30 max-w-lg"
            >
              <span className="block font-serif italic text-[#8B2E2E] text-sm mb-4 tracking-widest">
                THE HOUSE OF LOPERENA • EST. 1732
              </span>
              
              <h2 className="text-3xl md:text-4xl font-serif text-[#2C2420] leading-tight mb-6">
                From Logistics to Logic:<br />
                <span className="italic text-[#6b584e]">300 Years of Systems.</span>
              </h2>

              <p className="font-mono text-xs text-[#555] tracking-widest uppercase mb-8 border-t border-b border-[#D1C7B7] py-3 inline-block">
                Navarre (Law) • Puerto Rico (Industry) • Florida (Code)
              </p>

              <div className="flex items-center justify-center gap-2 text-[#8B2E2E] group-hover:gap-4 transition-all duration-300">
                <span className="text-sm font-bold border-b border-[#8B2E2E] pb-0.5">
                  ENTER THE ARCHIVE
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Drawer with iframe */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 w-full md:w-[90%] h-full bg-white z-50 shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#0a0a0a]/10 bg-white">
                <div>
                  <h3 className="font-bold text-[#0a0a0a] text-lg">The Chronicle of the House of Loperena</h3>
                  <p className="font-mono text-xs text-[#0a0a0a]/60 uppercase tracking-wider mt-1">
                    From the Pyrenees to the Peninsula
                  </p>
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 hover:bg-[#0a0a0a]/5 rounded-md transition-colors"
                  aria-label="Close archive"
                >
                  <X className="w-6 h-6 text-[#0a0a0a]" />
                </button>
              </div>

              {/* iframe Container */}
              <div className="h-[calc(100vh-80px)] w-full">
                <iframe
                  src="https://loperena-lineage-project.vercel.app"
                  className="w-full h-full border-0"
                  title="The Chronicle of the House of Loperena"
                  allow="fullscreen"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
