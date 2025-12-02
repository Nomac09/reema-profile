"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#121212] text-slate-200 py-12 md:py-16">
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-16 bg-gradient-to-b from-[#f5f3f1] to-transparent" />

      <div className="mx-auto flex w-full max-w-6xl flex-col px-[6%]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          {/* Monogram + info */}
          <div className="md:max-w-[280px]">
            {/* Stylish ra monogram - lowercase, unique font */}
            <div className="font-['Cormorant',serif] text-[2.2rem] leading-none text-white italic">
              <span className="inline-block font-light">r</span>
              <span className="inline-block -ml-0.5 font-light">a</span>
            </div>
            
            <div className="mt-3 text-[0.65rem] uppercase tracking-[0.22em] text-slate-500">
              @reema-alsawalma
            </div>
            
            <p className="mt-2 text-[0.78rem] leading-relaxed text-slate-400">
              Fashion, real estate, and media ventures built at the intersection of luxury and Gulf identity.
            </p>
            
            {/* Social icons - Instagram, Snapchat, TikTok */}
            <div className="mt-4 flex gap-3">
              <a 
                href="https://instagram.com/reema.alsawalma" 
                target="_blank" 
                rel="noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all hover:border-slate-500 hover:text-white"
                aria-label="Instagram"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a 
                href="https://www.snapchat.com/add/reemaalsawalma" 
                target="_blank" 
                rel="noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all hover:border-slate-500 hover:text-white"
                aria-label="Snapchat"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.206 21.844c-.103 0-.309-.03-.412-.03-.721 0-1.235.206-1.751.412-.309.103-.618.206-1.03.206-.412 0-.721-.103-1.03-.206-.516-.206-1.03-.412-1.751-.412-.103 0-.206 0-.412.03-.309 0-.618-.103-.721-.412-.103-.206 0-.515.206-.618.309-.103.618-.206.824-.309 1.133-.412 1.648-1.03 1.648-1.751 0-.309-.103-.618-.309-.927-.824-1.03-2.163-2.163-2.266-3.605 0-.206 0-.412.103-.618.206-.824 1.03-1.442 2.06-1.648.206-.103.412-.103.515-.206.103-.309.103-.618.103-.927 0-.206-.103-.412-.103-.618-.206-.412-.412-.618-.412-.927 0-.206 0-.309.103-.412.206-.206.412-.206.618-.206.206 0 .412.103.618.103.412.103.721.206 1.03.206.412 0 .618-.103.824-.412.103-.206.103-.412.103-.618v-.309c0-.618.103-1.339.412-1.854.206-.412.516-.824.824-1.133.309-.309.721-.618 1.133-.824.515-.206 1.03-.309 1.648-.309s1.133.103 1.648.309c.412.206.824.412 1.133.824.309.309.618.721.824 1.133.309.515.412 1.133.412 1.854v.309c0 .206.103.412.103.618.206.309.412.412.824.412.309 0 .618-.103 1.03-.206.206-.103.412-.103.618-.103.206 0 .412 0 .618.206.103.103.103.206.103.412 0 .309-.206.618-.412.927 0 .206-.103.412-.103.618 0 .309 0 .618.103.927.103.103.309.103.515.206 1.03.206 1.854.824 2.06 1.648.103.206.103.412.103.618-.103 1.442-1.442 2.575-2.266 3.605-.206.309-.309.618-.309.927 0 .721.515 1.339 1.648 1.751.206.103.515.206.824.309.206.103.309.309.206.618-.103.309-.412.412-.721.412z" />
                </svg>
              </a>
              <a 
                href="https://tiktok.com/@reema.alsawalma" 
                target="_blank" 
                rel="noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all hover:border-slate-500 hover:text-white"
                aria-label="TikTok"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="mt-8 md:mt-0">
            <div className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500 mb-3">
              Site
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-2">
              <button
                onClick={() => scrollTo("#hero")}
                className="text-[0.75rem] text-slate-400 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollTo("#about")}
                className="text-[0.75rem] text-slate-400 hover:text-white transition-colors"
              >
                My Story
              </button>
              <button
                onClick={() => scrollTo("#ventures")}
                className="text-[0.75rem] text-slate-400 hover:text-white transition-colors"
              >
                Ventures
              </button>
              <button
                onClick={() => scrollTo("#experience")}
                className="text-[0.75rem] text-slate-400 hover:text-white transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="text-[0.75rem] text-slate-400 hover:text-white transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
          
          {/* Contact */}
          <div className="mt-8 md:mt-0">
            <div className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500 mb-3">
              Connect
            </div>
            <a
              href="mailto:reema.alsawalma@gmail.com"
              className="text-[0.75rem] font-medium text-slate-100 underline-offset-4 hover:underline"
            >
              reema.alsawalma@gmail.com
            </a>
            
            <div className="mt-3 flex flex-wrap gap-2 text-[0.75rem]">
              <a
                href="https://ladonnadiferro.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 px-2.5 py-0.5 text-slate-400 hover:border-white hover:text-white transition"
              >
                La Donna Di Ferro
              </a>
              <a
                href="https://oragold-realy.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 px-2.5 py-0.5 text-slate-400 hover:border-white hover:text-white transition"
              >
                Ora Gold
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 border-t border-slate-800 pt-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="text-[0.7rem] text-slate-500">
            © {currentYear} Reema Alsawalma
          </div>
          
          <div className="mt-2 md:mt-0 flex gap-4 text-[0.7rem] text-slate-500">
            <a href="/terms" className="hover:text-slate-300">Terms</a>
            <a href="/privacy" className="hover:text-slate-300">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}