
// import bgImg from "../assets/placeholder.jpg";
// import pbImg from "../assets/me.png";
import "../styles/home.css";
import HomepageContent from "../components/HomepageContent.tsx";
import me from "../assets/my_ugly_ass-1.webp";
import { useTranslation } from 'react-i18next';

import { useRef } from "react";
// import { Volume2 } from "lucide-react"; // modernes Icon-Set (falls du lucide-react nutzt)
import sampleAudio from "../assets/JeheeAussprache.wav"; // deine Audio-Datei importieren

import speaker from "../assets/speaker.svg"


import { useEffect } from "react";

const Home = () => {
  const { t, i18n } = useTranslation('');
  const { t: ft } = useTranslation('footer');
  const audioRef = useRef<HTMLAudioElement | null>(null); // <- Ref für <audio>

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.25; // Wert zwischen 0 (leise) und 1 (laut)
    }
  }, []);

  // useEffect(() => {
  //   gsap.fromTo(
  //     ".korean-Profile div",
  //     { x: -200, rotation: -360, opacity: 1 }, // Startposition
  //     {
  //       x: 0,               // Endposition in der Mitte
  //       rotation: 0,      // 2 volle Drehungen
  //       opacity: 1,         // Sichtbar werden
  //       duration: 1.8,      // Dauer pro Zeichen
  //       stagger: 0.2,       // Nacheinander animieren
  //       ease: "power3.out", // Sanft abbremsen
  //       transformOrigin: "center center"
  //     }
  //   );
  // }, []);
  return (
    <div className="home-container">
      <div className="wrapper">

        <div className="profile-pic">
          <div className="hero-section-bottom">
            <div className="scroll-down">
              <a href="#about">
                <span className="scroll-text">Scroll down</span>
                <span className="arrow">&#8595;</span>
              </a>
            </div>

            <div className="copyright">
              &#169; {new Date().getFullYear()} {ft('copyright')}
            </div>
          </div>

          <div className="image-wrapper">
            <img src={me} alt="Profilbild Jehee Han" />
          </div>

          <div className="Profile-text">
            {/* Nur wenn Koreanisch aktiv ist */}
            {(i18n.language != "kr") && (
              <div className="korean-Profile">
                <div>한</div>
                <div>재</div>
                <div>희</div>
              </div>
            )}

            {/* Nur wenn Deutsch oder Englisch aktiv ist */}
            {(i18n.language === "de" || i18n.language === "en") && (
              <div>
                <div className="introduction">{t('hero-content.line1')}</div>
                <div className="english-Profile">
                  <div>JEHEE</div>
                  <div>HAN</div>

                  {/* Lautsprecher-Button */}
                  <button
                    className="speakerButton"
                    onClick={() => audioRef.current?.play()}
                  >
                    <img src={speaker} alt="Play Pronunciation" />
                  </button>

                  <audio ref={audioRef} src={sampleAudio} />
                </div>
                <div className="introduction-second">{t('hero-content.line2')}</div>
              </div>
            )}
            {(i18n.language === "kr") && (
              <div className="korean-intro">
                <div className="introduction">안녕하세요, 저는</div>
                <div className="english-Profile">
                  <div>한재희</div>
                  <div>입니다</div>
                </div>
                <div className="introduction-second">제 포트폴리오에 방문해 주셔서 감사합니다.</div>
              </div>
            )}
          </div>
        </div>

        <div className="hero-content"></div>
      </div>

      <HomepageContent />
    </div>
  );
};

export default Home;