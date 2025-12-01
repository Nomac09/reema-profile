"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#f5f3f1] py-24 md:py-32 overflow-hidden"
    >
      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/7 to-transparent" />

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-[6%] md:flex-row md:items-start">
        {/* Left: headline & copy */}
        <div className="relative z-10 max-w-xl md:flex-1">
          <div className="text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">
            WORK WITH ME
          </div>

          <h2 className="mt-3 font-serif text-[2.4rem] leading-[1.15] text-slate-900 md:text-[2.8rem]">
            I DON'T DO SMALL TALK. I BUILD COLLABORATIONS THAT MATTER.
          </h2>

          <p className="mt-5 text-[0.95rem] leading-relaxed text-slate-700">
            I'm selective about who I work with. If you're creating something with substance and vision—something that deserves to be seen—I want to hear about it. Be direct. Be specific. And be ready to move quickly.
          </p>

          <div className="mt-7 grid gap-5 text-[0.9rem] text-slate-800">
            <div>
              <div className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">
                MY PARTNERSHIPS
              </div>
              <p className="mt-1.5">
                I align with brands that understand luxury isn't just about price—it's about intention, craftsmanship, and storytelling that resonates across cultures.
              </p>
            </div>
            <div>
              <div className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">
                MY PROCESS
              </div>
              <p className="mt-1.5">
                I read every message personally. If there's alignment, you'll hear back within days, not weeks. I don't waste your time, and I expect the same courtesy.
              </p>
            </div>
          </div>
        </div>

        {/* Right: direct channels card */}
        <div className="relative md:flex-1">
          <div className="pointer-events-none absolute -right-10 -top-10 hidden h-44 w-44 rounded-full bg-slate-900/6 blur-3xl md:block" />

          <div className="relative rounded-2xl bg-white/90 p-7 shadow-[0_20px_50px_rgba(15,23,42,0.18)] backdrop-blur-sm">
            <div className="text-[0.7rem] uppercase tracking-[0.24em] text-slate-500">
              CONNECT DIRECTLY
            </div>

            <div className="mt-5 space-y-6 text-[0.9rem] text-slate-900">
              <div>
                <div className="text-[0.78rem] uppercase tracking-[0.18em] text-slate-500">
                  MY INBOX
                </div>
                <a
                  href="mailto:contact@reemasawalma.com"
                  className="mt-1.5 inline-block text-[0.95rem] font-medium underline-offset-4 hover:underline"
                >
                  contact@reemasawalma.com
                </a>
              </div>

              <div>
                <div className="text-[0.78rem] uppercase tracking-[0.18em] text-slate-500">
                  MY BASES
                </div>
                <p className="mt-1.5 text-[0.95rem] text-slate-800">
                  Dubai & Jeddah — I travel frequently for the right projects
                </p>
              </div>

              <div>
                <div className="text-[0.78rem] uppercase tracking-[0.18em] text-slate-500">
                  MY PLATFORMS
                </div>
                <div className="mt-2.5 flex flex-wrap gap-3 text-[0.86rem]">
                  <a
                    href="https://instagram.com/reema.alsawalma"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-900/15 bg-white px-4 py-2 text-slate-900 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.snapchat.com/add/reemaalsawalma"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-900/15 bg-white px-4 py-2 text-slate-900 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white"
                  >
                    Snapchat
                  </a>
                  <a
                    href="https://tiktok.com/@reema.alsawalma"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-900/15 bg-white px-4 py-2 text-slate-900 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-7 border-t border-slate-200 pt-5 text-[0.9rem] text-slate-700">
              <div className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">
                MY EXPECTATIONS
              </div>
              <p className="mt-2.5 leading-relaxed">
                I don't need your life story. Tell me who you are, what you're building, and why we should create together. If you respect my time, I'll respect yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}