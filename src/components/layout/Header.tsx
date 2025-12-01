"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // always transparent, just add a tiny shadow when scrolled
  const shellClasses = scrolled
    ? "bg-transparent py-3 shadow-[0_1px_0_rgba(15,23,42,0.06)]"
    : "bg-transparent py-3";

  const textColor = scrolled ? "text-slate-900" : "text-white";

  const linkBase =
    "inline-flex items-center text-[0.7rem] uppercase tracking-[0.2em] transition hover:opacity-75";

  return (
    <header
      className={`pointer-events-none fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${shellClasses}`}
    >
      <div className="pointer-events-auto mx-auto flex w-full max-w-6xl items-center justify-between px-[6%]">
        {/* Left: star/initials + My Story */}
        <div className={`flex items-center gap-3 ${textColor}`}>
          {/* Star symbol that changes to initials when scrolled */}
          <div className="relative h-6 w-6 flex items-center justify-center">
            {scrolled ? (
              <div className="font-['Cormorant',serif] text-[1.1rem] italic">
                <span className="inline-block font-light">r</span>
                <span className="inline-block -ml-0.5 font-light">a</span>
              </div>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="currentColor"/>
              </svg>
            )}
          </div>
          
          <button
            onClick={() => scrollTo("#hero")}
            className={`${linkBase}`}
          >
            My Story
          </button>
        </div>

        {/* Right: Collaborations + arrow */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("#contact")}
            className={`${linkBase} ${textColor}`}
          >
            <span>Collaborations</span>
            <span className="ml-1.5">→</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={`md:hidden text-2xl ${textColor}`}
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden absolute top-full left-0 right-0 bg-black/75 text-white backdrop-blur-sm py-4 px-6">
          <nav className="flex flex-col space-y-4 text-[0.7rem] uppercase tracking-[0.2em]">
            <button
              onClick={() => {
                scrollTo("#hero");
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-3 text-left"
            >
              {scrolled ? (
                <div className="font-['Cormorant',serif] text-[1.1rem] italic">
                  <span className="inline-block font-light">r</span>
                  <span className="inline-block -ml-0.5 font-light">a</span>
                </div>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="currentColor"/>
                </svg>
              )}
              <span>My Story</span>
            </button>
            <button
              onClick={() => {
                scrollTo("#contact");
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-left"
            >
              <span>Collaborations</span>
              <span className="ml-1.5">→</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}