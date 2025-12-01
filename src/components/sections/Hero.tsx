"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  { src: "/images/hero-portrait.jpg", alt: "Reema Alsawalma portrait in studio" },
  { src: "/images/ladonna-manquin.jpg", alt: "Detail shot from La Donna Di Ferro fashion brand" },
  { src: "/images/ladonna-store-1.jpg", alt: "Reema at La Donna Di Ferro showroom" },
  { src: "/images/flags-dubai-2.jpg", alt: "Reema in Dubai with flags background" },
];

const MAX_ROTATE_DEG = 7;
const MIN_SCALE = 0.75;
const MAX_TRANSLATE_Z = -150;
const DEPTH_SCROLL_HEIGHT = 180;

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const stripRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  
  // For the continuous curtain effect
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [nextPosition, setNextPosition] = useState(100);
  
  // Continuous right-to-left curtain effect with 3-second pause
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    let animationId: number | null = null;
    let isAnimating = false;
    
    const slideSpeed = 1.2;
    const pauseDuration = 3000;
    
    const startTransition = () => {
      if (isAnimating) return;
      
      isAnimating = true;
      let position = 100;
      
      const animate = () => {
        position -= slideSpeed;
        
        if (position <= 0) {
          position = 0;
          isAnimating = false;
          
          setCurrentIndex(nextIndex);
          setNextIndex((nextIndex + 1) % slides.length);
          setNextPosition(100);
          
          timer = setTimeout(startTransition, pauseDuration);
        } else {
          setNextPosition(position);
          animationId = requestAnimationFrame(animate);
        }
      };
      
      animationId = requestAnimationFrame(animate);
    };
    
    timer = setTimeout(startTransition, pauseDuration);
    
    return () => {
      if (timer) clearTimeout(timer);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [nextIndex]);

  // Scroll effect for drowning/tilting/shrinking
  useEffect(() => {
    const stripEl = stripRef.current;
    if (!stripEl) return;

    const scrollThreshold = DEPTH_SCROLL_HEIGHT * 1.5;

    const onScroll = () => {
      const scrollY = window.scrollY;
      
      const phase = Math.min(scrollY / scrollThreshold, 1);
      const eased = Math.pow(phase, 0.7);
      
      const scale = 1 - (1 - MIN_SCALE) * eased;
      const rotate = -MAX_ROTATE_DEG * eased;
      const translateZ = MAX_TRANSLATE_Z * eased;
      const translateY = 50 * eased;
      
      stripEl.style.transform = `
        perspective(1500px)
        translateY(${translateY}px)
        translateZ(${translateZ}px)
        rotateX(${4 * eased}deg)
        rotateZ(${rotate}deg)
        scale(${scale})
      `;

      if (scrollY > scrollThreshold) {
        const extraScroll = scrollY - scrollThreshold;
        stripEl.style.transform += ` translateY(-${extraScroll * 0.8}px)`;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollTo = (selector: string) => {
    const el = document.querySelector<HTMLElement>(selector);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#f5f3f1] text-slate-900"
    >
      {/* Top nav */}
      <header className="pointer-events-none fixed top-6 left-0 right-0 z-30 flex items-center justify-between px-[6%] text-[0.62rem] tracking-[0.24em] uppercase text-slate-900">
        <div className="flex items-center gap-3 pointer-events-auto">
          <span className="h-px w-6 bg-slate-900" />
          <button
            onClick={() => scrollTo("#about")}
            className="hover:opacity-70 transition-opacity"
          >
            My Story, Press, Resources, Contact
          </button>
        </div>

        <div className="pointer-events-auto flex items-center gap-4">
          <button
            onClick={() => scrollTo("#experience")}
            className="hover:opacity-70 transition-opacity"
          >
            Business Collaborations & Media
          </button>
        </div>
      </header>

      {/* Image strip with continuous right-to-left flow */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div
          ref={stripRef}
          className="relative w-[122vw] max-w-none md:w-[112vw]"
          style={{ transformOrigin: "center center" }}
        >
          <div className="relative w-full overflow-hidden bg-slate-200">
            <div className="relative pt-[70%]">
              {/* Current slide (always visible) */}
              <div className="absolute inset-0">
                <Image
                  src={slides[currentIndex].src}
                  alt={slides[currentIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Next slide (sliding in from right) */}
              <div
                className="absolute inset-0"
                style={{ transform: `translateX(${nextPosition}%)` }}
              >
                <Image
                  src={slides[nextIndex].src}
                  alt={slides[nextIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              {/* Side masks */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f5f3f1] via-[#f5f3f1]/40 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f5f3f1] via-[#f5f3f1]/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Name & titles - scrolls normally - MOBILE OPTIMIZED */}
      <div 
        ref={contentRef}
        className="relative z-20 min-h-screen flex flex-col justify-center px-[6%] pb-16"
      >
        {/* Mobile-optimized content container */}
        <div className="max-w-xl md:translate-y-10">
          {/* Location text - smaller on mobile */}
          <div className="mb-2 md:mb-4 text-[0.58rem] md:text-[0.64rem] uppercase tracking-[0.3em] text-slate-700">
            Dubai • Riyadh • Worldwide
          </div>

          {/* Name - smaller on mobile, positioned on left side */}
          <h1 className="font-['Playfair_Display',Georgia,'Times_New_Roman',serif] text-[2.8rem] leading-[0.9] md:text-[3.6rem] lg:text-[5.6rem] text-slate-900 md:leading-[0.86]">
            <span className="block">reema</span>
            <span className="-mt-2 md:-mt-4 block font-light tracking-[0.02em]">
              alsawalma
            </span>
          </h1>

          {/* Titles - reorganized for mobile */}
          <div className="mt-4 md:mt-8 grid grid-cols-2 md:flex md:flex-wrap gap-3 md:gap-6 text-[0.55rem] md:text-[0.6rem] tracking-[0.22em] uppercase text-slate-900/80">
            <div className="flex flex-col gap-1">
              <span>Fashion Designer</span>
              <span className="text-[0.48rem] md:text-[0.52rem] tracking-[0.18em] text-slate-700/80">
                La Donna Di Ferro
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span>TV Host</span>
              <span className="text-[0.48rem] md:text-[0.52rem] tracking-[0.18em] text-slate-700/80">
                Abu Dhabi TV (former)
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span>Media &amp; Social</span>
              <span className="text-[0.48rem] md:text-[0.52rem] tracking-[0.18em] text-slate-700/80">
                Millions of story views
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span>Based In</span>
              <span className="text-[0.48rem] md:text-[0.52rem] tracking-[0.18em] text-slate-700/80">
                Gulf region
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for scroll effect */}
      <div style={{ height: `${DEPTH_SCROLL_HEIGHT * 1.5}px` }}></div>
    </section>
  );
}