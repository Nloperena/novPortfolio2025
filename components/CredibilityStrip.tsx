'use client'

import React, { useEffect, useMemo, useRef } from 'react';
import clsx from 'clsx';

const CredibilityStrip = () => {
  const brands = [
    { name: 'Forza', logo: '/logos/forza-logo.png' },
    { name: 'Disney', logo: '/logos/disney-logo.png' },
    { name: 'VITO Fry Filter', logo: '/logos/vito-logo.png' },
    { name: 'Furniture Packages USA', logo: '/logos/furniture-packages-logo.png' },
    { name: 'Villa Marketers', logo: '/logos/villa-marketers-logo.png' },
    { name: 'KNOKX', logo: '/logos/knockx-logo.png' },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Triple the brands for seamless infinite loop
  const loopBrands = useMemo(() => [...brands, ...brands, ...brands], []);

  useEffect(() => {
    const el = trackRef.current;
    const root = containerRef.current;
    if (!el || !root) return;

    let ro: ResizeObserver | null = null;
    let rafId: number | null = null;
    let isInitialized = false;
    let isVisible = false;
    let startTimeoutId: ReturnType<typeof setTimeout> | null = null;
    let hasEnteredViewport = false;
    let viewportEntryTime: number | null = null;

    // Set initial default values
    const defaultDuration = 20;
    const speed = 60; // pixels per second
    root.style.setProperty("--marquee-duration", `${defaultDuration}s`);
    root.style.setProperty("--marquee-distance", "0px");
    
    // Start animation paused initially
    el.style.animationPlayState = "paused";

    // Function to start the animation
    const startAnimation = () => {
      el.style.animationPlayState = "running";
      el.classList.add("will-change-transform");
    };

    // Function to check if we should start animation (after delay)
    const checkAndStartAnimation = () => {
      if (isInitialized && isVisible && viewportEntryTime !== null) {
        const timeSinceEntry = Date.now() - viewportEntryTime;
        const delayMs = 200;
        if (timeSinceEntry >= delayMs) {
          startAnimation();
        } else {
          const remainingTime = delayMs - timeSinceEntry;
          if (startTimeoutId) clearTimeout(startTimeoutId);
          startTimeoutId = setTimeout(() => {
            if (isInitialized && isVisible) {
              startAnimation();
            }
          }, remainingTime);
        }
      }
    };

    // Compute duration from content width and desired speed
    const resize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        const total = el.scrollWidth / 3; // width of one set (we have 3 copies)
        if (total > 0) {
          const pxPerSec = speed;
          const duration = Math.max(6, total / pxPerSec);
          
          root.style.setProperty("--marquee-duration", `${duration}s`);
          root.style.setProperty("--marquee-distance", `${total}px`);
          
          if (!isInitialized) {
            isInitialized = true;
            checkAndStartAnimation();
          }
        }
        rafId = null;
      });
    };

    // Use IntersectionObserver to defer setup until visible
    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (entry.isIntersecting) {
          if (!ro) {
            ro = new ResizeObserver(resize);
            ro.observe(el);
            resize();
          }
          
          if (!hasEnteredViewport) {
            hasEnteredViewport = true;
            viewportEntryTime = Date.now();
            if (startTimeoutId) clearTimeout(startTimeoutId);
            startTimeoutId = setTimeout(() => {
              if (isInitialized && isVisible) {
                startAnimation();
              }
            }, 200);
          } else if (isInitialized) {
            checkAndStartAnimation();
          }
        } else {
          el.style.animationPlayState = "paused";
          if (startTimeoutId) {
            clearTimeout(startTimeoutId);
            startTimeoutId = null;
          }
          hasEnteredViewport = false;
          viewportEntryTime = null;
        }
      },
      { threshold: 0.01 }
    );
    io.observe(root);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (startTimeoutId) clearTimeout(startTimeoutId);
      if (ro) ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <section 
      aria-label="Brands ticker"
      className="border-y border-white/10 bg-[#050505] backdrop-blur-md py-2"
    >
      <div className="w-full flex items-center gap-6">
        {/* Label - News Anchor Style */}
        <div className="flex-shrink-0 px-6 py-3 bg-[#F2611D] relative ml-0 md:ml-6 clip-path-slant">
          <p className="text-xs md:text-sm text-white font-bold uppercase tracking-widest whitespace-nowrap">
            Trusted By
          </p>
        </div>

        {/* Scrolling Ticker */}
        <div
          ref={containerRef}
          className="flex-1 relative overflow-hidden h-12 flex items-center"
        >
          {/* Edge fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 z-10 bg-gradient-to-r from-[#050505] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 z-10 bg-gradient-to-l from-[#050505] to-transparent"></div>
          
          <div
            ref={trackRef}
            className={clsx(
              "flex items-center whitespace-nowrap",
              "hover:[animation-play-state:paused]"
            )}
            style={{ 
              animation: `marquee-pixel-left var(--marquee-duration, 20s) linear infinite`,
              animationPlayState: "paused",
            }}
          >
            {loopBrands.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="shrink-0 px-8 md:px-12"
              >
                <span className="text-white/80 font-bold text-lg md:text-xl lg:text-2xl uppercase tracking-wider whitespace-nowrap hover:text-[#F2611D] transition-colors duration-300">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom seamless marquee animation */}
      <style>{`
        @keyframes marquee-pixel-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * var(--marquee-distance, 0px)));
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          [aria-label='Brands ticker'] div[class*='animate-'] {
            animation: none !important;
          }
          [aria-label='Brands ticker'] > div > div {
            overflow-x: auto;
            scroll-snap-type: x mandatory;
          }
          [aria-label='Brands ticker'] > div > div > div {
            scroll-snap-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default CredibilityStrip;



