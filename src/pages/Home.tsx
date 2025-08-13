
// import bgImg from "../assets/placeholder.jpg";
// import pbImg from "../assets/me.png";
import "../styles/home.css";
import HomepageContent from "../components/HomepageContent.tsx";
import me from "../assets/my_ugly_ass.png";
import gsap from "gsap";
import { useEffect } from "react";

const Home = () => {
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
              &#169; {new Date().getFullYear()} Jehee Han
            </div>
          </div>
          <div className="image-wrapper">
            <img src={me} alt="Profilbild Jehee Han" />
          </div>
          <div className="Profile-text">

            <div className="korean-Profile">
              <div>한</div>
              <div>재</div>
              <div>희</div>
            </div>

            <div>
              <div className="introduction">Hallo, ich bin</div>
              <div className="english-Profile">
                <div>JEHEE</div>
                <div>HAN</div>
              </div>
              <div className="introduction-second">Wilkommen auf mein Portfolio</div>
            </div>
          </div>
        </div>

        <div className="hero-content">

        </div>
      </div>

      <HomepageContent />
    </div>
  );
};

export default Home;