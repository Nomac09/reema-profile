"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#f5f3f1] py-24 md:py-32 overflow-hidden"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-[6%] md:flex-row md:items-center">
        {/* Left: text block */}
        <div className="relative z-10 max-w-xl md:flex-1">
          <div className="mb-6 text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">
            MY STORY
          </div>

          <h2 className="font-serif text-[2.4rem] leading-[1.15] text-slate-900 md:text-[2.8rem]">
            I BUILD BRANDS THAT SIT AT THE INTERSECTION OF LUXURY, CULTURE, AND MODERN GULF IDENTITY.
          </h2>

          <p className="mt-6 text-[0.95rem] leading-relaxed text-slate-700">
            Hey, I'm Reema. When I'm not designing fashion or running my real estate empire at Ora Gold, I'm probably convincing someone that their vision is too small. I connect fashion, property, and media into one cohesive world – my world.
          </p>

          <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-700">
            I founded La Donna Di Ferro because I got tired of waiting for someone else to create the fashion brand I wanted to see. Now I lead teams that turn my creative direction into ventures that speak directly to women who know exactly what they want.
          </p>

          <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-700">
            On social, I use my platform to champion ambitious women, highlight regional talent, and show the beautiful chaos behind building premium experiences in Dubai and beyond. No filters on the process, just the results.
          </p>

          {/* Micro stats */}
          <div className="mt-8 grid grid-cols-2 gap-6 text-[0.9rem] text-slate-800">
            <div>
              <div className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">
                MY VENTURES
              </div>
              <div className="mt-1 text-[0.95rem] font-medium">
                Fashion, luxury real estate, media
              </div>
              <p className="mt-1 text-[0.85rem] text-slate-600">
                I don't build for quick exits. I build brands and properties designed to last.
              </p>
            </div>

            <div>
              <div className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">
                MY FOCUS
              </div>
              <div className="mt-1 text-[0.95rem] font-medium">
                Women-led, story-driven
              </div>
              <p className="mt-1 text-[0.85rem] text-slate-600">
                I create spaces where women see themselves at the center of the narrative. Not as an afterthought.
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-9 inline-flex items-center rounded-full border border-slate-900/15 bg-slate-900 px-7 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white shadow-sm shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            LET'S COLLABORATE
          </button>
        </div>

        {/* Right: editorial image layout */}
        <div className="relative md:flex-1">
          {/* Back plate */}
          <div className="pointer-events-none absolute -left-10 -top-10 hidden h-72 w-72 rounded-full bg-slate-900/5 blur-3xl md:block" />

          <div className="relative mx-auto max-w-sm">
            <div className="relative overflow-hidden rounded-[22px] bg-slate-200 shadow-[0_24px_70px_rgba(15,23,42,0.28)]">
              <Image
                src="/images/reema-about.jpg"
                alt="Reema Alsawalma"
                width={640}
                height={840}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Floating caption card */}
            <div className="absolute -bottom-10 -right-8 w-[78%] rounded-2xl bg-white/95 p-5 text-[0.8rem] text-slate-800 shadow-[0_18px_45px_rgba(15,23,42,0.26)] backdrop-blur">
              <div className="text-[0.64rem] uppercase tracking-[0.26em] text-slate-500">
                MY PERSPECTIVE
              </div>
              <p className="mt-2 italic leading-relaxed">
                "LUXURY ISN'T JUST THE PRICE TAG. IT'S THE FEELING THAT EVERYTHING HAS BEEN CONSIDERED — THE STORY, THE SPACE, THE WOMAN WHO WEARS IT."
              </p>
              <div className="mt-3 text-[0.72rem] font-medium text-slate-900">
                AND I DON'T COMPROMISE ON ANY OF IT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}