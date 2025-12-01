"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Card from "../ui/Card";

function useLazyMedia<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}

export default function Experience(): React.ReactElement {
  const studio = useLazyMedia<HTMLDivElement>();
  const store = useLazyMedia<HTMLDivElement>();
  const social = useLazyMedia<HTMLDivElement>();

  return (
    <section
      id="experience"
      className="relative bg-[#f7f6f4] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/5 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-[6%]">
        {/* Soft intro */}
        <div className="mb-10 max-w-3xl">
          <div className="text-[0.68rem] uppercase tracking-[0.24em] text-slate-500 mb-3">
            MY PLATFORMS
          </div>
          <h2 className="font-serif text-[2.2rem] leading-[1.15] text-slate-900 md:text-[2.6rem] mb-4">
            I SHOW UP WHERE THE AUDIENCE IS.
          </h2>
          <p className="text-[0.95rem] leading-relaxed text-slate-700">
            From studio lights to red carpets to the daily rhythm of social stories—this is where I build connection and create impact. No filters, just real moments.
          </p>
        </div>

        {/* Main collage */}
        <div className="relative mb-14">
          <div className="pointer-events-none absolute -left-12 -top-16 h-40 w-40 rounded-full bg-slate-900/5 blur-3xl" />
          <div className="pointer-events-none absolute -right-8 bottom-0 h-52 w-52 rounded-full bg-slate-900/6 blur-3xl" />

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
            {/* Studio 76 */}
            <div className="col-span-1 md:col-span-7">
              <Card className="group relative overflow-visible border-transparent bg-white/70 shadow-[0_24px_60px_rgba(15,23,42,0.16)] backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1">
                <div className="p-4 md:p-6">
                  <span className="inline-block text-[0.7rem] font-medium uppercase tracking-[0.24em] text-slate-500">
                    MY TV CAREER
                  </span>
                  <h3 className="mt-2 text-xl font-medium text-slate-900 md:text-2xl">
                    I HOSTED PRIME TIME ON ABU DHABI TV
                  </h3>

                  <div
                    ref={studio.ref}
                    className="mt-4 transform rounded-xl border border-slate-200/80 bg-black/90 shadow-xl transition-transform duration-500 group-hover:-rotate-[1.5deg]"
                    aria-hidden={!studio.inView}
                  >
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      {studio.inView && (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          controls={false}
                          className="h-full w-full object-contain"
                          src="/videos/studio76-clip.mp4"
                          poster="/images/studio76-poster.jpg"
                          preload="metadata"
                        />
                      )}
                    </div>
                  </div>

                  <p className="mt-4 max-w-prose text-[0.95rem] leading-relaxed text-slate-700">
                    I crafted lifestyle and culture segments for a regional audience that wanted substance, not just style. Every broadcast was an opportunity to elevate the conversation.
                  </p>
                </div>
              </Card>
            </div>

            {/* Right column */}
            <div className="col-span-1 md:col-span-5">
              <div className="flex flex-col gap-6 md:mt-0">
                {/* La Donna Di Ferro */}
                <Card className="group relative overflow-visible border-transparent bg-white/80 shadow-[0_20px_45px_rgba(15,23,42,0.16)] backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1">
                  <div className="p-4 md:p-5">
                    <span className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-slate-500">
                      MY FASHION HOUSE
                    </span>
                    <h4 className="mt-2 text-lg font-medium text-slate-900">
                      WHERE DESIGN MEETS DESIRE
                    </h4>

                    <div
                      ref={store.ref}
                      className="mt-3 transform rounded-lg border border-slate-200/80 bg-black/90 shadow-lg transition-transform duration-500 group-hover:rotate-[1.5deg]"
                      aria-hidden={!store.inView}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        {store.inView && (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls={false}
                            className="h-full w-full object-contain"
                            src="/videos/la-donna-store.mp4"
                            poster="/images/la-donna-store.jpg"
                            preload="metadata"
                          />
                        )}
                      </div>
                    </div>

                    <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-700">
                      I built a space that's equal parts studio, showroom, and sanctuary—where every design begins with a woman in mind.
                    </p>
                  </div>
                </Card>

                {/* Social */}
                <Card className="group relative border-transparent bg-white/80 shadow-[0_18px_40px_rgba(15,23,42,0.18)] backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1 hover:translate-x-1">
                  <div className="p-4 md:p-5">
                    <span className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-slate-500">
                      MY SOCIAL PRESENCE
                    </span>
                    <h4 className="mt-2 text-lg font-medium text-slate-900">
                      MILLIONS OF VIEWS, ZERO FILTERS
                    </h4>

                    <div
                      ref={social.ref}
                      className="mt-3 rounded-lg border border-slate-200/80 bg-black/80"
                      aria-hidden={!social.inView}
                    >
                      <div className="relative aspect-video overflow-hidden rounded-lg">
                        {social.inView && (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls={false}
                            className="h-full w-full object-contain"
                            src="/videos/social-highlights.mp4"
                            poster="/images/social-highlights.jpg"
                            preload="metadata"
                          />
                        )}
                      </div>
                    </div>

                    <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-700">
                      I share the beautiful chaos behind my ventures across Instagram, TikTok and Snapchat—reaching millions who want the unfiltered story.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery strip – completely fixed layout and scaling */}
        <div className="mb-8">
          <div className="grid grid-cols-12 gap-3">
            {/* First image - interview */}
            <div className="col-span-12 md:col-span-5">
              <div className="overflow-hidden rounded-lg bg-slate-200 shadow-sm ring-1 ring-slate-200/70">
                <div className="relative h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
                  <Image
                    src="/images/gallery-1.jpg"
                    alt="Media interview"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Second image - purple dress */}
            <div className="col-span-6 md:col-span-3">
              <div className="overflow-hidden rounded-lg bg-slate-200 shadow-sm ring-1 ring-slate-200/70">
                <div className="relative h-0 pb-[150%]"> {/* 2:3 aspect ratio for portrait */}
                  <Image
                    src="/images/gallery-2.jpg"
                    alt="Purple gown on red carpet"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Third image - fashion week */}
            <div className="col-span-6 md:col-span-4">
              <div className="overflow-hidden rounded-lg bg-slate-200 shadow-sm ring-1 ring-slate-200/70">
                <div className="relative h-0 pb-[133.33%]"> {/* 3:4 aspect ratio */}
                  <Image
                    src="/images/gallery-3.jpg"
                    alt="Fashion week appearance"
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Second row with just the small image */}
          <div className="mt-3 flex justify-center">
            <div className="w-[160px] overflow-hidden rounded-lg bg-slate-200 shadow-sm ring-1 ring-slate-200/70 md:w-[200px]">
              <div className="relative h-0 pb-[100%]"> {/* 1:1 aspect ratio */}
                <Image
                  src="/images/gallery-4.jpg"
                  alt="With colleague"
                  fill
                  sizes="(max-width: 768px) 160px, 200px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Small, smarter line under gallery */}
          <div className="mt-6 flex items-center justify-center gap-3 text-[0.8rem] text-slate-600">
            <span className="inline-flex h-px w-10 bg-slate-300" />
            <span className="uppercase tracking-[0.2em]">
              MORE CONTENT AVAILABLE
            </span>
            <span className="inline-flex h-px w-10 bg-slate-300" />
          </div>
        </div>
      </div>
    </section>
  );
}