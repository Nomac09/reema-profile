"use client";

import Image from "next/image";

export default function Ventures() {
  return (
    <section
      id="ventures"
      className="relative w-full bg-white py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-[6%]">
        {/* Intro */}
        <div className="mb-14 max-w-3xl">
          <div className="text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">
            MY VENTURES
          </div>
          <h2 className="mt-3 font-serif text-[2.4rem] leading-[1.15] text-slate-900 md:text-[2.8rem]">
            TWO HOUSES. ONE VISION. ZERO COMPROMISES.
          </h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-700">
            I don't do fast fashion or quick flips. I create fashion and properties meant to outlive trends and withstand time.
          </p>
        </div>

        {/* La Donna Di Ferro */}
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-center">
          {/* Image first on desktop */}
          <div className="order-1 md:order-none">
            <div className="relative mx-auto max-w-md">
              <div className="pointer-events-none absolute -right-8 -top-10 hidden h-56 w-56 rounded-full bg-slate-900/5 blur-3xl md:block" />
              <div className="relative overflow-hidden rounded-[22px] bg-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.22)]">
                <Image
                  src="/images/ladonnadiferro.jpg"
                  alt="La Donna Di Ferro"
                  width={800}
                  height={520}
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              {/* Tiny logo tag */}
              <div className="absolute -bottom-4 left-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 shadow-[0_12px_30px_rgba(15,23,42,0.25)] backdrop-blur">
                <div className="h-6 w-6 overflow-hidden rounded-full bg-slate-900/5">
                  <Image
                    src="/images/ladonnadiferro-logo.png"
                    alt="La Donna Di Ferro logo"
                    width={32}
                    height={32}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-[0.68rem] uppercase tracking-[0.22em] text-slate-600">
                  LA DONNA DI FERRO
                </span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-2 md:order-none md:pl-6">
            <div className="text-[0.7rem] uppercase tracking-[0.24em] text-slate-500">
              MY FASHION HOUSE
            </div>
            <h3 className="mt-2 font-serif text-[2.2rem] leading-[1.15] text-slate-900">
              I DON'T DRESS WALLFLOWERS. I DRESS WOMEN WHO COMMAND ATTENTION.
            </h3>

            <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-700">
              I obsess over silhouettes that feel like armor and details that get noticed from across the room. My pieces work as hard as the women who wear them.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-[0.85rem] text-slate-800">
              <span className="rounded-full border border-slate-900/15 px-3 py-1">
                Small‑run collections
              </span>
              <span className="rounded-full border border-slate-900/15 px-3 py-1">
                Private fittings
              </span>
              <span className="rounded-full border border-slate-900/15 px-3 py-1">
                Red‑carpet moments
              </span>
            </div>

            <a
              href="https://ladonnadiferro.com"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center rounded-full border border-slate-900/20 bg-slate-900 px-6 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white shadow-sm shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              ENTER THE HOUSE
            </a>
          </div>
        </div>

        {/* Ora Gold */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:items-center">
          {/* Text */}
          <div className="md:pr-6">
            <div className="text-[0.7rem] uppercase tracking-[0.24em] text-slate-500">
              MY REAL ESTATE AGENCY
            </div>
            <h3 className="mt-2 font-serif text-[2.2rem] leading-[1.15] text-slate-900">
              I DON'T SELL PROPERTIES. I CURATE LIFESTYLES WORTH INVESTING IN.
            </h3>

            <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-700">
              At Ora Gold, I'm fanatical about light, proportion, and quiet luxury. I connect clients with spaces that feel like they were waiting for them all along.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-[0.85rem] text-slate-800">
              <span className="rounded-full border border-slate-900/15 px-3 py-1">
                Prime locations
              </span>
              <span className="rounded-full border border-slate-900/15 px-3 py-1">
                Design‑first planning
              </span>
              <span className="rounded-full border border-slate-900/15 px-3 py-1">
                Long‑term value
              </span>
            </div>

            <a
              href="https://oragold-realty.com"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center rounded-full border border-slate-900/20 bg-slate-900 px-6 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white shadow-sm shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              DISCOVER ORA GOLD
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="pointer-events-none absolute -left-10 -top-10 hidden h-56 w-56 rounded-full bg-slate-900/5 blur-3xl md:block" />
            <div className="relative mx-auto max-w-md">
              <div className="relative overflow-hidden rounded-[22px] bg-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.22)]">
                <Image
                  src="/images/oragold.jpg"
                  alt="Ora Gold"
                  width={800}
                  height={520}
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              {/* Tiny logo tag */}
              <div className="absolute -bottom-4 right-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 shadow-[0_12px_30px_rgba(15,23,42,0.25)] backdrop-blur">
                <div className="h-6 w-6 overflow-hidden rounded-full bg-slate-900/5">
                  <Image
                    src="/images/oragold-logo.png"
                    alt="Ora Gold logo"
                    width={32}
                    height={32}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-[0.68rem] uppercase tracking-[0.22em] text-slate-600">
                  ORA GOLD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}