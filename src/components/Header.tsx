// src/components/Header.jsx  (oder wo deine Datei liegt)
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../styles/header.css';
import '../styles/home.css';

const languages = [
  {
    code: "de",
    label: "DE",
    name: "Deutsch",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
           viewBox="0 0 512 512" shapeRendering="geometricPrecision" textRendering="geometricPrecision"
           imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" className="lang-ui-svg">
        <g fillRule="nonzero">
          <path fill="#999" d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z" />
          <path fill="#fff" d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.5 124.46-69.29 167.25l-1.18 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.23 0-124.37-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.55 45.96 190.7 19.48 256 19.48z" />
          <path d="M255.99 39.59c119.51 0 216.4 96.89 216.4 216.4 0 119.52-96.89 216.42-216.4 216.42-119.52 0-216.41-96.9-216.41-216.42 0-119.51 96.89-216.4 216.41-216.4z" />
          <path fill="#D00" d="M459.56 182.47H52.41c-8.3 22.96-12.83 47.71-12.83 73.52 0 119.52 96.89 216.42 216.41 216.42 119.51 0 216.4-96.9 216.4-216.42 0-25.81-4.53-50.56-12.83-73.52z" />
          <path fill="#FFCE00" d="M459.56 329.55H52.41c30.11 83.32 109.89 142.86 203.58 142.86 93.69 0 173.47-59.54 203.57-142.86z" />
        </g>
      </svg>
    )
  },
  {
    code: "en",
    label: "EN",
    name: "English",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
           viewBox="0 0 512 512" shapeRendering="geometricPrecision" textRendering="geometricPrecision"
           imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" className="lang-ui-svg">
        <g fillRule="nonzero">
          <path fill="#999" d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z" />
          <path fill="#fff" d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.5 124.46-69.29 167.25l-1.18 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.23 0-124.37-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.55 45.96 190.7 19.48 256 19.48z" />
          <path fill="#FEFEFE" d="M256 39.59c119.52 0 216.41 96.89 216.41 216.4 0 119.52-96.89 216.42-216.41 216.42-119.51 0-216.4-96.9-216.4-216.42 0-119.51 96.89-216.4 216.4-216.4z" />
          <path fill="#012169" d="M183.49 179.55V52.05c-41.32 14.7-76.85 41.61-102.27 76.35l102.27 51.15zm0 152.9v127.5c-41.3-14.7-76.82-41.59-102.26-76.35l102.26-51.15zm144.55 0v127.67c41.45-14.63 77.09-41.54 102.61-76.34l-102.61-51.33zm0-152.9V51.88c41.45 14.63 77.11 41.54 102.62 76.35l-102.62 51.32z" />
          <path fill="#C8102E" d="M448.3 328.16h-48.11l49.35 24.72c3.21-6.41 6.11-13 8.69-19.75l-9.93-4.97zm-9.34-187.76-86.42 43.33h48.11l48.95-24.5c-3.23-6.46-6.79-12.75-10.64-18.83zM212.41 299.26v168.75c14.08 2.87 28.66 4.4 43.59 4.4 14.76 0 29.19-1.49 43.13-4.3V299.26h168.94c2.83-13.98 4.34-28.44 4.34-43.27 0-14.88-1.51-29.42-4.37-43.47H299.13V43.9A217.404 217.404 0 0 0 256 39.59c-14.93 0-29.51 1.54-43.59 4.4v168.53H43.97a217.777 217.777 0 0 0-4.37 43.47c0 14.83 1.51 29.29 4.34 43.27h168.47zM63.12 183.84h48.11l-48.89-24.48c-3.2 6.41-6.11 13.02-8.68 19.76l9.46 4.72zm95.87 144.43h-48.11l-48.57 24.31A216.76 216.76 0 0 0 73 371.52l86.43-43.25h-.44z" />
        </g>
      </svg>
    )
  },
  {
    code: "kr",
    label: "KR",
    name: "한국어",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
           viewBox="0 0 512 512" shapeRendering="geometricPrecision" textRendering="geometricPrecision"
           imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" className="lang-ui-svg">
        <g fillRule="nonzero">
          <path fill="#999" d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z" />
          <path fill="#fff" d="M256 19.48c65.31 0 124.45 26.5 167.23 69.28 42.79 42.79 69.28 101.93 69.28 167.23 0 65.31-26.49 124.47-69.28 167.25-42.78 42.79-101.92 69.28-167.23 69.28-65.3 0-124.46-26.49-167.24-69.28-42.79-42.78-69.28-101.94-69.28-167.25 0-65.3 26.49-124.44 69.28-167.23C131.54 45.98 190.7 19.48 256 19.48z" />
          <path d="m106.55 203.82 39.86-59.78 9.96 6.65-39.86 59.78-9.96-6.65zm14.95 9.96L161.36 154l9.96 6.65-39.86 59.78-9.96-6.65zm14.95 9.97 39.84-59.79 9.98 6.65-39.86 59.78-9.96-6.64zm189.29 126.21 39.86-59.79 9.96 6.65-39.84 59.77-9.98-6.63zm14.95 9.96 39.85-59.78 9.96 6.64-39.85 59.77-9.96-6.63zm14.95 9.96 39.85-59.78 9.96 6.64-39.85 59.79-9.96-6.65z" />
          <path fill="#fff" d="m342.35 314.25 49.82 33.21-3.33 4.98-49.81-33.2z" />
          <path fill="#CD2E3A" d="M196.23 220.43c22.01-33.02 66.61-41.93 99.63-19.92 33 21.99 41.93 66.62 19.92 99.63l-119.55-79.71z" />
          <path fill="#0047A0" d="M196.23 220.43c-22.01 33.02-13.08 77.62 19.92 99.63 33.01 22.01 77.62 13.08 99.63-19.92 11.01-16.51 6.54-38.82-9.96-49.82s-38.81-6.55-49.82 9.97l-59.77-39.86z" />
          <path fill="#CD2E3A" d="M246.04 210.47c-16.51-11.01-38.81-6.56-49.81 9.96-11.01 16.5-6.56 38.81 9.96 49.82 16.5 11 38.81 6.54 49.81-9.96 11.01-16.52 6.54-38.82-9.96-49.82z" />
          <path d="m146.41 376.53-39.86-59.79 9.96-6.64 39.86 59.78-9.96 6.65zm14.95-9.98-39.86-59.77 9.96-6.64 39.86 59.78-9.96 6.63zm14.93-9.96-39.84-59.77 9.96-6.65 39.86 59.79-9.98 6.63zm189.31-126.2-39.86-59.78 9.98-6.65 39.84 59.79-9.96 6.64zm14.94-9.96-39.85-59.78 9.96-6.65 39.85 59.78-9.96 6.65zm14.95-9.96-39.85-59.78 9.96-6.65 39.85 59.78-9.96 6.65z" />
          <path fill="#fff" d="m137.29 335.83 14.93-9.96 3.31 4.99-14.95 9.96-3.29-4.99zm201.74-134.48 17.45-11.62 3.31 4.95-17.44 11.62-3.32-4.95zm32.38-21.6 14.95-9.98 3.32 4.99-14.95 9.96-3.32-4.97z" />
        </g>
      </svg>
    )
  }
];

