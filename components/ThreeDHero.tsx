'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import TextType from '@/components/TextType';
import ServicesDrawer from '@/components/ServicesDrawer';
import Hero3DBackground from '@/components/Hero3DBackground';

const ThreeDHero = React.memo(() => {
    const [isServicesDrawerOpen, setIsServicesDrawerOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLElement>(null);

    const { scrollY } = useScroll();
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const heroScale = useTransform(scrollY, [0, 500], [1, 0.9]);
    const heroY = useTransform(scrollY, [0, 500], [0, 100]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 30 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 30 });

    const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [5, -5]);
    const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            mouseX.set(x);
            mouseY.set(y);
            setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const scrollToProjects = () => {
        const vitoSection = document.getElementById('vito-case-study');
        if (vitoSection) {
            vitoSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative h-screen flex items-center justify-center overflow-hidden bg-[#020805]"
            style={{ perspective: '1000px' }}
        >
            {/* Main Gradient Background - Deep Green Analogous Palette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0a1f1a] via-[#05110e] to-[#020805] opacity-90 z-0" />

            {/* 3D Interactive Background */}
            <Hero3DBackground />

            {/* Animated background layers with parallax */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <motion.div
                    className="absolute inset-0"
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: 'preserve-3d',
                    }}
                >
                    {/* Layer 1 - Far background nebula/noise */}
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            transform: 'translateZ(-200px) scale(1.2)',
                            background: 'radial-gradient(circle at 50% 50%, rgba(26, 77, 58, 0.15) 0%, transparent 60%)',
                        }}
                    />

                    {/* Grid overlay with depth - Subtler and greener */}
                    <motion.div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `
                    linear-gradient(rgba(26, 77, 58, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(26, 77, 58, 0.3) 1px, transparent 1px)
                  `,
                            backgroundSize: '80px 80px',
                            transform: 'translateZ(-100px)',
                            }}
                        />
                </motion.div>
            </div>

            {/* Radial gradient spotlight following mouse - Green Tint */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(26, 77, 58, 0.15), transparent 40%)`,
                }}
            />

            {/* Content with 3D transform */}
            <motion.div 
                className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 h-full flex items-center w-full"
                style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
            >
                <motion.div
                    className="text-left space-y-6"
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: 'preserve-3d',
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        style={{ transform: 'translateZ(100px)' }}
                    >
                        <TextType
                            as="h1"
                            text="NICHOLAS LOPERENA"
                            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight block drop-shadow-2xl"
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={false}
                            loop={false}
                            startOnVisible={true}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                        style={{ transform: 'translateZ(80px)' }}
                    >
                        <TextType
                            as="p"
                            text="FORGING DIGITAL REALITIES"
                            className="text-lg md:text-xl lg:text-2xl text-[#F2611D] font-semibold uppercase tracking-wide block mt-4"
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={false}
                            loop={false}
                            startOnVisible={true}
                            initialDelay={1500}
                        />
                    </motion.div>

                    <motion.p
                        className="text-base md:text-lg text-gray-400 max-w-2xl mt-6 backdrop-blur-sm bg-white/5 p-4 rounded-lg border-l-4 border-[#F2611D]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                        style={{ transform: 'translateZ(60px)' }}
                    >
                        I transform complex business needs into immersive, high-performance digital experiences that captivate and convert.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-3 mt-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
                        style={{ transform: 'translateZ(40px)' }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, translateZ: 20 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsServicesDrawerOpen(true)}
                            className="bg-[#F2611D] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#ff7a3d] transition-all shadow-lg shadow-[#F2611D]/20"
                        >
                            Begin Transformation
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, translateZ: 20 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollToProjects}
                            className="bg-transparent text-white px-8 py-4 rounded-md font-semibold text-lg border border-white/20 hover:bg-white/5 transition-all backdrop-blur-sm"
                        >
                            View Case Studies
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>

            <ServicesDrawer
                isOpen={isServicesDrawerOpen}
                onClose={() => setIsServicesDrawerOpen(false)}
                onOpen={() => setIsServicesDrawerOpen(true)}
            />
        </section>
    );
});

ThreeDHero.displayName = 'ThreeDHero';

export default ThreeDHero;
