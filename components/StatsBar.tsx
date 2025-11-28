'use client'

import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useInView } from 'framer-motion';
import { Rocket, Zap, Star } from 'lucide-react';

const Counter = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const displayValue = useSpring(spring);

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  const [currentValue, setCurrentValue] = React.useState(0);

  useEffect(() => {
    return displayValue.on("change", (latest) => {
      setCurrentValue(Math.round(latest));
    });
  }, [displayValue]);

  return <span ref={ref}>{currentValue}</span>;
};

const StatsBar = () => {
  const stats = [
    { value: 70, suffix: '+', label: 'Projects Delivered', Icon: Rocket },
    { value: 6, suffix: 'yrs', label: 'Engineering Excellence', Icon: Zap },
    { value: 100, suffix: '%', label: 'Client Satisfaction', Icon: Star }
  ];

  return (
    <section className="relative z-20 -mt-12 md:-mt-20 bg-[#05100a]/90 backdrop-blur-md border-t border-white/5 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.6)] py-10 overflow-hidden mx-4 md:mx-6 rounded-t-3xl">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(26, 77, 58, 0.4) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{
                scale: 1.1,
                translateY: -10,
                rotateX: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className="text-center group cursor-default"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <motion.div
                className="relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Icon with depth */}
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform" style={{ transform: 'translateZ(20px)' }}>
                  <stat.Icon className="w-10 h-10 text-[#F2611D] drop-shadow-[0_0_15px_rgba(242,97,29,0.5)]" strokeWidth={1.5} />
                </div>

                {/* Number with depth */}
                <div
                  className="text-4xl md:text-5xl font-black text-white drop-shadow-lg"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <Counter value={stat.value} />{stat.suffix}
                </div>

                {/* Label with depth */}
                <div
                  className="text-sm md:text-base text-gray-400 font-semibold mt-2 group-hover:text-white transition-colors"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  {stat.label}
                </div>

                {/* Subtle shadow for depth */}
                <div className="absolute -inset-4 bg-gradient-to-b from-transparent via-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;