const Header = () => {
  const [currentLang, setCurrentLang] = useState("de");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const current = languages.find(l => l.code === currentLang);
  const otherLangs = languages.filter(l => l.code !== currentLang);

  return (
    <header>
      <div className="hero-section-top">
        <div className='logo'>
          <div>J</div><div>e</div><div>h</div><div>e</div><div>e</div><div>_</div><div>H</div><div>a</div><div>n</div>
        </div>

        <div className='headerMenu'>
          <a href='/' className='menuItem'>HOME</a>
          <a href='/projects' className='menuItem'>PROJECTS</a>
          <a href='/' className='menuItem'>ABOUT ME</a>
          <a className='menuItem'>LINKS</a>

          <div className='extraMenu'>
            <div className="languageBlock">
              <div className="lang-ui-wrapper" ref={wrapperRef}>
                <button
                  type="button"
                  className="lang-ui-current"
                  onClick={() => setOpen(o => !o)}
                  aria-expanded={open}
                  aria-haspopup="menu"
                >
                  <span className="lang-ui-flag">{current.svg}</span>
                  <span className="lang-ui-label">{current.label}</span>
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      className="lang-ui-menu"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      role="menu"
                    >
                      {otherLangs.map(l => (
                        <motion.button
                          key={l.code}
                          className="lang-ui-option"
                          onClick={() => { setCurrentLang(l.code); setOpen(false); }}
                          whileTap={{ scale: 0.98 }}
                          role="menuitem"
                        >
                          <span className="lang-ui-flag">{l.svg}</span>
                          <span className="lang-ui-label">{l.label}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className='talk btn'>Let's Talk</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
